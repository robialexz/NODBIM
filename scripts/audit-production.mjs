// Audit de producție — rulează împotriva site-ului live după fiecare deploy.
// Utilizare: bun scripts/audit-production.mjs [BASE_URL]
// NU trimite lead-uri automate (testul de lead se face manual/opt-in).
import { pathToFileURL } from "node:url";

const DEFAULT_BASE_URL = "https://nodbim.com";
const CANONICAL_ORIGIN = "https://nodbim.com";
const CANONICAL_HOST = "nodbim.com";
const CONCURRENCY = 6;
const REQUEST_TIMEOUT_MS = 20_000;

function decodeEntities(value) {
  return value.replace(/&(#x[\da-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi, (entity, name) => {
    if (name[0] === "#") {
      const isHex = name[1]?.toLowerCase() === "x";
      const codePoint = Number.parseInt(name.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      if (!Number.isInteger(codePoint) || codePoint < 0 || codePoint > 0x10ffff) return entity;
      try {
        return String.fromCodePoint(codePoint);
      } catch {
        return entity;
      }
    }

    return {
      amp: "&",
      lt: "<",
      gt: ">",
      quot: '"',
      apos: "'",
      nbsp: " ",
    }[name.toLowerCase()];
  });
}

function attributesOf(tag) {
  const name = /^<\s*[^\s/>]+/.exec(tag)?.[0];
  if (!name) return new Map();

  const attributes = new Map();
  const source = tag.slice(name.length, tag.endsWith("/>") ? -2 : -1);
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;

  for (const match of source.matchAll(pattern)) {
    const key = match[1]?.toLowerCase();
    if (!key || attributes.has(key)) continue;
    attributes.set(key, decodeEntities(match[2] ?? match[3] ?? match[4] ?? ""));
  }

  return attributes;
}

function textOf(value) {
  return decodeEntities(
    value
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<(script|style|noscript)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

function tagMatches(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, "gi"))].map((match) => match[0]);
}

