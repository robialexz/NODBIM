import { createFileRoute, Link, notFound, useLocation } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { ArticleSections } from "@/components/site/ArticleSections";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileCta } from "@/components/site/MobileCta";
import { canonicalUrl, site } from "@/lib/site-config";
import { hreflangLinks } from "@/lib/i18n";
import { getEnglishArticle } from "@/lib/blog-en";
import { trackArticleInternalLinkClick } from "@/lib/analytics";

const organizationId = `${canonicalUrl("/")}#org`;

export const Route = createFileRoute("/en/blog/$slug")({
  loader: ({ params }) => {
    const article = getEnglishArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return {};
    const path = `/en/blog/${article.slug}`;
    const url = canonicalUrl(path);

    return {
      meta: [
        { title: `${article.metaTitle} · NOD BIM` },
        { name: "description", content: article.description },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.description },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "en_GB" },
        { property: "og:url", content: url },
        ...(article.image
          ? [
              {
                property: "og:image",
                content: canonicalUrl(article.image.socialSrc ?? article.image.src),
              },
              { property: "og:image:width", content: String(article.image.width) },
              { property: "og:image:height", content: String(article.image.height) },
              {
                name: "twitter:image",
                content: canonicalUrl(article.image.socialSrc ?? article.image.src),
              },
            ]
          : []),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.description },
      ],
      links: [{ rel: "canonical", href: url }, ...hreflangLinks(path)],
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
            ...(article.image
              ? { image: [canonicalUrl(article.image.socialSrc ?? article.image.src)] }
              : {}),
            author: {
              "@type": "Organization",
              "@id": organizationId,
              name: site.businessName,
              url: canonicalUrl("/en/about"),
            },
            publisher: {
              "@type": "Organization",
              "@id": organizationId,
              name: site.businessName,
              url: canonicalUrl("/"),
            },
            inLanguage: "en-GB",
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: EnglishArticleNotFound,
  component: EnglishArticlePage,
});

const formatDate = new Intl.DateTimeFormat("en-GB", {
  timeZone: "UTC",
  day: "numeric",
  month: "long",
  year: "numeric",
});

function EnglishArticleNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut" className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="tech-label text-primary">Technical journal</p>
        <h1 className="mt-4 text-4xl">This guide could not be found</h1>
        <Link
          to="/en/blog"
          className="tech-label mt-8 inline-block border border-foreground bg-foreground px-6 py-4 text-background"
        >
          Back to the journal
        </Link>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}

function EnglishArticlePage() {
  const { article } = Route.useLoaderData();
  const pathname = useLocation().pathname;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut">
        <article className="mx-auto max-w-[760px] px-5 py-12 md:px-8 md:py-16">
          <Link
            to="/en/blog"
            className="tech-label inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={14} /> Technical journal
          </Link>
          <h1 className="display-xl mt-6 text-3xl md:text-5xl">{article.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 border-b border-border-strong pb-6">
            <time dateTime={article.date} className="tech-label text-muted-foreground">
              Published: {formatDate.format(new Date(article.date))}
            </time>
            <Link
              to="/en/about"
              className="tech-label text-muted-foreground underline underline-offset-4 hover:text-primary"
            >
              By {site.businessName}
            </Link>
            {article.updatedAt && article.updatedAt !== article.date && (
              <time dateTime={article.updatedAt} className="tech-label text-muted-foreground">
                Updated: {formatDate.format(new Date(article.updatedAt))}
              </time>
            )}
            <span className="tech-label text-muted-foreground">{article.readingTime} min read</span>
            <span className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="tech-label border border-border px-2 py-1">
                  {tag}
                </span>
              ))}
            </span>
          </div>
          <ArticleSections
            sections={article.sections}
            {...(article.image ? { image: article.image } : {})}
          />
        </article>

        <section className="border-t border-border-strong bg-graphite text-graphite-foreground">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
            <h2 className="display-xl max-w-3xl text-4xl md:text-6xl">
              Need Revit MEP modelling or drawing support?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite-foreground/75">
              Share the model, project information and expected deliverables to discuss scope and
              timing.
            </p>
            <Link
              to="/en/revit-mep-outsourcing"
              hash="estimate"
              onClick={() =>
                trackArticleInternalLinkClick(
                  "/en/revit-mep-outsourcing#estimate",
                  pathname,
                  "Request an estimate",
                  "Article call to action",
                )
              }
              className="tech-label mt-8 inline-block border border-primary bg-primary px-6 py-4 text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request an estimate
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
