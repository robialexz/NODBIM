import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowUpRight, FileDown } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { canonicalUrl } from "@/lib/site-config";
import realSampleOne from "@/assets/real-anonymized-01.jpg";
import realSampleTwo from "@/assets/real-anonymized-02.jpg";
import portfolioAiHvacPlan from "@/assets/portfolio-ai-hvac-plan.webp";
import portfolioAiHvacOffice from "@/assets/portfolio-ai-hvac-office.webp";
import syntheticHvac from "@/assets/synthetic-hvac-plan.svg";
import syntheticCoordination from "@/assets/synthetic-mep-coordination.svg";
import syntheticDwg from "@/assets/synthetic-dwg-redline.svg";

const title = "Mostre de documentație Revit MEP | NOD BIM";
const description =
  "Vezi fragmente reale anonimizate, o mostră PDF vectorială cu date sintetice și ilustrații generate cu AI pentru scenarii HVAC fictive. Mostrele nu sunt documentație pentru execuție.";
const url = canonicalUrl("/portofoliu");

export const Route = createFileRoute("/portofoliu")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Portofoliu,
});

type PortfolioItem = {
  src: string;
  alt: string;
  caption: string;
  meta: string;
  provenance: string;
  width: number;
  height: number;
};

const realItems: PortfolioItem[] = [
  {
    src: realSampleOne,
    alt: "Fragment real anonimizat dintr-un plan de instalații termice; textul a fost eliminat, iar imaginea este estompată.",
    caption: "Instalații termice",
    meta: "Primul fragment din același set",
    provenance: "Fragment real anonimizat · text eliminat · imagine estompată · nu pentru execuție",
    width: 1200,
    height: 815,
  },
  {
    src: realSampleTwo,
    alt: "Al doilea fragment real anonimizat din același set de planuri, asociat cu ventilația.",
    caption: "Ventilație",
    meta: "Al doilea fragment din același set",
    provenance: "Fragment real anonimizat · text eliminat · imagine estompată · nu pentru execuție",
    width: 1200,
    height: 815,
  },
];

const aiItems: PortfolioItem[] = [
  {
    src: portfolioAiHvacPlan,
    alt: "Ilustrație generată cu AI a unui plan HVAC fictiv, cu trasee colorate într-un birou văzut de sus.",
    caption: "Plan HVAC într-un birou fictiv",
    meta: "Vedere de sus · fără scară",
    provenance: "Ilustrație generată cu AI · scenariu fictiv · fără scară · nu pentru execuție",
    width: 1448,
    height: 1086,
  },
  {
    src: portfolioAiHvacOffice,
    alt: "Ilustrație generată cu AI a traseelor HVAC într-un spațiu de birou fictiv amenajat.",
    caption: "Trasee HVAC într-un spațiu de lucru fictiv",
    meta: "Vedere de sus · fără scară",
    provenance: "Ilustrație generată cu AI · scenariu fictiv · fără scară · nu pentru execuție",
    width: 1448,
    height: 1086,
  },
];

const diagramItems: PortfolioItem[] = [
  {
    src: syntheticHvac,
    alt: "Schemă vectorială sintetică pentru o distribuție HVAC într-o clădire fictivă.",
    caption: "Schemă HVAC",
    meta: "Diagramă vectorială · fără scară",
    provenance: "Schemă demonstrativă · scenariu fictiv · nu este plan de execuție",
    width: 1448,
    height: 1086,
  },
  {
    src: syntheticCoordination,
    alt: "Schemă axonometrică sintetică de coordonare a traseelor MEP într-o clădire fictivă.",
    caption: "Coordonare MEP",
    meta: "Schemă axonometrică · fără scară",
    provenance: "Schemă demonstrativă · scenariu fictiv · nu este coordonare validată",
    width: 1448,
    height: 1086,
  },
  {
    src: syntheticDwg,
    alt: "Diagramă sintetică de marcare și revizie a unei planșe, pentru explicarea unui flux de lucru.",
    caption: "Flux explicativ de revizie",
    meta: "Markup schematic · scenariu fictiv",
    provenance: "Schemă demonstrativă · nu reprezintă conversia unui proiect client în DWG",
    width: 1448,
    height: 1086,
  },
];