function innerTextMatches(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>([\\s\\S]*?)<\\/${name}\\s*>`, "gi"))].map(
    (match) => textOf(match[1] ?? ""),
  );
}

function hasNoindexDirective(value) {
  return /(?:^|[\s,;])noindex(?=$|[\s,;])/i.test(value);
}

function isRecord(value) {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function hasJsonLdContext(value) {
  if (Array.isArray(value)) return value.some(hasJsonLdContext);
  if (!isRecord(value)) return false;

  const context = value["@context"];
  if (context !== undefined && context !== null && context !== "") return true;
  return Array.isArray(value["@graph"]) && value["@graph"].some(hasJsonLdContext);
}

function hasJsonLdType(value) {
  if (Array.isArray(value)) return value.some(hasJsonLdType);
  if (!isRecord(value)) return false;

  const type = value["@type"];
  if (
    (typeof type === "string" && type.trim()) ||
    (Array.isArray(type) && type.some((item) => typeof item === "string" && item.trim()))
  ) {
    return true;
  }
  return Array.isArray(value["@graph"]) && value["@graph"].some(hasJsonLdType);
}

function inspectJsonLd(html) {
  const markup = html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<textarea\b[^>]*>[\s\S]*?<\/textarea\s*>/gi, " ");
  const scripts = [...markup.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script\s*>/gi)].filter(
    (match) => {
      const openingTag = /^<script\b[^>]*>/i.exec(match[0])?.[0] ?? "";
      return attributesOf(openingTag).get("type")?.trim().toLowerCase() === "application/ld+json";
    },
  );

  return scripts.flatMap((match, index) => {
    let document;
    try {
      document = JSON.parse(match[1] ?? "");
    } catch {
      return [`JSON-LD script ${index + 1}: invalid JSON`];
    }

    if (!isRecord(document) && !Array.isArray(document)) {
      return [`JSON-LD script ${index + 1}: expected an object or array`];
    }

    const issues = [];
    if (!hasJsonLdContext(document)) issues.push(`JSON-LD script ${index + 1}: missing @context`);
    if (!hasJsonLdType(document)) issues.push(`JSON-LD script ${index + 1}: missing @type`);
    return issues;
  });
}

function normalizedAbsoluteUrl(value) {
  try {
    const url = new URL(value);
    if (url.pathname !== "/") url.pathname = url.pathname.replace(/\/+$/, "");
    return url.href;
  } catch {
    return null;
  }
}

function decodedFragment(fragment) {
  try {
    return decodeURIComponent(fragment);
  } catch {
    return fragment;
  }
}

export function parseSitemapUrls(xml) {
  return [...xml.matchAll(/<loc\b[^>]*>([\s\S]*?)<\/loc\s*>/gi)].map((match) =>
    decodeEntities(match[1] ?? "").trim(),
  );
}

export function isSitemapXml(xml) {
  const root = tagMatches(xml, "urlset")[0];
  return (
    !!root &&
    /<\/urlset\s*>\s*$/i.test(xml.trim()) &&
    attributesOf(root).get("xmlns") === "http://www.sitemaps.org/schemas/sitemap/0.9"
  );
}

export function inspectHtml(html, xRobotsTag = "") {
  const markup = html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(script|style|noscript|textarea)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, " ");
  const metaTags = tagMatches(markup, "meta").map(attributesOf);
  const titleTags = innerTextMatches(markup, "title");
  const descriptionMetas = metaTags.filter(
    (attributes) => attributes.get("name")?.trim().toLowerCase() === "description",
  );
  const descriptions = descriptionMetas
    .map((attributes) => attributes.get("content")?.trim() ?? "")
    .filter(Boolean);
  const canonicalTags = tagMatches(markup, "link")
    .map(attributesOf)
    .filter((attributes) =>
      (attributes.get("rel") ?? "")
        .split(/\s+/)
        .some((relation) => relation.toLowerCase() === "canonical"),
    );
  const canonicalLinks = canonicalTags
    .map((attributes) => attributes.get("href")?.trim() ?? "")
    .filter(Boolean);
  const hreflangLinks = tagMatches(markup, "link")
    .map(attributesOf)
    .filter(
      (attributes) =>
        (attributes.get("rel") ?? "")
          .split(/\s+/)
          .some((relation) => relation.toLowerCase() === "alternate") && attributes.has("hreflang"),
    )
    .map((attributes) => ({
      language: attributes.get("hreflang")?.trim() ?? "",
      href: attributes.get("href")?.trim() || null,
    }));
  const robotsDirectives = metaTags
    .filter((attributes) =>
      /^(robots|googlebot|googlebot-news)$/i.test(attributes.get("name") ?? ""),
    )
    .map((attributes) => attributes.get("content") ?? "");
  const ogImage = metaTags
    .filter((attributes) => attributes.get("property")?.toLowerCase() === "og:image")
    .map((attributes) => attributes.get("content")?.trim() ?? "")
    .find(Boolean);
  const headings = innerTextMatches(markup, "h1");
  const ids = new Set();

  for (const tag of markup.matchAll(/<[a-z][^>]*>/gi)) {
    const element = tag[0];
    const tagName = /^<\s*([^\s/>]+)/.exec(element)?.[1]?.toLowerCase();
    const attributes = attributesOf(element);
    const id = attributes.get("id")?.trim();
    const name = attributes.get("name")?.trim();
    if (id) ids.add(id);
    if (tagName === "a" && name) ids.add(name);
  }

  return {
    canonical: canonicalLinks[0] ?? null,
    canonicalCount: canonicalTags.length,
    description: descriptions[0] ?? null,
    descriptionCount: descriptionMetas.length,
    hreflangLinks,
    h1Count: headings.length,
    h1Text: headings.find(Boolean) ?? null,
    ids,
    jsonLdIssues: inspectJsonLd(html),
    noindex: robotsDirectives.some(hasNoindexDirective) || /\bnoindex\b/i.test(xRobotsTag),
    ogImage: ogImage ?? null,
    title: titleTags.find(Boolean) ?? null,
    titleCount: titleTags.length,
  };
}

export function findCrossPageMetadataIssues(pages) {
  const issues = [];

  for (const [property, label] of [
    ["title", "title"],
    ["description", "meta description"],
  ]) {
    const groups = new Map();
    for (const page of pages) {
      if (!page.metadata || page.metadata.noindex) continue;
      const value = page.metadata[property];
      if (typeof value !== "string" || !value.trim()) continue;
      const normalized = value.replace(/\s+/g, " ").trim().toLowerCase();
      const group = groups.get(normalized) ?? { value: value.trim(), urls: [] };
      group.urls.push(page.url);
      groups.set(normalized, group);
    }

    for (const group of groups.values()) {
      if (group.urls.length > 1) {
        issues.push(`duplicate ${label} "${group.value}" on ${group.urls.join(", ")}`);
      }
    }
  }

  return issues;
}

export function findHreflangIssues(pages) {
  const pagesByCanonical = new Map();
  for (const page of pages) {
    const canonical = normalizedAbsoluteUrl(page.metadata?.canonical ?? "");
    if (canonical) pagesByCanonical.set(canonical, page);
  }

  const issues = [];
  for (const page of pages) {
    const metadata = page.metadata;
    const entries = metadata?.hreflangLinks ?? [];
    if (!metadata || entries.length === 0) continue;

    const sourceUrl = normalizedAbsoluteUrl(metadata.canonical ?? "");
    if (!sourceUrl) continue;

    const languageCounts = new Map();
    for (const entry of entries) {
      const language = entry.language.toLowerCase();
      languageCounts.set(language, (languageCounts.get(language) ?? 0) + 1);
    }
    for (const [language, count] of languageCounts) {
      if (!language || count > 1) {
        issues.push(
          `${page.url}: hreflang ${language || "(empty)"} appears ${count} times (expected once)`,
        );
      }
    }

    const selfEntries = entries.filter(
      (entry) =>
        entry.language.toLowerCase() !== "x-default" &&
        normalizedAbsoluteUrl(entry.href ?? "") === sourceUrl,
    );
    if (selfEntries.length !== 1) {
      issues.push(
        `${page.url}: hreflang self-references found ${selfEntries.length} (expected one)`,
      );
      continue;
    }

    const sourceLanguage = selfEntries[0]?.language.toLowerCase() ?? "";
    if (!sourceLanguage) continue;

    const checkedTargets = new Set();
    for (const entry of entries) {
      if (!entry.href) {
        issues.push(`${page.url}: hreflang ${entry.language || "(empty)"} is missing href`);
        continue;
      }
      if (!isSafeSitemapUrl(entry.href)) {
        issues.push(`${page.url}: hreflang ${entry.language || "(empty)"} has a non-canonical URL`);
        continue;
      }

      const targetUrl = normalizedAbsoluteUrl(entry.href);
      if (!targetUrl || checkedTargets.has(targetUrl)) continue;
      checkedTargets.add(targetUrl);
      const target = pagesByCanonical.get(targetUrl);
      const targetEntries = target?.metadata?.hreflangLinks ?? [];
      if (
        target &&
        !targetEntries.some(
          (candidate) =>
            candidate.language.toLowerCase() === sourceLanguage &&
            normalizedAbsoluteUrl(candidate.href ?? "") === sourceUrl,
        )
      ) {
        issues.push(
          `${page.url}: hreflang ${entry.language} -> ${entry.href} lacks reciprocal ${sourceLanguage} link`,
        );
      }
    }
  }

  return issues;
}

export function collectInternalLinks(html, pageUrl, allowedHosts) {
  const source = new URL(pageUrl);
  const links = [];
  const markup = html
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(script|style|noscript|textarea)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, " ");

  for (const match of markup.matchAll(/<(?:a|area)\b[^>]*>/gi)) {
    const href = attributesOf(match[0]).get("href")?.trim();
    if (!href) continue;

    try {
      const target = new URL(href, source);
      if (!/^https?:$/.test(target.protocol) || !allowedHosts.has(target.hostname.toLowerCase()))
        continue;
      if (target.username || target.password) continue;

      const fragment = decodedFragment(target.hash.slice(1));
      target.hash = "";
      links.push({
        source: source.pathname,
        target: target.href,
        fragment: fragment || null,
      });
    } catch {
      // Invalid hrefs are not fetchable destinations; the browser will handle them as inert links.
    }
  }

  return links;
}

export async function mapLimit(values, limit, worker) {
  if (!Number.isInteger(limit) || limit < 1)
    throw new RangeError("limit must be a positive integer");

  const results = new Array(values.length);
  let nextIndex = 0;
  const runWorker = async () => {
    while (nextIndex < values.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await worker(values[index], index);
    }
  };

  await Promise.all(Array.from({ length: Math.min(limit, values.length) }, runWorker));
  return results;
}

function normalizedPath(pathname) {
  return pathname === "/" ? pathname : pathname.replace(/\/+$/, "");
}

function canonicalMatches(canonical, pageUrl) {
  try {
    const actual = new URL(canonical);
    const expected = new URL(pageUrl);
    return (
      actual.origin === CANONICAL_ORIGIN &&
      !actual.username &&
      !actual.password &&
      !actual.search &&
      !actual.hash &&
      normalizedPath(actual.pathname) === normalizedPath(expected.pathname)
    );
  } catch {
    return false;
  }
}

function isHtmlResponse(contentType) {
  return /(?:text\/html|application\/xhtml\+xml)/i.test(contentType);
}

function isReadableResponse(contentType) {
  return /^(?:text\/|application\/(?:xml|xhtml\+xml|json))/i.test(contentType);
}

export function isSoft404(html) {
  const heading = inspectHtml(html).h1Text ?? "";
  return /^(?:pagin[aă] inexistenta|pagina nu exista(?:\s*\(?404\)?)?|page not found|404 not found)$/i.test(
    heading.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
  );
}

async function fetchOnce(url) {
  try {
    const response = await fetch(url, {
      redirect: "manual",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      headers: { Accept: "text/html,application/xhtml+xml,application/xml,text/plain,*/*" },
    });
    const contentType = response.headers.get("content-type") ?? "";
    let body = "";
    if (isReadableResponse(contentType)) {
      body = await response.text();
    } else {
      await response.body?.cancel();
    }

    return {
      status: response.status,
      contentType,
      location: response.headers.get("location"),
      xRobotsTag: response.headers.get("x-robots-tag") ?? "",
      body,
      error: null,
    };
  } catch (error) {
    return {
      status: 0,
      contentType: "",
      location: null,
      xRobotsTag: "",
      body: "",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

function responseIssue(result, expected = "200") {
  if (result.error) return `fetch eșuat: ${result.error}`;
  if (result.status >= 300 && result.status < 400) {
    return `redirect ${result.status}${result.location ? ` către ${result.location}` : " fără Location"}`;
  }
  if (result.status !== 200)
    return `HTTP ${result.status || "fără răspuns"} (așteptat ${expected})`;
  return null;
}

function responseSummary(result) {
  if (result.error) return `fetch eșuat: ${result.error}`;
  return `HTTP ${result.status}${result.contentType ? ` ${result.contentType}` : ""}`;
}

function sitemapUrlIssues(urls) {
  const issues = [];
  const seen = new Set();

  for (const value of urls) {
    let url;
    try {
      url = new URL(value);
    } catch {
      issues.push(`${value || "<loc> golă"}: URL absolut invalid`);
      continue;
    }

    if (
      url.protocol !== "https:" ||
      url.origin !== CANONICAL_ORIGIN ||
      url.username ||
      url.password
    ) {
      issues.push(`${value}: origine canonicală neașteptată`);
    }
    if (url.search || url.hash) issues.push(`${value}: sitemap URL conține query sau fragment`);
    if (seen.has(value)) issues.push(`${value}: duplicat în sitemap`);
    seen.add(value);
  }

  return issues;
}

export function isSafeSitemapUrl(value) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      url.origin === CANONICAL_ORIGIN &&
      !url.username &&
      !url.password &&
      !url.search &&
      !url.hash
    );
  } catch {
    return false;
  }
}

async function main() {
  const input = process.argv[2] || process.env.AUDIT_BASE_URL || DEFAULT_BASE_URL;
  const base = new URL(input);
  if (!/^https?:$/.test(base.protocol))
    throw new Error("BASE_URL trebuie să folosească http sau https");
  const baseUrl = base.origin.replace(/\/$/, "");
  const allowedHosts = new Set([
    base.hostname.toLowerCase(),
    CANONICAL_HOST,
    `www.${CANONICAL_HOST}`,
  ]);
  let checks = 0;
  let failures = 0;

  function report(ok, message) {
    checks += 1;
    if (!ok) failures += 1;
    console.log(`${ok ? "PASS" : "FAIL"}  ${message}`);
  }

  console.log(`Audit producție: ${baseUrl}\n`);

  // 1. Homepage is the minimum live-site smoke test; all content routes come from the sitemap.
  const home = await fetchOnce(`${baseUrl}/`);
  report(
    home.status === 200 && isHtmlResponse(home.contentType),
    `GET / -> ${responseSummary(home)}`,
  );

  // 2. Unknown paths must use the real 404 response and must not render the catch-all as 200.
  const missingPath = `/pagina-care-nu-exista-${Date.now()}`;
  const missingPage = await fetchOnce(`${baseUrl}${missingPath}`);
  const unknownIs404 = missingPage.status === 404 && isSoft404(missingPage.body);
  report(
    unknownIs404,
    `rută necunoscută -> ${responseSummary(missingPage)} (HTTP 404 cu mesajul paginii 404)`,
  );

  // 3. www -> apex must keep path and query intact.
  const wwwUrl = new URL("https://www.nodbim.com/portofoliu?utm_source=test");
  const www = await fetchOnce(wwwUrl.href);
  report(
    www.status === 301 && www.location === "https://nodbim.com/portofoliu?utm_source=test",
    `www -> apex 301 (${responseSummary(www)}) cu path+query păstrate`,
  );

  // 4. robots.txt must point at the production sitemap.
  const robots = await fetchOnce(`${baseUrl}/robots.txt`);
  report(
    robots.status === 200 && robots.contentType.toLowerCase().includes("text/plain"),
    `robots.txt -> ${responseSummary(robots)}`,
  );
  const sitemapDirective = robots.body.match(/^\s*sitemap:\s*(\S+)\s*$/im)?.[1];
  report(
    sitemapDirective === `${baseUrl}/sitemap.xml`,
    `robots.txt conține referința sitemap-ului de producție${sitemapDirective ? ` (${sitemapDirective})` : ""}`,
  );

  // 5. Fetch every URL published in the current sitemap; do not maintain a second route list here.
  const sitemap = await fetchOnce(`${baseUrl}/sitemap.xml`);
  const isXml = isSitemapXml(sitemap.body);
  const sitemapUrls = parseSitemapUrls(sitemap.body);
  report(
    sitemap.status === 200 && isXml && /(?:application|text)\/xml/i.test(sitemap.contentType),
    `sitemap.xml -> ${responseSummary(sitemap)} XML`,
  );
  report(sitemapUrls.length > 0, `sitemap conține ${sitemapUrls.length} URL-uri`);

  const urlIssues = sitemapUrlIssues(sitemapUrls);
  report(
    sitemapUrls.length > 0 && urlIssues.length === 0,
    `sitemap URL-uri canonice, HTTPS și unice${urlIssues.length ? ` — ${urlIssues.join("; ")}` : ""}`,
  );

  const sitemapPages = await mapLimit(sitemapUrls, CONCURRENCY, async (url) => {
    if (!isSafeSitemapUrl(url)) {
      return {
        url,
        response: null,
        metadata: null,
        issues: [
          "URL nepermis; fetch oprit (așteptat HTTPS canonical fără credentials, query sau fragment)",
        ],
      };
    }

    const response = await fetchOnce(url);
    const issues = [];
    const statusIssue = responseIssue(response);
    if (statusIssue) issues.push(statusIssue);

    let metadata = null;
    if (!statusIssue && isHtmlResponse(response.contentType)) {
      metadata = inspectHtml(response.body, response.xRobotsTag);
      if (isSoft404(response.body))
        issues.push("soft 404 (răspunsul 200 afișează heading-ul paginii 404)");
      if (metadata.noindex) issues.push("meta/X-Robots-Tag noindex");
      if (metadata.canonicalCount !== 1 || !metadata.canonical) {
        issues.push(`canonical găsite: ${metadata.canonicalCount} (așteptat una)`);
      } else if (!canonicalMatches(metadata.canonical, url)) {
        issues.push(`canonical greșit: ${metadata.canonical}`);
      }
      if (!metadata.title || metadata.titleCount !== 1) {
        issues.push(`<title> găsite: ${metadata.titleCount} (așteptat una cu text)`);
      }
      if (!metadata.description || metadata.descriptionCount !== 1) {
        issues.push(
          `meta description găsite: ${metadata.descriptionCount} (așteptată una cu text)`,
        );
      }
      if (metadata.h1Count === 0 || !metadata.h1Text) issues.push("lipsește H1 cu text");
    } else if (!statusIssue) {
      issues.push(`Content-Type non-HTML: ${response.contentType || "absent"}`);
    }

    return { url, response, metadata, issues };
  });

  const pageIssues = sitemapPages.flatMap(({ url, issues }) =>
    issues.map((issue) => `${url}: ${issue}`),
  );
  report(
    sitemapPages.length > 0 && pageIssues.length === 0,
    `pagini sitemap: ${sitemapPages.length} verificate (H1, title, description, canonical, indexare, soft 404, redirect)${pageIssues.length ? ` — ${pageIssues.join("; ")}` : ""}`,
  );

  const jsonLdIssues = sitemapPages.flatMap(({ url, metadata }) =>
    (metadata?.jsonLdIssues ?? []).map((issue) => `${url}: ${issue}`),
  );
  report(
    sitemapPages.length > 0 && jsonLdIssues.length === 0,
    `JSON-LD: blocuri valide, cu @context și @type când sunt prezente${jsonLdIssues.length ? ` — ${jsonLdIssues.join("; ")}` : ""}`,
  );

  const duplicateMetadataIssues = findCrossPageMetadataIssues(sitemapPages);
  report(
    sitemapPages.length > 0 && duplicateMetadataIssues.length === 0,
    `title și meta description distincte între paginile indexabile (${sitemapPages.length} verificate)${duplicateMetadataIssues.length ? ` — ${duplicateMetadataIssues.join("; ")}` : ""}`,
  );

  const hreflangIssues = findHreflangIssues(sitemapPages);
  const hreflangCount = sitemapPages.reduce(
    (count, page) => count + (page.metadata?.hreflangLinks.length ?? 0),
    0,
  );
  report(
    sitemapPages.length > 0 && hreflangIssues.length === 0,
    `hreflang: auto-referințe și reciprocitate pentru ${hreflangCount} tag-uri (${sitemapPages.length} pagini sitemap)${hreflangIssues.length ? ` — ${hreflangIssues.join("; ")}` : ""}`,
  );

  // 6. Homepage-only metadata and preview-host checks.
  const homeMetadata = inspectHtml(home.body, home.xRobotsTag);
  report(
    homeMetadata.canonical === `${CANONICAL_ORIGIN}/`,
    `canonical home = ${homeMetadata.canonical ?? "absent"}`,
  );
  report(!!homeMetadata.title, "homepage are <title>");
  report(!!homeMetadata.description, "homepage are meta description");
  report(/<html\b[^>]*\blang\s*=\s*(["'])ro\1/i.test(home.body), 'html lang="ro"');
  report(
    homeMetadata.ogImage === `${CANONICAL_ORIGIN}/og-image.jpg`,
    "og:image folosește URL-ul de producție",
  );
  const forbidden = ["localhost", "lovableproject", "lovable.app", "workers.dev"];
  const found = forbidden.filter((term) => home.body.toLowerCase().includes(term));
  report(
    home.status === 200 && isHtmlResponse(home.contentType) && found.length === 0,
    `fără referințe localhost/lovable/preview${found.length ? ` — GĂSIT: ${found.join(", ")}` : ""}`,
  );

  // 7. Check each distinct navigable same-site destination and every fragment used to reach it.
  const discoveredLinks = sitemapPages.flatMap(({ url, response, metadata }) =>
    response?.status === 200 && metadata
      ? collectInternalLinks(response.body, url, allowedHosts)
      : [],
  );
  const targets = new Map();
  for (const link of discoveredLinks) {
    const existing = targets.get(link.target) ?? [];
    existing.push(link);
    targets.set(link.target, existing);
  }

  const destinationResults = await mapLimit(
    [...targets.entries()],
    CONCURRENCY,
    async ([url, links]) => {
      const response = await fetchOnce(url);
      const issues = [];
      const statusIssue = responseIssue(response);
      if (statusIssue) issues.push(statusIssue);

      if (!statusIssue && isHtmlResponse(response.contentType)) {
        if (isSoft404(response.body))
          issues.push("soft 404 (răspunsul 200 afișează heading-ul paginii 404)");
        const metadata = inspectHtml(response.body);
        const fragments = [...new Set(links.map((link) => link.fragment).filter(Boolean))];
        for (const fragment of fragments) {
          if (!metadata.ids.has(fragment)) issues.push(`fragment #${fragment} nu există`);
        }
      }

      const sources = [...new Set(links.map((link) => link.source))].join(", ");
      return { url, sources, issues };
    },
  );

  const destinationIssues = destinationResults.flatMap(({ url, sources, issues }) =>
    issues.map((issue) => `${url}: ${issue} (link din ${sources})`),
  );
  report(
    sitemapPages.length > 0 && destinationIssues.length === 0,
    `destinații interne: ${targets.size} URL-uri și ${discoveredLinks.filter((link) => link.fragment).length} fragmente din ${sitemapPages.length} pagini${destinationIssues.length ? ` — ${destinationIssues.join("; ")}` : ""}`,
  );

  console.log(`\n${checks - failures}/${checks} verificări trecute.`);
  process.exitCode = failures > 0 ? 1 : 0;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    console.error("Audit eșuat:", error);
    process.exit(1);
  });
}
