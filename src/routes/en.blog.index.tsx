import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { Reveal } from "@/components/site/Reveal";
import { canonicalUrl } from "@/lib/site-config";
import { hreflangLinks } from "@/lib/i18n";
import { englishArticles } from "@/lib/blog-en";

const path = "/en/blog";
const title = "Revit MEP and Project Handover Guides · NOD BIM";
const description =
  "Practical guides for estimating Revit MEP drawing work, preparing quotation files and reviewing project handovers.";
const url = canonicalUrl(path);

export const Route = createFileRoute("/en/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }, ...hreflangLinks(path)],
  }),
  component: EnglishBlogIndex,
});

const formatDate = new Intl.DateTimeFormat("en-GB", {
  timeZone: "UTC",
  day: "numeric",
  month: "long",
  year: "numeric",
});

function EnglishBlogIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut">
        <section className="border-b border-border-strong">
          <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
            <p className="tech-label text-primary">Technical journal · applied engineering</p>
            <h1 className="display-xl mt-6 max-w-4xl text-[2.8rem] sm:text-6xl lg:text-7xl">
              Practical guides for Revit MEP and project handover
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
              Checklists for scoping a quote, preparing project files and reviewing a model before
              work continues.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {englishArticles.map((article, index) => (
              <Reveal key={article.slug} delay={(index % 3) * 80} className="h-full">
                <Link to="/en/blog/$slug" params={{ slug: article.slug }} className="block h-full">
                  <article className="sheet-frame flex h-full flex-col transition-colors hover:border-primary">
                    <div className="flex items-center justify-between border-b border-border px-5 py-3">
                      <time dateTime={article.date} className="tech-label text-muted-foreground">
                        {formatDate.format(new Date(article.date))}
                      </time>
                      <span className="tech-label text-muted-foreground">
                        {article.readingTime} min read
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col px-5 py-4">
                      <h2 className="text-2xl leading-tight">{article.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {article.description}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2 pt-4">
                        {article.tags.map((tag) => (
                          <span key={tag} className="tech-label border border-border px-2 py-1">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="border-t border-border-strong bg-graphite text-graphite-foreground">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
            <h2 className="display-xl max-w-3xl text-4xl md:text-6xl">
              Planning a Revit MEP project?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite-foreground/75">
              Share the model, drawings and expected deliverables to request a scoped estimate.
            </p>
            <Link
              to="/en/revit-mep-outsourcing"
              hash="estimate"
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
