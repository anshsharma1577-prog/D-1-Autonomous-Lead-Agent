---
name: Warm Slate Intelligence
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#45dfa4'
  on-secondary: '#003825'
  secondary-container: '#00bd85'
  on-secondary-container: '#00452e'
  tertiary: '#7bd0ff'
  on-tertiary: '#00354a'
  tertiary-container: '#009bd1'
  on-tertiary-container: '#002d40'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#68fcbf'
  secondary-fixed-dim: '#45dfa4'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display:
    fontFamily: Geist
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  display-mobile:
    fontFamily: Geist
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '500'
    lineHeight: 1.5rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.5rem
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: 0em
  label-md:
    fontFamily: Geist
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0em
  label-sm:
    fontFamily: Geist
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 0.9375rem
    letterSpacing: 0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '400'
    lineHeight: 1rem
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.5rem
  gutter-desktop: 1.5rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system delivers a calm, razor-sharp, human-centric workspace for B2B sales intelligence and pipeline operations. Taking architectural cues from tools like Linear, Attio, and Notion, it rejects the sensory overload of hyperactive dashboards, neon telemetry charts, and novelty gradients in favor of monastic clarity, breathable whitespace, and tactile digital craftsmanship.

The brand persona is analytical, serene, deliberate, and dependable. The interface operates as a quiet lens over dense relationship graphs, enriched account intelligence, and deal velocity. By prioritizing low eye-strain surfaces, whisper-thin internal borders, and subtle typographic contrast, the system turns high-volume pipeline navigation into a fluid, frictionless state of focus.

## Colors

The palette is anchored in an understated, warm matte charcoal canvas that avoids the harshness of pure `#000000` while preventing cold blue cast fatigue.

### Surface Tiers
- **Canvas Base (`#0b0f14`):** The foundational viewport floor. Unobtrusive, deep, and grounded.
- **Surface Level 1 (`#12171f`):** Subordinate panes, structured navigation sidebars, and inactive table headers.
- **Surface Level 2 (`#181e28`):** Raised interactive containers, workspace cards, and active inspection panels.
- **Surface Level 3 / Popover (`#1f2633`):** High-priority contextual overlays, modals, and floating command palettes.

### Borders & Dividers
- **Hairline Border (`#222936`):** Standard structural boundary between adjacent surface tiers.
- **Muted Border (`#2d3646`):** Distinct component strokes (input fields, table cell boundaries, card edges).
- **Interactive Border (`#3f4b61`):** Hover-state outlines for actionable surfaces.

### Accents & Semantics
- **Primary Indigo (`#6366f1`):** Used with strict surgical discipline for primary calls-to-action, key keyboard shortcuts, and focused inputs. Never applied as decorative broad background fills.
- **Verified Emerald (`#34d399`):** Indicates verified domain match, synced CRM deals, or healthy enrichment status.
- **Amber Warning (`#f59e0b`):** Signals required review, stale pipeline metrics, or missing contact data.
- **Information Sky (`#38bdf8`):** Applied strictly to low-emphasis informative tags and neutral entity properties.
- **Text & Foreground:** Primary text rests at `#f1f5f9` (96% contrast ratio), secondary supportive text at `#94a3b8`, and subtle metadata/key hints at `#64748b`.

## Typography

Typography relies on Geist across all core hierarchies, supplemented by JetBrains Mono for monetary figures, pipeline ratios, and raw domain IDs.

The typographic cadence uses negative letter tracking on headings to produce a tight, editorial presence reminiscent of high-end productivity applications. Body copy preserves generous leading (`1.5` to `1.625`) to make long lists of enriched company profiles, interaction histories, and prospect summaries effortless to digest. Labels and table headers maintain distinct medium (`500`) weights to provide structure without requiring heavy all-caps styling.

## Layout & Spacing

Layouts follow a fluid-density approach centered around high-utility split panes and data grids:

- **Desktop (1280px+):** Collapsible 240px primary navigation sidebar, fixed 320px–420px contextual inspector dock, and an infinitely fluid central canvas for account tables, kanban columns, or document-style activity feeds.
- **Tablet (768px - 1279px):** Sidebar collapses to an icon bar or overlay menu; the central workspace claims full width, with contextual inspect panels sliding in as modular modal sheets.
- **Mobile (< 768px):** Single-column stacked layout with persistent top search-and-filter headers and a bottom utility bar for quick entity capture.

