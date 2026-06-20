# Services — Round 3 Critique

**SCORE: 6.5/10**

Round 2 recommendations landed: the mini-hero is gone, grid math is correct, card noise (pills, ghost numerals, icons, intro paragraph) is stripped, copy is sharper, and a11y parity (`aria-labelledby`, `useReducedMotion`) is in place. The section now reads as a catalog instead of a second Hero — a meaningful jump. It still falls short of Linear/Vercel/Stripe because the bento is text-only, the featured cell wastes vertical space instead of earning it, the bottom row is structurally cramped at `md`, and there is zero interaction or proof anchoring for an enterprise buyer who just saw Microsoft/OpenAI/Google in Founders.

---

## Ranked Weaknesses (most important first, numbered)

1. **Bottom-row cells break at `md` (768–1024px).** Three `md:col-span-2` tiles share only the right half of the grid (~120–160px cell width before padding). With `p-grid-5 sm:p-grid-6`, titles like "Cloud & Platform Engineering" and "Application Modernization" wrap into 4–5 lines or overflow rhythm. This is a layout bug, not a bento choice — the grid only works at `lg+`.

2. **Featured cell reads as "taller white box," not "primary capability."** `justify-between` on a single content block leaves 120–180px of dead air below the tagline in the 2-row span. The left accent bar (`w-1 bg-accent`) and `bg-accent-subtle/40` tint are correct directionally but too subtle against `#f5f4f1` section bg and white siblings. No "Primary practice" label, no client proof, no bottom-anchored metadata — hierarchy is size-only.

3. **Text-only monotony — no visual scan anchors.** Five cells, identical structure (title + tagline), no icons, indices, logos, or subtle background texture. Linear/Vercel/Stripe bento cells use glyphs, gradients, or product chrome so the eye finds structure in <200ms. Here the eye finds five gray paragraphs.

4. **No hover or interaction model.** `group` is applied but unused. Cards are inert `<article>` elements — no `card-interactive`, no `hover:bg-surface-subtle`, no focus ring on a link wrapper, no `#contact` deep-link. After Hero's accent CTA, this is a conversion dead zone.

5. **Inverted visual prominence on row 1.** The Data cell (`md:col-span-6`, single row) gets full width for its tagline; the featured AI cell gets double height but the same horizontal span and less copy density. On desktop, "Data & Analytics" can out-shout "AI & Intelligent Systems" because the featured tile's extra height is whitespace, not content.

6. **Section header lacks sibling-section polish.** Founders and Contact use the accent-dot overline pattern (`h-1.5 w-1.5 rounded-full bg-accent`). Services overline is bare text — the section feels like a wireframe between two finished bands.

7. **"Capabilities" still doubles the nav label.** Nav → `#services` labeled "Capabilities"; section overline → "Capabilities". Hero no longer stacks a third instance (scroll cue removed — good), but the overline adds no information. For enterprise SaaS landing pages, the overline should classify *type* ("Services", "Practice areas") while nav handles wayfinding.

8. **Mobile is five tall cards with no bento story.** Featured adds ~60px and a tint; the asymmetric layout collapses to a uniform stack. No priority signal (expand-first, sticky label, or compact 2-up grid on `sm`) — ~1,200px of scroll before Contact.

9. **Copy is improved but not yet differentiated at category-title level.** "Cloud & Platform Engineering" and "Workflow Automation" could sit on any SI site. Only the AI tagline ("risk team will actually sign off on") and Data tagline ("weekly, not quarterly") carry unmistakable Mavverik voice.

10. **Featured title uses arbitrary font sizes instead of the type scale.** `text-[1.5rem] sm:text-[1.75rem] lg:text-[2rem]` bypasses `text-h3` / `text-h2` tokens defined in `tailwind.config.ts`. Minor, but it prevents responsive harmony with the rest of the page.

---

## Specific Text Rewrites (exact before → after for section heading, overline, and each of the 5 service titles + taglines)

### Section header

| Element | Before | After |
|---------|--------|-------|
| Overline | `Capabilities` | `Practice areas` |
| H2 | `What we build` | `What we build for enterprise teams` |

*Rationale:* Overline stops echoing nav. H2 adds buyer context without repeating Hero's "regulated enterprises" line verbatim.