function ImageGallery({ id, items }: { id: string; items: PortfolioItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);
  const open = openIndex === null ? null : (items[openIndex] ?? null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      if (!dialog) return;
      if (!dialog.open) dialog.showModal();
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else {
      if (dialog?.open) dialog.close();
      triggerButtonRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setOpenIndex((index) => (index === null ? index : (index + 1) % items.length));
      } else if (event.key === "ArrowLeft") {
        setOpenIndex((index) =>
          index === null ? index : (index - 1 + items.length) % items.length,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [openIndex, items.length]);

  const close = () => setOpenIndex(null);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((item, index) => {
          const provenanceId = id + "-provenance-" + index;
          return (
            <Reveal key={item.caption} delay={(index % 3) * 80}>
              <figure className="h-full overflow-hidden border border-border-strong bg-white">
                <button
                  type="button"
                  onClick={(event) => {
                    triggerButtonRef.current = event.currentTarget;
                    setOpenIndex(index);
                  }}
                  className="group block w-full cursor-zoom-in"
                  aria-label={"Mărește: " + item.caption + ". " + item.provenance}
                  aria-describedby={provenanceId}
                  aria-haspopup="dialog"
                >
                  <span className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-[#f5f7fa] p-3 group-focus-visible:outline group-focus-visible:outline-2 group-focus-visible:-outline-offset-2 group-focus-visible:outline-primary sm:p-5">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </span>
                </button>
                <figcaption className="grid gap-2 border-t border-border px-4 py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <span className="font-display text-lg font-semibold">{item.caption}</span>
                    <span className="tech-label text-muted-foreground">{item.meta}</span>
                  </div>
                  <p id={provenanceId} className="text-sm leading-relaxed text-muted-foreground">
                    {item.provenance}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>

      {open && openIndex !== null && (
        <dialog
          ref={dialogRef}
          aria-labelledby={id + "-dialog-title"}
          className="fixed inset-0 z-[60] m-auto h-full w-full max-h-none max-w-none overflow-y-auto border-0 bg-graphite p-4 text-graphite-foreground"
          onCancel={(event) => {
            event.preventDefault();
            close();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Închide imaginea"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-graphite-foreground/35 bg-graphite text-graphite-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-graphite-foreground"
          >
            <X size={18} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex((openIndex - 1 + items.length) % items.length);
            }}
            aria-label="Imaginea anterioară din această secțiune"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-graphite-foreground/35 bg-graphite text-graphite-foreground transition-colors hover:bg-graphite-foreground hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-graphite-foreground md:left-6"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setOpenIndex((openIndex + 1) % items.length);
            }}
            aria-label="Imaginea următoare din această secțiune"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-graphite-foreground/35 bg-graphite text-graphite-foreground transition-colors hover:bg-graphite-foreground hover:text-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-graphite-foreground md:right-6"
          >
            <ChevronRight size={20} />
          </button>
          <figure className="mx-auto w-full max-w-6xl">
            <div className="flex max-h-[78vh] items-center justify-center">
              <img
                src={open.src}
                alt={open.alt}
                width={open.width}
                height={open.height}
                className="max-h-[78vh] max-w-full object-contain"
              />
            </div>
            <figcaption className="mx-auto mt-4 max-w-4xl text-graphite-foreground">
              <h2 id={id + "-dialog-title"} className="font-display text-xl font-semibold">
                {open.caption}
              </h2>
              <p className="mt-1 text-sm text-graphite-foreground/70">{open.meta}</p>
              <p className="mt-2 text-sm text-graphite-foreground/70">{open.provenance}</p>
              <p className="mt-2 text-right text-xs text-graphite-foreground/50">
                {openIndex + 1} / {items.length}
              </p>
            </figcaption>
          </figure>
        </dialog>
      )}
    </>
  );
}

function Portofoliu() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut">
        <section className="border-b border-border-strong">
          <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-14 md:grid-cols-[1.2fr_0.8fr] md:items-end md:px-8 md:py-20">
            <div>
              <p className="tech-label text-primary">NOD BIM · Exemple inspectabile</p>
              <h1 className="display-xl mt-5 max-w-4xl text-[2.7rem] sm:text-6xl lg:text-7xl">
                Mostre de documentație Revit MEP
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80">
                Aici găsești două fragmente reale anonimizate din același set, o mostră PDF cu date
                sintetice și ilustrații create pentru a explica vizual instalațiile. Separăm clar
                materialele reale de scenariile demonstrative.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a href="#mostra-pdf" className="btn btn-primary">
                Vezi mostra demonstrativă HVAC
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <a href="#fragmente-reale" className="btn">
                Mergi la fragmentele reale
              </a>
            </div>
          </div>
        </section>

        <section
          id="mostra-pdf"
          className="border-b border-border-strong bg-graphite text-graphite-foreground"
        >
          <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:px-8 md:py-16">
            <div>
              <p className="tech-label text-[#a9c4f5]">Mostră de predare · PDF vectorial</p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                O mostră care poate fi deschisă și verificată
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed text-graphite-foreground/75">
                PDF-ul demonstrativ are trei pagini: un plan HVAC, o secțiune și o fișă QA.
                Folosește date sintetice. Nu a fost creat, deschis sau validat un model Autodesk
                Revit pentru această mostră, iar documentul nu se folosește la execuție.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/resurse/nodbim-hvac-plant-room-sample.pdf"
                  className="btn border border-graphite-foreground/45 bg-graphite-foreground text-graphite"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deschide mostra PDF
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
                <Link
                  to="/revit-mep"
                  hash="pilot"
                  className="btn btn-on-dark border border-graphite-foreground/35"
                >
                  Vezi pilotul Revit MEP
                </Link>
              </div>
              <a
                href="/resurse/revit-mep-sheet-issue-checklist-ro.csv"
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-graphite-foreground/75 underline underline-offset-4 hover:text-graphite-foreground"
              >
                <FileDown size={16} aria-hidden="true" />
                Descarcă checklistul de verificare a planșelor
              </a>
              <p className="mt-4 max-w-xl text-xs leading-relaxed text-graphite-foreground/55">
                Mostră demonstrativă cu date sintetice; nu este model Revit și nu reprezintă un
                proiect de client.
              </p>
            </div>
            <figure className="overflow-hidden border border-graphite-foreground/20 bg-white">
              <img
                src="/resurse/nodbim-hvac-sample-preview.webp"
                alt="Previzualizare a PDF-ului demonstrativ HVAC: plan, secțiune, tabel de echipamente și note QA."
                width={960}
                height={679}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                Previzualizarea celor trei pagini din PDF-ul demonstrativ.
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="fragmente-reale"
          className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-18"
        >
          <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-10">
            <div>
              <p className="tech-label text-primary">Material real · anonimizat</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Fragmente reale anonimizate
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">
              Sunt două fragmente din același set de planuri, nu două proiecte sau clienți diferiți.
              Textul a fost eliminat, cartușele decupate, iar imaginile estompate înainte de
              afișare.
            </p>
          </div>
          <ImageGallery id="fragmente" items={realItems} />
        </section>

        <section id="ilustratii-ai" className="border-y border-border bg-sheet">
          <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
            <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-10">
              <div>
                <p className="tech-label text-primary">Concepte vizuale · generate cu AI</p>
                <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ilustrații conceptuale HVAC
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">
                Aceste imagini sunt scenarii fictive, create pentru prezentarea vizuală a unor idei
                HVAC. Nu sunt capturi Revit, planșe tehnice sau lucrări livrate unui client.
              </p>
            </div>
            <ImageGallery id="ilustratii-ai" items={aiItems} />
          </div>
        </section>

        <section
          id="scheme-demonstrative"
          className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-16"
        >
          <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.8fr] md:items-end md:gap-10">
            <div>
              <p className="tech-label text-primary">Exemple vectoriale · scenarii fictive</p>
              <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Scheme pentru fluxuri de lucru
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:justify-self-end">
              Schemele explică tipuri de activități, precum planificarea HVAC, coordonarea traseelor
              și revizia desenelor. Sunt demonstrative și nu reprezintă livrabile validate.
            </p>
          </div>
          <ImageGallery id="scheme" items={diagramItems} />
        </section>

        <CtaSection
          title="Ai un proiect de terminat?"
          description="Trimite planurile și cerințele, iar eu îți pot spune ce presupune lucrarea, termenul și costul."
          source="portofoliu"
        />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
