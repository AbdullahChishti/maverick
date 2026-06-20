# Round 2 Critique — Services

**Target:** `app/sections/Services.tsx`  
**Compared against:** `Hero.tsx`, `Proof.tsx`, `globals.css`, prior reviews  
**Date:** 2026-06-19  
**Lens:** Ruthless senior design critic — hero-redundancy, noise, filler

---

## SCORE: 4/10

The bento grid is the one legitimate reason this section exists. Everything above it — and most of what's inside the cards — reads like a second, slower restatement of the Hero. Round 1 fixes (unified intro, grid math, featured tile, a11y) improved craft but made the *narrative* redundancy worse: the H2 now nearly quotes the Hero subhead, and "Capabilities" appears three times before a user sees a single differentiated service claim.

---

## Specific flaws

### Hero-redundancy

- **Headline echoes Hero subhead verbatim.** Hero already closes with *"from strategy to production"*; Services opens with the same arc dressed up as an H2:

```80:82:app/sections/Hero.tsx
            Our founders led AI and cloud platforms at Microsoft, OpenAI, and
            Google. Now we do the same for you — from strategy to production.
```

```197:202:app/sections/Services.tsx
                <h2
                  id="services-heading"
                  className="text-[1.75rem] sm:text-h2 lg:text-[2.5rem]"
                >
                  From strategy to production systems
                </h2>
```

  The user scrolls past a full-viewport Hero, clicks "Capabilities ↓", and lands on a section whose headline completes the sentence they just read. That is not a new chapter — it is a stutter.

- **"Capabilities" is triple-stacked before content.** Hero scroll cue → Services overline → nav link all say the same thing:

```123:125:app/sections/Hero.tsx
            <span className="text-overline font-medium uppercase">
              Capabilities ↓
            </span>
```

```196:196:app/sections/Services.tsx
                <p className="overline mb-grid-1.5">Capabilities</p>
```

```7:8:app/components/Navigation.tsx
const navLinks = [
  { href: "#services", label: "Capabilities" },
```

  The handoff from Hero to Services feels like one continuous band, not a distinct section type.

- **Section header clones Hero's editorial device without Hero's scale.** Same ghost numeral scale (`text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]`), same `overline + headline` stack, same `flex items-end gap-grid-4` — but on a gray full-width `.section` pad instead of viewport height. It is a *mini-hero*, not a catalog header:

```188:204:app/sections/Services.tsx
            <div className="flex items-end gap-grid-4 sm:gap-grid-6">
              <span
                className="font-semibold tabular-nums leading-none tracking-tighter text-foreground/10"
                aria-hidden
              >
                <span className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]">02</span>
              </span>
              <div>
                <p className="overline mb-grid-1.5">Capabilities</p>
                <h2
                  id="services-heading"
                  className="text-[1.75rem] sm:text-h2 lg:text-[2.5rem]"
                >
                  From strategy to production systems
                </h2>
              </div>
            </div>
```

- **Intro paragraph re-lists what the grid will show.** Hero promises strategy → production; Services intro enumerates five practice areas the cards immediately repeat:

```8:9:app/sections/Services.tsx
const SERVICES_INTRO =
  "Five integrated practices — AI, data, cloud, automation, and modernization — delivered by one team from discovery through scale.";
```

  Two full paragraphs of setup (intro + H2 implication) before the bento delivers anything the Hero didn't already imply.

- **Verdict on hero-redundancy:** Not a full-bleed second Hero (no gradient, no CTA, no `min-h-[100dvh]`). But the header block + intro function as a **redundant narrative band** — the user's complaint is valid even if the visual treatment differs.

---

### Visual noise

- **Six ghost numerals in one viewport.** Section header `02` at `text-foreground/10` plus five card watermarks at `text-foreground/[0.04]` — same motif, two opacities, zero wayfinding value:

```112:116:app/sections/Services.tsx
      <div className="pointer-events-none absolute right-grid-4 top-grid-4 select-none font-semibold tabular-nums tracking-tighter text-foreground/[0.04] sm:right-grid-5 sm:top-grid-5">
        <span className={featured ? "text-[5rem] sm:text-[6.5rem] lg:text-[7.5rem]" : "text-[3.5rem] sm:text-[4.5rem]"}>
          {service.number}
        </span>
      </div>
```

  `globals.css` defines `.section-index` and `.card-index` precisely to prevent this ad-hoc sprawl — Services ignores both.

- **Triple index per card.** Each tile carries (a) 3.5–7.5rem ghost numeral, (b) accent `01` in meta row, (c) section-level `02`. Three numbering systems active simultaneously:

```119:123:app/sections/Services.tsx
        <div className="mb-grid-4 flex items-center gap-grid-2">
          <span className="text-caption font-medium tabular-nums text-accent">{service.number}</span>
          <span className="h-px max-w-[48px] flex-1 bg-border" />
          <Icon className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} aria-hidden />
        </div>
```

