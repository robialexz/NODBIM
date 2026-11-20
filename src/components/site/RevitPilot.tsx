import { ArrowDown, FileDown } from "lucide-react";
import samplePreview from "@/assets/nodbim-hvac-sample-preview.webp";

const sampleUrl = "/resurse/nodbim-hvac-plant-room-sample.pdf";

const copy = {
  ro: {
    title: "Începe cu o zonă din proiect",
    intro:
      "Alege o cameră tehnică, un etaj sau un pachet mic de planșe. Modelez în șablonul biroului tău, pe baza soluției aprobate de proiectant.",
    inputs: "Trimiți planul de referință, traseele aprobate și termenul dorit.",
    outputs: "Stabilim în scris modelul RVT, planșele PDF sau DWG, termenul și revizia inclusă.",
    repeat:
      "După predare, poți rezerva capacitate pentru următoarea etapă sau pentru un volum lunar.",
    quote: "Cere ofertă pentru o zonă",
    sample: "Descarcă mostra HVAC (PDF)",
    checklist: "Descarcă lista de verificare a planșelor (CSV)",
    alt: "Planul schematic al camerei tehnice HVAC din mostra NOD BIM",
    caption: "Exemplu schematic de predare cu plan, secțiune și verificări. Pentru prezentare.",
  },
  en: {
    title: "Start with one area of your project",
    intro:
      "Choose a plant room, a floor or a small drawing package. I model it in your office template using your engineer’s approved design.",
    inputs: "Send the reference layout, approved routes and target date.",
    outputs:
      "We agree the RVT model, PDF or DWG sheets, delivery date and included revision in writing.",
    repeat: "After handover, you can reserve capacity for the next stage or a monthly workload.",
    quote: "Request a quote for one area",
    sample: "Download the HVAC sample (PDF)",
    checklist: "Download the sheet issue checklist (CSV)",
    alt: "Illustrative HVAC plant room plan from the NOD BIM sample",
    caption: "Illustrative handover with a plan, section and checks. For demonstration only.",
  },
};

export function RevitPilot({ lang = "ro" }: { lang?: "ro" | "en" }) {
  const t = copy[lang];

  return (
    <div
      id="pilot"
      className="grid scroll-mt-24 items-center gap-6 border border-border-strong bg-background p-6 md:p-8 lg:grid-cols-2 lg:gap-10"
    >
      <div>
        <h2 className="text-2xl md:text-3xl">{t.title}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">{t.intro}</p>
        <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground/80">
          <li>{t.inputs}</li>
          <li>{t.outputs}</li>
        </ul>
        <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{t.repeat}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={lang === "en" ? "#estimate" : "#estimare"} className="btn btn-primary">
            {t.quote} <ArrowDown aria-hidden="true" className="size-4" />
          </a>
          <a href={sampleUrl} download className="btn">
            <FileDown aria-hidden="true" className="size-4" /> {t.sample}
          </a>
          <a
            href={`/resurse/revit-mep-sheet-issue-checklist-${lang}.csv`}
            download
            className="btn max-w-full whitespace-normal"
          >
            <FileDown aria-hidden="true" className="size-4" /> {t.checklist}
          </a>
        </div>
      </div>
      <figure>
        <img
          src={samplePreview}
          alt={t.alt}
          width={960}
          height={679}
          loading="lazy"
          decoding="async"
          className="h-auto w-full border border-border"
        />
        <figcaption className="mt-2 text-xs text-muted-foreground">{t.caption}</figcaption>
      </figure>
    </div>
  );
}
