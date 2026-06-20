# Round 2 Critique — Contact

**Target:** `app/sections/Contact.tsx`  
**Reviewed:** 2026-06-19  
**Context:** Homepage order — Hero → Services → Proof → Contact (+ Nav, Footer)

---

## SCORE: 5.5/10

Contact escaped the worst sins of the prior iteration (generic headline, false “Schedule” CTA, triple email repetition). It still behaves like a **fourth numbered content chapter** on a **second dark full-bleed band**, carrying ~120 lines of layout and motion to deliver an email address and a LinkedIn link. Functional, not focused. The page’s complaint — too many hero-like bands with text noise — applies here at the structural level even though the copy is better.

---

## Specific flaws

### Hero-redundancy

- **Fourth instance of the chapter-header band.** Same DNA as Services (`02`) and Proof (`03`): oversized watermark numeral, overline, H2, bottom border. Contact repeats it verbatim at lines 48–71:

```48:71:app/sections/Contact.tsx
        <motion.div
          variants={fadeUp}
          className="mb-grid-10 flex items-end justify-between gap-grid-4 border-b border-[var(--impact-border)] pb-grid-6 lg:mb-grid-12 lg:pb-grid-8"
        >
          <div className="flex items-end gap-grid-4 sm:gap-grid-6">
            <span
              className="font-semibold tabular-nums leading-none tracking-tighter text-[color-mix(in_srgb,var(--impact-fg)_12%,transparent)]"
              aria-hidden
            >
              <span className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]">
                04
              </span>
            </span>
            <div>
              <p className="overline-impact mb-grid-1.5">Contact</p>
              <h2
                id="contact-heading"
                className="text-[1.75rem] font-semibold tracking-tight text-[var(--impact-fg)] sm:text-h2 lg:text-[2.5rem]"
              >
                Tell us what you&apos;re building
              </h2>
            </div>
          </div>
        </motion.div>
```

  Services and Proof use `justify-between` with a **right-rail synthesizing line**. Contact’s header row has **no right column** — dead asymmetry that reads like an unfinished hero band, not a utilitarian close.

- **Stacked dark full-bleed bands.** Proof already uses `.section-impact` (`#0a0a0a`, 112–160px vertical padding). Contact adds `.section-contact` (`#050505`, same padding scale). Footer continues dark (`#030303`). User scrolls through **three near-black slabs** with no light beat between Proof and the end — Contact does not feel like a distinct “finale”; it feels like Proof part two.

- **Hero CTA mismatch.** Hero promises `"Start a conversation"` (scroll to `#contact`). Landing zone is mailto + prose, not a conversation UI. Acceptable for a consultancy, but the **journey framing is hero-sized; the destination is inbox-sized**.

### Visual noise

- **Box-on-box on already-dark canvas.** `.contact-panel` (lines 87–117) adds `rounded-xl border`, inner background mix, badge pill, nested border-top for LinkedIn — decorative layering where the job is “give me the email.”

```87:90:app/sections/Contact.tsx
            <div className="contact-panel">
              <span className="inline-flex items-center rounded-full border border-[var(--impact-border)] px-grid-3 py-grid-1 text-caption font-medium text-[var(--impact-accent)]">
                Reply within one business day
              </span>
```

- **Motion theater on static content.** Framer `staggerChildren`, `useInView`, `fadeUp` on an email block (lines 36–46, 73–86) — animation budget spent where no narrative payoff exists.

- **Giant `04` watermark on dark-on-dark** (lines 57–59) — same visual weight as Services/Proof chapter openers, inappropriate for a contact utility block.

### Text noise

- **Redundant labels.** Section id `contact`, overline `"Contact"` (line 62), H2 `"Tell us what you're building"` (lines 67–68), panel overline `"Reach us"` (line 92) — four ways to say “you’re at contact now.”

- **Mail-client explainer** (lines 101–104) — B2B buyers know what mailto does; reads as padding:

```101:104:app/sections/Contact.tsx
              <p className="mt-grid-2 text-body-sm text-[var(--impact-muted)]">
                Email opens your mail client — include your timeline and
                we&apos;ll take it from there.
              </p>
```

- **Dual promise lines.** Body promises `"30-minute intro call — no pitch deck"` (lines 76–78); badge promises `"Reply within one business day"` (lines 88–90). Both fine alone; together they clutter a section whose primary action is one email link.

### Generic filler

- **Consulting fork opener** (lines 75–78):

