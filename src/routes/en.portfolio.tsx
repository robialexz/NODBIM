import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, FileDown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { Reveal } from "@/components/site/Reveal";
import { canonicalUrl } from "@/lib/site-config";
import { hreflangLinks } from "@/lib/i18n";
import realSampleOne from "@/assets/real-anonymized-01.jpg";
import realSampleTwo from "@/assets/real-anonymized-02.jpg";
import portfolioAiHvacPlan from "@/assets/portfolio-ai-hvac-plan.webp";
import portfolioAiHvacOffice from "@/assets/portfolio-ai-hvac-office.webp";
import syntheticHvac from "@/assets/synthetic-hvac-plan-en.svg";
import syntheticCoordination from "@/assets/synthetic-mep-coordination-en.svg";
import syntheticDwg from "@/assets/synthetic-dwg-redline-en.svg";

const path = "/en/portfolio";
const url = canonicalUrl(path);
const title = "Revit MEP work samples and handover evidence | NOD BIM";
const description =
  "Inspect an HVAC sample PDF, a public sheet checklist, anonymised drawing fragments and clearly labelled synthetic HVAC illustrations. See what each example can and cannot demonstrate.";

export const Route = createFileRoute("/en/portfolio")({
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
      { property: "og:image", content: canonicalUrl("/resurse/nodbim-hvac-sample-preview.webp") },
      { property: "og:image:alt", content: "Preview of NOD BIM's synthetic HVAC sample PDF" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: canonicalUrl("/resurse/nodbim-hvac-sample-preview.webp") },
    ],
    links: [{ rel: "canonical", href: url }, ...hreflangLinks(path)],
  }),
  component: EnPortfolio,
});

type EvidenceItem = {
  src: string;
  alt: string;
  title: string;
  note: string;
  width: number;
  height: number;
};

const anonymisedSamples: EvidenceItem[] = [
  {
    src: realSampleOne,
    alt: "Blurred, anonymised fragment from a real thermal-services drawing; text has been removed.",
    title: "Thermal services",
    note: "Real fragment · anonymised · text removed · blurred · not for construction",
    width: 1200,
    height: 815,
  },
  {
    src: realSampleTwo,
    alt: "Second blurred, anonymised fragment from the same real drawing set, showing ventilation.",
    title: "Ventilation",
    note: "Same drawing set as the first fragment · not a separate project or client",
    width: 1200,
    height: 815,
  },
];

const aiIllustrations: EvidenceItem[] = [
  {
    src: portfolioAiHvacPlan,
    alt: "AI-generated conceptual top view of HVAC routes in a fictional office, without scale.",
    title: "HVAC routes in a fictional office",
    note: "AI-generated concept · fictional scenario · no scale · not a Revit export",
    width: 1448,
    height: 1086,
  },
  {
    src: portfolioAiHvacOffice,
    alt: "AI-generated conceptual view of HVAC routes in a fictional workplace.",
    title: "HVAC concept for a workplace",
    note: "AI-generated concept · fictional scenario · no scale · not for construction",
    width: 1448,
    height: 1086,
  },
];

const diagrams: EvidenceItem[] = [
  {
    src: syntheticHvac,
    alt: "Synthetic vector diagram of HVAC distribution in a fictional building.",
    title: "HVAC distribution",
    note: "Synthetic explanatory diagram · fictional scenario · not an issued drawing",
    width: 1448,
    height: 1086,
  },
  {
    src: syntheticCoordination,
    alt: "Synthetic axonometric diagram of MEP routes in a fictional building.",
    title: "MEP coordination concept",
    note: "Synthetic explanatory diagram · coordination has not been validated",
    width: 1448,
    height: 1086,
  },
  {
    src: syntheticDwg,
    alt: "Synthetic drawing-revision diagram showing a schematic markup workflow.",
    title: "Drawing revision workflow",
    note: "Synthetic diagram · not a conversion of a client drawing into DWG",
    width: 1448,
    height: 1086,
  },
];

