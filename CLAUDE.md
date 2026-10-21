# Trace — Project Context for Claude Code

## What is Trace

Trace is a privacy-first, offline-first personal expense tracker. The core value proposition: **it costs nothing to save money**. All data stays on the user's device — no account, no server, no subscription. It runs as a PWA (progressive web app) that can be installed to the home screen on iPhone/Android.

The app is currently deployed at: **https://aurius-prosthetics.github.io/trace/**

The immediate goal is to evolve Trace from a personal project into a **public product**:
1. Build a polished **landing page** (separate from the app) that converts visitors
2. Optimize and harden the app (`index.html`) for strangers using it
3. Eventually self-host (currently GitHub Pages, may move to Vercel/Cloudflare Pages)

---

## Repository layout

```
/trace
├── index.html          # The entire app — 4,200+ lines, all CSS + JS inline
├── manifest.json       # PWA manifest
├── sw.js               # Service worker (cache-first, offline support)
├── icon-192.png        # App icon (shield + T logo)
├── icon-512.png        # App icon large
├── apple-touch-icon.png
├── logo-horizontal.png # Shield + "Trace" wordmark (used in onboarding)
└── CLAUDE.md           # This file
```

The app is intentionally a **single HTML file** with no build step. Keep it that way — no webpack, no npm, no frameworks. The landing page will be a separate `landing.html` (or `/landing/index.html`).

---

## App architecture (index.html)

### Storage
- **Primary**: IndexedDB via a thin async wrapper called `IDB`
  - `await IDB.get(STORE_KEY)` / `await IDB.set(STORE_KEY, value)`
  - `STORE_KEY = 'trace-v1'`
- **Fallback**: `localStorage` (used if IDB unavailable)
- State is serialized as JSON and stored under one key
- On load: `hydrateAsync()` → deserializes → `migrateData()` → `refresh()`

### State object
```javascript
let S = {
  transactions: [],      // { id, amount (USD), desc, cat, date, notes, type, card, recurringId, reviewed }
  recurring: [],         // { id, amount, desc, cat, date, notes, type, freq }
  budgets: {},           // { [category]: usdAmount }
  categories: [...CATS], // array of category names
  settings: { currency: 'USD' },
  appliedMonths: [],
  onboardingDone: false,
  reviewFreqDays: 7,
  notificationsEnabled: false,
  lastReviewDate: null,
  onboardingCards: ['amex-platinum']
};
```

### Currency
- All amounts stored in USD internally
- `toDisplay(usdAmt)` converts to display currency
- `toUSD(displayAmt)` converts from display currency
- `fmt(usdAmt)` formats with currency symbol
- Live FX from `https://api.frankfurter.app/latest?from=USD&to=GBP`, cached 4h

### Cards system
Cards are defined in `const CARDS = { ... }` with 26+ real credit cards:
- Each has: `label`, `short`, `brand`, `gradient`, `textColor`, `glowColor`
- Key examples: `'amex-platinum'`, `'apple'`, `'chase-sapphire-preferred'`, `'monzo'`, `'none'`
- Backward-compat aliases: `CARDS['amex'] = CARDS['amex-platinum']`, `CARDS['chase'] = CARDS['chase-sapphire-preferred']`
- Card gradients are applied **inline** in JS (not via CSS classes) so all 26 cards render correctly

### Categories
```javascript
const CATS = ['Food & Drinks', 'Shopping', 'Transport', 'Entertainment',
              'Health', 'Housing', 'Utilities', 'Travel', 'Savings',
              'Miscellaneous', 'Income'];
// Colors in CAT_COLORS, emojis in CAT_EMOJI
// cc(cat) → color, ce(cat) → emoji
```

### Navigation (tabs)
- **Mobile**: Dashboard | Flow | ⊕ FAB | Budgets | ☰ Menu
- **Desktop**: Dashboard | Flow | Bills | FX | Cards | Budgets
- Hamburger (mobile) opens overlay with: Bills, FX, Cards, Backup, Restore
- Tab switching: `switchTab(name)` → shows `#panel-{name}`, calls render function
- `.mob-only` / `.desk-only` CSS utility classes for responsive show/hide

### Key render functions
- `renderFeed()` — Dashboard: stats, budget bars, review queue, transaction feed
- `renderFlow()` — Flow tab: Sankey chart, month comparison, 6-month trend
- `renderBudgets()` — Budgets tab: spending rings + budget input form
- `renderCards()` — Cards tab: card summary tiles + per-card breakdown
- `renderCompare()` — Month comparison card (called by renderFlow)
- `renderBudgetRings()` — SVG donut rings for each category

### Charts
- **Chart.js 4.4.1** loaded from cdnjs (already in `<head>`)
- `let trendChart = null` / `let compareChart = null` — destroyed and recreated on each render
- Always read CSS variables at render time: `getComputedStyle(document.documentElement).getPropertyValue('--text')`

### CSV / Import
- Supports: Amex CSV, Apple Card CSV, Chase CSV, OFX/QFX, generic bank CSV
- Fingerprint-based duplicate detection: `date|cents|rawDesc`
- Already-imported transactions shown with a badge, pre-unchecked

### PWA
- `manifest.json` references `icon-192.png` and `icon-512.png`
- `sw.js` is a cache-first service worker
- Works fully offline after first load
- iOS: `apple-touch-icon.png` for home screen

---

## Design system

### Color tokens (CSS custom properties)
```css
/* Light mode */
--bg:      #F2F4F7;   /* page background */
--surf:    #FFFFFF;   /* card surface */
--surf2:   #F8F9FB;   /* secondary surface */
--border:  #E2E8F0;
--text:    #18202C;
--text2:   #5A6578;
--text3:   #9AA3B2;
--accent:  #4A7C6E;   /* primary green */
--acc-lt:  #EAF2F0;   /* accent light bg */
--green:   #2D7A52;
--red:     #DC2626;
--amber:   #D97706;
--sh:      0 1px 3px rgba(0,0,0,.06);
--sh2:     0 4px 12px rgba(0,0,0,.10);
--r:       12px;      /* border radius */
--r2:      8px;
```

