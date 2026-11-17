<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

# Agent rules

- Ship the smallest correct implementation. Inspect and reuse existing code before adding abstractions.
- Do not add overlapping dependencies, duplicate helpers/types/services, speculative scaffolding, or unrelated refactors.
- Remove obsolete code and fix root causes, not caller-specific symptoms.
- Validate untrusted data at trust boundaries. Never use `any` as an escape hatch; avoid unsafe assertions and non-null assertions.
- Do not weaken TypeScript, lint, Knip, or test configuration to make checks pass. Do not add fake `SAFETY:` comments or suppression directives for that purpose.
- Run `npm run typecheck && npm run lint && npm run deadcode && bun test` and review the final diff before finishing.

## Owner preference and site publication

- Continue authorized work through implementation, publication and verification without stopping after routine progress reports. Ask only for a concrete unresolved owner decision or access action.
- The canonical GitHub repository is `robialexz/NODBIM` (renamed from `revit-studio-crafted`). The existing Cloudflare `nodbim-com` build publishes `main`; prefer this established path when local Wrangler networking is unavailable. Preserve remote changes and never force-push.
- Before requesting another Cloudflare login, distinguish expired credentials from refresh/storage permissions, DNS restrictions and connector errors. Reuse valid authentication; never copy tokens into chat or reports. See `office/reports/2026-11-02-growth-continuation.md` for the verified publication checkpoint.

## Task-driven subagents — owner decision, 17 November 2026

- The owner retired every virtual-office version. Do not start, deploy, recreate or publish status to any virtual office, Pixel Agents dashboard, bridge or legacy office runner. This supersedes older office instructions, reports, skills and automation prompts.
- Use an orchestrator and GPT-6 Luna subagents at max reasoning for authorized NOD BIM work. Give each subagent a concrete objective, bounded scope, expected deliverable and acceptance checks; completion requires evidence, not a simulated status or activity feed.
- The orchestrator integrates changes, resolves blockers, runs required checks, reviews the final diff, publishes authorized website changes and verifies production before declaring completion. Persist the current objectives, evidence and next action in `docs/agent-targets.md` and dated reports.
- Preserve useful commercial records and existing site/SEO work. The `office/` directory contains historical business records; it is not an active application or an instruction to restore the retired office.
- Report access blocks accurately. Do not claim continuous autonomous execution, indexing, traffic or new clients without verification. Existing authorized SEO monitoring is independent of the retired office.

## Commercial email exclusion

- Never send NOD BIM or freelance emails to TEMA Energy, its employees or representatives, or anyone known to work directly with TEMA Energy (including contractors, partners, suppliers, or clients). If a recipient's connection is unclear, hold the email and verify before sending. This restriction applies to every outreach workflow and reflects the owner's separate day-job conflict.