### Service 01 (featured)

| | Before | After |
|---|--------|-------|
| Title | `AI & Intelligent Systems` | `AI & Intelligent Systems` *(keep)* |
| Tagline | `From executive AI strategy to governed LLM agents your risk team will actually sign off on.` | `Executive AI strategy through governed LLM agents — built for the risk review, not the pilot deck.` |

### Service 02

| | Before | After |
|---|--------|-------|
| Title | `Data & Analytics` | `Data & Analytics` *(keep)* |
| Tagline | `Pipelines and models your leadership uses weekly, not quarterly.` | `Pipelines and models your leadership uses weekly — not another quarterly report.` |

### Service 03

| | Before | After |
|---|--------|-------|
| Title | `Cloud & Platform Engineering` | `Cloud & Platform Engineering` *(keep)* |
| Tagline | `Migration and multi-cloud ops with security review built in.` | `Migrate and operate multi-cloud platforms with security sign-off in the architecture, not at the end.` |

### Service 04

| | Before | After |
|---|--------|-------|
| Title | `Workflow Automation` | `Workflow Automation` *(keep)* |
| Tagline | `Automate handoffs across the ERP, CRM, and custom systems you run.` | `Replace manual handoffs across ERP, CRM, and the custom systems your teams already run.` |

### Service 05

| | Before | After |
|---|--------|-------|
| Title | `Application Modernization` | `Application Modernization` *(keep)* |
| Tagline | `Rebuild legacy products on modern stacks without a big-bang cutover.` | `Rebuild legacy products on modern stacks — phased delivery, no big-bang cutover.` |

### Optional featured proof line (add below tagline on card 01 only)

> `Production LLM systems for regulated financial institutions.`

*Do not name clients until legal clears; this line earns the 2-row span.*

---

## Design Fixes (concrete: grid spans, exact Tailwind classes, spacing, hover treatment, any visual elements to add)

### Grid & responsive layout

**P0 — Fix `md` bottom-row crunch.** Defer 12-col bento until `lg`. At `md`, use a 2-column grid; at `sm`/`base`, stack.

```tsx
// Outer grid wrapper — replace current classes
<div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">

// Per-service span strings — update services array
// Featured (index 0):
"sm:col-span-2 lg:col-span-6 lg:row-span-2"
// Data (index 1):
"sm:col-span-2 lg:col-span-6"
// Cloud, Workflow, App Mod (index 2–4):
"lg:col-span-2"  // full width at base/sm/md; 2-col only at lg+
```

This gives bottom three cells ~50% width at `sm`/`md` instead of ~16%.

**P1 — Alternative bottom-row layout at `lg+`:** If 2-col cells remain tight at `lg`, change bottom row to a full-width 3-up row below the featured block:

```
lg:grid-cols-6 for featured (row-span-2) + data (col-span-6)
Second grid: lg:grid-cols-3 for Cloud / Workflow / App Mod
```

Each bottom cell gets equal ~33% width — better for long titles.

### Featured cell hierarchy

**P0 — Anchor content vertically and add a footer slot.**

```tsx
// ServiceCell article — replace flex classes
className={`group relative flex h-full flex-col p-grid-5 sm:p-grid-6 ${service.span} ${
  featured
    ? "min-h-[280px] bg-accent-subtle/60 sm:min-h-[320px] lg:min-h-[360px]"
    : "min-h-[220px] bg-surface"
}`}

// Inner structure — replace single div
<div className="relative z-10 flex flex-1 flex-col">
  {featured && (
    <span className="mb-grid-3 inline-flex w-fit items-center rounded-full border border-accent/20 bg-accent-subtle px-grid-2 py-grid-0.5 text-caption font-medium text-accent">
      Primary practice
    </span>
  )}
  <h3 className={...}>...</h3>
  <p className={...}>...</p>
  {featured && (
    <p className="mt-auto pt-grid-4 text-body-sm font-medium text-foreground/80">
      Production LLM systems for regulated financial institutions.
    </p>
  )}
</div>
```

- Bump tint: `bg-accent-subtle/40` → `bg-accent-subtle/60` so featured reads on `bg-surface-subtle` section.
- Widen accent bar: `w-1` → `w-1.5` (6px) or add `ring-1 ring-inset ring-accent/10` on featured article.

