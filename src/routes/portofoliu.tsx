import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { Reveal } from "@/components/site/Reveal";
import { CtaSection } from "@/components/site/CtaSection";
import { canonicalUrl } from "@/lib/site-config";
import realSampleOne from "@/assets/real-anonymized-01.jpg";
import realSampleTwo from "@/assets/real-anonymized-02.jpg";
import syntheticHvac from "@/assets/synthetic-hvac-plan.svg";
import syntheticCoordination from "@/assets/synthetic-mep-coordination.svg";
import syntheticDwg from "@/assets/synthetic-dwg-redline.svg";

const title = "Mostre de documentație Revit MEP · NOD BIM";
const description =
  "Fragmente reale anonimizate și demonstrații sintetice pentru Revit MEP, HVAC și AutoCAD. Mostre de prezentare, fără utilizare pentru execuție.";
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

type Item = {
  src: string;
  alt: string;
  caption: string;
  meta: string;
  w: number;
  h: number;
  span: string;
  dark?: boolean;
  anonymized?: boolean;
};

const items: Item[] = [
  {
    src: realSampleOne,
    alt: "Fragment de plan real cu textul eliminat și imaginea puternic estompată",
    caption: "Documentație tehnică · Fragment 01",
    meta: "Mostră reală anonimizată",
    w: 1200,
    h: 815,
    span: "lg:col-span-6",
    anonymized: true,
  },
  {
    src: realSampleTwo,
    alt: "Al doilea fragment din același set de planuri, fără text sau cartuș",
    caption: "Documentație tehnică · Fragment 02",
    meta: "Mostră reală anonimizată",
    w: 1200,
    h: 815,
    span: "lg:col-span-6",
    anonymized: true,
  },
  {
    src: syntheticHvac,
    alt: "Schemă sintetică de plan HVAC într-un spațiu de birouri fictiv",
    caption: "HVAC · Plan demonstrativ",
    meta: "Scenariu fictiv · fără scară",
    w: 1448,
    h: 1086,
    span: "lg:col-span-7",
  },
  {
    src: syntheticCoordination,
    alt: "Schemă axonometrică sintetică pentru coordonarea traseelor MEP într-o clădire fictivă",
    caption: "Revit MEP · Coordonare demonstrativă",
    meta: "Schemă axonometrică · fără scară",
    w: 1448,
    h: 1086,
    span: "lg:col-span-5",
    dark: true,
  },
  {
    src: syntheticDwg,
    alt: "Exemplu sintetic de observații pe un PDF și desenul DWG demonstrativ rezultat",
    caption: "AutoCAD · Redline demonstrativ",
    meta: "PDF și DWG fictive · flux explicativ",
    w: 1448,
    h: 1086,
    span: "lg:col-span-12",
  },
];

function Portofoliu() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const open = openIndex !== null ? (items[openIndex] ?? null) : null;

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenIndex(null);
      } else if (e.key === "ArrowRight") {
        setOpenIndex((i) => (i === null ? i : (i + 1) % items.length));
      } else if (e.key === "ArrowLeft") {
        setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length));
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut">
        <section className="border-b border-border-strong">
          <div className="mx-auto max-w-[1200px] px-5 py-14 md:px-8 md:py-20">
            <div>
              <p className="tech-label text-primary">Documentație tehnică · Revit MEP · AutoCAD</p>
              <h1 className="display-xl mt-6 max-w-4xl text-[2.8rem] sm:text-6xl lg:text-7xl">
                Mostre de documentație
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80">
                Primele două imagini sunt fragmente din același set de planuri reale, cu textul
                eliminat, cartușele decupate și imaginea puternic estompată. Celelalte exemple sunt
                demonstrații sintetice create pentru scenarii fictive. Mostrele au scop de
                prezentare și nu pot fi folosite pentru execuție.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
          <div className="mt-4 grid gap-4 lg:grid-cols-12">
            {items.map((it, i) => (
              <Reveal key={it.caption} delay={(i % 6) * 80} className={`${it.span}`}>
                <figure
                  className={`group h-full overflow-hidden border border-border-strong ${
                    it.dark ? "bg-graphite" : "bg-sheet"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    className="block w-full cursor-zoom-in"
                    aria-label={`Mărește imaginea: ${it.caption}`}
                  >
                    <img
                      src={it.src}
                      alt={it.alt}
                      width={it.w}
                      height={it.h}
                      loading="lazy"
                      className="max-h-[70vh] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </button>
                  <figcaption
                    className={`flex flex-wrap items-center justify-between gap-2 border-t px-4 py-3 ${
                      it.dark
                        ? "border-graphite-foreground/15 text-graphite-foreground"
                        : "border-border"
                    }`}
                  >
                    <span className="tech-label">{it.caption}</span>
                    <span
                      className={`tech-label ${
                        it.dark ? "text-graphite-foreground/50" : "text-muted-foreground"
                      }`}
                    >
                      {it.meta}
                    </span>
                    <span
                      className={`tech-label basis-full ${
                        it.dark ? "text-graphite-foreground/50" : "text-muted-foreground"
                      }`}
                    >
                      {it.anonymized
                        ? "Mostră reală anonimizată · text eliminat · nu pentru execuție"
                        : "Demonstrație sintetică · scenariu fictiv · nu pentru execuție"}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        <CtaSection
          title="Ai un proiect de terminat?"
          description="Trimite planurile și cerințele, iar eu îți pot spune ce presupune lucrarea, termenul și costul."
          source="portofoliu"
        />
      </main>
      <Footer />
      <MobileCta />

      {open && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-graphite/95 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            onClick={() => setOpenIndex(null)}
            autoFocus
            aria-label="Închide"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-graphite-foreground/40 text-graphite-foreground"
          >
            <X size={18} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((openIndex - 1 + items.length) % items.length);
            }}
            aria-label="Imaginea anterioară"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-graphite-foreground/40 text-graphite-foreground transition-colors hover:bg-graphite-foreground hover:text-graphite md:left-6"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setOpenIndex((openIndex + 1) % items.length);
            }}
            aria-label="Imaginea următoare"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-graphite-foreground/40 text-graphite-foreground transition-colors hover:bg-graphite-foreground hover:text-graphite md:right-6"
          >
            <ChevronRight size={20} />
          </button>
          <figure className="max-h-full w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={open.alt} className="max-h-[82vh] w-full object-contain" />
            <figcaption className="tech-label mt-3 flex flex-wrap items-center justify-between gap-2 text-graphite-foreground/70">
              <span>
                {open.caption} — {open.meta}
              </span>
              <span className="text-graphite-foreground/50">
                {openIndex + 1} / {items.length}
              </span>
              <span className="basis-full text-graphite-foreground/50">
                {open.anonymized
                  ? "Mostră reală anonimizată · text eliminat · nu pentru execuție"
                  : "Demonstrație sintetică · scenariu fictiv · nu pentru execuție"}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
