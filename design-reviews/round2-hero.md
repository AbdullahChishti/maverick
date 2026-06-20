# Round 2 Critique — Hero

**Target:** `app/sections/Hero.tsx`  
**Context:** Homepage renders Hero → Services → Proof → Contact. This is the page's designated opening band (`min-h-[100dvh]`, `id="hero"`). Prior round-1 fixes (single column, merged founder cred, editorial `01`, functional scroll cue) are acknowledged; this review judges what still ships.

---

## SCORE: 6.5/10

The Hero is no longer the worst offender on the page — Services, Proof, and Contact all reuse its ghost-numeral + overline + headline + motion recipe. But as the **one** band allowed to be a full-viewport hero, it still spends above-the-fold budget on redundant labels, unverified name-dropping, and three competing exits. It reads as a competent B2B template that implemented critique notes, not a singular brand moment.

---

## Specific flaws

### Visual noise

- **Full-viewport hero shell is the template the user is complaining about** — even if justified here, the markup commits to the exact pattern other sections mimic:

```34:37:app/sections/Hero.tsx
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={`relative flex min-h-[100dvh] flex-col overflow-hidden bg-white ${anchor}`}
```

- **Decorative blur orb — "restraint" comment oversells a stock SaaS move** — one orb is better than two, but `-right-[15%] -top-[25%] h-[60vh] w-[60vw] rounded-full bg-accent-subtle/50 blur-3xl` is still ambient wallpaper, not Maverick-specific identity:

```39:44:app/sections/Hero.tsx
      {/* Single atmospheric accent — restraint over decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -right-[15%] -top-[25%] h-[60vh] w-[60vw] rounded-full bg-accent-subtle/50 blur-3xl"
        />
      </div>
```

- **Ghost `01` bypasses the design-system token and uses ad-hoc pixel sizes** — `.section-index` exists in `globals.css` (lines 181–184) but Hero inlines `text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]` and `text-foreground/10`, guaranteeing drift from Services/Proof/Contact headers:

```57:64:app/sections/Hero.tsx
            <span
              className="font-semibold tabular-nums leading-none tracking-tighter text-foreground/10"
              aria-hidden="true"
            >
              <span className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]">
                01
              </span>
            </span>
```

- **Staggered entrance on five elements delays the headline** — `staggerChildren: 0.08`, `delayChildren: 0.1`, `duration: 0.6` on overline, H1, subhead, CTAs, and scroll cue. Premium editorial heroes (Linear, Stripe) typically show copy immediately; motion here is polish, not purpose:

```10:31:app/sections/Hero.tsx
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.22, 0.1, 0.22, 1],
      },
    },
  };
```

- **Scroll-cue gradient hairline is pure ornament** — a 1px gradient bar adds no information beyond the linked label:

```126:129:app/sections/Hero.tsx
            <span
              className="block h-8 w-px bg-gradient-to-b from-border to-transparent"
              aria-hidden="true"
            />
```

- **Primary CTA ignores the accent button system** — `globals.css` defines `.btn-primary` on `--accent`; Hero hardcodes `bg-foreground` / `hover:bg-neutral-800`, splitting the page into black CTAs (Hero/Nav) vs blue accent (numerals, featured Services tile):

```88:91:app/sections/Hero.tsx
            <a
              href="#contact"
              className="group inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2.5 rounded-full bg-foreground px-8 py-3 text-body-sm font-medium text-white transition-colors duration-200 hover:bg-neutral-800"
            >
```

### Text noise

- **Overline `Maverick` repeats the nav logo and adds zero orientation** — user already knows the brand from `Navigation`; the slot should say *what* or *why*, not *who* again:

```65:65:app/sections/Hero.tsx
            <p className="overline mb-grid-1.5">Maverick</p>
```

- **Three pre-scroll exits compete for one decision** — primary scroll-to-contact, secondary scroll-to-proof, and tertiary scroll-to-services. For a 4-section minimal page, one primary action + at most one text link is the ceiling:

```84:107:app/sections/Hero.tsx
          <motion.div
            variants={itemVariants}
            className="mt-grid-5 flex flex-wrap items-center gap-grid-4 sm:mt-grid-6"
          >
            <a
              href="#contact"
              ...
            >
              Start a conversation
              ...
            </a>
            <a
              href="#proof"
              ...
            >
              See our work
              ...
            </a>
          </motion.div>
```

```119:125:app/sections/Hero.tsx
          <a
            href="#services"
            className="inline-flex flex-col items-start gap-grid-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <span className="text-overline font-medium uppercase">
              Capabilities ↓
            </span>
```

- **Subhead is 24 words where 12 would suffice** — two sentences when the headline already states the outcome; the second clause (`Now we do the same for you — from strategy to production.`) is conversational padding:

```76:82:app/sections/Hero.tsx
          <motion.p
            variants={itemVariants}
            className="mt-grid-4 max-w-content text-body-lg leading-relaxed text-muted-foreground sm:mt-grid-5"
          >
            Our founders led AI and cloud platforms at Microsoft, OpenAI, and
            Google. Now we do the same for you — from strategy to production.
          </motion.p>
```