The vertical rhythm is governed by an 8pt base grid with a 4pt sub-grid reserved for tight interface controls (e.g., table cells, chip paddings, keyboard badge insets). Horizontal paddings prioritize calm, open margins (`1.5rem` to `2rem`) around the canvas edges, keeping content organized without crowding viewport boundaries.

## Elevation & Depth

This design system avoids theatrical drop shadows and bright ambient flares. Depth is communicated strictly through surface layering and low-contrast perimeter strokes:

- **Flat/Base Elements:** Sits at `#0b0f14`. Delimited exclusively by `1px solid #222936`. Zero shadow.
- **Raised Panels & Cards:** Background `#181e28` with a crisp `1px solid #2d3646` hairline. Subtle diffused ambient shadow: `0 1px 2px 0 rgba(0, 0, 0, 0.35)`.
- **Dropdowns, Hover Cards & Context Menus:** Background `#1f2633`, boundary `1px solid #3f4b61`, anchored by a soft vertical offset: `0 8px 24px -4px rgba(0, 0, 0, 0.5)`.
- **Full Modals & Command Palettes:** Backdrop is washed in `rgba(11, 15, 20, 0.75)` with an ultra-light `4px` blur. Modal shells utilize `#181e28`, bordered by `#3f4b61`, elevated with `0 16px 36px -8px rgba(0, 0, 0, 0.65)`.

## Shapes

The interface embraces a restrained "Soft" curvature philosophy (`roundedness: 1`). Interactive components (buttons, input fields, badges) use a base radius of `0.25rem` (4px) to `0.375rem` (6px). Cards, modal containers, and floating panels scale up cleanly to `0.5rem` (8px). 

Rounded pills are reserved exclusively for compact status indicators and filter tags to maintain contrast against structural rectangles. This geometric restraint avoids the playfulness of bubble shapes and the harshness of brutalist zero-radius rectangles, providing an orderly, professional tool surface.

## Components

### Buttons
- **Primary:** Solid `#6366f1` background, `#ffffff` text, subtle inner top edge highlight (`inset 0 1px 0 rgba(255, 255, 255, 0.15)`), `0.375rem` radius. Hover shifts to `#5457e5`. Zero ambient glow.
- **Secondary / Default:** Background `#181e28`, border `1px solid #2d3646`, text `#f1f5f9`. Hover elevates background to `#1f2633` and border to `#3f4b61`.
- **Ghost:** Transparent background, text `#94a3b8`. Hover transitions to `#181e28` with text `#f1f5f9`.

### Chips & Entity Badges
- Built with an inner height of `22px`–`24px`, padding `2px 8px`, and `9999px` pill radius.
- **Verified State:** Background `rgba(52, 211, 153, 0.08)`, border `1px solid rgba(52, 211, 153, 0.25)`, text `#34d399`.
- **Review Required:** Background `rgba(245, 158, 11, 0.08)`, border `1px solid rgba(245, 158, 11, 0.25)`, text `#fbbf24`.
- **Information / Property:** Background `rgba(56, 189, 248, 0.08)`, border `1px solid rgba(56, 189, 248, 0.25)`, text `#38bdf8`.

### Form Fields & Search Inputs
- Background `#12171f`, border `1px solid #2d3646`, text `#f1f5f9`, placeholder text `#64748b`.
- Border-radius `0.375rem`. Focus ring is a clean, single-pixel perimeter shift to `#6366f1` with no outer spread rings.
- Inline keyboard hints (e.g., `⌘K`) rendered in JetBrains Mono (`code-sm`) on a `#1f2633` pill with a `1px solid #2d3646` hairline border.

### Data Tables
- Header row styled in `#12171f`, text uppercase `label-sm` in `#64748b` with subtle sorting carats.
- Row items separated by a `1px solid #1c232e` bottom divider.
- Row hover states reveal an immediate, flat background tint of `#141a23`. Zero box-shadow changes on row hover.
- Cell density balanced at `40px` default height, keeping 15–20 pipeline records visible above the fold.

### Cards & Group Panels
- Surface `#12171f` or `#181e28`, encased in a uniform `1px solid #222936` hairline border.
- Header bars within cards are separated with a matching border and `0.75rem` padding.
- Used sparingly to group rich account dossiers, firmographic data, and activity feeds.

### Checkboxes & Radios
- Box size `16px x 16px`, corner radius `3px`.
- Inactive: background `#12171f`, border `1px solid #3f4b61`.
- Active: solid `#6366f1` background with a `#ffffff` crisp check icon.