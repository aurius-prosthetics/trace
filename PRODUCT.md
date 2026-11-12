# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
People who log spending by hand on their phone throughout the day (quick-add sheet, FAB), installed as a PWA on iPhone/Android home screen. CSV import and a review queue are secondary for them. Also used on desktop.

## Product Purpose
Trace is a privacy-first, offline-first personal expense tracker. It costs nothing to save money: no account, no server, no subscription. Success is a stranger installing it and logging a transaction in seconds, then trusting it with their data. Immediate goal: evolve from a personal project into a public product (landing page, hardened app).

## Positioning
Free and truly local. All data stays on the device (IndexedDB, localStorage fallback); no account, no server, no subscription. A hosted competitor cannot truthfully claim this.

## Operating Context
Single-file vanilla JS PWA (`index.html`, no build step, no frameworks), service worker for offline, Chart.js from cdnjs. Currently on GitHub Pages (https://aurius-prosthetics.github.io/trace/); may move to Cloudflare Pages/Vercel with a custom domain. Mobile-first (test at 375px), dark mode via prefers-color-scheme.

## Capabilities and Constraints
- Transactions, categories, budgets with spending rings, recurring bills, Sankey flow, month comparison, cards tab (26-card library), USD/GBP with live FX (frankfurter.app), CSV/OFX import with duplicate detection, JSON backup/restore.
- Amounts stored in USD internally. Old saved data must keep working (add migrations).
- No multi-device sync; JSON backup is the transfer path.
- Undecided: licensing / open-source status, pricing beyond "free now".

## Brand Commitments
Name: Trace. Tagline: "Your money. Yours alone." Shield + T logo (icon-192/512, logo-horizontal). Wordmark in Cormorant Garamond 700. Tone: calm, trustworthy, private, no-nonsense. Primary color #4A7C6E.

## Evidence on Hand
The live app and the repo. Confirmed claim: no analytics or tracking. Not confirmed (do not claim): open source, "always free", testimonials, user counts.

## Product Principles
1. Privacy is structural, not a promise: nothing leaves the device.
2. Logging a transaction must take seconds on a phone.
3. Free means free: no upsell surfaces, no account walls.
4. Never break saved data; migrate, don't reset.
5. Calm and plain-spoken over clever.