- **`from strategy to production` echoes Services H2 verbatim** — Services opens with *"From strategy to production systems"* (`Services.tsx` line 201). Hero and section 02 now tell the same story twice before the user scrolls.

### Useless content

- **Org list without people, roles, or products** — "Microsoft, OpenAI, and Google" as a vertical credibility claim with no names is marketing filler; Proof later names J.P. Morgan and Barclays with engagement context. Hero's version is strictly weaker and redundant with Proof's job:

```80:81:app/sections/Hero.tsx
            Our founders led AI and cloud platforms at Microsoft, OpenAI, and
            Google. Now we do the same for you — from strategy to production.
```

- **Scroll cue duplicates nav** — Nav already exposes "Capabilities" → `#services`. Hero's `Capabilities ↓` is a second nav row at the bottom of the viewport.

### Generic filler

- **Headline is improved but still interchangeable** — *"We build enterprise AI that ships."* is tighter than round-1's hyphen soup, but "enterprise AI" + "ships" is now default positioning for every AI consultancy landing page in 2025–2026. It does not name audience, vertical, or a Maverick-only outcome:

```68:74:app/sections/Hero.tsx
          <motion.h1
            id="hero-heading"
            variants={itemVariants}
            className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground text-balance"
          >
            We build enterprise AI that ships.
          </motion.h1>
```

- **"Now we do the same for you"** — casual, presumptuous, and unearned without named founders or a proof point in the same breath. Reads like slide-deck filler, not institutional copy.

### Design flaws

- **`items-end` baseline on `01` + overline row** — aligns a 5.5rem numeral's bottom edge with a 0.75rem overline baseline; visually awkward and inconsistent with Services/Proof where the numeral pairs with a stacked overline + H2 block:

```53:66:app/sections/Hero.tsx
          <motion.div
            variants={itemVariants}
            className="mb-grid-4 flex items-end gap-grid-4 sm:gap-grid-6"
          >
            <span ...>01</span>
            <p className="overline mb-grid-1.5">Maverick</p>
          </motion.div>
```

- **Entire section is `"use client"` for animation** — forces client JS on the LCP-critical band; headline/subhead could be server-rendered with motion isolated or removed.

- **Vertical budget still pushes scroll cue below fold on short viewports** — `min-h-[100dvh]` + `pt-20 sm:pt-24 lg:pt-28` (nav clearance) + headline + 24-word sub + dual CTAs + bottom scroll cue. On iPhone SE class devices, "Capabilities ↓" may require scroll — undermining its purpose.

- **Does not justify uniqueness vs sibling "hero bands"** — Services, Proof, and Contact all open with the same ghost numeral + overline + display headline + motion stagger. Hero established that template; it now looks like "section 01 of 04" rather than a qualitatively different opening statement. The full-viewport height is the only differentiator.

---

## Concrete recommendations

### Cut (remove entirely)

| Remove | Lines | Why |
|--------|-------|-----|
| Overline `Maverick` | 65 | Redundant with nav; replace with nothing or a one-word category |
| Secondary CTA `See our work` | 98–107 | Nav has "Why Us" → `#proof`; one hero exit only |
| Scroll cue block | 112–132 | Nav covers Capabilities; frees ~80px vertical |
| Blur orb | 40–44 | Flat white hero reads more premium than tinted blur |
| Gradient hairline on scroll cue | 126–129 | Or remove whole cue |

### Rewrite copy

**Headline (pick one — name a buyer or outcome Maverick owns):**

- *"Production AI for regulated enterprises."* (vertical specificity)
- *"We ship the AI systems banks run on."* (ties to Proof clients)
- Keep current only if subhead carries the differentiation — it currently does not.

**Subhead (replace lines 80–81 — one sentence, names + proof, no filler clause):**

> Former Microsoft, OpenAI, and Google platform leads — implementation partners from first architecture review to production.

Or shorter:

> Built by alumni of Microsoft, OpenAI, and Google. One team from discovery through scale.

**Delete** the sentence *"Now we do the same for you — from strategy to production."* — it duplicates Services and adds no new fact.

**Overline replacement (if kept):**

> AI-native consulting

Not the brand name again.

### Structural

1. **Use `.section-index`** instead of inline `text-[3.5rem]…` — wire Hero to the same class Services/Proof use.
2. **One CTA:** `Start a conversation` → `#contact` only. Let nav handle Capabilities and Why Us.
3. **Drop `"use client"`** or limit motion to a single wrapper; show H1 on first paint.
4. **Map primary button to `.btn-primary`** (accent) or document black as intentional — not both.
5. **Reduce height** — `min-h-[85dvh]` or content-driven height so the hero doesn't force empty whitespace on laptop viewports; full viewport is a luxury this copy doesn't earn.

---

## Verdict

**Rework** — Hero earns its slot as the page's only full-viewport opener, but it still behaves like a generic SaaS hero band: redundant label, unverified org list, triple wayfinding, and copy that repeats section 02 before scroll. Cut one CTA, cut the scroll cue, halve the subhead, and sharpen the headline to a Maverick-only claim — or merge founder cred into a single line and let Proof own the names.
