---
name: Adam W. Duran
description: Editorial-engineered personal site for an engineering educator and program builder
colors:
  navy: "#1a2332"
  slate: "#2d3a4a"
  steel: "#4a5e75"
  mist: "#e8ecf1"
  cloud: "#f4f6f8"
  gold: "#c4913c"
  gold-light: "#d4a84e"
  body: "#3a3f47"
  caption: "#6b7280"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: 1.2
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "6px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "#ffffff"
    rounded: "{rounded.md}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.slate}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.steel}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-ghost-hover:
    textColor: "{colors.gold}"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.body}"
    rounded: "{rounded.md}"
    padding: "24px"
  nav:
    backgroundColor: "#ffffff"
    textColor: "{colors.steel}"
    height: "60px"
---

# Design System: Adam W. Duran

## 1. Overview

**Creative North Star: "The Engineer's Editorial"**

This is the personal site of an engineering educator and program builder, and it should read like a well-edited publication run by someone who actually builds things. Magazine-grade editorial rigor (serif display type, generous measure, deliberate hierarchy) meets engineering precision (a disciplined navy/steel structure, exact spacing, one accent used on purpose). The serif carries authority while the geometric sans keeps the working text clean and modern. Gold is the single distinguishing mark, the brushed-brass accent that says "made with care" without raising its voice.

The system is built to earn the trust of a skeptical, time-pressed reader (a faculty peer, a hiring committee, an industry partner) by leading with proof: named programs, real numbers, things that were built. Boldness is welcome, but it comes from committed typography, confident components, and considered depth, never from decoration. Components are **tactile and confident**: a filled navy primary that feels pressable, cards that sit on a real (if quiet) elevation, hover states that respond.

This system explicitly rejects the generic university-CMS faculty homepage (sidebar nav, stock photos, a cramped CV dump, dated type) and the SaaS/startup landing kit (gradient hero, hero-metric template, identical icon-card grids, tracked-uppercase eyebrows on every section).

**Key Characteristics:**
- Editorial serif display over a clean geometric sans body
- Navy/steel authority structure with a single gold accent
- Tactile, confident components on quiet resting elevation
- Proof-forward layout: evidence leads, decoration never does
- Light and dark modes, both first-class

## 2. Colors

A restrained, professional palette: a deep navy-to-steel spine for structure and text, soft cool neutrals for ground, and a single brushed-gold accent that carries all the warmth and distinction.

