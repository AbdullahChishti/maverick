# Round 2 Critique — Proof

**Target:** `app/sections/Proof.tsx`  
**Compared against:** `Hero.tsx`, `Contact.tsx`, `Services.tsx`, `globals.css`, prior reviews  
**Date:** 2026-06-19  
**Lens:** Ruthless senior design critic — hero-redundancy, noise, filler, credible proof

---

## SCORE: 4/10

Round 1 fixes (full dark band, client cards, three differentiators, dropped timeline/tags) improved *craft* and reduced junk-drawer sprawl. The section still fails its job: nothing here is verifiable, the stats read invented, the client cards read like pitch-deck placeholders, and the block is a fourth editorial “chapter header” on a four-section page — half positioning, half dark-band atmosphere. It is structurally cleaner than the old split panel; it is not proof.

---

## Specific flaws

### Hero-redundancy

- **Same editorial header device as Hero, Services, Contact — third mini-chapter on a four-section page.** Giant ghost numeral, overline, H2, right-rail tagline, bottom border. Proof does not introduce a new visual language; it repeats the template on a dark full-bleed band:

```95:125:app/sections/Proof.tsx
          <div className="flex items-end gap-grid-4 sm:gap-grid-6">
            <span
              className="font-semibold tabular-nums leading-none tracking-tighter"
              style={{
                color: "color-mix(in srgb, var(--impact-fg) 12%, transparent)",
              }}
              aria-hidden
            >
              <span className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem]">
                03
              </span>
            </span>
            <div>
              <p className="overline-impact mb-grid-1.5">Why Us</p>
              <h2
                id="proof-heading"
                className="text-[1.75rem] font-semibold tracking-tight sm:text-h2 lg:text-[2.5rem]"
                style={{ color: "var(--impact-fg)" }}
              >
                Results at enterprise scale
              </h2>
            </div>
          </div>
          <p
            className="max-w-md text-body-sm leading-relaxed sm:max-w-xs sm:text-right lg:max-w-sm"
            style={{ color: "var(--impact-muted)" }}
          >
            We&apos;ve delivered production systems for global institutions —
            here&apos;s how.
          </p>
```

  Hero owns “we ship production AI”; Proof restates “production systems for global institutions.” Same story, darker wallpaper.

- **Hero CTA “See our work →” links here but there is no work.** Hero promises a portfolio moment:

```98:106:app/sections/Hero.tsx
            <a
              href="#proof"
              className="group inline-flex min-h-[44px] items-center gap-1.5 text-body-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              See our work
              <ArrowRight
                className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
```

  Proof delivers unlinked name-drops and unsourced metrics — a broken promise that makes the section feel like a second hero pitch, not evidence.

- **Differentiators duplicate Hero’s positioning, not client outcomes.** Hero: *“We build enterprise AI that ships.”* Proof pillar: *“Production models and agents in 90-day cycles — not pilot purgatory.”* Same “ships vs pilots” axis, no new information layer.

- **Contact repeats the client names again.** Proof cards name J.P. Morgan and Barclays; Contact re-names them two sections later:

```80:83:app/sections/Contact.tsx
            <p className="mt-grid-4 text-body-sm text-[var(--impact-muted)]">
              Teams at J.P. Morgan and Barclays trust us with systems that
              ship.
            </p>
```

  The homepage now runs the same two brands three times (Hero pedigree → Proof cards → Contact echo) without ever showing work product.

### Visual noise

- **Full-bleed dark band (`section-impact`) is the user’s exact complaint pattern.** Proof (`#0a0a0a`) plus Contact (`#050505`) plus footer progression = two consecutive impact bands. Proof is not a distinct *content type*; it is another atmospheric full-width chapter:

```78:83:app/sections/Proof.tsx
    <section
      id="proof"
      ref={sectionRef}
      aria-labelledby="proof-heading"
      className={`section-impact ${anchor}`}
    >
```

- **Four horizontal dividers inside one section.** Header `border-b`, stats `border-b`, differentiators implied top via CSS, client block `border-t`, plus bordered client cards — stacked hairlines on an already dark field. Reads as “designed section” rather than evidence.

- **Design-system fighting via `!important` overrides on pillars.** The component overrides `.proof-pillars` defaults instead of using a variant token — smell of a half-wired pattern:

```155:155:app/sections/Proof.tsx
          <ul className="proof-pillars !mx-0 !max-w-none !border-t-0 !pt-0">
```

- **Repetitive inline `style={{ color: "var(--impact-…)" }}` on nearly every text node** (lines 93–94, 112, 120, 131, 138, 144, 173, 187, 193, 199, 209) instead of `.text-impact` / `.text-impact-muted` utilities defined in `globals.css`. Visual noise in markup; suggests the impact token layer was bolted on, not owned.

