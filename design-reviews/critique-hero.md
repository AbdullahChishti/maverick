# Hero + SignalGraph — Design Critique

**Date:** 2026-06-20  
**Scope:** `app/sections/Hero.tsx`, `app/components/SignalGraph.tsx`  
**Copy rule applied:** Hero owns **promise + CTA only** — no vendor/client names, no pedigree, no scope lists.

---

## Overall Score: **7.1 / 10**

The hero has a strong regulatory promise, a coherent Signal Slate token system, and thoughtful motion/accessibility defaults. It undermines its own minimalism by stacking **four parallel narrators** (subhead, journey timeline, SignalGraph caption, status strip) that all tell the same “architecture → production” story. The result reads competent B2B consulting, not the Linear-grade AI-native opening the palette and typography suggest.

---

## Per-Dimension Scores

| Dimension | Score | One-line read |
|-----------|------:|---------------|
| **Layout** | 7.5 | Solid 12-col split and vertical seam; copy column is vertically overloaded. |
| **Visual appeal** | 7.0 | Restrained backdrop and accent teal land well; framed graph card + glow feel stock. |
| **Minimalism** | 5.5 | Too many widgets for a “promise + CTA” hero — journey, figcaption, and strip compete. |
| **Typography** | 8.0 | IBM Plex hierarchy is premium; manual H1 line breaks create an orphan middle line. |
| **Motion** | 7.5 | Staggered reveal + `prefers-reduced-motion` are excellent; graph drift is decorative noise. |
| **Whitespace** | 6.5 | Full viewport height is used, but cognitive density is high — not airy. |
| **AI-native professional feel** | 7.5 | “Regulators sign off on” is differentiated; process timeline reads generic agency. |
| **Copy placement** | 6.0 | Promise and primary CTA are strong; secondary narrative pushes CTAs down the stack. |

---

## Strengths

1. **Headline promise is specific and ownable.** *“Production AI the regulators sign off on.”* with accent on the payoff line avoids generic “enterprise AI” filler and matches the governance positioning.

2. **Design system execution is mature.** `text-display` clamp, `section-tag`, grid spacing tokens (`mt-grid-*`, `gap-grid-*`), rule borders, and dot-grid fade read as one intentional system — not one-off Tailwind.

3. **Motion is disciplined.** Shared `ease` curve, staggered `custom` indices, and `useReducedMotion()` on the text reveal set a professional baseline. Global reduced-motion CSS correctly disables `signal-pulse` and `signal-drift`.

4. **SignalGraph metaphor aligns with brand.** Review → Build → Live on an ascending path with accent “live” node communicates pipeline maturity without naming vendors.

5. **Accessibility basics are present.** `aria-labelledby`, journey `role="list"`, decorative layers marked `aria-hidden`, graph wrapper `aria-hidden="true"`.

6. **Copy rule compliance on names.** Current hero carries **no** Microsoft/OpenAI/Google or J.P. Morgan/Barclays strings — correct per ownership rules (pedigree belongs in Founders; clients elsewhere if needed).

7. **Primary CTA uses the accent button system.** `.btn-primary` with arrow micro-interaction matches nav and Contact — no black/accent split.

---

## Issues (P0 / P1 / P2)

### P0 — Structural / copy ownership

| # | Issue | Evidence | Impact |
|---|-------|----------|--------|
| P0-1 | **Hero narrates the journey four times.** Subhead (“architecture review to production”), journey timeline (01/02 steps), SignalGraph figcaption (“Architecture review → production sign-off”), and status strip (“Architecture → production”) all restate the same arc. | `Hero.tsx` lines 96–97, 100–147, 189–191, 206–210 | Violates “promise + CTA only”; blurs section ownership with Founders/Services; increases scroll before conversion. |
| P0-2 | **Journey timeline is a second hero.** Two-step vertical timeline with numbered nodes is process content, not promise. It duplicates SignalGraph semantically (Review/Live phases). | `journeySteps` + `SignalGraph` node labels | Hero becomes a mini case-study; primary CTA drops on mobile/tablet. |
| P0-3 | **Status strip is a fifth headline.** Three uppercase trust chips (“Governed by design”, “Regulatory scrutiny ready”, “Architecture → production”) function as a secondary value-prop band inside the hero shell. | Bottom `motion.div` status strip | Reads like a footer or Services teaser; breaks single-message discipline. |

### P1 — Layout, conversion, visual craft