### Primary
- **Brushed Gold** (#c4913c): The one accent. Eyebrow labels, link hover, focus rings, the skip-link, the avatar border, the hero glow. Its scarcity is its power; it marks what matters and nothing else. **Gold-Light** (#d4a84e) is its hover/secondary step.

### Neutral
- **Midnight Navy** (#1a2332): Display headings, the dark-mode canvas, the filled primary button. The authority color.
- **Steel Slate** (#2d3a4a): Dark-mode surfaces and the secondary structural tone (slate).
- **Steel Blue** (#4a5e75): Working body text in light mode, UI strokes, secondary labels.
- **Ink Body** (#3a3f47): Default long-form body text (lifts to #d1d5db in dark mode).
- **Caption Gray** (#6b7280): Muted captions, metadata, fine print (lifts to #9ca3af in dark mode).
- **Mist** (#e8ecf1): Light borders and dividers; readable text on dark surfaces.
- **Cloud** (#f4f6f8): The light-mode background tint and the hero gradient's warm-cool ground.

### Named Rules
**The One Accent Rule.** Gold appears on no more than ~10% of any screen. It is the only saturated color in the system; if a second accent feels necessary, the layout is wrong, not the palette.

**The Gold-on-Light Caution.** Brushed Gold (#c4913c) is a mid-tone. Never set it as body text on cloud or white (it fails 4.5:1). Gold is for marks, borders, and large/bold accents; for gold-on-light text, darken toward #9a6f28 or use it at display weight only.

## 3. Typography

**Display Font:** Source Serif 4 (with Georgia, serif fallback)
**Body Font:** DM Sans (with system-ui, sans-serif fallback)

**Character:** A contrast-axis pairing done right: an optical-size serif with genuine editorial warmth against a clean geometric sans. The serif gives headings gravitas and a published feel; DM Sans keeps the dense working text (labels, metadata, body) crisp and contemporary. Never blur the line by adding a third sans.

### Hierarchy
- **Display** (Source Serif 4, 700, ~3rem, line-height 1.1): The hero name and top-of-page statements. Tight leading, slightly negative tracking.
- **Headline** (Source Serif 4, 600, ~1.875rem, line-height 1.2): Section headings.
- **Title** (Source Serif 4, 600, ~1.125rem, line-height 1.3): Card titles, course names, sub-section heads.
- **Body** (DM Sans, 400, ~1rem, line-height 1.6): Long-form and descriptive text. Cap measure at 65–75ch.
- **Label** (DM Sans, 600, ~0.7rem, letter-spacing 0.12em, uppercase): The gold eyebrow (course codes, "Working on", section kickers).

### Named Rules
**The Serif-Authority Rule.** Every heading is serif; every functional/working string (labels, nav, metadata, buttons) is sans. The split is the system's voice; do not mix it.

**The One Eyebrow Rule.** The gold uppercase label is a real device, not scaffolding. Use it where it carries information (a course code, a status). Do not stamp it above every section; a kicker on every block is the SaaS tell, not editorial voice.

## 4. Elevation

The system is **quiet-depth**: surfaces rest on a low, ambient elevation rather than sitting fully flat, and they respond to interaction with a confident lift. Depth is also carried tonally (white cards on cloud/mist; slate surfaces in dark mode) and by the gold border tint that appears on hover. The fixed nav uses a backdrop blur over a near-opaque white/navy to float above content.

### Shadow Vocabulary
- **Ambient Rest** (`box-shadow: 0 1px 3px rgba(26,35,50,0.06), 0 1px 2px rgba(26,35,50,0.04)`): The default resting shadow for cards and raised surfaces. Barely there; reads as "lifted off the page," not "drop-shadowed."
- **Interaction Lift** (`box-shadow: 0 14px 24px -14px rgba(0,0,0,0.22)`): The hover/focus response (the existing `card-lift`). Pairs with a 4px upward translate and a gold border tint. In dark mode the lift shadow shifts to `rgba(255,255,255,0.10)`.

### Named Rules
**The Quiet-Depth Rule.** Resting elevation is whisper-low (the Ambient Rest token); the drama lives in the *change* on hover, not the resting state. If a resting shadow is visible from across the room, it is too heavy.

## 5. Components

Components are tactile and confident: they feel pressable and they respond, without becoming loud.

### Buttons
- **Shape:** Gently rounded (md, 6px) for the primary; small radius (sm, 4px) for ghost actions.
- **Primary:** Filled Midnight Navy (#1a2332) with white text, padding 12px 28px. The confident CTA. On hover it lifts (Interaction Lift shadow + 2px translate) and shifts to Steel Slate (#2d3a4a).
- **Ghost (secondary):** Transparent with a steel/30 border and steel text, padding 8px 16px. On hover the border and text both shift to gold. This is the existing link-action pattern (email, LinkedIn, Scholar) and remains the default for inline secondary actions.
- **Focus:** Visible gold focus ring on all interactive elements; never remove the outline without replacing it.

### Cards / Containers
- **Corner Style:** Rounded md (6px).
- **Background:** White in light mode; slate/40 in dark mode.
- **Shadow Strategy:** Ambient Rest by default; Interaction Lift on hover (see Elevation).
- **Border:** 1px mist (light) / steel-30 (dark), shifting to gold/55 on hover.
- **Internal Padding:** 24px (lg).
- **Anatomy:** Gold uppercase eyebrow (code/kicker) → serif title → sans caption/description.

### Navigation
- **Style:** Fixed top bar, 60px tall, near-opaque white/97 (navy/97 in dark) with a small backdrop blur, bottom border gold/20.
- **Typography:** Serif logo wordmark; sans nav links (steel, hover to gold).
- **States:** Links transition color to gold on hover/active. Mobile: hamburger toggles a bordered drawer; a skip-link focuses to a gold-on-white pill.

### Inputs / Fields
Forms are minimal on this site (contact is mailto-first). When fields are needed, follow the ghost-button language: 1px steel/30 stroke, white/transparent fill, md radius, gold-border focus. Do not introduce a heavier input chrome than the buttons carry.

## 6. Do's and Don'ts

### Do:
- **Do** lead every section with proof (named programs, real numbers, built outcomes); let evidence carry the page.
- **Do** keep gold to ~10% of any screen, as marks, borders, and accents only.
- **Do** use serif for all headings and DM Sans for all working text; hold the split.
- **Do** keep body measure at 65–75ch and body contrast at 4.5:1 (push toward 7:1 / AAA where the palette allows).
- **Do** make components tactile: filled navy primary, ambient resting shadow, a real hover lift with the gold border tint.
- **Do** honor `prefers-reduced-motion` with a crossfade or instant fallback for every transition.

### Don't:
- **Don't** build the generic university-CMS faculty homepage: no sidebar nav, stock photography, cramped CV dump, or dated typography.
- **Don't** reach for SaaS/startup landing tropes: no gradient-text headings, no hero-metric template, no identical icon-heading-text card grids, no tracked-uppercase eyebrow above every section.
- **Don't** set Brushed Gold (#c4913c) as body text on light backgrounds; it fails contrast. Darken it or use display weight.
- **Don't** add a third type family or break the serif-heading / sans-body split.
- **Don't** let resting shadows get heavy; the drama is in the hover change, not the rest state (the Quiet-Depth Rule).
- **Don't** introduce a second saturated accent; gold is the only voice (the One Accent Rule).
