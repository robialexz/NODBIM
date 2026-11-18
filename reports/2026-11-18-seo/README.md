# SEO observations — 18 November 2026

Status: partial; Search Console access blocked.

## Objective and acceptance
Compare actual Google indexing with 17 November; verify public crawl signals and preserve a dated checkpoint. Orchestrator owns integration. A bounded GPT-6 Luna/max read-only task checked robots, sitemap, Revit MEP and PDF in DWG; the orchestrator checked the other priority routes and sitemap count. Acceptance requires measured public results and explicit separation from Google indexing.

## Latest checkpoint
Read AGENTS.md and docs/agent-targets.md from canonical repository main. Latest main commit at inspection: 43ce91e3c9bea7c57c5b7e442d417cd631af0b6f (17 November 2026); parent af3bf89f13b08a9e2c5e176759b219e80d77030d added English guides after baseline 7f178ee5c4082a83d180b78ed6adf31933bf927c.
reports/2026-11-17-seo/README.md and metrics.json returned GitHub 404. Recursive main tree has neither SEO nor English report directories. They may remain local; no claim that they were deleted. The user's computer checkout is not mounted here; local uncommitted work is unknown.

## Google data
No current Search Console read was possible. Connected browser tool returned Unknown tool(browser.js). No authentication was changed.
Historical baseline supplied in task, observed 17 November (Google report updated 13 November): 2 indexed; 57 not indexed: 30 crawled/not indexed, 24 discovered/not indexed, 3 redirects. Sitemap last read 17 November, Success, 65 discovered. Revit MEP request accepted. None of these are new measurements.
Current indexing counts, sitemap Google read date/discovery count, URL Inspection and production Cloudflare version: unknown. No repeated index requests or sitemap submissions.

## Public HTTP observations — 18 November
robots.txt and sitemap.xml: HTTP 200. Robots permits Googlebot and * and declares https://nodbim.com/sitemap.xml.
Public XML currently has 69 URL entries. This is not Google's discovered or indexed count and is consistent with the later English hub plus three guides.
Priority pages returned HTTP 200 and self canonicals:
- https://nodbim.com/revit-mep
- https://nodbim.com/autocad-dwg
- https://nodbim.com/pdf-in-dwg
- https://nodbim.com/cursuri-revit
- https://nodbim.com/en/revit-mep-outsourcing

No noindex observed in HTTP X-Robots-Tag or HTML robots metadata for these checks; cursuri-revit explicitly index,follow. HTML response contains main headings on the three routes checked by the orchestrator. Browser rendering/hydration was not tested.
New English guide entries:
- https://nodbim.com/en/blog/mep-drawing-pricing
- https://nodbim.com/en/blog/files-for-revit-mep-quotation
- https://nodbim.com/en/blog/revit-mep-model-handover-checklist

Evidence limitations: curl GETs returned 200. Python urllib with its default client received 403; changing client/UA returned 200. This alone does not establish Googlebot blocking or a production defect.

## Actions and next step
No website code repair justified or published. Documentation stored on seo-observations-2026-11-18, preserving main and its publication path. No code changed; application checks not run.
Paused the existing indexing check because its core authenticated inspection cannot execute in the current environment. Resume after the authorized connected browser/Search Console access is available, retrieve local prior reports, then compare current Google data. Do not infer no change or regression from today's access block.
No virtual-office processes, outreach, ads, spending or authentication changes.
