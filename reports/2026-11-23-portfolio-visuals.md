# NOD BIM portfolio visuals — 23 November 2026

## Status

Published from branch `codex/nodbim-portfolio-visuals`, based on `main` commit `2a37502ec43220b39d73cd2c3ac917a0c07a8520`. PR [#21](https://github.com/robialexz/NODBIM/pull/21) merged normally to `main` as merge commit `7d18bb17f33de367d35111cb3a99cfcc82e492e8`. The Cloudflare production build check for that merge succeeded (build `86747812-88e0-4bf4-8279-682a1b37c2f6`). The public `/portofoliu` page was then opened and its live rendered content verified.

## Baseline and decision

The current portfolio had two blurred real JPEG fragments followed in the same gallery by three synthetic SVGs. The homepage portfolio section used older visuals with less specific source labels. The route and search metadata already existed, so this change keeps the canonical `/portofoliu` and improves the proof hierarchy rather than adding a duplicate page.

Search Console and GA4 were not reread for this visual update. Preserve the dated 22 November figures in `docs/agent-targets.md`; do not attribute any ranking, indexing, traffic, engagement or conversion change to these images.

## Implementation

- Reordered `/portofoliu` around four distinct sources: a downloadable three-page HVAC PDF, two real anonymized fragments from one plan set, two new AI-generated HVAC illustrations, and three synthetic vector diagrams.
- Added the existing PDF preview, checklist download and Revit MEP pilot link near the top of the page.
- Replaced the homepage portfolio images with the new generated illustrations and a synthetic coordination diagram. Captions and nearby copy identify the images as AI-generated or synthetic, fictional and not for construction; no generated visual is represented as a Revit screenshot, client project, or validated deliverable.
- Reworked the gallery modal as a native `<dialog>`, kept arrow-key navigation within each section, returned focus to the trigger, and added opaque modal controls and visible focus indicators.
- Updated the HTML metadata, the negotiated `text/markdown` response and the sitemap date without changing the route or canonical.
- Compressed the new 1448 × 1086 WebP illustrations to 19,104 and 35,372 bytes (54,476 total). The existing sample PDF was not modified; SHA-256: `576bf41bf1873f507616d590e8716f034972deace4761e220efa870786bcc1e1`.

## Verification

- `npm run typecheck` — passed.
- `npm run lint` — passed.
- `npm run deadcode` — passed.
- `bun test` — 156 passed, 0 failed, 859 assertions.
- `npm run build` — passed.
- `git diff --check` — passed.
- Local SSR checks returned HTTP 200 for HTML and `Accept: text/markdown`, found one HTML H1 and the canonical `https://nodbim.com/portofoliu`, and confirmed PDF, CSV checklist, pilot and AI provenance links in both representations.
- Twelve local requests covering the PDF, checklist, sitemap and all nine portfolio images returned HTTP 200; the generated sitemap includes the 23 November portfolio `lastmod`.
- Production: the merged `main` commit passed the Cloudflare production build check. The public `/portofoliu` route rendered the PDF sample, its calls to action, two anonymized real fragments, two labeled AI illustrations and three labeled synthetic diagrams. The public page's English language switch currently falls back to the English Revit MEP service (`/en/revit-mep-outsourcing?langFallback=1`); there is no equivalent English portfolio route yet.
- Independent GPT-6.2 Sol Medium review accepted after changes to focus trapping/restoration, focus indicators, modal contrast and the PDF sample wording.

## Limits and next review

Exact browser measurements at 320, 375 and 390 CSS px remain unavailable; mobile visual rendering has not been claimed. The reviewer checked source-level focus behavior, but not a full browser interaction pass. Search Console and GA4 were not reread; no index request, social post, form submission or lead result was produced by this change. The live portfolio is verified, but its English equivalent is a follow-up item. Review mobile layout and consider an English portfolio route, keeping reciprocal language links and canonical/hreflang correct, when the next portfolio iteration is scheduled. Recheck GSC, GA4 and business outcomes separately after sufficient data matures; do not attribute indexation, traffic, engagement or conversion gains to this release.

## Effective team configuration

| Role | Effective configuration | Deliverable and evidence |
| --- | --- | --- |
| Orchestrator and implementation | GPT-6 Luna Work Mode; exact reasoning setting not exposed | Integrated the route, homepage visuals, Markdown, sitemap and QA; ran the project check suite and local SSR verification. |
| Art direction | GPT-6.2 Sol Medium subagent | Proposed a coherent HVAC visual family and a portfolio order that separates proof from illustration. |
| Provenance and technical audit | GPT-6.2 Sol Medium subagent | Checked disclosure, PDF claims, metadata, resource links and SEO constraints. |
| Independent final reviewer | GPT-6.2 Sol Medium subagent | Accepted the final source after correcting accessibility, contrast and copy findings. |
| Image rendering | Available image-generation tool; model identity is not exposed as GPT-6.2 Sol | Generated two fictional HVAC plan illustrations; both are explicitly labeled as AI-generated concept visuals. |
