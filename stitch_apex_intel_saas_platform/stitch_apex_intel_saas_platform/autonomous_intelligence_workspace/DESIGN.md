---
name: Autonomous Intelligence Workspace
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#4edea3'
  on-tertiary: '#003824'
  tertiary-container: '#00885d'
  on-tertiary-container: '#000703'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#0f131c'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.025em
  display-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-default:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.005em
  mono-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
  mono-default:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: -0.01em
  mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 0.75rem
  gutter-md: 1rem
  margin: 1rem
  margin-md: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 1.75rem
---

## Brand & Style

This design system establishes a high-density, computational environment tailored for data analysts, revenue operations architects, and go-to-market leaders. It blends the clinical precision of developer command centers with the polish of modern enterprise workspaces (drawing cues from Linear, Clay, and Vercel). 

### Visual Archetype: Precision Dark Utility
The aesthetic balances deep space voids with crisp structural wireframes. Rather than relying on heavy skeuomorphism or loud decorative gradients, the interface emphasizes data density, structural clarity, and micro-interactions. Information hierarchy is enforced through strict contrast steps, micro-borders, and monochromatic backgrounds punctured by purposeful, functional luminescence.

### Key Attributes
- **Autonomous & Deterministic:** Visual states signal machine certainty, active background synthesis, and structured pipeline evaluations without frivolous animations.
- **Instrument-Grade Density:** Tight spatial packing, calibrated typography, and inline evidence badges ensure maximum visible data bandwidth per viewport.
- **Controlled Luminescence:** Neon accents (electric violet, cyan, emerald) are reserved exclusively for machine telemetry, qualification scores, active execution hooks, and system warnings.

## Colors

The system uses an obsidian foundation layered with distinct tonal tiers to establish clear spatial depth without color wash.

### Palette Architecture
- **Canvas & Base Voids:**
  - `void-canvas`: `#0B0F17` (Deep substrate canvas)
  - `surface-base`: `#0F172A` (Panels, sidebars, base table rows)
  - `surface-raised`: `#161E2E` (Cards, inspector docks, modal backdrops)
  - `surface-elevated`: `#1E293B` (Floating menus, hovered card states, popovers)
- **Borders & Micro-Grid Outlines:**
  - `border-subtle`: `#1E293B` (Row dividers, structural grid guidelines)
  - `border-default`: `#26334D` (Cards, inputs, primary panel boundaries)
  - `border-strong`: `#334155` (Active focus rings, highlighted card containers)
- **Primary & Interactive:**
  - `primary`: `#6366F1` (Electric Indigo; interactive triggers, selection highlights)
  - `primary-hover`: `#818CF8` (Interactive hover state, luminous badges)
  - `primary-ghost`: `rgba(99, 102, 241, 0.08)` (Selected list items, active nodes)
- **Telemetry & Machine Accents:**
  - `telemetry-cyan`: `#06B6D4` (Active crawlers, data agent telemetry, real-time enrichments)
  - `telemetry-cyan-bright`: `#38BDF8` (Active pulsing indicators, verified endpoints)
- **Qualification Semantics:**
  - `qualification-success`: `#10B981` (High-fit target score 85–100, verified decision-makers)
  - `qualification-success-bright`: `#34D399` (Success text contrast, high-intent triggers)
  - `qualification-warning`: `#F59E0B` (Medium-fit, missing schema keys, needs human review)
  - `qualification-critical`: `#EF4444` (Exclusions, negative signals, hard-bounce risks)
- **Text & Foreground:**
  - `text-primary`: `#F8FAFC` (Headings, active values, crisp score readouts)
  - `text-secondary`: `#94A3B8` (Attribute titles, table metadata, agent step labels)
  - `text-muted`: `#64748B` (Inactive states, hotkey glyphs, structural metadata)

## Typography

The type system pairs modern geometric sans-serif structural types with a calibrated monospace engine for numeric, telemetric, and pipeline states.

- **Headings (Geist):** Tight letter tracking, neutral modern architecture, zero decorative flourishes. Designed to feel computational and clinical.
- **Body & Data Content (Inter):** Highly legible at 12px–13px micro-densities, ensuring high scanning efficiency within multi-column data sheets.
- **Telemetry & Readouts (JetBrains Mono):** Applied systematically to ICP fit scores, ARR values, confidence ratios, IP addresses, schema selectors, and execution timestamps.

## Layout & Spacing

The workspace uses an edge-to-edge multi-pane architecture optimized for information density and vertical viewport utility.

