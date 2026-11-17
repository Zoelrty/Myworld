# Standing instructions

- When asked for any report or dashboard, build it and publish it straight away to Vercel (the "Versa" site). Do not ask for approval first.
- Give the user the live Vercel link, and keep the Artifact link as a secondary copy.
- Commit and push the report files to the working branch.
- Every time you create a new report, also update the root `index.html` in the same change: add a card for it in the "Reports" section (`#reports`) linking to `report/<name>.html` (or its folder), then redeploy the whole site (index, assets, report files) to the Vercel project `myworld`.
- Reports live under `report/`. Keep one entry per report in the index.