Dark mode overrides are in `@media (prefers-color-scheme: dark)`.

### Typography
- Body: `-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`
- Logo/wordmark: `'Cormorant Garamond', Georgia, serif` (700 weight) — loaded from Google Fonts
- The wordmark text "Trace" appears in the app header top-left

### Brand
- Name: **Trace**
- Tagline: **"Your money. Yours alone."**
- Shield + T logo (PNG files in repo)
- Primary color: `#4A7C6E` (muted teal-green)
- Tone: calm, trustworthy, private, no-nonsense

---

## Features already built

- ✅ Transaction entry (quick-add sheet with amount, description, category, card, date, notes)
- ✅ Transaction feed with sort (by date, amount, category, card)
- ✅ Tap-to-open transaction detail popup (edit / delete)
- ✅ Monthly navigation (← Sep | Oct →)
- ✅ Budget limits per category + spending rings (donut charts)
- ✅ $ / % toggle on budget breakdown (dashboard bars + spending rings)
- ✅ Sankey cash flow chart (custom SVG, pan + zoom)
- ✅ 6-Month spending trend (Chart.js bar chart)
- ✅ Month-over-month comparison (7d / 14d / 30d / MTD toggle, grouped bar chart + delta rows)
- ✅ Recurring bills manager
- ✅ Currency switcher (USD ↔ GBP, live FX)
- ✅ CSV import (Amex, Apple Card, Chase, OFX/QFX, generic)
- ✅ Duplicate detection on import
- ✅ Cards tab (spending by card, category breakdown per card)
- ✅ Dark mode (auto, via prefers-color-scheme)
- ✅ Mobile PWA with bottom nav, FAB, hamburger menu
- ✅ Dynamic Island / safe area support
- ✅ Onboarding flow (4 steps: privacy pitch → card picker → review frequency → notifications)
- ✅ "To Review" queue for imported transactions
- ✅ Review reminder banner
- ✅ Backup / restore (JSON export/import)
- ✅ FX converter tab
- ✅ Category definitions tab
- ✅ Data migration (renames old category names on load)
- ✅ 26-card library with brand-accurate gradients

---

## What to build next (the public launch)

### Priority 1 — Landing page (`/landing/index.html` or root redirect)
A standalone page, separate from the app. Visitors land here; they click "Launch app" or "Add to Home Screen".

Must-haves:
- Hero: headline, sub, CTA button → `index.html`
- Privacy pitch (local-only, no account, open source ethos)
- Feature highlights (3–4 key features with visuals or mockups)
- "How it works" section (3 steps: add card → import CSV → review)
- Mobile install instructions (iOS: share → Add to Home Screen)
- Footer

Nice-to-haves:
- Screenshot / mockup of the app UI
- FAQ (is my data safe? can I use it on multiple devices? is it free?)
- Email capture for updates (static form → Formspree or similar)

Design language: same CSS tokens as the app, same font stack, same accent color. Should feel like one product.

### Priority 2 — App hardening for public use
Things that break or confuse new users:
- [ ] Empty state is weak — first-time users need clearer guidance after onboarding
- [ ] No error boundaries — malformed data can crash the whole render
- [ ] Onboarding card picker shows all 26 cards at once — needs search or collapsing sections
- [ ] CSV import guide doesn't cover all card issuers (only Amex, Apple, Chase, Other)
- [ ] No way to reset / clear data from within the app (users will want this)
- [ ] No export to CSV (only JSON backup) — users want spreadsheet export
- [ ] "Add to Home Screen" prompt is not surfaced in-app on iOS

### Priority 3 — Performance
- `index.html` is 194KB uncompressed. For GitHub Pages this is fine but for self-hosting:
  - Extract CSS and JS to separate files (breaks the single-file constraint but allows caching)
  - Or: minify the HTML in a build step, keep single-file source
- Images: `icon-512.png` is 340KB — compress or use SVG
- Consider moving from GitHub Pages to Cloudflare Pages (free, better perf, custom domain)

### Priority 4 — Custom domain
- Register `usetrace.app` or `traceapp.io` or similar
- Point to Cloudflare Pages or Vercel
- Set up `app.usetrace.app` → the PWA, root → landing page

---

## Deployment

Currently: GitHub Pages
- Repo: `https://github.com/aurius-prosthetics/trace`
- Live URL: `https://aurius-prosthetics.github.io/trace/`
- Deploy: `git push origin main` (Pages auto-deploys from main branch)

To push after edits:
```bash
cd ~/trace
git add -A
git commit -m "your message"
git push
```

If you see `fatal: Unable to create '.git/HEAD.lock'`:
```bash
rm ~/trace/.git/HEAD.lock ~/trace/.git/index.lock
git push
```

---

## Key constraints to respect

1. **Single HTML file** — `index.html` must remain self-contained. No build step, no separate JS/CSS files for the app itself.
2. **No server** — everything is client-side. No Node.js backend, no database, no auth.
3. **No frameworks** — vanilla JS only. No React, Vue, etc.
4. **Backward compat** — old saved data in IndexedDB must continue to work. Always add migration steps for renamed keys/categories.
5. **Dark mode** — every new UI element must work in both light and dark mode. Use CSS variables, never hardcode colors.
6. **Mobile-first** — test every change at 375px width. Use `.mob-only` / `.desk-only` for responsive differences.
7. **Chart.js colors** — always read CSS variables at render time (`getComputedStyle`), never hardcode hex colors in chart configs.
