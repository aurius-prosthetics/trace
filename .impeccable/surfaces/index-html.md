---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief: Trace app (index.html)

Mode: Operate. Visitor completes a task: log spending in seconds on a phone, then read the month.
Audience/job: hand-logger on iPhone/Android PWA; reads month and week totals. Constraints: single HTML file, no build, vanilla JS, light+dark, 375px first, brand sage #4A7C6E and serif wordmark preserved, saved data untouched.
Unresolved: none.

## Direction contract

THESIS: A kakeibo household-budget notebook for the screen: the month is a gridded page tallied by week. Refuses the three-tile hero-metric dashboard and soft-shadow rounded-card stack.
OWN-WORLD: Cool white graph-paper ground with a faint sage 24px grid (dark: ink-blue ground, dim grid); near-black sumi ink text; Ledger Sage as the only accent; hairline ink rules instead of shadows; 4-6px corners; tabular numerals; a vermilion hanko red reserved for seals and overspend only. System sans stays; Cormorant wordmark only.
STORY: The user sees this month as a page they are filling in, trusts it, and taps Add. Weekly totals make the pace readable without charts.
FIRST VIEWPORT: Header, then one ruled summary row (Income | Spent | Balance as columns of a single bordered strip, not tiles), then a five-column week tally (W1-W5: total plus tally-mark count of entries, current week inked), then the budget list and ruled transaction lines. Primary action: sage Add (header) / FAB on mobile.
FORM: Kakeibo Notebook, position pick on my ordered list; seed:ad6e38fede787085.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
