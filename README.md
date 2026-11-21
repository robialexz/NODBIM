# NODBIM

Revit MEP modelling and AutoCAD drawing production for engineering teams, using approved design inputs and agreed project standards.

[Revit MEP services and project enquiries](https://nodbim.com/en/revit-mep-outsourcing?utm_source=github&utm_medium=referral&utm_campaign=mep_resources&utm_content=readme) · [Servicii în română](https://nodbim.com/revit-mep?utm_source=github&utm_medium=referral&utm_campaign=mep_resources&utm_content=readme_ro)

## Technical resources

| Resource | What it contains |
| --- | --- |
| [Sheet issue checklist — English CSV](https://nodbim.com/resurse/revit-mep-sheet-issue-checklist-en.csv) | Editable project context, drawing issue checks, review status and owner/due-date fields. |
| [Checklist emitere planșe — CSV în română](https://nodbim.com/resurse/revit-mep-sheet-issue-checklist-ro.csv) | Aceeași structură de verificare, în limba română. |
| [Illustrative HVAC handover sample — PDF](https://nodbim.com/resurse/nodbim-hvac-plant-room-sample.pdf) | An illustrative deliverable for discussing the scope of an HVAC drawing package. |
| [Revit MEP model handover guide](https://nodbim.com/en/blog/revit-mep-model-handover-checklist) | Questions to settle before an RVT model and its drawings are handed over. |

Download the CSV in your preferred language and open it as UTF-8 in a spreadsheet application. Record the package, discipline and issue purpose. Use `NOT CHECKED`, `PASS`, `HOLD` or `N/A` in the Status column; assign an owner and due date to every HOLD. Keep the completed copy with the issue record.

The checklist supports drawing issue review. Apply the approved design and project requirements; it does not certify design or code compliance. The sample is illustrative and is not a construction design.

For a scoped production enquiry, prepare the available RVT/DWG/PDF files, drawing list, template, Revit version and target date. [Send a project brief](https://nodbim.com/en/revit-mep-outsourcing?utm_source=github&utm_medium=referral&utm_campaign=mep_resources&utm_content=brief#estimate).

## Website development

This repository contains the NODBIM website. Install the locked dependencies with Bun, then start the development server:

```sh
bun install --frozen-lockfile
npm run dev
```

Project checks:

```sh
npm run typecheck
npm run lint
npm run deadcode
bun test
npm run build
```

Public site releases use GitHub `main` → Cloudflare `nodbim-com`. This project was built with [Lovable](https://lovable.dev); published Git history must be preserved.

The [original site design brief](docs/archive/initial-site-design-brief.md) is preserved in full for reference. Current agent instructions are in [AGENTS.md](AGENTS.md).
