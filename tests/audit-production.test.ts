import { describe, expect, test } from "bun:test";

import {
  collectInternalLinks,
  findCrossPageMetadataIssues,
  findHreflangIssues,
  inspectHtml,
  isSoft404,
  isSafeSitemapUrl,
  isSitemapXml,
  mapLimit,
  parseSitemapUrls,
} from "../scripts/audit-production.mjs";

describe("production audit parsing", () => {
  test("reads every sitemap location and decodes XML entities", () => {
    const xml = `<?xml version="1.0"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url><loc>https://nodbim.com/blog?a=1&amp;b=2</loc></url>
      <url><loc>https://nodbim.com/en/revit-mep-outsourcing</loc></url>
    </urlset>`;

    expect(parseSitemapUrls(xml)).toEqual([
      "https://nodbim.com/blog?a=1&b=2",
      "https://nodbim.com/en/revit-mep-outsourcing",
    ]);
    expect(isSitemapXml(xml)).toBe(true);
    expect(isSitemapXml("<urlset><url><loc>https://nodbim.com/</loc></url></urlset>")).toBe(false);
  });

  test("only fetches sitemap URLs on the HTTPS canonical origin without credentials or tracking", () => {
    expect(isSafeSitemapUrl("https://nodbim.com/blog/revit")).toBe(true);
    for (const url of [
      "http://nodbim.com/blog",
      "https://example.com/blog",
      "https://user@nodbim.com/blog",
      "https://nodbim.com/blog?preview=1",
      "https://nodbim.com/blog#intro",
    ]) {
      expect(isSafeSitemapUrl(url)).toBe(false);
    }
  });

  test("reads metadata regardless of attribute order and detects noindex directives", () => {
    const html = `<html><head>
      <meta content="A useful page description" name="description">
      <link href="https://nodbim.com/en/about" rel="canonical">
      <meta content="follow, NOINDEX" name="robots">
      <title>About NOD BIM</title>
    </head><body><h1>About <strong>NOD BIM</strong></h1></body></html>`;

    expect(inspectHtml(html)).toMatchObject({
      canonical: "https://nodbim.com/en/about",
      canonicalCount: 1,
      description: "A useful page description",
      descriptionCount: 1,
      h1Count: 1,
      h1Text: "About NOD BIM",
      noindex: true,
      ogImage: null,
      title: "About NOD BIM",
      titleCount: 1,
    });
    expect(inspectHtml("<meta name='robots' content='index,follow'>", "noindex").noindex).toBe(
      true,
    );
    expect(
      inspectHtml('<meta content="https://nodbim.com/og-image.jpg" property="og:image">').ogImage,
    ).toBe("https://nodbim.com/og-image.jpg");
  });

  test("reads hreflang and validates JSON-LD syntax and basic schema structure", () => {
    const html = `<!-- <script type="application/ld+json">{invalid}</script> -->
      <html><head>
      <link rel="alternate" href="https://nodbim.com/revit-mep" hreflang="ro">
      <link hreflang="en" rel="alternate" href="https://nodbim.com/en/revit-mep-outsourcing">
      <script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"Service"}]}</script>
      <script type='application/ld+json'>{"@context":"https://schema.org","@type":"FAQPage"}</script>
    </head></html>`;

    expect(inspectHtml(html)).toMatchObject({
      hreflangLinks: [
        { language: "ro", href: "https://nodbim.com/revit-mep" },
        { language: "en", href: "https://nodbim.com/en/revit-mep-outsourcing" },
      ],
      jsonLdIssues: [],
    });

    expect(
      inspectHtml(`<script type="application/ld+json">{"@type":"Article"}</script>
        <script type="application/ld+json">{"@context":"https://schema.org","name":"NOD BIM"}</script>
        <script type="application/ld+json">{invalid}</script>`).jsonLdIssues,
    ).toEqual([
      "JSON-LD script 1: missing @context",
      "JSON-LD script 2: missing @type",
      "JSON-LD script 3: invalid JSON",
    ]);
  });

  test("finds duplicate indexable titles and descriptions while ignoring noindex pages", () => {
    const issues = findCrossPageMetadataIssues([
      {
        url: "https://nodbim.com/revit-mep",
        metadata: { title: "  Revit MEP  ", description: "Modelare Revit MEP", noindex: false },
      },
      {
        url: "https://nodbim.com/en/revit-mep-outsourcing",
        metadata: { title: "revit mep", description: "Modelare Revit MEP", noindex: false },
      },
      {
        url: "https://nodbim.com/private-preview",
        metadata: { title: "Revit MEP", description: "Modelare Revit MEP", noindex: true },
      },
      {
        url: "https://nodbim.com/about",
        metadata: { title: "About NOD BIM", description: "About the studio", noindex: false },
      },
    ]);

    expect(issues).toEqual([
      'duplicate title "Revit MEP" on https://nodbim.com/revit-mep, https://nodbim.com/en/revit-mep-outsourcing',
      'duplicate meta description "Modelare Revit MEP" on https://nodbim.com/revit-mep, https://nodbim.com/en/revit-mep-outsourcing',
    ]);
  });

  test("checks hreflang self references and reciprocal language links", () => {
    const romanianUrl = "https://nodbim.com/revit-mep";
    const englishUrl = "https://nodbim.com/en/revit-mep-outsourcing";
    const pages = [
      {
        url: romanianUrl,
        metadata: {
          canonical: romanianUrl,
          hreflangLinks: [
            { language: "ro", href: romanianUrl },
            { language: "en", href: englishUrl },
            { language: "x-default", href: englishUrl },
          ],
        },
      },
      {
        url: englishUrl,
        metadata: {
          canonical: englishUrl,
          hreflangLinks: [
            { language: "ro", href: romanianUrl },
            { language: "en", href: englishUrl },
            { language: "x-default", href: englishUrl },
          ],
        },
      },
    ];

    expect(findHreflangIssues(pages)).toEqual([]);

    pages[1].metadata.hreflangLinks = [
      { language: "en", href: englishUrl },
      { language: "x-default", href: englishUrl },
    ];
    expect(findHreflangIssues(pages)).toEqual([
      `${romanianUrl}: hreflang en -> ${englishUrl} lacks reciprocal ro link`,
    ]);
  });

  test("identifies the site 404 heading without matching ordinary body copy", () => {
    expect(isSoft404("<main><h1>Pagină inexistentă</h1></main>")).toBe(true);
    expect(
      isSoft404("<main><h1>Despre</h1><p>Un articol discută pagina nu există.</p></main>"),
    ).toBe(false);
  });

  test("collects internal destinations and fragments while ignoring non-page links", () => {
    const html = `<a href="/contact?source=home#quote">Contact</a>
      <a href="#faq">FAQ</a><a href="mailto:hello@nodbim.com">Email</a>
      <a href="https://example.com/out">External</a><area href="/portfolio#case-1">Case</area>
      <a href="/portfolio#case+3">Plus fragment</a>`;

    expect(
      collectInternalLinks(
        html,
        "https://nodbim.com/en/about",
        new Set(["nodbim.com", "www.nodbim.com"]),
      ),
    ).toEqual([
      {
        source: "/en/about",
        target: "https://nodbim.com/contact?source=home",
        fragment: "quote",
      },
      { source: "/en/about", target: "https://nodbim.com/en/about", fragment: "faq" },
      { source: "/en/about", target: "https://nodbim.com/portfolio", fragment: "case-1" },
      { source: "/en/about", target: "https://nodbim.com/portfolio", fragment: "case+3" },
    ]);
  });

  test("limits parallel tasks and preserves result order", async () => {
    let active = 0;
    let peak = 0;

    const result = await mapLimit([30, 10, 20, 5], 2, async (delay, index) => {
      active += 1;
      peak = Math.max(peak, active);
      await new Promise((resolve) => setTimeout(resolve, delay));
      active -= 1;
      return index;
    });

    expect(peak).toBe(2);
    expect(result).toEqual([0, 1, 2, 3]);
  });
});