- **Meta row is decorative lint.** Hairline + 16px muted icon adds no information the title doesn't carry. Five identical micro-rows = visual rhythm without meaning.

- **17 capability pills = 17 inert chips.** Rounded-full borders mimic interactive tags (Proof industry tags hover; these don't). They look clickable and dead-end:

```150:158:app/sections/Services.tsx
      <div className="relative z-10 mt-grid-5 flex flex-wrap gap-grid-1.5">
        {service.capabilities.map((cap) => (
          <span
            key={cap}
            className="rounded-full border border-border-subtle bg-surface-subtle px-grid-2 py-grid-0.5 text-caption text-muted-foreground"
          >
            {cap}
          </span>
        ))}
      </div>
```

- **Featured tile treatment is cosmetic, not informational.** Accent bar + `bg-accent-subtle/40` + larger type — but content depth matches siblings except one orphan proof line on card 01 only.

- **Mobile scroll weight.** Five cards at `min-h-[220px]`–`min-h-[360px]` plus header + intro = a long mid-page slog before Proof. The bento story collapses on mobile; nothing replaces it.

---

### Text noise

- **Four text layers per card:** index + title + tagline + pills. Example — "01" appears twice, then title, then tagline restating title, then four noun pills restating tagline:

```125:141:app/sections/Services.tsx
        <h3
          className={`mb-grid-2 font-semibold tracking-tight text-foreground ${
            featured
              ? "font-[family-name:var(--font-display)] text-[1.5rem] leading-[1.15] sm:text-[1.75rem] lg:text-[2rem]"
              : "text-h3"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`max-w-prose text-muted-foreground ${
            featured ? "text-body-lg" : "text-body-sm sm:text-body"
          }`}
        >
          {service.tagline}
        </p>
```

- **Intro duplicated across breakpoints** — same string, two placements (desktop right-rail vs mobile block). Not contradictory anymore (Round 1 fix), but still two render paths for one sentence:

```205:218:app/sections/Services.tsx
            <p className="hidden max-w-xs text-right text-body-sm text-muted-foreground lg:block">
              {SERVICES_INTRO}
            </p>
          </motion.div>

          <motion.p
            ...
            className="max-w-content text-body-lg text-muted-foreground lg:hidden"
          >
            {SERVICES_INTRO}
          </motion.p>
```

- **Featured proof line is orphaned.** One hardcoded claim on card 01 with no link, no client name, no metric — reads like placeholder copy left in production:

```143:147:app/sections/Services.tsx
        {featured && (
          <p className="mt-grid-3 max-w-prose text-body-sm font-medium text-foreground/80">
            Deployed LLM systems for regulated financial institutions.
          </p>
        )}
```

---

### Useless content

- **Pills are feature buckets, not buyer signals.** "Migration," "Warehousing," "Integration," "Modernization" tell a CIO *what drawer you have*, not risk reduced or time-to-value. They justify no screen real estate.

- **Icons are redundant with titles.** Brain/Database/Cloud/Bot/Rocket at 16px stroke don't disambiguate anything in an enterprise services grid.

- **"Digital Transformation" as service #05** is a catch-all wastebasket — every SI has this tile. It signals "we couldn't pick a fifth specialty."

- **No interaction model.** Cards are `<article>` dead ends — no links, no hover, no `#contact` scoping. Hero's CTA energy dies here.

- **Content overlaps Proof.** Proof already claims "AI-Native from day one," "Cloud-first architecture," "Outcomes, not outputs." Services re-argues the same territory with thinner nouns.

---

### Generic filler

- **Section intro — SI brochure template:**

```8:9:app/sections/Services.tsx
const SERVICES_INTRO =
  "Five integrated practices — AI, data, cloud, automation, and modernization — delivered by one team from discovery through scale.";
```

  "Integrated practices," "one team," "discovery through scale" — zero Maverick specificity. Could be Accenture, Deloitte, or any mid-tier shop.

- **"AI & Generative AI"** — keyword stacking; "Generative AI" adds nothing "AI" didn't say.

- **Cloud tagline:** *"Cloud-native architecture, migration, and infrastructure that scales."* — three buzzwords, no buyer outcome.

- **Digital Transformation tagline:** *"Modernize legacy platforms and products without stopping the business."* — the universal modernization promise; interchangeable with 500 vendor sites.

- **Automation pills include "RPA"** — signals 2018 automation shop, not AI-native ops (contradicts Hero/Proof positioning).

---

### Design flaws

- **Ignores own design system.** `globals.css` ships `.section-index`, `.list-index`, `.card-index`, `.section-title` — Services uses inline arbitrary sizes and duplicate font-family strings instead.

- **Weak typographic hierarchy vs Proof.** Proof H2 uses display-adjacent scale on dark band with stats and client outcomes. Services H2 is semibold sans at `text-[1.75rem]` — the weakest headline in the numbered sequence despite being the page's primary catalog.

- **Featured cell doesn't earn 2-row span on mobile.** `featured` adds ~60px and display font on title only; on `grid-cols-1` the bento concept vanishes with no replacement (accordion, priority stack, etc.).

- **Gray band (`bg-surface-subtle`) without purpose.** Hero is white; Services is gray; Proof is dark impact. The gray reads as "another full section pad" rather than a distinct content surface — contributes to the "endless bands" feeling.

- **Animation parity improved but pattern is identical to Hero.** Same `fadeUp` custom delay stagger — sections blur together motion-wise.

---

## Concrete recommendations

### 1. Collapse the header — kill the mini-hero

**Cut:** Ghost `02`, overline, H2, and `SERVICES_INTRO` block (lines 180–218).

**Replace with a compact rail** — one line, left-aligned, no watermark numeral:

```tsx
<div className="mb-grid-8 flex items-baseline justify-between border-b border-border pb-grid-4">
  <h2 id="services-heading" className="section-title text-h3 sm:text-h2">
    What we build
  </h2>
  <span className="list-index hidden sm:inline">02</span>
</div>
```

Use `.list-index` (accent, small) — not `.section-index` (ghost, huge). The section should read as a **catalog**, not a second positioning statement.

### 2. Rewrite H2 to avoid Hero echo

| Current | Replacement |
|---------|-------------|
| `From strategy to production systems` | **`Production systems across five domains`** or **`Enterprise delivery domains`** |

Hero owns the strategy→production arc. Services should answer *what*, not restate *how*.

### 3. Cut or radically shorten intro

**Delete `SERVICES_INTRO` entirely.** The grid is self-documenting. If a line is needed:

> **One team. Five domains. No handoffs between vendors.**

12 words. No practice enumeration.

### 4. Collapse card numbering to one system

**Remove ghost watermarks** (lines 112–116). Keep accent `list-index` in meta row only — or drop meta row entirely and lead with title.

**Remove meta row hairline + icon** — replace with nothing, or a single `list-index` prefix:

```tsx
<p className="list-index mb-grid-2">{service.number}</p>
<h3 className="section-title text-h3">{service.title}</h3>
```

### 5. Cut pills to max 2 per card — or delete them

Pills duplicate taglines. Either:

- **Delete all pills**, let tagline carry scope, or
- **Replace with one proof chip each:** e.g. AI card → `SOC 2–aligned LLM deployments` instead of four nouns.

### 6. Rewrite service copy (exact replacements)

| # | Title (current → new) | Tagline replacement |
|---|----------------------|---------------------|
| 01 | AI & Generative AI → **AI & Intelligent Systems** | *Executive AI strategy, production LLMs, and governed agents — not pilots.* |
| 02 | Data & Analytics → keep | *Pipelines and models your leadership team uses weekly, not quarterly.* |
| 03 | Cloud Solutions → **Cloud & Platform Engineering** | *Migration and multi-cloud ops with security review built in, not bolted on.* |
| 04 | Intelligent Automation → **Workflow Intelligence** | *Automate handoffs inside ERP, CRM, and custom systems you already run.* |
| 05 | Digital Transformation → **Application Modernization** | *Rebuild legacy products on modern stacks without a big-bang cutover.* |

**Cut "RPA" pill** → replace with `Process orchestration` or delete.

### 7. Make featured tile carry real proof — or don't feature it

Either expand card 01 with a linked case line:

> *J.P. Morgan — production LLM workflows for enterprise risk analysis.*

…or remove `featured` sizing entirely and use a flat 2×3 grid. A bigger box with the same generic content is noise, not hierarchy.

### 8. Visual distinction from Hero (explicit)

| Hero | Services |
|------|----------|
| Full viewport, white, centered column | **Compact top border, no ghost numeral, flush left** |
| Display H1, subhead, CTAs | **Smaller H2, no intro paragraph, grid immediately** |
| Atmospheric blur | **No decoration — flat gray or white matching Proof transition** |
| "Capabilities ↓" scroll cue | **Cue lands on grid, not another headline stack** |

Consider **white background** (`bg-surface`) to break the band rhythm, or embed Services as a **subsection inside a lighter Proof lead-in** if the page keeps sagging.

### 9. Add one interaction minimum

Each card → `href="#contact"` with scoped context, or `card-interactive` + hover border. Dead tiles after Hero's strong CTA is a conversion leak.

### 10. Align nav/overline once

Pick **"Capabilities"** or **"Services"** everywhere. Nav already says Capabilities; section overline matches — good. Don't add a third label.

---

## Verdict

**Rework** — keep the section (the homepage needs a service catalog), but **gut the header band and halve the text inside each card**. Today it functions as a redundant narrative interlude between Hero and Proof: same promise, louder grid, weaker copy. The bento justifies existence; the mini-hero header and filler layers do not.