- **Motion stagger on four sub-blocks** (`containerVariants`, nested `fadeUpVariants` on header, stats, pillars, cards) — animation theater on content that does not earn the reveal.

### Text noise

- **Four competing labels for one job:** nav/section id says `#proof`, overline says *“Why Us”*, H2 says *“Results at enterprise scale”*, sub-blocks say *“How we deliver”* and *“Selected engagements”*. None say what was proven, to whom, or when.

- **Subhead is a hollow handoff:** *“We've delivered production systems for global institutions — here's how.”* The section never shows “how” — no process artifact, no case link, no quote, no before/after. It is throat-clearing.

- **Disclaimer undermines the cards it follows:**

```207:212:app/sections/Proof.tsx
          <p
            className="mt-grid-6 text-caption"
            style={{ color: "color-mix(in srgb, var(--impact-muted) 70%, transparent)" }}
          >
            Representative engagements. Client names used with permission.
          </p>
```

  Legal hedging immediately after bold bank names tells sophisticated buyers: these may be composite, anonymized, or aspirational. It converts “proof” into “marketing with a footnote.”

### Useless content

- **The differentiators block is a second Why-Maverick inside Proof.** Three pillars of positioning — not evidence — sit between stats and client cards. If you delete this block, the section loses nothing verifiable; it only loses repeated adjectives.

- **“Outcomes, not outputs” / “Measured on uptime, revenue lift, and time-to-production”** asserts measurement without showing a single measured outcome. Pure meta-positioning.

- **Cloud pillar lists hyperscalers** (*“Azure, AWS, and hybrid — built to pass enterprise security review”*) — a capability table row, not proof. Services already owns cloud; this is duplicate territory.

### Generic filler

- **Differentiator titles could ship on any AI consultancy homepage unchanged:**

```13:28:app/sections/Proof.tsx
const differentiators = [
  {
    title: "AI-Native from day one",
    description:
      "Production models and agents in 90-day cycles — not pilot purgatory.",
  },
  {
    title: "Cloud-first architecture",
    description:
      "Azure, AWS, and hybrid — built to pass enterprise security review.",
  },
  {
    title: "Outcomes, not outputs",
    description:
      "Measured on uptime, revenue lift, and time-to-production.",
  },
] as const;
```

  “Pilot purgatory,” “pass enterprise security review,” “revenue lift” — consulting Mad Libs. Zero Maverick-specific mechanism, team, or artifact.

- **Headline *“Results at enterprise scale”* is outcome-shaped but content-free.** Could headline any SI’s About page. No sector, no metric, no named program in the H2 itself.

### Unconvincing proof

- **All three stats are unsourced, undefined, and statistically suspicious:**

```7:11:app/sections/Proof.tsx
const proofStats = [
  { value: "90-day", label: "Average time to production AI" },
  { value: "99.9%", label: "Uptime on managed platforms" },
  { value: "3×", label: "Faster than traditional SI cycles" },
] as const;
```

  - *90-day average* — average of what sample? Which engagements? Production AI defined how (model, agent, workflow)?
  - *99.9% uptime* — whose SLA? Maverick-managed? Client-owned? Over what window? One outage destroys credibility.
  - *3× faster than traditional SI cycles* — “traditional SI” is undefined; no baseline, no comparator, no footnote. Reads fabricated.

  Comment in markup even labels them *“Hard proof metrics”* (line 127) — they are hard *styled*, not hard *evidenced*.

- **Client cards are name-drops with plausible-sounding but unverifiable copy:**

```31:46:app/sections/Proof.tsx
const clients = [
  {
    id: "jpmorgan",
    name: "J.P. Morgan",
    engagement: "Risk & compliance AI",
    outcome:
      "Production LLM workflows for enterprise risk analysis across global operations.",
  },
  {
    id: "barclays",
    name: "Barclays",
    engagement: "Cloud platform modernization",
    outcome:
      "Multi-region trading infrastructure migrated to cloud-native architecture.",
  },
] as const;
```

  No logos, no dates, no program names, no links, no quotes, no third-party validation. *“Production LLM workflows for enterprise risk analysis across global operations”* for J.P. Morgan is an extraordinary claim in text-only form — enterprise procurement will treat it as fiction until corroborated.

- **Only two clients, both Tier-1 banks, with no visual corroboration** — classic logo-wall substitute. Better than three names with Almaghreb, but still the same trust device Hero uses for founder orgs: big names in a list.

- **90-day stat duplicated in differentiator copy** (lines 8 and 17) — one number doing double duty as “metric” and “positioning,” which weakens both.

### Design flaws

