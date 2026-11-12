---
name: Trace
description: Your money. Yours alone. A calm, private, offline-first expense tracker.
colors:
  ledger-sage: "#4A7C6E"
  ledger-sage-deep: "#355C51"
  ledger-sage-wash: "#EAF2F0"
  paper: "#F2F4F7"
  paper-raised: "#FFFFFF"
  paper-inset: "#F8F9FB"
  hairline: "#E2E8F0"
  ink: "#18202C"
  ink-muted: "#5A6578"
  ink-faint: "#9AA3B2"
  income-green: "#2D7A52"
  income-wash: "#E5F4EE"
  overspend-red: "#B84040"
  overspend-wash: "#FAECEC"
  caution-amber: "#C47A2A"
  caution-wash: "#FDF3E3"
  night-paper: "#0F1117"
  night-raised: "#1A1F2E"
  night-inset: "#232838"
  night-hairline: "#2E3447"
  night-ink: "#E8EEFF"
  night-sage: "#5B9A8A"
typography:
  wordmark:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  stat:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 800
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  row-title:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 800
    letterSpacing: "0.09em"
rounded:
  sm: "7px"
  md: "10px"
  lg: "14px"
  pill: "99px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "22px"
components:
  button-primary:
    backgroundColor: "{colors.ledger-sage}"
    textColor: "#FFFFFF"
    rounded: "11px"
    padding: "13px"
  button-primary-hover:
    backgroundColor: "{colors.ledger-sage-deep}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-muted}"
    rounded: "11px"
    padding: "13px 20px"
  button-add:
    backgroundColor: "{colors.ledger-sage}"
    textColor: "#FFFFFF"
    rounded: "20px"
    padding: "7px 16px"
  input:
    backgroundColor: "{colors.paper-inset}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "9px 11px"
  card:
    backgroundColor: "{colors.paper-raised}"
    rounded: "{rounded.lg}"
  stat-tile:
    backgroundColor: "{colors.paper-raised}"
    rounded: "{rounded.lg}"
    padding: "15px 18px"
  transaction-row:
    backgroundColor: "{colors.paper-raised}"
    rounded: "{rounded.md}"
    padding: "10px 16px"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.pill}"
    padding: "2px 7px"
---

# Design System: Trace

## Overview

**Creative North Star: "The Private Ledger"**

Trace looks like a personal account book kept by someone careful: quiet paper-toned surfaces, hairline rules, figures aligned in tabular columns, and a single muted green used the way a ledger uses ink. Nothing performs. The interface stays out of the way of a task that happens in seconds, usually on a phone with one thumb.

The system is flat and economical. Cards are white sheets on a cool grey-blue desk, separated by 1px rules rather than shadow. Weight does the hierarchy work: heavy tight numerals for money, small tracked caps for labels, regular sans for everything else. The only typographic flourish is the serif wordmark, a signature at the top of the page.

Dark mode is a first-class twin, not an inversion: same structure, same single accent, shifted to a blue-black night paper.

**Key Characteristics:**
- Flat, hairline-bordered surfaces; depth only for things that float.
- One accent (Ledger Sage); semantic green, red and amber appear only to mean something.
- Money in heavy, tight, tabular numerals.
- System sans for the whole app; one serif moment, the wordmark.
- Every color is a CSS variable with a dark-mode override.

## Colors

A cool neutral paper with one desaturated teal-green accent and three quiet semantic colors.

