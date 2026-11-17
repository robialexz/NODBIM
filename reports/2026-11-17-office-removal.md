# Virtual-office removal — 17 November 2026

Owner requested removal of every virtual-office version, retaining NOD BIM and task-driven subagents. Two independent GPT-6 Luna/max subagents audited scope and removal risks.

## Completed and verified

- Deleted Cloudflare Worker `nod-bim-virtual-office`, all its deployed versions, its five-minute cron and `OfficeState` Durable Object namespace. The account inventory has no other virtual-office Worker or Pages project. The similarly named `office-chair-poll-robi` is a separate chair-voting application and was preserved.
- Cloudflare scripts list excludes the office; versions and schedules endpoints return 404. The OfficeState namespace is absent. Public office URL returned 404. The public NOD BIM home and English blog returned 200.
- Removed `apps/virtual-office` including its source, build output, local state and private office variables; all `scripts/nod-office*`, four root office test files, office deployment archive, office plans/specs and orphaned `office/dashboard.html`.
- Removed office npm scripts, app typecheck/config entries, Three.js and office-only password-hash dependencies. Updated the canonical Bun lockfile; removed the obsolete generated npm lockfile. Kept public-site dependencies and all commercial drafts, pipeline, research and SEO evidence.
- Removed office launch/skill entry under `.claude`; role prompts now use bounded assignments, deliverables and acceptance evidence. Root AGENTS.md explicitly forbids restoring any office implementation and supersedes stale instructions.
- Updated the active Indexare NOD BIM and Co-founder NOD BIM automations to use concrete task orchestration and GPT-6 Luna/max subagents when available, with no virtual-office reporting or restoration. Their schedules and commercial restrictions are preserved.

## Checks

`npm run typecheck`, `npm run lint`, `npm run deadcode`, `bun test`, `npm run build` and `git diff --check` passed. The remaining 146 tests passed with 931 assertions; office tests were removed with their deleted implementation. No public website source was changed by this cleanup, and previous unrelated local changes were preserved. No office listener was found on ports 3000, 3100 or 3101.

## Protected local remnants — not claimed deleted

The current environment rejected deletion with `Operation not permitted` for:

- `.agents/skills/nod-office/SKILL.md` (retired instructions; overridden by root AGENTS.md).
- `~/.npm/_npx/5a59f5d4e775a394/node_modules/pixel-agents` (cached version 1.4.1; not running, not globally installed).
- `~/.codex/automations/biroul-nod-bim-articole-ads-olx-i-e-mail-zilnic/automation.toml` (active hourly business-target workflow; it does not invoke the office Worker, bridge, status publisher or runner). The cloud automation connector reports that this local task is not available through that connector. Manage it through local Codex Automations if it is no longer wanted.

No permission bypass was attempted. Thus the hosted/executable project office is gone, while a protected cached package and retired instructions remain locally. The business workflow remains distinct from the removed virtual office.

## Authentication continuity

The existing Cloudflare access token had expired. Its existing refresh grant succeeded; no fresh login/grant was requested and no credentials were printed. Refreshed credentials are retained in ignored checkout-local configuration under `.wrangler/auth/.wrangler/config/default.toml`; use the checkout's `.wrangler/auth` as `XDG_CONFIG_HOME` for subsequent Wrangler maintenance if global credentials are stale. Credentials must never be committed or copied into reports.

Current task objectives and acceptance criteria are in `docs/agent-targets.md`. Completion of this cleanup does not imply a new paying client, Google indexing, increased traffic or continuous background subagent execution.