- **Section is doing three jobs:** metrics strip + method pillars + client cards. Round 1 correctly killed timeline/tags, but the remainder is still a compressed Why-Maverick + logo wall + stat banner — not a single proof beat.

- **Client cards are boxes on a box** — `rounded-lg border p-grid-6` on `#0a0a0a` with 8% white borders. Same “card in section” pattern Services uses on gray; here it adds depth without adding credibility.

- **Mobile stack order still buries the only quasi-specific content.** Flow: header → three big stats → three pillar rows → two client cards → disclaimer. Users scroll through two screens of assertions before a bank name.

- **Overline “Why Us” vs id `proof` vs nav “Why Us”** — semantic drift. The section is labeled as identity (“why pick us”) while Hero already answered who you are; the user asked for proof, not another positioning pass.

- **`--impact-accent` (#3b82f6) is never used in Proof** despite being the impact system’s accent token — missed opportunity for one verified badge, link, or quote mark; the dark band is monochrome assertion all the way down.

---

## Concrete recommendations

### Cut (remove entirely)

1. **Delete the differentiators block** (lines 152–167) — *“How we deliver”* + three pillars. It repeats Hero/Services positioning and is not proof. If method must live somewhere, one sentence in Services intro or a single Contact line beats three dark-band rows.

2. **Delete or collapse the stats row** unless each stat gets a footnote or source. Unsourced metrics harm credibility more than no metrics.

3. **Delete the disclaimer** *“Representative engagements…”* if you cannot back cards with real case links — or rewrite it to specify what “representative” means (e.g., anonymized composite). As written, it is an anti-proof.

4. **Remove client name echo from Contact** (lines 80–83 in `Contact.tsx`) if Proof keeps client cards — say it once, with evidence, or not at all.

### Keep (narrow the section to one job)

5. **Keep one proof beat only:** either **quantified outcomes** OR **named engagements** — not both at half strength. Recommended: **two client proof lines with logos + one metric each**, integrated into a single row (not three sub-sections).

### Rewrite (exact replacement copy direction)

**If stats stay (each must be footnoted internally or dropped):**

| Current | Replacement |
|---------|-------------|
| `90-day` / *Average time to production AI* | **12 weeks** / *Median time from signed SOW to production LLM in production (n=8 engagements, 2023–2025)* — or delete |
| `99.9%` / *Uptime on managed platforms* | **99.95%** / *Uptime SLA on platforms we operate under contract (last 12 mo.)* — or delete |
| `3×` / *Faster than traditional SI cycles* | Delete — unverifiable without a defined baseline |

**Section header (align id, nav, and copy):**

| Current | Replacement |
|---------|-------------|
| Overline: *Why Us* | **Proof** (match `#proof` and Hero CTA intent) |
| H2: *Results at enterprise scale* | **Production systems at global banks.** |
| Subhead: *We've delivered production systems for global institutions — here's how.* | **Two recent engagements — scope and outcome, not slogans.** |

**Client cards (require specificity or downgrade to anonymous):**

| Current J.P. Morgan outcome | Replacement (example — must be factual) |
|-----------------------------|----------------------------------------|
| *Production LLM workflows for enterprise risk analysis across global operations.* | **Document triage agent for internal risk review — 40% analyst time reduction, live in 14 weeks.** *(only if true; otherwise use anonymized: “Global bank — risk workflow automation”)* |

| Current Barclays outcome | Replacement (example) |
|--------------------------|----------------------|
| *Multi-region trading infrastructure migrated to cloud-native architecture.* | **Trading stack migration to Kubernetes on Azure — 3 regions, zero-downtime cutover.** *(or anonymize)* |

**If you cannot publish specifics:** replace bank names with **“Global tier-1 bank (financial services)”** and drop the disclaimer — honesty beats fake precision.

### Structural

6. **Merge with Contact or Hero if content stays this thin:** one dark close band with **one** client logo row + **one** metric + mailto — delete Proof as a standalone scroll unit.

7. **Fulfill Hero’s “See our work”:** add case-study links or a `/work` page. Without it, rename the CTA to *“Why clients choose us”* and stop pretending there is work to see.

8. **Wire impact utilities** — replace inline `style={{ color: … }}` with `.text-impact` / `.text-impact-muted` / `.border-impact` for consistency and less markup noise.

---

## Verdict

**Rework** — the section slot is justified (Hero’s “See our work” needs a destination; enterprise buyers need evidence), but the current implementation is **positioning dressed as proof**: unsourced stats, generic pillars, and unverifiable bank cards on a second full-bleed dark chapter. Cut differentiators and unsourced metrics; keep at most one tight evidence row with logos, specifics, or links — or merge into Contact and delete `#proof` as a standalone section.
