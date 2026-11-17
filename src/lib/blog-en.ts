import type { Article } from "./blog";
import { jobRates, packagePrice } from "./pricing";

export type EnglishArticle = Article & { sourceSlug: string };

export const englishArticles: EnglishArticle[] = [
  {
    slug: "mep-drawing-pricing",
    sourceSlug: "cat-costa-o-plansa-de-instalatii",
    title: "How much does a complete MEP drawing sheet cost?",
    metaTitle: "MEP drawing sheet pricing",
    description: `A complete installation drawing sheet starts at ${jobRates.instalatii.min} ${jobRates.instalatii.currency}. See how file condition, scope and handover requirements shape a written quote.`,
    date: "2026-11-17",
    readingTime: 5,
    tags: ["Pricing", "Revit MEP", "Project scope"],
    sections: [
      {
        paragraphs: [
          "A drawing count alone does not define the work. A useful quote states the discipline, what each sheet must show, the required level of detail, the files to be delivered and the revision rounds included.",
          `At NOD BIM, the current minimum for one complete installation drawing sheet is ${jobRates.instalatii.min} ${jobRates.instalatii.currency}. At the same starting rate, ${packagePrice.sheets} complete sheets total ${packagePrice.min} ${packagePrice.currency}. This is a minimum, not a fixed quote for every package.`,
        ],
      },
      {
        heading: "What the starting price covers",
        paragraphs: [
          "A complete sheet is scoped before work starts. The service covers modelling and documentation based on the approved engineering design supplied by your team. Corrections to an existing drawing are a separate service with its own scope.",
          "Engineering design, calculations, local approvals and sign-off remain with your responsible engineer. The estimate should make clear which modelling and drawing tasks are included so your team knows what it will receive.",
        ],
      },
      {
        heading: "What changes the quote",
        table: {
          head: ["Factor", "Why it matters"],
          rows: [
            [
              "Incoming files",
              "The condition and completeness of RVT, DWG or PDF backgrounds affect setup and the clarification needed before modelling.",
            ],
            [
              "Disciplines and sheet content",
              "The quote should name the included HVAC, heating or electrical scope and what each drawing needs to show.",
            ],
            [
              "Level of detail and outputs",
              "A 2D drawing set, a model, schedules and additional views are different deliverables; agree which ones are required.",
            ],
            [
              "Revisions and target date",
              "The included revision rounds and delivery date belong in the written scope. Changes to that scope are quoted before the extra work begins.",
            ],
          ],
        },
      },
      {
        heading: "What to include in your request",
        list: [
          "The number of complete sheets and the disciplines involved.",
          "The current engineering design and available backgrounds, such as RVT, DWG or PDF files.",
          "Required outputs, level of detail, target date and any template or drawing standards.",
          "Whether you need a new drawing set, continuation of an existing model or corrections to existing sheets.",
        ],
        links: [
          { label: "Request a Revit MEP estimate", href: "/en/revit-mep-outsourcing#estimate" },
          { label: "Files to send for a quote", href: "/en/blog/files-for-revit-mep-quotation" },
          { label: "Browse English guides", href: "/en/blog" },
        ],
      },
    ],
  },
  {
    slug: "files-for-revit-mep-quotation",
    sourceSlug: "ce-fisiere-trimiti-pentru-modelare-mep",
    title: "What files should you send for a Revit MEP quote?",
    metaTitle: "Files for a Revit MEP quote",
    description:
      "A practical checklist of the model, backgrounds, engineering inputs and project standards that help scope Revit MEP production clearly.",
    date: "2026-11-17",
    readingTime: 5,
    tags: ["Revit MEP", "Project files", "Quotations"],
    sections: [
      {
        paragraphs: [
          "A clear request gives the modelling team enough information to define the work before quoting. Send the design inputs you have, explain what your team needs delivered and flag decisions that are still open.",
          "The engineering design and calculations remain with your responsible engineer. Modelling and documentation are produced from the approved information your team supplies.",
        ],
      },
      {
        heading: "Useful files for an initial review",
        table: {
          head: ["Input", "Useful for", "Confirm before quoting"],
          rows: [
            [
              "RVT model",
              "Continuing or reviewing an existing Revit MEP project.",
              "The Revit version, linked models and whether the editable model is part of the requested handover.",
            ],
            [
              "DWG drawings",
              "Using 2D architectural backgrounds, layouts or existing drawings as a modelling reference.",
              "The required levels, drawing units, layers and any external references needed to read the files.",
            ],
            [
              "PDF drawings or scans",
              "Reviewing issued drawings or using them as a reference where native files are unavailable.",
              "Whether the PDF is vector or scanned, how scale can be confirmed and which information needs clarification.",
            ],
            [
              "Layouts, mark-ups and schematics",
              "Understanding the MEP design intent, equipment and changes requested by the engineering team.",
              "Which information is approved, which decisions remain open and who will confirm them.",
            ],
          ],
        },
      },
      {
        heading: "Add a short project brief",
        list: [
          "Disciplines included: HVAC, heating and/or electrical.",
          "The number and type of sheets, model areas, views or schedules required.",
          "The target level of detail, expected file formats and any drawing or BIM standards to follow.",
          "The target date, known constraints and the revision rounds you expect to include.",
        ],
      },
      {
        heading: "Before you share the files",
        paragraphs: [
          "If your team requires a confidentiality agreement, arrange it before sharing project files. The Revit MEP service can be scoped around your template, families and standards; the written estimate confirms the deliverables, timeline and price before work starts.",
        ],
        links: [
          {
            label: "Revit MEP outsourcing for engineering teams",
            href: "/en/revit-mep-outsourcing",
          },
          {
            label: "Check an inherited Revit MEP model",
            href: "/en/blog/revit-mep-model-handover-checklist",
          },
          { label: "Browse English guides", href: "/en/blog" },
        ],
      },
    ],
  },
  {
    slug: "revit-mep-model-handover-checklist",
    sourceSlug: "cum-verifici-un-model-revit-primit",
    title: "Revit MEP model handover checklist: what to check before continuing",
    metaTitle: "Revit MEP model handover checklist",
    description:
      "Review file access, links, project structure and model information before agreeing how an inherited Revit MEP model will be continued.",
    date: "2026-11-17",
    readingTime: 6,
    tags: ["Revit MEP", "Quality checks", "Handover"],
    sections: [
      {
        paragraphs: [
          "A model can look complete in a view while still missing links, agreed standards or information needed for the next issue. Before committing to a continuation scope, review the file and record what is present, what is unclear and what your team needs next.",
        ],
      },
      {
        heading: "1. Confirm the file and references",
        list: [
          "Open the model in the agreed Revit version and note any access, compatibility or file warnings.",
          "Check that linked architecture and other reference models are available from the locations your team will use.",
          "Compare levels, coordinates and orientation with the agreed project backgrounds; record mismatches before changing them.",
        ],
      },
      {
        heading: "2. Review project organisation",
        list: [
          "Check that views, sheets and browser organisation make the current issue and next tasks clear.",
          "Confirm naming, title blocks, revision conventions and view templates against the project standard.",
          "Check that the families, shared parameters and schedules required by the agreed scope are available and behave as expected.",
          "Review phase settings and document any exceptions that may affect views or schedules.",
        ],
      },
      {
        heading: "3. Inspect the MEP information",
        list: [
          "Review whether modelled components are assigned to the intended systems and whether connections or unconnected elements need attention.",
          "Check that tags and schedules read model information where the project expects them to, rather than relying on text that may not update with the model.",
          "Review coordination issues and any specified slopes or clearances that are part of the agreed scope; keep design decisions with the responsible engineer.",
        ],
      },
      {
        heading: "4. Record the handover findings",
        paragraphs: [
          "List missing backgrounds, model issues, open engineering decisions and assumptions before proposing the next step. Agree the deliverables, timeline and included revision rounds in writing. If the review changes the scope, price the additional work before it starts.",
          "These are production and documentation checks. Engineering design, calculations, local approvals and sign-off remain with your responsible engineer.",
        ],
        links: [
          { label: "Revit MEP modelling and drawing support", href: "/en/revit-mep-outsourcing" },
          {
            label: "Prepare files for a Revit MEP quote",
            href: "/en/blog/files-for-revit-mep-quotation",
          },
          { label: "Browse English guides", href: "/en/blog" },
        ],
      },
    ],
  },
];

export function getEnglishArticle(slug: string): EnglishArticle | undefined {
  return englishArticles.find((article) => article.slug === slug);
}
