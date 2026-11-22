# NODBIM SEO and AI visibility implementation — 22 November 2026

## Executive status

- Priority selected: English Revit MEP production support for HVAC/MEP contractors and engineering consultancies with short workload peaks.
- First implementation: consent-gated measurement of article-to-service navigation, estimate-form starts and confirmed submissions. This makes the existing commercial path measurable without inventing demand or duplicating already adequate service and guide content.
- Code checks passed after the final source edits: `npm run typecheck`, `npm run lint`, `npm run deadcode`, and `bun test` (156 passed, 0 failed, 849 assertions).
- [PR #15](https://github.com/robialexz/NODBIM/pull/15) was merged to canonical GitHub `robialexz/NODBIM` main without rewriting history. Code commit: `d2940f6770b9846e73dd332f0d72d867829fd566`; merge commit: `db40cae44ae96f1d61f6fac2fd669ebdbd81a2ca`. Cloudflare production showed Worker version `4300d491` (build `0f11bb4f-157e-4dd9-a273-5cfa5ab2273a`), Ready at 100% traffic, sourced from that merge. The active local checkout contains unrelated uncommitted work and was not used or modified.
- Google baseline was read directly from the authenticated account, without Supermetrics or a paid connector. No new outreach, form submission or paid listing was made. Existing official LinkedIn and Facebook company-page posts were verified with their permalinks and distinct UTM content tags; no duplicate post was published.

## Team and acceptance

Orchestrator: GPT-6.1 Sol in Work Mode; reasoning level was not exposed for independent verification. Three independent assignments used GPT-6 Luna with max reasoning:

| Owner | Bounded objective | Acceptance and evidence |
| --- | --- | --- |
| Buyer-demand researcher | Compare Revit MEP outsourcing and PDF/DWG redrawing using buyer terms and live pages | Accepted: inspected 10 Revit MEP pages and 9 CAD/PDF pages. Reported observed language, page types and evidence; no unsupported search volumes or difficulty estimates. |
| Technical QA researcher | Read-only inspection of public service routes, language paths and crawl signals | Accepted initial live-route review: EN Revit MEP starts at €200 per complete MEP drawing sheet. Found EN AutoCAD redrawing UI/estimator/WhatsApp used “per redrawn plan,” inconsistent with the approved per-drawing-sheet unit. Orchestrator corrected all EN redrawing display, quantity, message and structured data strings. Independent code/privacy review accepted: consent gating, path-only event payloads and pricing units passed. The reviewer raised two false alarms that were resolved against the response contract and EN rate calculation; no confirmed release blockers remain. Native article anchors may navigate before analytics dispatch is confirmed, so click measurement is best-effort pending post-release receipt. |
| Editorial-source researcher | Verify source article claims and identify relevant publisher/listing opportunities | Accepted: reviewed the supplied article copy and current public contributor/listing requirements; no contact or submission performed. |

The orchestrator owns integration, tests, release and post-deploy verification. There is no continuous agent activity or synthetic task status.

## Evidence-led service choice

The two hypotheses were:

| Hypothesis | Buyer and problem | Purchase-intent signals observed | NODBIM proof and route | Effort / decision |
| --- | --- | --- | --- | --- |
| Revit MEP overflow support | HVAC/MEP contractors, consultancies and engineering offices facing workload peaks, urgent production or short-term capacity gaps | Competitor pages repeatedly discuss overflow work, existing Revit models, client templates/BIM standards, delivery handover, pilot scope and responsibility boundaries | Existing `/en/revit-mep-outsourcing` page includes the €200-per-complete-sheet starting point, estimate flow, sample HVAC drawing, issue checklist, pilot, scope, standards and responsibility boundaries. Related guides answer which files to send, handover and pricing. | Strongest fit with the current sample and page. Improve through measured article-to-service flow before expanding content. |
| PDF/DWG redrawing | Contractors and design offices needing editable, scaled DWGs from PDFs or redlines | Pages focus on vector versus scanned input, layers, scale checks, DWG versions, turnaround and quote inputs. Many inspected entry prices cover simple conversion or residential scopes and are not equivalent to MEP documentation at NODBIM’s approved €200 floor. | Existing EN AutoCAD service route, demonstration drawing and FAQs; RO `/pdf-in-dwg` currently explains scan/vector and scale concerns in more detail. QA found and corrected its redrawing unit from “plan” to the approved “drawing sheet” across the estimate card, quantity labels, WhatsApp preview and Offer schema. | Keep as a secondary hypothesis. Expand only if qualified EN demand or paid outcomes show distinct intent and better fit. |

This was a directional page sample, not a measurement of query volume, buyer counts or conversions. No search volume or keyword-difficulty figure is claimed. Observed competitor examples: [United-BIM](https://www.united-bim.com/mep-bim-outsourcing-services/), [Artificial Modelling](https://www.artificialmodelling.com/services/mep-bim-outsourcing-uk/), [SYMATEQ](https://www.symateq.com/support/united-kingdom), [Suncon BIM](https://bim.sunconengineers.com/bim-services-in-usa), [MEP Global Engineering](https://www.mepglobalengg.com/bim-outsourcing-services.php), [Vortex Estimating](https://vortexestimating.com/services/pdf-to-cad-conversion/), [Aries CAD](https://ariescad.co.uk/pdf-to-dwg-conversion), [Nextron Estimating](https://nextronestimating.com/architecture-services/pdf-to-cad-conversion/), [CAD Drafting Services UK](https://caddraftingservices.co.uk/services/cad-conversion-services/) and [PDF2CAD](https://pdf2cad.org/pdf-to-dwg-conversion-service.html).

### Buyer language and questions to retain

- Revit MEP: “workload overflow,” “extra Revit production capacity,” existing model/template, urgent support, handover, pilot scope and engineering-responsibility boundary.
- PDF/DWG: scanned versus vector PDFs, editable DWG, layers, scale verification, required software version and what files support a quote.
- NODBIM content should answer these with the existing sample, checklist and supported scope. The three English quote/handover/pricing guides already link to the service; do not create duplicate pages for the same question cluster.

## Dated Google and analytics baseline

### Search Console

Direct GSC read on 22 Nov 2026:

| Report | Period and freshness | Observed data | Interpretation |
| --- | --- | --- | --- |
| Search performance | 24 Oct–20 Nov; UI showed latest update about 4.5 hours before capture | 2 clicks, 3 impressions, 66.7% CTR, average position 3.3; no query rows in this 28-day view | Very small sample; not enough to infer durable ranking or demand. |
| Search performance | 21 Aug–20 Nov | 26 clicks, 371 impressions, 7% CTR, average position 50.8; queries are mostly Romanian generic installation/project terms with some “clash detection” | Current organic search presence is mostly Romanian and low-volume; not evidence of English commercial demand. |
| Generative AI in Search (beta) | 24 Oct–20 Nov | 0 impressions | Google AI surfaces only; separate from ChatGPT/Perplexity. |
| Generative AI in Search (beta) | 21 Aug–20 Nov | 20 impressions across pages | Does not establish that a specific NODBIM URL was cited or recommended. |
| Page indexing | UI last updated 16 Nov | 2 indexed; 57 not indexed (30 crawled—currently not indexed, 24 discovered—currently not indexed, 3 redirect) | Stale report, not current coverage for 22 Nov. |
| Sitemap | Last read 17 Nov | `https://nodbim.com/sitemap.xml`, success, 65 discovered URLs | Production sitemap currently has 74 URLs per 22 Nov public records; stale GSC discovery count requires a later refresh. |
| URL inspection | `https://nodbim.com/en/revit-mep-outsourcing` | Not on Google; “Crawled — currently not indexed”; successful Googlebot smartphone fetch, crawl/index allowed, self-declared canonical; latest crawl reported 22 Nov 20:50 | Eligibility and crawl succeeded; indexation is not confirmed. No duplicate index request was sent immediately after the fresh crawl. |

### GA4

Direct GA4 property report read on 22 Nov 2026; period **25 Oct–21 Nov** (28 complete days):

- 42 sessions, 41 active users, 39 new users, 6 engaged sessions, 14.29% engagement rate, 3-second average engagement, 159 events, 0 key events and 0 revenue.
- Sessions by channel: Organic Social 39 (92.86%), Direct 2, Unassigned 1. No Organic Search or Paid row was present in this report.
- Landing pages: `/revit-mep` 17 sessions; `/blog/export-revit-dwg-standard-birou` 6; `/blog/spatii-mep-revit-incaperi-arhitectura` 6; `/` 4; `/blog/revizii-revit-numere-planse` 4; `/blog/revit-2027-3-autodesk-assistant-dynamo` 2; `/en/blog/hvac-service-access-clearances` 2; `(not set)` 1. No EN Revit service landing row.
- Active users by country: US 29, Sweden 6, Ireland 4, Romania 2. Country is not page language and cannot qualify a visitor as a buyer.
- A raw country-by-date export suggests 7/28 days at or above 3 active users and 5/28 at or above 4 when summing country rows. This is preliminary because a cross-border user can appear in multiple country rows on one date, and internal QA/bot exclusions were not reconciled. Do not treat it as an audited target count.
- Zero tracked key events or reported revenue is not evidence that zero leads or payments occurred; the operational lead and payment sources were not read for this report.

## Implementation in the live release

Files changed on the isolated release snapshot:

- `src/lib/analytics.ts`: `article_internal_link_click` event; internal-only path builder rejects external destinations and strips query strings/fragments. Static link label and section heading are included for diagnosis. Existing `track` consent gate applies.
- `src/components/site/ArticleSections.tsx`: records contextual same-origin links from both RO and EN article sections.
- `src/routes/en.blog.$slug.tsx`: records the article’s primary EN estimate CTA to `/en/revit-mep-outsourcing#estimate`.
- `src/components/site/QuoteForm.tsx`: `quote_start`, quote submission and confirmed success events include route `source_path`. User-entered name, phone, email, company and free-text brief are not included.
- `src/lib/pricing.ts`: aligns EN AutoCAD redrawing text and all rate units with the approved €200-per-drawing-sheet policy.
- `tests/analytics.test.ts` and `tests/pricing.test.ts`: verify consent/origin/privacy behavior and EN redrawing unit/price consistency.

In GA4 Admin, three event-scoped custom definitions were saved and verified on 22 Nov: `Source path` (`source_path`), `Target path` (`target_path`) and `Link label` (`link_label`). There were no prior custom definitions. No custom dimension exposes visitor-entered form text.

The release is live. A post-release Realtime snapshot showed only standard events (page_view 5, user_engagement 4, first_visit 1 and session_start 1); neither new `article_internal_link_click` nor `quote_start` appeared in the displayed list. The snapshot may include QA visits and is too small to establish delivery or failure. No controlled consented click or form submission was made, and no lead success is claimed. Check after a real consented interaction or a DebugView test that can be excluded from marketing reports. Form success still requires an accepted request, saved record and notification; a button click is not sufficient.

## Editorial and distribution backlog

The supplied [Borja Fat post](https://x.com/borjafat/status/2122336732079161572) returned 403 directly; its [full copy](https://teapawt.org/borjafat/article/2122336732079161572) says “Nov 16” without a year and gives no prompt sample, platforms, period, mention definition, raw data or validation. Its tactic tiers are hypotheses only. Google’s [AI features guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) says normal SEO eligibility and original useful content remain central; no special `llms.txt`, chunking or AI schema is required. OpenAI’s [crawler documentation](https://developers.openai.com/api/docs/bots) distinguishes OAI-SearchBot from GPTBot and says access gives eligibility, not placement.

| Opportunity | Status / evidence | Acceptance before action | Owner / next checkpoint |
| --- | --- | --- | --- |
| BIM Corner | A pitch was already sent from the official NODBIM account on 21 Nov; no acceptance, reply or public link confirmed here. | Check prior thread before any follow-up; record reply and public URL separately from referral traffic. | Editorial owner; use 30 Nov checkpoint only if still appropriate. |
| CIBSE Journal | Current technical contributor guidance found; building-services reader fit. | Prepare a technically useful synopsis and supporting reproducible data; keep commercial pitch secondary. | Editorial owner; no outreach made. |
| AUGI Resource Directory | Autodesk/Revit directory and free Basic membership are visible; exact current listing eligibility/fields and link handling still need verification. | Confirm category, eligibility, listing rules and link treatment before creating a profile. | Growth owner; no submission made. |
| HPAC Engineering | Current mechanical-services contributor guidance found. | Query first with non-promotional technical idea and a reproducible result. | Editorial owner; no outreach made. |
| Synthetic Revit fixture | Proposed rights-clean host-and-linked-MEP view/export test; no client or employer data. | Agree a small test matrix and retain expected/observed results and Autodesk references before production. | Technical owner; not yet created. |
| LinkedIn/Facebook | Existing public NODBIM LinkedIn and NOD BIM Facebook posts about the HVAC view-filter pilot sheet were verified; no duplicate was published. LinkedIn share: [7530335064472223745](https://www.linkedin.com/feed/update/urn:li:share:7530335064472223745/?actorCompanyId=145297818), EN target: [guide](https://nodbim.com/en/blog/revit-hvac-view-filters?utm_source=linkedin&utm_medium=organic_social&utm_campaign=revit_hvac_filters_20261122&utm_content=pilot_sheet_en). Facebook post ID 122120954127514949, permalink token `pfbid02sTHXFXP1YJpeBf6yLttkgMbvs4NPJcukh9XezGd9UF1c4xTptxWAmZLNDZo9UxuGl`, RO target: [guide](https://nodbim.com/blog/culori-sisteme-hvac-filtre-revit-mep?utm_source=facebook&utm_medium=organic_social&utm_campaign=revit_hvac_filters_20261122&utm_content=pilot_sheet_ro); both use campaign `revit_hvac_filters_20261122`. Facebook showed 0 views/engagement/link clicks in the selected date-range view at capture. | Keep the distinct EN/RO UTMs and review referral sessions after processing; do not duplicate the posts. |

Other verified prospects: Consulting-Specifying Engineer (rights agreement needs review before any commitment), BIMsmith (guest instructions date to 2018; reconfirm), PBC Today (paid profile price is “enquire”), and Clutch (free tier lacks a site link; paid tier not justified solely for a backlink). No paid listing or broad rights agreement was accepted. No outreach was sent during this session, and TEMA Energy and known affiliates remain excluded.

## 8–12 prompt AI visibility baseline

The repeatable query set is prepared below. The actual first run in ChatGPT, Perplexity and Google AI Overviews/Mode is **not yet recorded**; GSC AI impressions are not a substitute. Record the exact response surface, language, market, date, brand mentions, cited URLs and whether each is a mention, recommendation or NODBIM URL citation. If an interface is unavailable, record that instead of filling the gap with an assumption.

1. Who can take on overflow Revit MEP modelling and drawing production for an HVAC contractor?
2. What Revit MEP outsourcing support can an engineering consultancy use during a workload peak?
3. What files should an MEP contractor send to get a Revit MEP production quote?
4. How should a Revit MEP model be prepared before an external production team takes it over?
5. How can a contractor check a Revit HVAC drawing package before issue?
6. What does a Revit MEP outsourcing pilot usually include?
7. How much does outsourced Revit MEP drawing production cost per sheet?
8. Who can model Revit MEP drawings in a client’s existing template and standards?
9. What is needed to convert HVAC PDF markups into an editable, scaled DWG?
10. What is the difference between vector-PDF conversion and redrawing an HVAC plan into DWG?

## Release and next review

| Item | Current status | Owner / next step |
| --- | --- | --- |
| Source comparison | Canonical GitHub main was `c2424174ff2276184b9f61576d7f6a33e478935b` when implementation began; PR #15 merged to main as `db40cae44ae96f1d61f6fac2fd669ebdbd81a2ca`. The active local checkout had unrelated uncommitted changes and was not modified. | PR #15 preserves existing history; no force push or rebase was used. |
| Required checks | Passed after final source edits: typecheck, lint, deadcode and 156 tests / 849 assertions. | No source changed after those checks; the follow-up PR changes documentation only. |
| Technical public QA | EN Revit MEP pricing matched policy. EN AutoCAD redrawing unit divergence found and corrected across visible and structured pricing. Independent code/privacy review passed with no confirmed blockers; native anchor dispatch is a measurement caveat to verify after release. | Preserve the caveat and verify actual event receipt. |
| Publication | [PR #15](https://github.com/robialexz/NODBIM/pull/15) merged normally. Code commit `d2940f6770b9846e73dd332f0d72d867829fd566`; main merge commit `db40cae44ae96f1d61f6fac2fd669ebdbd81a2ca`. Cloudflare Worker version `4300d491`, build `0f11bb4f-157e-4dd9-a273-5cfa5ab2273a`, reported Ready at 100% traffic from the merge commit. | No source changes since the successful local checks; keep this release as the baseline for post-deploy observation. |
| Production route and mobile | EN Revit service and visible quote form were verified on production. The HVAC-filter EN article CTA points to `/en/revit-mep-outsourcing#estimate`; the service page has the quote anchor and RO language equivalent. EN Revit was checked at 320 × 812 CSS px; reviewed hero and estimator wrap without horizontal overflow. EN AutoCAD page, calculator, quantity label and WhatsApp preview show `From 200 EUR per drawing sheet`. No form was submitted, so no new request, notification or success event was verified. | Preserve this route. If a later form test is needed, mark and exclude it from marketing data. |
| Google recrawl/indexing | Latest direct GSC URL inspection in this run remained “Crawled — currently not indexed” after the 22 Nov smartphone crawl; the post-deploy index verdict has not been refreshed. | Check sitemap freshness 23 Nov and review the URL verdict around 28 Nov. A successful crawl is not indexation; do not repeat the request immediately after the fresh crawl. |
| Measurement review | GA4 custom dimensions `source_path`, `target_path`, `link_label` are saved. The post-release Realtime list did not show `article_internal_link_click` or `quote_start`; this was an uncontrolled short snapshot, not a delivery test. | Check after a real consented interaction or an excludable DebugView test; do not submit a false lead. Reassess 27 Nov with small-sample caveats. |
| 7-day review | First release and official distribution were verified on 22 Nov; current GA4 Realtime snapshot is too small to evaluate event delivery or reach. | On 29 Nov, compare the first complete week of source, referral, organic and path data; retain sample-size and consent caveats. |
| 30-day review | Due 22 Dec for the SEO/AI visibility experiment; distinct from the paying-client cohort that began 20 Nov. | Repeat the same AI prompt set and compare organic, referral, consented path events, qualified requests and first confirmed payments separately. Keep the client-cohort checkpoint on 20 Dec. |

