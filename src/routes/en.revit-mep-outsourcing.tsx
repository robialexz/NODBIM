import { createFileRoute, Link } from "@tanstack/react-router";
import { RevitPilot } from "@/components/site/RevitPilot";
import { PriceEstimator } from "@/components/site/PriceEstimator";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { EnEstimate, EnFaq } from "@/components/site/EnSections";
import { enOutsourcing } from "@/lib/en-content";
import { enFaqSchema, enMailHref } from "@/lib/en-page";
import { Reveal } from "@/components/site/Reveal";
import {
  brandSchema,
  canonicalUrl,
  defaultWhatsappMessage,
  quoteContextForPath,
  whatsappLink,
} from "@/lib/site-config";
import { hreflangLinks } from "@/lib/i18n";
import { trackConversion } from "@/lib/analytics";
import { offerSchema, rateLabelEn } from "@/lib/pricing";
import hero3d from "@/assets/hero-3d.webp";
import hero3d640 from "@/assets/hero-3d-640.webp";
import hero3d960 from "@/assets/hero-3d-960.webp";
import projSheet from "@/assets/proj-sheet.webp";

const path = "/en/revit-mep-outsourcing";
const url = canonicalUrl(path);
const title = "Revit MEP Outsourcing for Engineering Teams · NOD BIM";
const { h1, description, facts, useCases, process, standards, responsibility, faq } = enOutsourcing;

export const Route = createFileRoute("/en/revit-mep-outsourcing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { property: "og:locale:alternate", content: "ro_RO" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "canonical", href: url },
      ...hreflangLinks(path),
      { rel: "preload", as: "image", href: hero3d },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Revit MEP outsourcing",
          description,
          url,
          inLanguage: "en",
          availableLanguage: ["en", "ro"],
          brand: brandSchema,
          serviceType: [
            "Revit MEP modelling",
            "BIM production support",
            "MEP drawings and documentation",
          ],
          offers: [offerSchema("instalatii", "en")],
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(enFaqSchema(faq)) },
    ],
  }),
  component: RevitMepOutsourcing,
});