```75:78:app/sections/Contact.tsx
            <p className="max-w-md text-body-lg leading-relaxed text-[var(--impact-muted)]">
              Whether you&apos;re modernizing core systems or standing up
              production AI, we&apos;ll map a path in a 30-minute intro call —
              no pitch deck.
            </p>
```

  Could ship on any SI site. “Modernizing core systems OR production AI” is the Services grid restated in question form.

### Useless content (post-Proof echo)

- **Third pass of J.P. Morgan / Barclays credibility** (lines 80–83), adding no new fact after Proof’s detailed client cards:

```80:83:app/sections/Contact.tsx
            <p className="mt-grid-4 text-body-sm text-[var(--impact-muted)]">
              Teams at J.P. Morgan and Barclays trust us with systems that
              ship.
            </p>
```

  Proof already proved this with engagement types and outcomes. Contact should **convert**, not **re-prove**.

### Usability

- **No primary button.** Email-as-display-type (`.contact-email`, lines 94–99) is honest and on-brand — good. But mobile users get a long scroll (header band → left prose → panel) before the actionable address.

- **Weak secondary path.** LinkedIn buried behind a border-top divider (lines 106–116) with no “why LinkedIn vs email” framing — feels appended.

- **No structured intake.** “Include your timeline” is the only guidance; no subject-line hint, no Calendly, no “what to expect in 3 steps” — fine for minimalism, but then **cut the prose column** that pretends to sell the call.

### Design flaws

- **Split token systems for the same job.** Proof uses `.section-impact` / `--impact-bg`; Contact uses `.section-contact` / hard-coded `#050505` (globals.css lines 308–314). Visually indistinguishable; architecturally duplicated.

- **Two-column grid overweight for content.** `lg:grid-cols-12` with `lg:col-span-5` prose + `lg:col-span-7` panel (lines 73–86) — layout complexity disproportionate to two links.

- **Inline `var(--impact-*)` sprawl** throughout Contact while Hero/Services use Tailwind semantic tokens — Contact reads as a bolt-on dark theme, not one system.

---

## Concrete recommendations

### Cut (delete entirely)

| Remove | Lines | Why |
|--------|-------|-----|
| Entire header band (`04` + overline + H2 + border-b) | 48–71 | Fourth chapter marker; contact needs no second headline after nav CTA |
| Left column both paragraphs | 74–84 | Redundant with Proof + Services; conversion block should be one beat |
| `"Reach us"` overline | 92 | Redundant with section label |
| Mail-client explainer paragraph | 101–104 | Condescending filler |
| J.P. Morgan / Barclays line | 80–83 | Proof already owns client evidence |

### Restructure

1. **Merge visual close with Proof or Footer rhythm.** Option A: end Proof with a single `contact-panel` row (no new section). Option B: keep `#contact` anchor but replace full section with **one horizontal strip**: badge + H2 one-liner + `.contact-email` + LinkedIn inline — no `section-contact` padding stack on top of Proof’s impact band.

2. **Drop `.section-contact` full-bleed band** if Proof stays dark. Use panel-only contrast on `--impact-bg`, or invert: light contact strip after dark Proof for actual visual punctuation.

3. **Remove Framer stagger** from contact block; respect `prefersReducedMotion` with static render.

### Rewrite copy (exact replacements)

**If a minimal headline is kept (inside panel only, not chapter header):**

- **H2:** `Start here` or `Email us` — not `"Tell us what you're building"` (still soft-agency; better than “Let’s build something great” but not a CTA label)

**Single supporting line (max one sentence):**

- Replace lines 75–83 with:  
  `Book a 30-minute intro call by email — we reply within one business day.`

**Badge (keep one promise, not two):**

- `"Reply within one business day"` **or** `"30-minute intro · no pitch deck"` — not both.

**LinkedIn row:**

- `Follow Maverick on LinkedIn` (same link) — drop border-top theater; place as text link beside email on `sm+`.

**Align with Hero CTA:**

- Either change Hero/nav to `"Email us"` / `"Get in touch"`, or add a visible button in Contact: `Start a conversation` → same `mailto:` with prefilled subject `Maverick intro — [Company]`.

### CSS / markup

- Use `.section-impact` OR `.section-contact`, not both concepts on consecutive sections.
- Wire header right-rail **or** remove `justify-between` — never an empty hero row.

---

## Verdict

**Rework** — Keep the `#contact` anchor and the `.contact-panel` / `.contact-email` treatment (they work), but **delete the fourth chapter-header band and left-column prose**; collapse to a single functional CTA module so Contact stops reading as “section 04 hero” and starts reading as “here’s how to reach us.”