| # | Issue | Evidence | Impact |
|---|-------|----------|--------|
| P1-1 | **Awkward H1 line break.** Line 2 is isolated article *“the regulators”* — weak scan pattern on mobile. | `["Production AI", "the regulators", "sign off on."]` | Headline rhythm feels edited for animation, not reading. |
| P1-2 | **CTAs deprioritized by stack order.** Tag → H1 → subhead → journey (~120px+) → CTAs. On common laptop/mobile heights, “Start a brief” sits at or below the fold. | `mt-grid-8` journey + `mt-grid-10` CTAs | Conversion friction despite strong button styling. |
| P1-3 | **Dual CTA splits intent.** Primary `#contact` vs secondary `#founders` (“Meet the team”) invites exploration before commitment. | Two anchor CTAs | Acceptable for some brands; conflicts with minimal promise hero. |
| P1-4 | **SignalGraph reads as a bordered widget.** Raised surface + `border-rule` + `shadow-xs` + padding frames the viz like a dashboard card, not an integrated editorial figure. | `figure` > bordered `div` wrapper | Generic SaaS hero pattern; fights the otherwise flat Swiss layout. |
| P1-5 | **Glow contradicts hero restraint.** Hero comment says “no glow blob”; SignalGraph still renders `blur-3xl` accent glow behind the SVG. | `SignalGraph.tsx` lines 17–21 | Visual inconsistency; slightly “AI startup orb” despite polish elsewhere. |
| P1-6 | **Subhead partially duplicates H1.** “Production” + “architecture review to production” overlap the headline’s regulatory-production claim. | Subhead line 96–97 | Word inflation; subhead should clarify *how*, not restate *what*. |

### P2 — Polish

| # | Issue | Evidence | Impact |
|---|-------|----------|--------|
| P2-1 | **Overline is brand name, not category.** `section-tag` shows “Mavverik” while nav already displays wordmark — redundant identity signal. | Line 65 | Missed chance for “AI-native consulting” category frame (Footer/metadata still use it). |
| P2-2 | **`signal-drift` on entire SVG.** 6s vertical float on the whole graph feels playful vs. governance tone. | `.signal-drift` on `<svg>` | Subtle uncanny motion; line-draw alone would suffice. |
| P2-3 | **Center checkmark is visual noise.** 35% opacity check at graph center competes with node labels and active pulse. | `SignalGraph.tsx` lines 105–116 | Adds icon clutter without new information. |
| P2-4 | **Figcaption repeats graph labels.** Caption restates what Review/Build/Live nodes already show. | `figcaption` line 189–191 | Redundant accessible text for decorative figure. |
| P2-5 | **Journey connector hidden on mobile.** Vertical rule `hidden sm:block` — timeline loses structure on smallest screens. | Line 112 | Steps feel like loose list items on mobile. |

---

## SignalGraph — Focused Assessment

**Score: 7.0 / 10** as a hero visual; **5.5 / 10** for minimalism inside a promise-only hero.

| Aspect | Assessment |
|--------|------------|
| **Concept** | Clear governance pipeline metaphor; ascending curve implies maturation. |
| **Craft** | Concentric rings, dashed orbit, stroke-draw animation, active node pulse — technically solid. |
| **Brand fit** | Teal accent + mono labels match Signal Slate; glow and float undercut seriousness. |
| **Redundancy** | Node labels + Hero journey + figcaption triple the same story. |
| **Scale** | `max-w-[320px]` → `lg:max-w-md` is modest; on xl the right column can feel empty relative to dense copy column. |

---

## Concrete Redesign Recommendations

### 1. Collapse to one message channel (P0)

**Target structure (desktop + mobile):**

```
[category tag]     optional, mono
[H1 promise]       2 lines max, balance-driven breaks
[one subhead]      outcome / accountability — no journey verbs
[primary CTA]      + optional text-link secondary
[SignalGraph]      full-height visual, no caption
```

**Delete or relocate:**

- Remove `journeySteps` block from Hero → move to Services intro or a dedicated “How we work” band if still needed.
- Remove status strip from Hero → merge chips into Services or Proof section headers, one chip each max.
- Remove `figcaption` from SignalGraph figure — nodes already label the metaphor.

### 2. Fix headline rhythm (P1)

Replace animation-driven breaks with reading-driven breaks:

| Option A (regulatory punch) | Option B (two-line clean) |
|-----------------------------|---------------------------|
| Line 1: `Production AI` | Line 1: `Production AI the` |
| Line 2: `the regulators sign off on.` | Line 2: `regulators sign off on.` |