### Primary
- **Ledger Sage** (#4A7C6E): The accent. Primary buttons, the active tab and its underline/top-rule, focus borders, the currency toggle's selected state, links of intent. Muted enough to read as trust, not as money-hype.
- **Ledger Sage Deep** (#355C51): Hover and pressed state for sage fills; emphasis text on sage washes.
- **Ledger Sage Wash** (#EAF2F0): Tinted backgrounds behind accent-related content.

### Secondary
- **Income Green** (#2D7A52): Income amounts, positive deltas, and the mobile add button. Distinct from sage: sage is interface, green is money in.
- **Overspend Red** (#B84040) and **Caution Amber** (#C47A2A): Over-budget and warning states, each with a pale wash for backgrounds.

### Neutral
- **Paper** (#F2F4F7): Page background.
- **Paper Raised** (#FFFFFF): Cards, rows, sheets, the header.
- **Paper Inset** (#F8F9FB): Input fills and secondary surfaces; turns to raised white on focus.
- **Hairline** (#E2E8F0): All borders and dividers.
- **Ink** (#18202C), **Ink Muted** (#5A6578), **Ink Faint** (#9AA3B2): Text, secondary text, labels and placeholders.
- **Night set** (#0F1117 paper, #1A1F2E raised, #232838 inset, #2E3447 hairline, #E8EEFF ink, #5B9A8A sage): Dark-mode equivalents, applied automatically via `prefers-color-scheme`.

### Named Rules
**The One Ink Rule.** Ledger Sage is the only brand accent. Green, red and amber are semantic and never decorate.

**The Variable Rule.** No hex in component CSS or chart configs. Read variables at render time so both themes work.

## Typography

**Display / Wordmark Font:** Cormorant Garamond (Georgia, serif), 700
**Body Font:** System UI stack (-apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif)

**Character:** A bookish serif signs the page; a native sans does the work. The pairing says "careful, private" without ornament.

### Hierarchy
- **Wordmark** (700, 26px, 1, -0.01em): "Trace" in the header only (22px on mobile).
- **Stat** (800, 26px, 1.2, -0.03em, tabular): Headline money figures (22px on mobile).
- **Title** (800, 16px, -0.02em): Modal and sheet titles.
- **Body** (400, 14px, 1.5): Default text and form values.
- **Row title** (600, 13px): Transaction names, truncated with ellipsis.
- **Label** (800, 10px, 0.09em, uppercase): Stat captions; form labels use 11px, 700, 0.06em.

### Named Rules
**The Tabular Rule.** Every amount uses `font-variant-numeric: tabular-nums` so columns of money align.

**The One Serif Rule.** Cormorant appears only in the wordmark.

## Layout

Single column of stacked cards on mobile, widening to a centered content area with a top tab bar on desktop. Mobile (≤640px) swaps the tab bar for a fixed bottom navigation with a raised center add button; safe-area insets are respected top and bottom. Spacing runs on a loose 6/10/14/22px rhythm: 10px between tiles and rows, 14px between sections, 22px side gutters. Stat tiles are a 3-column grid (2 on mobile). Design and test at 375px first.

## Elevation & Depth

Flat by default. Depth comes from 1px Hairline borders and the step from Paper to Paper Raised, not from shadow. Shadow is reserved for things that float over the page.

### Shadow Vocabulary
- **Rest** (`box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)`): Cards, rows, header. A whisper.
- **Lift** (`box-shadow: 0 8px 24px rgba(0,0,0,0.10)`): Sheets, modals, card-summary tiles.
- **Add glow** (`0 2px 8px rgba(74,124,110,.35)`): Header add button only.
- **Bottom nav** (`0 -1px 16px rgba(0,0,0,.10)`): The mobile tab bar.

### Named Rules
**The Flat-At-Rest Rule.** If it doesn't float over content, it has a border, not a shadow.

## Shapes

Gently rounded and consistent: 14px for cards and modals, 10px for rows and icon tiles, 7px for inputs, 11px for primary form buttons, and full pills for chips, the header add button and progress fills. The mobile add button is a 56px circle. Rings and Sankey flows are the only non-rectilinear forms; they stay data-driven.

## Components

### Buttons
- **Shape:** 11px radius for form actions; full pill for the header add button; circle for the mobile add.
- **Primary:** Ledger Sage fill, white 15px/800 text, 13px padding; hover to Ledger Sage Deep, press scales to 0.98.
- **Secondary:** Paper fill, 1.5px Hairline border, Ink Muted text.
- **Toggle groups** (currency, $/%): joined segments, selected segment filled sage (currency) or raised white (budget view).

### Chips
- Pill, 10px/600, 2px×7px padding, Paper fill with Hairline border and Ink Muted text for categories.

### Cards / Containers
- **Corner Style:** 14px. **Background:** Paper Raised. **Border:** 1px Hairline. **Shadow:** Rest. **Padding:** 15–18px.

### Inputs / Fields
- **Style:** 1.5px Hairline border, Paper Inset fill, 7px radius, 14px text, inherited font.
- **Focus:** border becomes Ledger Sage and fill lifts to Paper Raised; no outline glow.
- **Label:** 11px uppercase tracked, Ink Muted.

### Navigation
- Desktop: top tabs, 13px/500 Ink Muted; active is sage, bold, with a bottom rule.
- Mobile: fixed bottom bar, 9px labels with icon, active marked by a 2.5px sage top rule, center 56px green add button.

### Transaction Row (signature)
Raised 10px-radius row: 36px category icon tile in the category's color, name over a meta line of chips and italic notes, heavy tabular amount on the right. Card-linked rows carry a tinted card gradient strip applied inline per card. Edit and delete appear on hover (desktop) and via tap-to-open detail (mobile).

### Spending Rings & Bars
Donut rings and rounded progress bars colored per category; fills animate width over .5s on a standard ease.

## Do's and Don'ts

### Do:
- **Do** use the CSS variables for every color, in both themes, including chart configs.
- **Do** set money in tabular, heavy numerals.
- **Do** use Ledger Sage for the single primary action on a screen.
- **Do** keep tap targets thumb-sized on mobile and respect safe areas.
- **Do** honor `prefers-reduced-motion` (already global).

### Don't:
- **Don't** hardcode hex in new CSS (several legacy spots like `.chip-rec` do; fix, don't copy).
- **Don't** add a second brand accent or use red/green/amber decoratively.
- **Don't** use shadows on resting surfaces.
- **Don't** introduce another typeface, or use the serif outside the wordmark.
- **Don't** use emoji as UI icons; the app uses its own SVG icon set.
