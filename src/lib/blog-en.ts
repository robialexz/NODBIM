import type { Article } from "./blog";
import { estimateLabel, packagePrice, rateLabelEn } from "./pricing";

export type EnglishArticle = Article & { sourceSlug: string };

export const englishArticles: EnglishArticle[] = [
  {
    slug: "hvac-service-access-clearances",
    sourceSlug: "clash-detection-ce-este",
    title: "A clash-free Revit HVAC model can still be impossible to service",
    metaTitle: "HVAC service access in Revit MEP",
    description:
      "How to brief an HVAC coordination review for filter removal, valve access and equipment replacement. Includes inputs and deliverables to request.",
    date: "2026-11-20",
    readingTime: 5,
    tags: ["Revit MEP", "HVAC", "Coordination"],
    sections: [
      {
        paragraphs: [
          "A duct can clear the structure and still leave too little room to pull an air handling unit filter out. A clean hard-clash report only describes the geometry and rules tested. Service access deserves its own review before the drawing package is issued.",
        ],
      },
      {
        heading: "Check the task the technician has to perform",
        table: {
          head: ["Service task", "What to show in the review"],
          rows: [
            [
              "Pull out a filter",
              "Mark the service face and removal direction in plan. Use a section to show the full extraction space and the ceiling access opening.",
            ],
            [
              "Operate or replace a valve actuator",
              "Check access from the hatch, room for hands and tools, and the path needed to remove the actuator.",
            ],
            [
              "Remove the largest replaceable part",
              "Trace the component through doors, turns and openings. Record any approved lifting or disassembly assumptions.",
            ],
          ],
        },
        paragraphs: [
          "Use the selected manufacturer's documents and the project team's agreed criteria. If the equipment is provisional, flag the clearance for confirmation before the team closes the issue.",
        ],
      },
      {
        heading: "What to send for a review",
        list: [
          "The current approved HVAC design, relevant architectural and structural backgrounds, and the Revit model or linked models for the area.",
          "Equipment schedules and submittals showing the service side, access criteria and dimensions supplied by the manufacturer.",
          "Ceiling hatches, doors, removal routes and site constraints, plus the outputs you need for review.",
        ],
        links: [
          {
            label: "Files to send for a Revit MEP quotation",
            href: "/en/blog/files-for-revit-mep-quotation",
          },
        ],
      },
      {
        heading: "What to ask for in the drawing package",
        paragraphs: [
          "Start with one plant room or ceiling zone. Ask for tagged equipment, plans and sections at flagged locations, and an issue list stating whether each access path is clear, obstructed or awaiting information. Include the source of the access criteria and name who will resolve open decisions.",
          "Revit Interference Check finds intersections between model elements. Navisworks Manage can also run a clearance test using a specified distance. Both workflows depend on the selected geometry and criteria. The project team approves the maintenance requirements and engineering decisions.",
        ],
        links: [
          {
            label: "Autodesk Revit Interference Check",
            href: "https://help.autodesk.com/cloudhelp/2025/ENU/Revit-Collaborate/files/GUID-890A9FE0-EFF4-4CFB-9E81-B0DE1A132BEC.htm",
          },
          {
            label: "Autodesk Navisworks clash test options",
            href: "https://help.autodesk.com/cloudhelp/2023/ENU/Navisworks-Clash-Detective/files/GUID-B13377D4-8AFA-4E95-8435-C6DC4DF26AF4.htm",
          },
          {
            label: "See the HVAC drawing sample and request a quote for one area",
            href: "/en/revit-mep-outsourcing",
          },
        ],
      },
    ],
  },
  {
    slug: "revit-hvac-view-filters",
    sourceSlug: "culori-sisteme-hvac-filtre-revit-mep",
    title: "Revit MEP view filters for HVAC systems",
    metaTitle: "Revit HVAC view filters and system colours",
    description:
      "Specify reliable HVAC colour rules in Revit and review a pilot drawing before issuing a full set of MEP sheets.",
    date: "2026-11-20",
    updatedAt: "2026-11-22",
    readingTime: 4,
    tags: ["Revit MEP", "HVAC", "Drawing quality"],
    sections: [
      {
        paragraphs: [
          "A model can look consistent on screen while the issued PDF misidentifies a duct system. When you brief a Revit drawing package, define how each colour is assigned and check what the reader sees on the exported sheet.",
        ],
      },
      {
        heading: "Specify the rule behind each colour",
        table: {
          head: ["What to agree", "Example"],
          rows: [
            [
              "Category",
              "Ducts, duct fittings and flexible ducts that need the same system graphics.",
            ],
            [
              "Parameter and value",
              "Use the system parameter available for the selected categories and the exact agreed value for supply or extract air.",
            ],
            [
              "Override and output",
              "Agree the line colour, pattern or weight in the view template and check that the issued drawing legend matches.",
            ],
            [
              "Exceptions",
              "Decide how unmatched elements, linked models and existing systems should appear in the deliverable.",
            ],
          ],
        },
        paragraphs: [
          "In a rule-based filter, the categories and parameter values drive the override. Verify the parameter on actual model elements before applying the rule to multiple views. If several filters match, review their order and confirm the visible result in a pilot view.",
        ],
      },
      {
        heading: "Check linked-model display settings",
        paragraphs: [
          "For an RVT link, check Display Settings on the Revit Links tab. The selected mode determines whether filters and graphic overrides from the host view also control linked elements. A colour difference in a linked element does not by itself show that its System Type or System Name value is wrong; check the link display mode before changing the filter rule.",
          "Before changing a parameter rule, inspect the Revit Links setting for each relevant model. In one pilot view, check a duct, a fitting and an unmatched element in the host and included links, then export the sheet at issue scale and compare it with the approved legend.",
        ],
        table: {
          head: [
            "Revit Links setting",
            "How filtering is applied",
            "What to verify in the pilot view",
          ],
          rows: [
            [
              "By Host View",
              "The host view's filters and visibility/graphics settings apply to elements in the host model, the linked model and nested models.",
              "Check each link and include linked and nested elements when comparing the result with the legend.",
            ],
            [
              "By Linked View",
              "Host-view filters apply to the host model only; the linked model and nested models display according to the selected linked view.",
              "Confirm which linked view is selected and check how its elements appear in the host sheet.",
            ],
            [
              "Custom",
              "You can choose whether a linked model uses filters from the host view or linked view; nested links have separate display settings.",
              "Record the filter source and check each relevant nested link separately.",
            ],
          ],
        },
        links: [
          {
            label: "Autodesk Revit: display a linked model by host view",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-A39798E1-7567-40EC-9D52-77CDF1B0EA43.htm",
          },
          {
            label: "Autodesk Revit: view filters for linked models",
            href: "https://help.autodesk.com/cloudhelp/2023/ENU/Revit-Collaborate/files/GUID-8D67E40C-633D-4DD6-B854-6D045EE2616E.htm",
          },
        ],
      },
      {
        heading: "Approve one sheet before rolling out the template",
        list: [
          "Send the RVT model, any client template, the intended output format and a marked-up example or colour legend.",
          "Check a straight duct, fitting and flexible connection for each relevant system. Include an unmatched element so the reviewer can see the agreed exception style.",
          "Export the sheet at the issue scale. Check the legend and print legibility, including a greyscale output if the project requires one.",
          "Record the approved template and any exceptions in the handover. Verify system assignments and connectivity separately from the view graphics.",
        ],
        links: [
          {
            label: "Autodesk Revit view filters",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-DocumentPresent/files/GUID-145815E2-5699-40FE-A358-FFC739DB7C46.htm",
          },
          {
            label: "Revit MEP model handover checklist",
            href: "/en/blog/revit-mep-model-handover-checklist",
          },
          {
            label: "Request a Revit MEP drawing estimate",
            href: "/en/revit-mep-outsourcing#estimate",
          },
        ],
      },
    ],
  },
  {
    slug: "mep-drawing-pricing",
    sourceSlug: "cat-costa-o-plansa-de-instalatii",
    title: "How much does a complete MEP drawing sheet cost?",
    metaTitle: "MEP drawing sheet pricing",
    description: `${rateLabelEn("instalatii")}. See how file condition, scope and handover requirements shape a written quote.`,
    date: "2026-11-17",
    readingTime: 5,
    tags: ["Pricing", "Revit MEP", "Project scope"],
    sections: [
      {
        paragraphs: [
          "A drawing count alone does not define the work. A useful quote states the discipline, what each sheet must show, the required level of detail, the files to be delivered and the revision rounds included.",
          `NOD BIM lists ${rateLabelEn("instalatii")}. At the same starting rate, ${packagePrice.sheets} complete sheets total ${estimateLabel("instalatii", packagePrice.sheets, "en")}. These amounts are minimums, not fixed quotes for every package.`,
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
          {
            label: "How scope and revisions affect drawing prices",
            href: "/en/blog/mep-drawing-pricing",
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
          {
            label: "How scope and revisions affect drawing prices",
            href: "/en/blog/mep-drawing-pricing",
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
