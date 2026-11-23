# NODBIM homepage, content and SEO update — 23 November 2026

## Status

The proof-first homepage and six related Romanian/English guide updates are live through canonical GitHub `main` to the public Cloudflare-backed site. PR [#17](https://github.com/robialexz/NODBIM/pull/17) merged normally. Source commit: `1326e6e842f656a734d435e9da5a774a51c9e26c`. Merge commit: `a0d68bd291d09e5d72e6e5cd636b9eba006191fb`. Git history was preserved.

The code was implemented on a clean isolated clone based on canonical `main` (`9179f89c07ccfcd6b60280f6653e964a5526c506`). The user's dirty local checkout was not modified. No new organic traffic, engagement, rankings, confirmed indexation, AI citation, enquiries or orders are claimed.

## Baseline

The last direct Google Analytics and Search Console reading available is the dated 22 November checkpoint in [agent-targets.md](../docs/agent-targets.md) and [the prior report](2026-11-22-seo-ai-implementation.md). That snapshot recorded very few Search Console impressions and clicks, and GA4 sessions were predominantly Organic Social. The English Revit MEP service URL had been crawled but was not indexed at that inspection. Neither Google source was reread on 23 November, so those numbers are a carried-forward baseline, not today's measurement.

No weekly index request was sent. This release changes useful page content and links; it does not prove Google has crawled or indexed the changes. Index eligibility, crawl, index request and confirmed indexation remain separate states.

## Decision

Keep English Revit MEP production support first for HVAC/MEP contractors and design offices with workload peaks. The initial content set answers three consecutive buyer questions using existing pages and proof:

1. What does a drawing sheet cost and what affects the written scope?
2. What files and project information are useful for a quote?
3. What should the receiving team inspect when taking over a Revit model?

These are buyer-intent topics from the prior market research and the current service path, not estimates of search volume. The approved international starting point remains 200 EUR per complete drawing sheet. No price cap or unsupported delivery guarantee was added.

## Implementation

- Homepage: retained the existing 3D hero, made its second action jump to the HVAC proof, added a proof section immediately below the hero, and put the Revit MEP service path before the secondary AutoCAD redrawing path.
- Homepage enquiry copy: says a short brief is enough to start, the form does not accept uploads, and files can be shared through the agreed channel after the initial discussion.
- Romanian guides: updated the existing price, quote-file and Revit handover pages. Removed unsupported claims about market prevalence, time savings, price multipliers and a universal file-size threshold. Clarified vector PDF versus scan, scope, delivery formats and engineering responsibility.
- English guides: added the same proof path, file-sharing explanation and scope boundaries in English, with the EN service/estimate links.
- Article visuals: reused the public synthetic HVAC PDF preview and created localized handover-checklist graphics. SVG source files and PNG derivatives are included. Article images have localized alt text/captions, explicit dimensions, full-size links where useful, Open Graph/Twitter image metadata and `Article.image` structured data.
- Machine-readable routes: refreshed the affected sitemap `lastmod` values, Markdown guide outputs, public sample/checklist links and attachment-free form descriptions in `agent-instructions.txt` and `agent.json`.

All new diagrams are original synthetic explanatory material. The HVAC sample is labelled as a demonstration, contains no client data and is not for construction. No unapproved screenshot, project file, or employer/client information was published.

## SEO and commercial path checks

The homepage title now names Revit MEP, engineering offices and HVAC contractors. The description describes overflow support, formats and the approved starting rate. The article pages include crawlable contextual links toward the sample, checklist, service and estimate destination. The original question clusters remain on existing stable URLs; no duplicate guide pages or redirects were created.

Production HTTP checks on 23 November returned 200 for `/`, `/revit-mep`, `/en/revit-mep-outsourcing`, the three updated Romanian guide routes, their three English counterparts, `/sitemap.xml`, `/agent-instructions.txt`, `/agent.json`, the public PDF preview derivatives, both checklist PNGs and the English CSV checklist. Article HTML included the matching image in social metadata and Article schema; the sitemap included the 23 November update date. Local Markdown negotiation was also checked for the homepage and updated guides.

The local Wrangler deployment-list command could not authenticate because this session has no `CLOUDFLARE_API_TOKEN`; the Wrangler log path also was outside the writable sandbox. I therefore do not record a Worker version ID. The live public content and assets confirm that the merged release is being served.

## Verification

Completed on the final code before merge:

- `npm run typecheck` — passed.
- `npm run lint` — passed.
- `npm run deadcode` — passed.
- `npm run build` — passed.
- `bun test` — 156 passed, 0 failed, 849 assertions.
- `git diff --check` — passed.
- Fresh local route checks: homepage, RO/EN service routes, six guide routes, public assets, sitemap, agent endpoints and `Accept: text/markdown` responses.
- Independent GPT-6.2 Sol Medium final design/content review — accepted current source and assets with no remaining factual or implementation blockers.

A rendered mobile-browser viewport check of the redesigned homepage was not completed in this session. The source retains responsive grid and wrapping classes, but no mobile visual result is claimed. Check 320, 375 and 390 CSS px, including the consent banner and the quote section, when viewport-controlled browser access is available.

## Effective team configuration

| Role | Model and configuration | Result |
| --- | --- | --- |
| Orchestrator/implementation | GPT-6 Luna Work Mode; reasoning setting not exposed for verification | Integrated source, reviewed the diff, ran checks, merged PR #17 and checked production routes. |
| Homepage design review | GPT-6.2 Sol Medium | Recommended keeping the 3D hero, placing sample proof immediately below, prioritizing Revit MEP and correcting the estimate handoff. |
| Content/SEO review | GPT-6.2 Sol Medium | Identified buyer-guide accuracy gaps and missing article-level proof/social metadata; verified the content approach and acceptance criteria. |
| Independent final review | GPT-6.2 Sol Medium | Accepted final source and assets; directly checked article metadata handlers, Markdown outputs, links, sitemap and rendered English infographic fit. |

## Measurement and next review

No Search Console request, GA4 test submission, official social post, paid listing, publisher contact or AI-query run was made as part of this release. There is no evidence yet that indexing, rankings, traffic, engagement, AI citations or leads increased.

- Around 28 November: recheck Search Console sitemap freshness and inspect the priority EN service URL. Record eligibility, crawl and indexation separately; avoid duplicate immediate requests.
- On 30 November: review the first complete week of available GA4 source/landing/article-to-service paths. Report actual counts with the latest complete date, country versus language, consent/test exclusions and missing data.
- When viewport-controlled browser access is available: complete a visual pass at 320, 375 and 390 CSS px for the homepage, both service routes, language switch and form area.
- Repeat the same 8–12 exact AI questions after 30 days, recording platform availability, language, date, mentions, recommendations and cited NODBIM URLs separately.
- Keep qualified requests, written offers, accepted orders and first confirmed payments as distinct commercial stages.
