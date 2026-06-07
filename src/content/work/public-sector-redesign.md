---
title: "Roha Design System"
summary: "Building the studio's own design language from scratch: tokens, type, components, and a living documentation site."
category: "uiux"
service: "Design System"
duration: "3 weeks"
year: 2026
client: "Roha"
concept: false
pattern: "pat-grid"
coverImage: "https://ik.imagekit.io/gorat/rohaworks/designsystem/image-cover.avif"
images:
  - "https://ik.imagekit.io/gorat/rohaworks/designsystem/image-cover.avif"
order: 1
draft: false
visibility: show
publishedAt: 2026-02-20
---

### 01 — Context

Every project Roha touches eventually needs the same decisions: what blue is the right blue, how small should small type go, what does a disabled button look like. Without a system, those decisions get made four times a year by whoever is closest to the screen that week.

The Roha Design System is the answer: a single source of truth for color, type, spacing, radius, shadow, and components — documented in a live preview site so nothing gets lost in a Figma file no one can find.

### 02 — Principles

The system is built on a small number of deliberate constraints.

**One chromatic accent.** The palette is mostly white. Surfaces step from Paper (#FFFFFF) to Cream (#EAEFF6) to Sand (#DBE2EC), with a single chromatic accent: Blue (#2776EA). Cyan and sage appear only in data contexts; status tones (success, warning, danger) appear only in feedback. Everything else is ink and surface.

**One type family.** Geist handles all display and body work. Geist Mono carries every uppercase label and monospaced detail. Display sizes are always weight 500 with tight tracking; accent words step to 600. The system never needs a font decision at the start of a project.

**Low shadows.** Most depth is expressed with a 1px rule. Shadows appear only on elements that genuinely float: cards on hover, dialogs, popovers. Anything else is flat.

**Soft corners, not pill-everything.** Border radius is a fixed scale (sm 10, btn 13, md 14, lg 22). Fully round is reserved for tags, pills, and avatars.

### 03 — What's inside

The documentation site is organized into two sections.

**Foundations** covers the decisions that underpin everything: Color (full token set with usage rules), Typography (scale + weight + tracking samples), Logo usage (wordmark on light and dark), Icons (Lucide at 1.75 stroke), Shadows, Spacing (4px base scale, nine steps), and Border radius.

**Components** is the working library:

- Badges, Buttons (variants, sizes, states), Button groups
- Checkbox and radio, Toggles, Select and dropdown
- Progress indicators, Slider, Tooltips, Breadcrumbs
- Date picker, Empty states, Filters, Carousel
- Alerts (info, success, draft, unavailable), Modal, Notifications
- Pagination, Charts (linear + donut), Table, Vertical tabs

Each component shows every relevant state including disabled, hover, and error. Nothing ships without its full state set documented.

### 04 — Outcome

The result is a self-contained HTML file that loads without any external dependencies. Any team member can open it in a browser and see every token, every component, and every usage rule in one place.

The system is now the starting point for every Roha project. New client work does not begin with color decisions; it begins from a working palette. New components extend existing patterns rather than reinventing them. The design file stays navigable because the naming conventions are already decided.

For a studio that keeps a deliberately short project list, the value is not efficiency in isolation. It is consistency across work that spans different clients, categories, and years.