Use `text-balance` on a single `h1` string where possible; animate opacity only, not per-line `y` transforms, to avoid orphan lines.

### 3. Tighten subhead — clarify without repeating (P1)

**Current:** *One senior team, accountable from architecture review to production.*

**Recommended:** *One senior team. Accountable from first review to sign-off.*

- Drops “architecture” and “production” (owned elsewhere).
- Keeps accountability promise Hero should own.

### 4. CTA placement (P1)

- Move CTAs to `mt-grid-6` directly under subhead (remove journey gap).
- Primary: **Start a brief** → `#contact` (keep).
- Secondary: demote to inline text link (`Meet the founders →`) or remove; Founders is one nav click away.

### 5. SignalGraph integration (P1)

| Change | Rationale |
|--------|-----------|
| Remove outer bordered card; let graph sit on dot-grid with optional vertical seam only | Editorial figure, not app widget |
| Remove ambient `blur-3xl` glow | Align with Hero backdrop restraint |
| Remove center checkmark | Reduce glyph noise |
| Keep `animate-line-draw` on path only; drop `signal-drift` on SVG | Motion = data arriving, not floating UI |
| On `lg+`, allow graph to scale to `max-w-lg` / bleed slightly into gutter | Balance empty right column |

### 6. Layout variants to A/B (P2)

**Variant A — Split (current, simplified):** 50/50 copy + graph; no strip, no journey.

**Variant B — Stacked editorial:** Centered promise + CTA in upper 55vh; graph as full-width background layer at 15–20% opacity behind copy (graph stays decorative, copy stays legible on raised surface).

**Variant C — Graph-first mobile:** On `< lg`, show compact graph between H1 and subhead (single glance metaphor), CTAs immediately after subhead — graph as punctuation, not appendix.

### 7. Whitespace budget (P2)

- Keep `min-h-[100dvh]` only if above-fold = tag + H1 + subhead + CTA without scroll on 768×1024.
- If graph stays beside copy, reduce `py-grid-16` to `py-grid-12` on lg — vertical padding currently adds to density, not airiness.

---

## Copy Placement — Final Ownership Map

| Element | Keep in Hero? | Owner / note |
|---------|:-------------:|--------------|
| H1 promise | ✅ | Sole owner of “Production AI” + regulatory claim |
| Subhead (accountability) | ✅ | One sentence; no journey map |
| Primary CTA | ✅ | “Start a brief” or “Start a conversation” — pick one site-wide |
| Secondary CTA | ⚠️ | Optional text link only |
| Brand overline | ⚠️ | Prefer category tag over wordmark repeat |
| Journey timeline | ❌ | Services or process section |
| Status strip chips | ❌ | Services / Proof / Contact |
| SignalGraph caption | ❌ | Redundant with node labels |
| Vendor/client names | ❌ | Founders (pedigree), Proof or Contact (clients) — **never Hero** |

---

## Priority Roadmap

| Priority | Action | Expected lift |
|----------|--------|---------------|
| **P0** | Remove journey timeline + status strip + figcaption; single subhead | Minimalism +6, Copy placement +2 |
| **P1** | CTAs directly under subhead; fix H1 breaks; de-card SignalGraph, remove glow | Layout +1, Visual appeal +1, Conversion |
| **P1** | Rewrite subhead to drop journey vocabulary | Copy ownership |
| **P2** | Overline → category; remove drift/checkmark; graph scale pass | Polish + AI-native tone |

**Projected score after P0+P1:** **8.4 / 10** — same tokens and headline strength, with hero finally behaving as a promise surface instead of a compressed homepage.

---

## Reference — Current Copy Inventory (for dedup audits)

| Location | Text |
|----------|------|
| Overline | Mavverik |
| H1 | Production AI / the regulators / sign off on. |
| Subhead | One senior team, accountable from architecture review to production. |
| Journey 01 | Start — First architecture review |
| Journey 02 | Live — Governed systems in production |
| Primary CTA | Start a brief |
| Secondary CTA | Meet the team |
| Figcaption | Architecture review → production sign-off |
| Status strip | Governed by design · Regulatory scrutiny ready · Architecture → production |
| SignalGraph nodes | Review · Build · Live |

**Duplication hotspots:** “architecture review”, “production”, and “governed/regulatory” each appear **3+ times** inside one viewport — the primary drag on minimalism and copy placement scores.
