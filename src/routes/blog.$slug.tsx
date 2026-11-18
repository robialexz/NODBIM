import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { CtaSection } from "@/components/site/CtaSection";
import { ArticleSections } from "@/components/site/ArticleSections";
import { canonicalUrl, site } from "@/lib/site-config";
import { articles, getArticle, type Article } from "@/lib/blog";
import { hreflangLinks } from "@/lib/i18n";

const organizationId = `${canonicalUrl("/")}#org`;
const broadRelatedTags = new Set([
  "revit mep",
  "autocad",
  "bim",
  "hvac",
  "dwg",
  "pdf",
  "documentație",
  "documentație tehnică",
]);
const articleTagFrequency = articles.reduce((counts, article) => {
  for (const tag of article.tags) {
    const normalizedTag = tag.toLowerCase();
    counts.set(normalizedTag, (counts.get(normalizedTag) ?? 0) + 1);
  }
  return counts;
}, new Map<string, number>());

function getRelatedArticles(article: Article): Article[] {
  const topicTags = article.tags
    .map((tag) => tag.toLowerCase())
    .filter((tag) => !broadRelatedTags.has(tag) && (articleTagFrequency.get(tag) ?? 0) <= 3);
  const topicTagSet = new Set(topicTags);

  return articles
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      article: candidate,
      overlap: candidate.tags.filter((tag) => topicTagSet.has(tag.toLowerCase())).length,
    }))
    .filter(({ overlap }) => overlap > 0)
    .sort(
      (left, right) =>
        right.overlap - left.overlap ||
        (right.article.updatedAt ?? right.article.date).localeCompare(
          left.article.updatedAt ?? left.article.date,
        ),
    )
    .slice(0, 3)
    .map(({ article: relatedArticle }) => relatedArticle);
}

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return {};
    return {
      meta: [
        { title: `${article.metaTitle} · NOD BIM` },
        { name: "description", content: article.description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "ro_RO" },
        { property: "og:url", content: canonicalUrl(`/blog/${article.slug}`) },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.description },
      ],
      links: [
        { rel: "canonical", href: canonicalUrl(`/blog/${article.slug}`) },
        ...hreflangLinks(`/blog/${article.slug}`),
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: article.date,
            ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
            author: {
              "@type": "Organization",
              "@id": organizationId,
              name: site.businessName,
              url: canonicalUrl("/despre"),
            },
            publisher: {
              "@type": "Organization",
              "@id": organizationId,
              name: site.businessName,
              url: canonicalUrl("/"),
            },
            inLanguage: "ro-RO",
            mainEntityOfPage: canonicalUrl(`/blog/${article.slug}`),
          }),
        },
      ],
    };
  },
  notFoundComponent: ArticleNotFound,
  component: ArticlePage,
});

function ArticleNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut" className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="tech-label text-primary">Jurnal tehnic</p>
        <h1 className="mt-4 text-4xl">Articolul nu există</h1>
        <Link
          to="/blog"
          className="tech-label mt-8 inline-block border border-foreground bg-foreground px-6 py-4 text-background"
        >
          Înapoi la jurnal
        </Link>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}

const fmtDate = new Intl.DateTimeFormat("ro-RO", {
  timeZone: "UTC",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const mepOfferByArticle: Record<string, string> = {
  "template-revit-mep-bun":
    "Ai deja un template de birou? Putem produce modelul și planșele Revit MEP folosind vederile, familiile și convențiile tale.",
  "cat-costa-modelarea-bim-pe-tip-de-cladire":
    "Pentru o ofertă de modelare Revit MEP, trimite disciplinele, starea modelului și planșele de livrat. Primești scopul, termenul și prețul înainte de începere.",
  "clash-detection-ce-este":
    "Ai observații de coordonare aprobate? Putem actualiza traseele și planșele Revit MEP pe baza indicațiilor echipei tale.",
};

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const relatedArticles = getRelatedArticles(article);
  const mepOffer = mepOfferByArticle[article.slug];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut">
        <article className="mx-auto max-w-[760px] px-5 py-12 md:px-8 md:py-16">
          <div>
            <Link
              to="/blog"
              className="tech-label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={14} /> Jurnal tehnic
            </Link>
            <h1 className="display-xl mt-6 text-3xl md:text-5xl">{article.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-border-strong pb-6">
              <time dateTime={article.date} className="tech-label text-muted-foreground">
                Publicat: {fmtDate.format(new Date(article.date))}
              </time>
              <Link
                to="/despre"
                className="tech-label text-muted-foreground underline underline-offset-4 hover:text-primary"
              >
                Autor: {site.businessName}
              </Link>
              {article.updatedAt && article.updatedAt !== article.date && (
                <time dateTime={article.updatedAt} className="tech-label text-muted-foreground">
                  Actualizat: {fmtDate.format(new Date(article.updatedAt))}
                </time>
              )}
              <span className="tech-label text-muted-foreground">
                {article.readingTime} min de citit
              </span>
              <span className="flex flex-wrap gap-2">
                {article.tags.map((t) => (
                  <span key={t} className="tech-label border border-border px-2 py-1">
                    {t}
                  </span>
                ))}
              </span>
            </div>
          </div>

          <ArticleSections sections={article.sections} />
          {mepOffer && (
            <aside className="mt-8 border-l-2 border-primary pl-4">
              <p className="text-sm leading-relaxed text-foreground/80">{mepOffer}</p>
              <Link
                to="/revit-mep"
                className="mt-2 inline-flex min-h-11 items-center font-medium underline underline-offset-4 hover:text-primary"
              >
                Vezi serviciul de modelare Revit MEP
              </Link>
            </aside>
          )}
        </article>

        {relatedArticles.length > 0 && (
          <section
            aria-labelledby="related-articles-heading"
            className="mx-auto max-w-[760px] px-5 pb-12 md:px-8 md:pb-16"
          >
            <h2 id="related-articles-heading" className="text-2xl md:text-3xl">
              Citește și
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <article key={relatedArticle.slug}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: relatedArticle.slug }}
                    className="sheet-frame block h-full p-5 transition-colors hover:border-primary"
                  >
                    <span className="tech-label text-muted-foreground">
                      {relatedArticle.readingTime} min de citit
                    </span>
                    <h3 className="mt-3 text-xl leading-tight">{relatedArticle.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {relatedArticle.description}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}

        <CtaSection
          title="Ai o lucrare care cere acest nivel de detaliu?"
          description="Trimite planurile și cerințele — îți spun ce presupune lucrarea, termenul și costul, înainte de începere."
          source={`blog-${article.slug}`}
        />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