function EvidenceGrid({ items }: { items: EvidenceItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={(index % 3) * 80}>
          <figure className="h-full overflow-hidden border border-border-strong bg-white">
            <a
              href={item.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open full-size image: ${item.title}`}
              className="group relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#f5f7fa] p-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary sm:p-5"
            >
              <img
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-contain"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 border border-border bg-white/95 px-2 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-foreground"
              >
                Open full size ↗
              </span>
            </a>
            <figcaption className="grid gap-2 border-t border-border px-4 py-4">
              <span className="font-display text-lg font-semibold">{item.title}</span>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.note}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

function EnPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut">
        <section className="border-b border-border-strong">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-8 md:py-20">
            <div>
              <p className="tech-label text-primary">NOD BIM · inspectable examples</p>
              <h1 className="display-xl mt-5 max-w-4xl text-[2.7rem] sm:text-6xl lg:text-7xl">
                Revit MEP work samples and handover evidence
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80">
                Review a three-page HVAC PDF sample, a downloadable sheet-checklist, two anonymised
                fragments from one real drawing set, and original synthetic illustrations. Each item
                is labelled so you can see what it demonstrates.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <Link to="/en/revit-mep-outsourcing" hash="estimate" className="btn btn-primary">
                Request a scoped quote <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/en/revit-mep-outsourcing" className="btn">
                Review Revit MEP support
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-border-strong bg-graphite text-graphite-foreground">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:px-8 md:py-16">
            <div>
              <p className="tech-label text-[#a9c4f5]">Handover example · vector PDF</p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Open the sample and inspect the sheets
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-graphite-foreground/75">
                The public PDF has three pages: an HVAC plan, a section and a QA sheet. It uses
                synthetic data. No Autodesk Revit model was created or validated for this sample; it
                is not a construction document or a client deliverable.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/resurse/nodbim-hvac-plant-room-sample.pdf"
                  className="btn border border-graphite-foreground/45 bg-graphite-foreground text-graphite"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open the sample PDF <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <Link
                  to="/en/revit-mep-outsourcing"
                  hash="estimate"
                  className="btn btn-on-dark border border-graphite-foreground/35"
                >
                  Request a quote
                </Link>
              </div>
              <a
                href="/resurse/revit-mep-sheet-issue-checklist-en.csv"
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-graphite-foreground/75 underline underline-offset-4 hover:text-graphite-foreground"
                download
              >
                <FileDown size={16} aria-hidden="true" />
                Download the sheet-issue checklist (CSV)
              </a>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-graphite-foreground/55">
                The checklist is a starting point for a review workflow; it does not replace
                project-specific requirements or engineering approval.
              </p>
            </div>
            <figure className="overflow-hidden border border-graphite-foreground/20 bg-white">
              <img
                src="/resurse/nodbim-hvac-sample-preview.webp"
                alt="Preview of the three-page synthetic HVAC PDF: a plan, a section, an equipment table and QA notes."
                width={960}
                height={679}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                Preview of the three-page synthetic PDF sample.
              </figcaption>
            </figure>
          </div>
          <div className="mx-auto grid max-w-[1200px] gap-px border-t border-graphite-foreground/20 bg-graphite-foreground/20 sm:grid-cols-2">
            <div className="bg-graphite p-6 md:p-8">
              <p className="tech-label text-[#a9c4f5]">What this sample can show</p>
              <p className="mt-3 text-sm leading-relaxed text-graphite-foreground/75">
                Page organisation, readable vector output, a sample equipment schedule and the
                presence of a basic QA sheet.
              </p>
            </div>
            <div className="bg-graphite p-6 md:p-8">
              <p className="tech-label text-[#a9c4f5]">What it cannot show</p>
              <p className="mt-3 text-sm leading-relaxed text-graphite-foreground/75">
                A native RVT model, verified clash results, a client-approved project outcome or
                engineering sign-off.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-18">
          <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-10">
            <div>
              <p className="tech-label text-primary">Real material · anonymised</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Two fragments from one drawing set
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">
              These are two fragments from the same set, not two projects or clients. Text was
              removed, title blocks cropped and images blurred before publication.
            </p>
          </div>
          <EvidenceGrid items={anonymisedSamples} />
        </section>

        <section className="border-y border-border bg-sheet">
          <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
            <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-10">
              <div>
                <p className="tech-label text-primary">Concept visuals · AI-generated</p>
                <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Fictional HVAC illustrations
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">
                These images explain HVAC ideas visually. They are not Revit screenshots, technical
                drawings or work delivered to a client.
              </p>
            </div>
            <EvidenceGrid items={aiIllustrations} />
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
          <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-10">
            <div>
              <p className="tech-label text-primary">Vector examples · fictional scenarios</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Diagrams for production workflows
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">
              These synthetic diagrams explain HVAC planning, MEP coordination concepts and drawing
              revisions. They are not issued project documents or validated coordination results.
            </p>
          </div>
          <EvidenceGrid items={diagrams} />
        </section>

        <section className="border-y border-border-strong bg-sheet">
          <div className="mx-auto grid max-w-[1200px] gap-7 px-5 py-12 md:grid-cols-[1fr_auto] md:items-center md:px-8">
            <div>
              <p className="tech-label text-primary">Next step</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight">
                Need Revit MEP production support?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                See the service scope and starting rate, or check what files to include with your
                enquiry before requesting a written quote.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a
                  href="/en/blog/files-for-revit-mep-quotation"
                  className="text-primary underline underline-offset-4"
                >
                  Files needed for a Revit MEP quote
                </a>
                <Link
                  to="/en/revit-mep-outsourcing"
                  className="text-primary underline underline-offset-4"
                >
                  Revit MEP outsourcing scope and rates
                </Link>
              </div>
            </div>
            <Link to="/en/revit-mep-outsourcing" hash="estimate" className="btn btn-primary">
              Start a quote <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