### Layout Mechanics
- **Structural Model:** Fluid CSS-grid and high-density flex rails with fixed contextual drawers (e.g., 240px navigation dock, 480px deep lead inspector panel, fluid central orchestrator).
- **Breakpoint Framework:**
  - **Desktop (1280px+):** 3-column triage workspace: Pipeline/Lists, Data Grid/Execution Stream, Contextual Inspector Dock.
  - **Tablet (768px - 1279px):** Split-view workspace; contextual inspector transitions to a slide-over panel.
  - **Mobile (<768px):** Stacked single-column interface with full-screen tabbed execution context.
- **Density Guidelines:** Base rhythm conforms strictly to a 4px sub-grid with tight 12px (`space-md`) default padding for dense data cards, keeping interaction distances short.

## Elevation & Depth

This system avoids heavy drop shadows, simulating z-index hierarchy through layered surface luminosity, micro-borders, and targeted inner highlights.

### Layer Hierarchy
- **Level 0 (Substrate / Canvas):** `#0B0F17` base. Background for empty spaces and global frame borders.
- **Level 1 (Docked Surfaces):** `#0F172A` with a 1px solid `#1E293B` perimeter. Used for fixed sidebars, table column headers, and bottom status strips.
- **Level 2 (Active Cards & Panels):** `#161E2E` with 1px `#26334D` outline. Features an ultra-subtle top inset highlight (`inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`) to replicate physical edge reflection.
- **Level 3 (Overlays, Flyouts & Modals):** `#1E293B` framed in `#334155` with an ambient glow shadow: `0 12px 32px -4px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(99, 102, 241, 0.15)`.

### State Glows
Active agent executions and verified score targets project localized radial blooms: `0 0 16px -2px rgba(99, 102, 241, 0.25)` for primary processes, and `0 0 16px -2px rgba(6, 182, 212, 0.2)` for real-time telemetry.

## Shapes

The interface balances sharp, utilitarian corners with a controlled 12px radius, delivering an ergonomic yet technical feel.

### Corner Radii Guidelines
- **Containers, Lead Cards, Modals:** 12px corner radius.
- **Interactive Controls (Buttons, Inputs, Pill Selectors):** 6px to 8px radius to maintain sharp visual anchors.
- **Status Badges, Evidence Pills, Score Badges:** Rounded pills (full radius) or micro-chamfered 4px boxes for strictly monospaced values.

## Components

### Buttons
- **Primary Action:** Solid background in `#6366F1`, white text (`#F8FAFC`), 1px subtle top highlight, 8px corner radius. Hover state brightens to `#818CF8` with a restrained Indigo glow.
- **Secondary / Ghost:** Surface `#161E2E`, border 1px solid `#26334D`, text `#94A3B8`. Hover elevates to `#1E293B` and transitions text to `#F8FAFC`.
- **Command / Telemetry Trigger:** Monospaced label, keyboard shortcut inline chip (`kbd` element styled in `#0F172A` with `#334155` outline), compact 28px height.

### Input Fields & Search Bars
- Background `#0F172A`, border 1px solid `#26334D`, inset padding `8px 12px`.
- Active focus state uses a 1px border in `#6366F1` plus a 2px outer ring in `rgba(99, 102, 241, 0.2)`. Placeholder text sits at `#64748B`.

### Cards & Lead Detail Modules
- Structural container with 12px radius, `#161E2E` background, and `#26334D` border.
- Split into a 32px header bar with metadata badges and an internal dynamic property matrix. Active/hovered cards shift border to `#334155`.

### Chips & Evidence Pills
- **Evidence Pill:** Pill-shaped badge containing an icon, source label (e.g., `SEC-10K`, `LinkedIn`, `DNS`), and timestamp. Background is `rgba(15, 23, 42, 0.8)`, border 1px solid `#26334D`, font size 11px.
- **Deterministic Fit Badge:** Monospaced rating container with an active dot indicator:
  - *Tier A (85–100):* `#10B981` text, `rgba(16, 185, 129, 0.1)` background, `rgba(16, 185, 129, 0.3)` border.
  - *Tier B (60–84):* `#F59E0B` text, `rgba(245, 158, 11, 0.1)` background, `rgba(245, 158, 11, 0.3)` border.
  - *Tier C (<60):* `#EF4444` text, `rgba(239, 68, 68, 0.1)` background, `rgba(239, 68, 68, 0.3)` border.

### Agent Pipeline Stepper
- Horizontal progress strip displaying workflow execution stages (e.g., `Scrape` -> `Signal Match` -> `Waterfall Enrich` -> `Scoring`).
- Completed nodes show Emerald glyphs; active running nodes show a pulsing Cyan telemetry badge; queued nodes remain muted in `#64748B`.

### Checkboxes & Radios
- 16px square with 4px border radius. Base state has a `#0F172A` fill and `#26334D` stroke. Checked state shifts to `#6366F1` fill with a white vector checkmark.