### Hover & interaction

**P1 — Apply design-system card hover to each cell.**

```tsx
// On motion.article
className={`... transition-colors duration-200 hover:bg-surface-subtle focus-within:bg-surface-subtle ${
  featured ? "hover:bg-accent-subtle/80" : ""
}`}

// Wrap content in link (minimum viable interaction)
<a href="#contact" className="absolute inset-0 z-20 rounded-none focus-visible:outline-none" aria-label={`Discuss ${service.title}`} />
// Add to h3: className includes "group-hover:text-accent transition-colors duration-200"
```

Or use `.card-interactive` patterns from `globals.css` if switching from gap-px grid to bordered cells.

### Visual interest (minimal, on-brand)

**P1 — Add a 32px service glyph per cell** (Lucide, `strokeWidth={1.5}`), top-right or above title:

```tsx
import { Brain, Database, Cloud, GitBranch, Layers } from "lucide-react";
// Icon container:
<span className="mb-grid-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface-subtle text-muted-foreground">
  <Brain className="h-5 w-5" aria-hidden />
</span>
```

**P2 — Subtle index numerals** (one system only — no ghost watermarks):

```tsx
<span className="text-caption font-medium tabular-nums text-accent/70">{String(index + 1).padStart(2, "0")}</span>
```

Place above title, `mb-grid-1.5`. Matches editorial numbering without Round 1/2 noise.

### Section header alignment

**P2 — Match Founders/Contact overline pattern.**

```tsx
<p className="overline mb-grid-1.5 flex items-center gap-grid-1.5">
  <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
  Practice areas
</p>
```

**P2 — Header spacing:** `mb-grid-8` → `mb-grid-6 lg:mb-grid-8` to bring grid closer to headline (catalog rhythm, not chapter band).

### Typography

**P2 — Featured title:** replace arbitrary sizes with `text-h3 sm:text-h2` (from token scale).

**P2 — Bottom-row titles at `lg`:** add `lg:text-h4` or `text-h4 sm:text-h3 lg:text-h4` for 2-col cells to reduce wrap pressure.

### Section surface

**P2 — Consider `bg-surface` instead of `bg-surface-subtle`** on the section, letting the bento frame (`rounded-xl border border-border`) provide separation. Reduces "gray band fatigue" between warm Founders and warm Contact.

### Accessibility

**P1 — If adding `<a>` overlay,** ensure `focus-visible:outline-2 outline-offset-2 outline-accent` (already in globals). Prefer visible focus on the link wrapper, not just hover.

**P2 — `prefers-reduced-motion`:** already handled — no change.

---

## Priority (label each fix P0/P1/P2)

| Fix | Priority |
|-----|----------|
| Defer 12-col bento to `lg`; 1-col / 2-col at smaller breakpoints | **P0** |
| Featured cell: vertical rhythm (`mt-auto` proof line), stronger tint, "Primary practice" label | **P0** |
| Featured title on token scale (`text-h3 sm:text-h2`) | **P2** |
| Hover/focus interaction (`transition-colors`, link to `#contact`, `group-hover` on title) | **P1** |
| Bottom-row 3-up equal-width row alternative at `lg+` | **P1** |
| 32px Lucide icons per cell | **P1** |
| Overline rewrite + accent-dot pattern | **P2** |
| Section bg `bg-surface` vs `bg-surface-subtle` | **P2** |
| Small accent index numerals (01–05) | **P2** |
| Copy refinements (taglines + optional proof line) | **P1** |
| H2 expansion: "What we build for enterprise teams" | **P2** |
| Bottom-row title size reduction at `lg` (`lg:text-h4`) | **P2** |

---

**Round 3 verdict:** The section graduated from "redundant mini-Hero" to "clean service catalog." The remaining gap to world-class is not copy alone — it's **layout at `md`, featured-cell content architecture, and one layer of visual/interactive affordance** so the bento feels designed, not typeset. Fix the `md` grid first; then make the featured AI cell carry proof at the bottom; then add hover + icons. That sequence moves this from competent to credible for a J.P. Morgan buyer scrolling past Founders.
