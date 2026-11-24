# NOD BIM SEO continuation — 24 November 2026

## Baseline and service choice

The canonical GitHub `main` and production evidence in the 23 November release report point to commit `625e8fbfd08af3340d9decc6510448e81e3c7161`. At that checkpoint `/portofoliu` was live, but there was no equivalent English portfolio route; the EN selector fell back to `/en/revit-mep-outsourcing`. The present change closes that specific gap while preserving existing RO URLs.

Google data was read directly from the authenticated Search Console and GA4 interfaces on 24 November. No Supermetrics or paid connector was used.

| Source and period | Observed baseline | Interpretation |
| --- | --- | --- |
| Search Console, 3 months through 22 Nov | 26 clicks, 367 impressions, 7.1% CTR, average position 50.9 | Low visibility overall; this aggregate cannot identify a winning query. |
| Search Console, last 28 complete days through 22 Nov | 2 clicks, 3 impressions, 66.7% CTR, average position 3.3; query table had no rows | Too few impressions for a stable rank/CTR conclusion. |
| Search Console indexing | Coverage last updated 16 Nov: 2 indexed, 57 not indexed (30 crawled-not-indexed, 24 discovered-not-indexed, 3 redirected). `/en/revit-mep-outsourcing` was crawled 22 Nov and `/en/blog/revit-hvac-view-filters` crawled 23 Nov; both still reported Crawled — currently not indexed at the recorded inspection. | Eligibility, crawl, index request and confirmed indexation are separate states. This release itself does not prove indexation. |
| GA4, 27 Oct–23 Nov | 56 sessions, 52 active users, 10 engaged sessions, 31s average engagement/session, 216 events, zero key events/revenue. 48 sessions Organic Social, 6 Direct, 2 Unassigned, no Organic Search row. | GA4 has not yet demonstrated organic search acquisition or a measured commercial conversion. Some network/city rows look automated, so total users are not qualified buyers. |
| GA4 landing paths and locale | `/revit-mep` 17 sessions; EN quote-files article 8; EN service 2; homepage 4. Language rows: English 50, Romanian 2. Country rows: USA 35, Sweden 8, Ireland 5, Romania 3, Belgium 1. | A page/session distribution is not proof of decision-maker intent; geo may include network or automated traffic. |

The two competing service hypotheses were assessed against buyer fit, live page results, evidence and implementation effort:

| Hypothesis | Buyer/problem and purchase intent | Evidence/page/path | Priority and effort |
| --- | --- | --- | --- |
| Revit MEP overflow production | HVAC/MEP contractors and engineering consultancies need temporary production capacity during peaks, deadline pressure or backlog; need work matched to client templates and defined handover/responsibilities. Purchase intent is strongest when the buyer has a live project and can share model/drawing scope. | Ten relevant vendor pages reviewed (nine opened successfully). NODBIM already has `/en/revit-mep-outsourcing`, a quote route, public sample and checklist; this pass links a new English proof page into that route. | First priority. The site and evidence exist; effort was to create the missing English proof route and close its internal links. Research is directional, not keyword-volume evidence. |
| PDF/DWG redraw to DWG | Buyers need existing PDF or legacy drawings converted/redrawn into editable DWG, often to recover or update records. Purchase intent is transactional but can cover broader drafting audiences beyond the chosen HVAC/MEP target. | Nine conversion/redraw vendor pages reviewed. Existing `/pdf-in-dwg` route exists, but this comparison did not establish a unique, better-supported market opportunity than Revit overflow. | Secondary. Maintain the existing route and separate it from Revit queries; expand only with distinct search intent and a demonstrable original example. |

