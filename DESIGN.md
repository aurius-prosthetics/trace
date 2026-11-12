---
name: Trace
description: Your money. Yours alone. A private notebook for your month, tallied by week.
colors:
  ledger-sage: "#4A7C6E"
  ledger-sage-deep: "#355C51"
  ledger-sage-wash: "#EAF2F0"
  grid-paper: "#F3F7F5"
  page: "#FFFFFF"
  page-inset: "#F8F9FB"
  pencil-rule: "#D3DDD8"
  sumi-ink: "#151A19"
  ink-rule: "#27312E"
  ink-muted: "#5A6578"
  ink-faint: "#627083"
  income-green: "#2D7A52"
  overspend-red: "#B84040"
  caution-amber: "#C47A2A"
  night-paper: "#0E1513"
  night-page: "#151E1C"
  night-rule: "#6E827A"
  night-ink: "#E6EFEA"
  night-sage: "#5B9A8A"
typography:
  wordmark:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1
  stat:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 800
    letterSpacing: "-0.02em"
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "14px"
    lineHeight: 1.5
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 800
    letterSpacing: "0.09em"
rounded:
  sm: "4px"
  md: "6px"
  sheet: "10px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "14px"
  lg: "22px"
components:
  button-primary:
    backgroundColor: "{colors.ledger-sage}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "13px"
  button-add:
    backgroundColor: "{colors.ledger-sage}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "7px 16px"
  input:
    backgroundColor: "{colors.page-inset}"
    textColor: "{colors.sumi-ink}"
    rounded: "{rounded.sm}"
    padding: "9px 11px"
  summary-strip:
    backgroundColor: "{colors.page}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  week-tally:
    backgroundColor: "{colors.page}"
    rounded: "{rounded.md}"
    padding: "8px 6px"
  ledger-row:
    backgroundColor: "{colors.page}"
    rounded: "0"
    padding: "10px 16px"
---

# Design System: Trace

## Overview

**Creative North Star: "The Kakeibo Notebook"**

Trace is the screen version of a Japanese household-budget notebook: a graph-paper page you fill in, ruled in ink, with the month tallied by week. Everything sits on a faint sage grid. Content lives on white pages with 1px ink rules and small corners. There are no soft shadows and no pill-shaped cards.

The month reads as a page, not a dashboard. One ruled strip holds Income, Spent and Balance. Beneath it, a five-column week tally shows each week's spend and a tally of entries (four strokes and a slash per five), with the current week inked in sage. Transactions are ruled ledger lines, not floating cards.

Dark mode is the same notebook at night: a green-black page with a dim grid and light ink rules.

**Key Characteristics:**
- Graph-paper ground (24px grid) with white pages and ink-colored hairlines.
- Ledger Sage is the only accent; green, red and amber are semantic.
- Summary strip plus week tally replaces the three-tile hero metrics.
- Square-ish corners (4-6px); depth only for sheets and the FAB.
- Tabular numerals; system sans throughout; serif only for the wordmark.

## Colors

Cool paper, sumi ink, one muted sage.

### Primary
- **Ledger Sage** (#4A7C6E): Primary buttons, active tab, selected controls, the current week in the tally. **Ledger Sage Deep** (#355C51) for hover and inked-in marks; **Ledger Sage Wash** (#EAF2F0) for the current-week cell.

### Secondary
- **Income Green** (#2D7A52), **Overspend Red** (#B84040), **Caution Amber** (#C47A2A): money in, over-budget, warning. Never decorative.

### Neutral
- **Grid Paper** (#F3F7F5): page ground, with grid lines `rgba(74,124,110,.11)`.
- **Page** (#FFFFFF) and **Page Inset** (#F8F9FB): cards, rows, inputs.
- **Pencil Rule** (#D3DDD8): internal dividers. **Ink Rule** (#27312E): the outer rule of every page, strip and row.
- **Sumi Ink** (#151A19), **Ink Muted** (#5A6578), **Ink Faint** (#627083, at least 4.5:1 on every surface).
- **Night set:** #0E1513 paper, #151E1C page, #6E827A rule, #E6EFEA ink, #5B9A8A sage; white-on-sage buttons switch to dark text via `--on-acc`.

### Named Rules
**The One Ink Rule.** Ledger Sage is the only brand accent.

**The Variable Rule.** No hex in component CSS or charts; read variables at render time.

## Typography

**Display Font:** Cormorant Garamond 700, wordmark only.
**Body Font:** System UI stack.

### Hierarchy
- **Stat** (800, 22px, 17px on mobile): the three summary figures.
- **Body** (400, 14px, 1.5), **Row title** (600, 13px), **Label** (800, 9-10px, 0.09em, uppercase).

### Named Rules
**The Tabular Rule.** Amounts use `font-variant-numeric: tabular-nums`.

**The One Serif Rule.** Cormorant appears only in the wordmark.

## Layout

Single column, 12px gutters on mobile, 820px max width on desktop. The dashboard order is: summary strip, week tally (attached beneath it, sharing its rule), budget breakdown, ruled transactions. Mobile uses a fixed bottom nav with a raised sage add button. Test at 375px first.

## Elevation & Depth

Flat. Depth comes from 1px ink rules and the white page over the grid. Shadows exist only for sheets and modals (`box-shadow: 0 8px 24px rgba(0,0,0,.10)`) and the mobile add button.

### Named Rules
**The Ink-Not-Shadow Rule.** If it doesn't float over content, it gets a rule, not a shadow.

## Shapes

4px corners for controls, chips, rows and tiles; 6px for pages and strips; 10px for the bottom sheet's top corners; a circle only for the mobile add button. Rows are square so they stack into a ledger.

## Components

### Buttons
Sage fill, white text (dark text in dark mode), 4px radius; hover to Ledger Sage Deep. Secondary and filter buttons are hairline-ruled with muted ink.

### Inputs
1.5px pencil-rule border, page-inset fill, 4px radius; focus turns the border sage.

### Summary Strip
One bordered page split into Income | Spent | Balance by pencil-rule dividers. Balance is green when positive, red when negative.

### Week Tally
Four or five equal cells (W1-W5) attached under the strip: week label, rounded-dollar spend, and entry tally marks (groups of five with a slash through the fifth, "+n" past 15). The current week is washed in sage with inked marks.

### Ledger Row
Square white row with an ink rule, category icon tile on the left, name and category chip, and a right-hand amount column separated by a hairline; the card name sits under the amount in small caps.

## Do's and Don'ts

### Do:
- **Do** use variables for every color in both themes.
- **Do** keep money in tabular numerals and rows square so they stack.
- **Do** show state by form as well as color (tally marks, struck rows), not color alone.

### Don't:
- **Don't** reintroduce three separate hero-metric tiles or soft-shadow rounded cards.
- **Don't** add a second accent or use red, green or amber decoratively.
- **Don't** use emoji as UI icons or the serif outside the wordmark.
- **Don't** hardcode hex in new CSS.
