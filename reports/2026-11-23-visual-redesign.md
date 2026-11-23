# NOD BIM visual redesign — 23 November 2026

## Status

The redesign is implemented on branch `codex/nodbim-full-redesign`. Code commit: `7bf9b5930debf29655cdf3b15a61af0197cd6377`, based on canonical `main` at `d3f7cca6b4f5a7d2cdffe21be1be0ec44b809ba4`. Documentation commit: `14fadee8d450d15ce708817f9cd3f99620c21e3f`. Pull request [#19](https://github.com/robialexz/NODBIM/pull/19) is open; publication through the established GitHub `main` → Cloudflare path is pending.

The redesign changes visual hierarchy and styling while keeping existing page URLs, search metadata, article content, pricing, form fields, schema, language pairs, and key anchors. It does not claim increased rankings, indexation, traffic, engagement, AI citations, or leads.

## Baseline and decision

The previous 23 November production audit passed 19/19 checks across 74 sitemap URLs, 54 hreflang tags, 91 internal destinations, and 589 fragment references. The most recent direct Search Console and GA4 measurements are still the dated 22 November checkpoint in [agent-targets.md](../docs/agent-targets.md); they were not reread for this visual release. No ranking or conversion lift can be attributed to a design change before post-release data matures.

The design decision is a technical “navy and paper” system: cool light surfaces, deep navy focus areas, cobalt actions, self-hosted Archivo/IBM Plex fonts, more prominent Revit MEP and a clearer proof-to-quote path. Existing public images and the synthetic HVAC PDF were reused. Captions identify illustrative visuals and distinguish the synthetic sample from client work. No client, employer, or NDA material was introduced.

## Implementation

- Reworked the Romanian homepage hero and service hierarchy, keeping the same H1, service intent, approved rate, estimator, HVAC sample, and quote anchors. Revit MEP remains the primary service; AutoCAD remains directly accessible.
- Rebuilt the shared Romanian service-page hero with the first existing service image and preserved the remaining examples and related links.
- Reworked the English Revit MEP outsourcing hero around the same commercial flow, retaining the €200 starting rate per complete sheet, pilot, estimate, standards, responsibility limits, guides, form, and FAQ.
- Updated shared palette, typography, buttons, navigation, footer, pricing, process, and gallery styling.
- Kept server-rendered content visible before hydration by removing the IntersectionObserver opacity wrapper from `Reveal`.
- Scoped light-on-dark helper colors to dark hero copy so the white estimate form, EN facts panel, and image captions retain readable contrast.
- Constrained the mobile navigation height for the header, fixed contact bar, and safe-area inset so its quote button remains reachable by scrolling.
- Added the shared editorial styling hook to RO and EN article pages.

No page slug, canonical, title, description, hreflang pair, social metadata, schema definition, quote field, event name, redirect, legal copy, or pricing unit was intentionally changed. The article and service links continue to use the same destinations and fragments.

## Verification

Completed on the committed source:

- `npm run typecheck` — passed.
- `npm run lint` — passed.
- `npm run deadcode` — passed.
- `npm run build` — passed.
- `bun test` — 156 passed, 0 failed, 849 assertions.
- `git diff --check` — passed.
- Fresh compiled SSR review: sampled home, RO/EN service and article routes returned HTTP 200, one H1, expected canonicals and reciprocal hreflang where applicable, resolved local fragments, visible quote fields, and matching structured offer prices. Robots and sitemap returned HTTP 200.
- Independent GPT-6.2 Sol Medium review accepted the final source. It checked proof labels, form styling, dark-surface focus treatment, the menu scroll boundary, schema pricing and SSR paths.
- Contrast review: the hero caption link color reaches 6.75:1 on its light strip; input borders meet the 3:1 boundary target on the light surfaces.

An exact rendered viewport pass at 320, 375, and 390 CSS px remains unverified. Playwright could not start Chrome in the sandbox due macOS permissions; the independent reviewer opened the local build and inspected its accessibility tree, but did not measure the exact mobile viewport geometry. The local build also lacked production phone/WhatsApp configuration, so the fixed contact bar was not exercised. No form was submitted. These are the remaining visual QA limits, not evidence of an SEO or indexation change.

Build output included a Vite notice about tsconfig path resolution and a generic JavaScript chunk-size warning; neither is addressed by this visual change. No Lighthouse or field performance measurement was made; LCP, CLS and INP results are not claimed.

## Effective team configuration

| Role | Effective model | Objective, deliverable and acceptance evidence |
| --- | --- | --- |
| Orchestrator / implementation | GPT-6 Luna Work Mode; exact reasoning setting not exposed | Integrated visual system and routes, preserved SEO/form invariants, ran required checks, prepared release. |
| Design direction reviewer | GPT-6.2 Sol Medium | Recommended the navy/paper technical portfolio, hero/proof order, Revit-primary hierarchy, accessible mobile controls and accurate illustration labels. |
| SEO and implementation guardrails reviewer | GPT-6.2 Sol Medium | Audited URL inventory, canonical/hreflang, schema, anchors, SSR, pricing, forms, discovery endpoints and mobile/performance risks. |
| Independent final reviewer | GPT-6.2 Sol Medium | Reviewed the final source and fresh build separately from the author; accepted after contrast and mobile menu fixes. |

## Publication and next review

- Merge PR [#19](https://github.com/robialexz/NODBIM/pull/19) through the normal main-branch path and verify the Cloudflare build/deploy. Record the merge/deployment commit, then recheck `/`, `/revit-mep`, `/en/revit-mep-outsourcing`, robots, sitemap, form access, key anchors and language switching.
- Complete a rendered mobile pass at 320, 375 and 390 CSS px when a viewport-controlled browser is available. Include open menu, contact bar, cookie banner, image fit and form fields.
- Do not resend index requests solely because the visual design changed. Check Search Console after the next crawl and record crawl/index states separately.
- Revisit GA4 only after a complete reporting window; keep Organic Search, Organic Social, referral, direct and paid separate and exclude internal tests/consent-denied data.
- Review the first seven-day release window on 30 November. Keep design release, indexing, AI citations, qualified enquiries, written offers, paid orders and first confirmed receipts as separate results.