function RevitMepOutsourcing() {
  const mailHref = enMailHref("Revit MEP project enquiry");
  const waHref = whatsappLink(quoteContextForPath(path)?.whatsappMessage ?? defaultWhatsappMessage);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut">
        <section className="blueprint-hero border-b border-border-strong">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-10 md:px-8 md:py-16 lg:grid-cols-12 lg:items-center">
            <div className="blueprint-hero__copy lg:col-span-7">
              <p className="tech-label text-[#a9c4f5]">
                Revit MEP outsourcing · BIM production support
              </p>
              <h1 className="display-xl mt-5 max-w-4xl text-[2.4rem] text-graphite-foreground sm:text-[3.4rem] lg:text-[4.2rem]">
                {h1}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-graphite-foreground/85 md:text-lg">
                Extra Revit MEP production capacity for MEP consultancies, engineering offices and
                design-build teams. You keep the engineering design; I model it and produce the
                drawings in your template, to your standards.
              </p>
              <div className="mt-5 max-w-2xl border-l-2 border-[#8db0fb] pl-4">
                <p className="tech-label text-[#b6c6db]">Indicative starting rate</p>
                <p className="mt-1 font-display text-xl font-semibold text-graphite-foreground">
                  {rateLabelEn("instalatii")}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-[#b6c6db]">
                  For one complete MEP drawing sheet. The written quote confirms model scope,
                  deliverables and included revisions.
                </p>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#b6c6db]">
                HVAC, heating and electrical. Remote collaboration in English, with an NDA available
                before you share files.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#estimate" className="btn btn-primary">
                  Request a quote for one area
                </a>
                <a href="#pricing" className="btn btn-on-dark">
                  Calculate a starting estimate
                </a>
                {mailHref && (
                  <a
                    href={mailHref}
                    onClick={() => trackConversion("email_click", { source: "en_hero" })}
                    className="btn btn-on-dark"
                  >
                    Email your project files
                  </a>
                )}
                {!mailHref && waHref && (
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => trackConversion("whatsapp_click", { source: "en_hero" })}
                    className="btn btn-on-dark"
                  >
                    Discuss your project on WhatsApp
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <figure className="hero-visual">
                <img
                  src={hero3d}
                  srcSet={`${hero3d640} 640w, ${hero3d960} 960w, ${hero3d} 1200w`}
                  sizes="(min-width: 1200px) 446px, (min-width: 1024px) calc(42vw - 60px), calc(100vw - 40px)"
                  alt="Illustrative Revit MEP model view with ductwork, pipework and equipment"
                  width={1200}
                  height={860}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <figcaption>
                  <span className="tech-label text-primary">Revit MEP model view</span>
                  <span className="text-sm">Illustration · not a client deliverable</span>
                </figcaption>
              </figure>
              <dl className="sheet-frame mt-4 divide-y divide-border p-5 text-foreground md:p-6">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid grid-cols-5 gap-4 py-3 first:pt-0 last:pb-0">
                    <dt className="tech-label col-span-2 text-muted-foreground">{k}</dt>
                    <dd className="col-span-3 text-sm leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-[#b6c6db]">
                I usually reply with scope, timeline and cost within 1–2 working days.
              </p>
            </div>
          </div>
        </section>

        <section aria-label="Project pilot" className="mx-auto max-w-[1200px] px-5 py-10 md:px-8">
          <RevitPilot lang="en" />
        </section>

        <section id="pricing" className="border-y border-border-strong bg-sheet">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
            <p className="tech-label text-primary">Indicative estimate · EUR</p>
            <h2 className="mt-4 max-w-3xl text-3xl md:text-4xl">
              Estimate a complete MEP drawing package
            </h2>
            <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
              Set the number of complete drawing sheets. The model scope, deliverables and included
              revisions are confirmed in a written quote before work starts.
            </p>
            <div className="mt-8">
              <PriceEstimator
                defaultType="instalatii"
                jobTypes={["instalatii"]}
                locale="en"
                quoteHref="#estimate"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <h2 className="max-w-3xl text-3xl md:text-5xl">
              When teams bring in external Revit MEP capacity
            </h2>
          </Reveal>
          <Reveal
            delay={80}
            className="mt-10 grid gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4"
          >
            {useCases.map(([t, d]) => (
              <div key={t} className="bg-background p-6 md:p-8">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </Reveal>
        </section>

        <section id="process" className="border-y border-border-strong bg-sheet">
          <div className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
            <Reveal>
              <h2 className="text-3xl md:text-5xl">How it works</h2>
            </Reveal>
            <Reveal delay={80} className="mt-10 grid gap-px bg-border-strong md:grid-cols-2">
              {process.map((step) => (
                <article key={step.n} className="bg-background p-6 md:p-8">
                  <p className="tech-label text-muted-foreground">{step.n}</p>
                  <h3 className="mt-3 text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/80">{step.body}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {step.items.map((it) => (
                      <li key={it} className="border-b border-border pb-2 last:border-0">
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <h2 className="text-3xl md:text-4xl">Working inside your standards</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/80 md:text-base">
                The output should look like your team produced it. Send your standards at the start
                and the model and sheets follow them:
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {standards.map((s) => (
                  <li key={s} className="tech-label border-b border-border pb-1 text-foreground/70">
                    {s}
                  </li>
                ))}
              </ul>

              <h2 className="mt-14 text-3xl md:text-4xl">Scope, revisions, responsibility</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/80 md:text-base">
                {responsibility.map((item, i) => (
                  <li key={item}>
                    <span className="tech-label text-muted-foreground">0{i + 1} · </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-6">
              <div className="grid gap-4">
                {[
                  {
                    src: projSheet,
                    alt: "Revit sheet with plans, sections, legend and title block",
                    caption: "Drawing sheet",
                  },
                ].map((img, i) => (
                  <figure key={img.caption} className="sheet-frame p-2 md:p-3">
                    <div className="flex items-center justify-between border-b border-border px-2 pb-2">
                      <span className="tech-label text-muted-foreground">{img.caption}</span>
                      <span className="tech-label text-muted-foreground">
                        Demonstration project
                      </span>
                    </div>
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading={i === 0 ? "eager" : "lazy"}
                      width={1200}
                      height={860}
                      className="mt-2 w-full object-cover"
                    />
                  </figure>
                ))}
                <Link
                  to="/en/portfolio"
                  className="inline-flex min-h-11 items-center text-sm text-primary underline underline-offset-4"
                >
                  Inspect public work samples and handover evidence →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border-strong bg-graphite text-graphite-foreground">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-16 md:px-8 md:py-20 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <p className="tech-label text-accent">Who you work with</p>
              <h2 className="mt-5 text-3xl md:text-4xl">One specialist, from estimate to issue</h2>
            </Reveal>
            <Reveal delay={80} className="lg:col-span-7">
              <p className="text-base leading-relaxed text-graphite-foreground/85">
                NOD BIM is the brand of a Revit and AutoCAD specialist with professional experience
                in MEP design and coordination and building services studies in progress. The person
                who prepares your estimate is the person who does the work — no account managers in
                between.
              </p>
              <p className="mt-4 text-base leading-relaxed text-graphite-foreground/85">
                Projects from employment belong to the employer and are not presented as NOD BIM
                work.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-graphite-foreground/65">
                As a single specialist, I take on a limited number of projects at a time and confirm
                availability before accepting a scope.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-20">
          <p className="tech-label text-primary">Plan your next drawing package</p>
          <h2 className="mt-4 text-3xl md:text-4xl">Before you request a quote</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
            For engineering offices and construction teams with an approved design: clarify the
            source files, model status and drawing scope before agreeing a delivery date.
          </p>
          <ul className="mt-7 divide-y divide-border border-y border-border-strong">
            <li>
              <a
                href="/en/blog/mep-drawing-pricing"
                className="block py-4 font-medium text-primary underline underline-offset-4"
              >
                MEP drawing prices and what belongs in the quote
              </a>
            </li>
            <li>
              <a
                href="/en/blog/files-for-revit-mep-quotation"
                className="block py-4 font-medium text-primary underline underline-offset-4"
              >
                Files to send for a Revit MEP quotation
              </a>
            </li>
            <li>
              <a
                href="/en/blog/revit-mep-model-handover-checklist"
                className="block py-4 font-medium text-primary underline underline-offset-4"
              >
                Revit MEP model handover checklist
              </a>
            </li>
            <li>
              <a
                href="/en/blog/hvac-service-access-clearances"
                className="block py-4 font-medium text-primary underline underline-offset-4"
              >
                Check HVAC service access before signing off a model
              </a>
            </li>
            <li>
              <a
                href="/en/blog/revit-hvac-view-filters"
                className="block py-4 font-medium text-primary underline underline-offset-4"
              >
                Specify HVAC view filters for a drawing package
              </a>
            </li>
          </ul>
          <Link
            to="/en/blog"
            className="mt-6 inline-flex min-h-11 items-center text-primary underline underline-offset-4"
          >
            All project guides →
          </Link>
        </section>

        <EnFaq faq={faq} title="Questions before you send files" />

        <EnEstimate mailHref={mailHref} source="en_estimate" />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
