# Instructions for Claude

## Always give a fresh link after every website update
The owner opens the site on a phone and keeps seeing the cached old page.
Every time you update or deploy the website:
1. Give the production link with a NEW cache-busting query string each time,
   e.g. `https://myworld-alpha-seven.vercel.app/?v=YYYYMMDD-HHMM` (never reuse an old `v`).
2. Say clearly that this link shows the newest version.
3. Verify the live page yourself before saying it is updated.

## Deploying (live site is NOT updated by git pushes)
- Vercel project `myworld` (team `test11-efef`) is deployed by uploads, not from git.
- Files go at the top level (`index.html`, `assets/`, `sales.html`, `sales-report.html`, `reports/`), NOT under `src/` (that gave a 404).
- Test with a non-production deployment first, then promote it with request_promote.
- The git branch is behind the live site; do not redeploy from it.

## Reports (standing instructions from the owner)
- When asked for any report, build it and publish it straight away. Do not ask for approval first.
- Put every report under the existing "Power BI" category of the existing `index.html` (next free R number, e.g. R05). Never create a new index file or a new section; add one `<a class="report">` block to the existing list.
- Report pages live in `reports/`. Update the existing index in the same change, then deploy the full site.
- Publish to Vercel project `myworld`; also commit and push to the working branch.

