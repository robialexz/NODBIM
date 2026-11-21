/**
 * Limbile site-ului: româna la rădăcină, engleza sub /en/.
 * O pagină EN nouă = o rută sub /en/ + o pereche aici (dacă are echivalent RO).
 */
import { useRouterState } from "@tanstack/react-router";
import { blogTranslations } from "./blog-translations";
import { canonicalUrl } from "./site-config";

export type Locale = "ro" | "en";

/** Pagini echivalente RO ↔ EN, folosite pentru hreflang și comutatorul de limbă. */
const pagePairs: { ro: string; en: string }[] = [
  { ro: "/revit-mep", en: "/en/revit-mep-outsourcing" },
  { ro: "/autocad-dwg", en: "/en/autocad-drafting" },
  { ro: "/despre", en: "/en/about" },
  { ro: "/politica-de-confidentialitate", en: "/en/privacy" },
  { ro: "/politica-cookies", en: "/en/cookies" },
  ...blogTranslations,
];

/** Intrarea în site-ul EN până există /en/. */
export const enHomePath = "/en/revit-mep-outsourcing";

const closestEnglishPages = new Map<string, string>([
  ["/hvac", enHomePath],
  ["/instalatii-electrice", enHomePath],
  ["/instalatii-termice", enHomePath],
  ["/modelare-revit", enHomePath],
  ["/contact", enHomePath],
  ["/portofoliu", enHomePath],
  ["/pdf-in-dwg", "/en/autocad-drafting"],
  ["/cursuri-revit", "/en/blog"],
  ["/magazin", "/en/blog"],
  ["/recomandari", "/en/about"],
  ["/informatii-legale", "/en/privacy"],
  ["/termeni-si-conditii", "/en/privacy"],
]);

export function localeForPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ro";
}

function clean(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

/** Whether this route has a real, reciprocal translation pair. */
export function hasLanguagePair(pathname: string): boolean {
  const path = clean(pathname);
  return pagePairs.some((pair) => pair.ro === path || pair.en === path);
}

/** Equivalent route when translated; otherwise the closest relevant route in the requested language. */
export function alternatePath(pathname: string, target: Locale): string {
  const path = clean(pathname);
  const pair = pagePairs.find((p) => p.ro === path || p.en === path);
  if (pair) return pair[target];
  if (localeForPath(path) === target) return path;

  if (target === "en") {
    if (path.startsWith("/blog/")) return "/en/blog";
    return closestEnglishPages.get(path) ?? enHomePath;
  }

  if (path.startsWith("/en/blog/")) return "/blog";
  return "/";
}

/**
 * Link-uri hreflang pentru o pagină cu pereche (ro, en, x-default → en,
 * versiunea pentru vizitatorii din afara României). Fără pereche: niciunul.
 */
export function hreflangLinks(pathname: string): { rel: string; hrefLang: string; href: string }[] {
  const path = clean(pathname);
  const pair = pagePairs.find((p) => p.ro === path || p.en === path);
  if (!pair) return [];
  return [
    { rel: "alternate", hrefLang: "ro", href: canonicalUrl(pair.ro) },
    { rel: "alternate", hrefLang: "en", href: canonicalUrl(pair.en) },
    { rel: "alternate", hrefLang: "x-default", href: canonicalUrl(pair.en) },
  ];
}

/** Limba paginii curente, pentru componentele comune (header, formular, banner). */
export function useLocale(): Locale {
  return useRouterState({ select: (s) => localeForPath(s.location.pathname) });
}