The competitor sample repeatedly referenced overflow/peak load, tight deadlines, backlog/revisions, client templates/title blocks and scoped deliverables. For example, [Designheed describes peak-load and schedule support](https://designheed.com/revit-mep-outsourcing/) and [ABIMC frames support around internal BIM teams and peak phases](https://abimc.com/). Those are market-language examples, not independent proof of NODBIM capacity or demand. No unsourced search-volume or difficulty estimates were used.

## Change implemented locally

- Added `/en/portfolio` as the equivalent of `/portofoliu`, using English copy and English-labelled vector diagrams.
- Added reciprocal canonical language metadata (`en`, `ro`, `x-default`), both locale-switch mappings, a visible EN navigation link, and Open Graph/Twitter metadata.
- Presented the existing evidence with its source and limits beside it: the public synthetic PDF/checklist; two anonymized fragments from a single plan set; two AI concept illustrations; and three synthetic vector examples. No drawing is presented as a live Revit export, client project, or construction document.
- Connected the EN quote-files guide and EN service page to the portfolio; the portfolio CTA links to the service/estimate form. The Markdown response is now available at `/en/portfolio` for `Accept: text/markdown`; `llms.txt` and agent instructions refer to the route.
- Added `/en/portfolio` and five previously omitted legal routes to the sitemap: 80 unique URLs total, with no fabricated `lastmod` dates.
- Kept the approved EN price at 200 EUR per sheet and left Romanian prices unchanged.

## Verification

Local validation, after the last source edit:

- `npm run typecheck` — passed.
- `npm run lint` — passed.
- `npm run deadcode` — passed.
- `bun test` — 157 passed, 0 failed, 888 assertions.
- `npm run build` — passed.
- `git diff --check` — passed.
- Local HTTP checks: `/en/portfolio`, `/portofoliu`, EN service and quote-files guide returned 200; both portfolio routes emitted canonical and reciprocal hreflang; seven portfolio image sources, the PDF preview, sample PDF, CSV checklist, sitemap and Markdown representation returned 200; sitemap contained 80 unique URLs.
- Independent design review accepted after correcting the checklist count and translating remaining diagram labels. Independent SEO review accepted the direction and requested reciprocal RO hreflang/Markdown routing, which were included. Independent technical review found no blocking issue in the final diff.
- Responsive check: embedded browser rendered at 500 CSS px with no horizontal overflow and visible heading/CTA. Requested 320/375/390 viewport override was ignored; Playwright could not start because it attempted to write its browser cache outside the approved workspace. Exact phone-width rendering is still unverified.

## Production release and live verification

PR [#23](https://github.com/robialexz/NODBIM/pull/23) was merged normally into `main` on 24 Nov as `01bad5d71e3c0c8c2bea9b35f21e86d84e73934f`; history was not rewritten. Cloudflare's `Workers Builds: nodbim-com` check completed successfully for that merge. Build ID: `713141a8-1ccb-4b53-b57e-42a2d9afba70`. Served Worker version: `96901476-f077-4cce-ad0b-de6d53f18aba`.

Production checks after the successful build:

- HTTP 200: `/en/portfolio`, `/portofoliu`, `/en/revit-mep-outsourcing`, `/en/blog/files-for-revit-mep-quotation`, `/robots.txt` and `/sitemap.xml`.
- The EN page has one H1, canonical `https://nodbim.com/en/portfolio`, reciprocal `en`/`ro`/`x-default` hreflang and no `noindex`. The RO route points back to the EN equivalent.
- The published sitemap contains 80 unique URLs including `/en/portfolio` and the five legal routes.
- The EN portfolio returns HTTP 200 with `text/markdown; charset=utf-8` when requested with `Accept: text/markdown`; the response includes the evidence limits, approved 200 EUR starting price and estimate URL.
- All seven image assets, PDF preview, sample PDF and CSV checklist return successfully from production.
- Browser review confirmed the English portfolio content, reciprocal language switch, the updated English quote-files guide links to portfolio/service/form, and the English quote form renders at `#estimate`. The form was not submitted.

No repeat indexing request, social publication, direct outreach, AI-answer citation, referral session, qualified lead, offer or payment was generated by this implementation. Production availability does not imply Google recrawl or confirmed indexation.

## Distribution status

No social post was published as part of this code release. The seven-day distribution step remains open: prepare platform-specific copy, use separate LinkedIn/Facebook UTMs, publish through official NOD BIM pages and record public permalinks and referral results. Keep social reach, site sessions and qualified enquiries separate.

## Editorial opportunities and follow-up

- BIM Corner was pitched on 21 Nov; no duplicate or follow-up before 30 Nov.
- [CIBSE Journal](https://www.cibsejournal.com/) accepts technical pitches with a 200–400-word synopsis and a planned 1,500–2,000-word article. Candidate: a reproducible review checklist for a synthetic HVAC sheet, with the evidence shown next to every conclusion.
- [HPAC Engineering](https://www.hpac.com/) accepts non-promotional technical pieces of 600–1,200 words, first-run. Candidate: a bounded technical explanation of sheet/model handover checks, with an original synthetic demo and explicit assumptions.
- AUGI directory eligibility is not confirmed: the directory endpoint returned 403 during direct inspection. Verify account and listing eligibility before submitting anything.
- No new editor was contacted, no graphics/video was commissioned for an editor, and no claim about publisher interest is made.
- The repeatable AI visibility baseline (8–12 exact purchase questions across ChatGPT, Perplexity and Google AI) is not complete. Perplexity/Google AI were not accessible as directly comparable surfaces in this work. Do not record an absent sample as zero citations.

## Team and effective configuration

| Assignment | Effective agent/model | Deliverable and acceptance evidence |
| --- | --- | --- |
| Orchestration and implementation | GPT-6 Luna Work Mode; reasoning setting not exposed | Integrated the chosen proof route, local verification, report and production handoff. |
| Buyer-demand research | Separate GPT-6 Luna Max agent | Compared 10 Revit MEP and 9 PDF/DWG vendor pages; reported buyer phrases, page gaps, limits and priority. Accepted as directional only. |
| Technical measurement audit | Separate GPT-6 Luna Max agent | Checked routes, metadata, crawlability, sitemap, Markdown, evidence provenance and project tests. |
| Editorial-source research | Separate GPT-6 Luna Max agent | Returned candidate publication/listing opportunities, source requirements and existing BIM Corner follow-up block; no outreach. |
| Design and SEO strategy review | Separate GPT-6.2 Sol Medium agents | Reviewed the presentation/provenance and whether the route fills a buyer-journey gap without making unsupported ranking claims. |
| Final technical verification | Separate GPT-6 Luna Max agent, different from implementation author | Independently reviewed the integrated diff; accepted without blocking defects. |

The image renderer does not expose its model identity, so no claim is made that the existing AI illustrations were rendered by GPT-6.2 Sol. This implementation adds English SVG diagrams; the reviewer verified the English labels and source-level mobile classes.

## Next checkpoint

Publish through the established `main` → Cloudflare path; then verify the production commit, the EN/RO portfolio pair, language switch, article → service → estimate path, sitemap and Markdown response. Record the served commit/deployment ID if available. Do not request indexing solely because of publication. Review crawl/index separately in Search Console, and read GA4 after a complete window. Recheck the same AI question set only when the interfaces are available. For the 7-day review, record baseline and final sample size; keep traffic, citation, enquiry, offer and first payment as separate results.
