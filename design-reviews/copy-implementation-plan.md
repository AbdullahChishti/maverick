# Mavverik Homepage — Copy Implementation Plan

**Date:** 2026-06-19
**Orchestrator:** Opus 4.8 (planning only — no product files edited)
**Implementation model (all subagents):** `composer-2.5-fast`
**Scope:** Hero, Founders, Services (Capabilities), Contact, Footer, Navigation chrome, layout metadata

---

## 0. Why this plan exists

Round 3 per-section reviews (`round3-*.md`) were **siloed** — each critiqued one section in isolation and the implementation already landed those per-section rewrites. What no single review could catch is **cross-section duplication**: the same facts (pedigree, clients, response-time, the "architecture → production" journey, the word "production" itself) are now repeated across 3–4 sections.

This plan does one thing: **assign every concrete claim a single owner section, delete it everywhere else, and lock the final copy.** It is a deduplication + ownership pass, not a restyle.

---

## 1. Current copy problems & duplication map

### 1.1 Full current copy inventory

| Section | Copy currently on page |
|---------|------------------------|
| **Nav** | Wordmark `Mavverik`; links `Founders` / `Capabilities` / `Contact`; CTA `Contact` |
| **Hero** | Overline `AI-native consulting`; H1 `Production AI the regulators sign off on.`; subhead `One senior team taking you from first architecture review to live, governed systems in production.`; CTA `Start a conversation`; proof aside `Built by teams from Microsoft, OpenAI & Google` + `Trusted by J.P. Morgan and Barclays` |
| **Founders** | Overline `Founders`; H2 `Our founders built the AI and cloud systems your enterprise runs on.`; lead naming `Microsoft, OpenAI, and Google`; 3 org cards (Microsoft / OpenAI / Google with titles + scope); closing `One founding team — accountable from first architecture review to production, with the same rigor we applied inside Microsoft, OpenAI, and Google.` |
| **Services** | Overline `Practice areas`; H2 `What we build for enterprise teams`; 5 titles + taglines; featured footer `Production LLM systems for regulated financial institutions.`; data footer `Dashboards, forecasting, and decision models in production.` |
| **Contact** | Overline `Contact`; H2 `Talk to the team shipping AI in production.`; lead with offer + `Trusted by production teams at J.P. Morgan and Barclays`; email label `Email`; hint `…we reply within one business day.`; trust bullets `30-minute intro call — no deck` / `Reply within one business day` / `Senior engineers, not account managers`; `Follow Mavverik on LinkedIn` |
| **Footer** | `AI-native consulting for the enterprise`; `© {year} Mavverik` |

### 1.2 Duplication map (the problems)

| # | Repeated claim | Where it appears now | Severity |
|---|----------------|----------------------|----------|
| D1 | **Microsoft / OpenAI / Google pedigree** | Hero aside **+** Founders lead **+** Founders closing (named 3 surfaces; twice inside Founders alone) | **High** — Hero teaser sits ~1 scroll above the dedicated Founders section that says the same names |
| D2 | **J.P. Morgan / Barclays clients** | Hero aside **+** Contact lead | **High** — identical client list in two sections |
| D3 | **"reply within one business day"** | Contact hint **+** Contact trust bullet | **High** — stated twice within the same section |
| D4 | **"first architecture review → production" journey** | Hero subhead **+** Founders closing | **Medium** — same narrative phrase twice |
| D5 | **"production" / "in production"** | Hero H1, Hero subhead, Founders closing, Services featured footer, Services data footer, Contact H2 (~6 uses) | **Medium** — word inflation; signature term loses force |
| D6 | **"one senior/founding team"** | Hero subhead (`One senior team`) + Founders closing (`One founding team`) | **Low** — near-duplicate phrasing |
| D7 | **"AI-native consulting"** | Hero overline + Footer tagline + layout metadata | **Low / acceptable** — brand bookend, keep |

---

## 2. Final ownership rules

Each concrete fact gets **exactly one home**. Adjacent sections must not restate it.

| Section | Owns | Must NOT contain |
|---------|------|------------------|
| **Hero = promise** | The positioning claim + the single conversion CTA + **client trust anchor** (J.P. Morgan / Barclays) as above-fold proof | Pedigree org names (MS/OpenAI/Google) |
| **Founders = pedigree** | The **Microsoft / OpenAI / Google** story — names, titles, scope, "who we are" | Client names; the Hero journey phrase |
| **Capabilities (Services) = scope** | What we build — 5 practice areas, titles, taglines, scope proof footers | Pedigree org names; client names |
| **Contact = conversion** | The ask, the email, response-time (single source), differentiated trust bullets | Client names; pedigree org names |
| **Footer = closure** | One brand tagline + copyright | Any new claim, nav dup, contact dup |

### Resolution of the two contested facts

- **Pedigree → Founders only.** Founders is the nav-linked, dedicated pedigree section; org names belong there and nowhere else. The Hero teaser ("Built by teams from Microsoft, OpenAI & Google") is the *most* adjacent duplication (same names, one scroll apart) → **removed from Hero**.
- **Clients → Hero only.** J.P. Morgan / Barclays have no dedicated section, so they anchor the Hero above the fold (satisfies `round3-hero` P0 above-fold-proof) and are **removed from Contact** (where `round3-contact` flagged them as buried SEO-filler in a dense lead).

Resulting page arc (no fact repeated): **Hero** promises + *who trusts us* (clients) → **Founders** *who we are* (pedigree) → **Services** *what we build* (scope) → **Contact** closes the ask → **Footer** signs off.

> Alternative considered & rejected: keep pedigree teaser in Hero and clients in Contact. Rejected because it leaves D1 (Hero↔Founders org echo) intact — the single worst adjacency.

---

## 3. Final target copy per section

### 3.1 Hero (promise)

- **Overline:** `AI-native consulting` *(keep)*
- **H1:** `Production AI the regulators sign off on.` *(keep — sole owner of "Production AI")*
- **Subhead:** `One senior team taking you from first architecture review to live, governed systems.`
  *(drop trailing "in production" — H1 already owns the term)*
- **CTA:** `Start a conversation` *(keep)*
- **Proof anchor (replaces the two-part aside with one line):**
  `Trusted by enterprise teams at J.P. Morgan & Barclays.`

### 3.2 Founders (pedigree)

- **Overline:** `Founders` *(keep)*
- **H2:** `Our founders built the AI and cloud systems your enterprise runs on.` *(keep)*
- **Lead:** `Before Mavverik, they led platform and model teams at Microsoft, OpenAI, and Google — shipping governed AI, multi-region cloud, and data systems inside Fortune 100 security review. That is the team architecting yours.` *(keep — canonical pedigree home)*
- **Org cards:** keep all three unchanged (Microsoft / OpenAI / Google + titles + scope).
- **Closing (rewrite — stop re-listing the orgs, stop echoing the Hero journey phrase):**
  `One founding team — the engineers who architect your systems are the ones accountable for them.`
  *(accent span stays on `One founding team`)*

### 3.3 Services / Capabilities (scope)

- **Overline:** `Practice areas` *(keep)*
- **H2:** `What we build for enterprise teams` *(keep)*
- **Service titles & taglines:** keep all five unchanged (Round 3 approved).
- **Featured (AI) proof footer (vary "Production"):**
  `Governed LLM systems, live in regulated financial institutions.`
- **Data proof footer (vary "in production"):**
  `Dashboards, forecasting, and decision models in daily use.`

### 3.4 Contact (conversion)

- **Overline:** `Contact` *(keep)*
- **H2 (drop the "shipping AI in production" echo; sharpen to conversion):**
  `Talk to the team that ships — not the one that pitches.`
- **Lead (remove client names; keep the offer):**
  `Architecture review, agent rollout, or platform modernization — tell us what you're building, and you'll hear back from the engineers who'd do the work.`
- **Email label:** `Email` *(keep)*
- **Email hint (sole home of response-time):** `Include your stack, timeline, and team size — we reply within one business day.` *(keep)*
- **Trust bullets (remove response-time dup; replace with a distinct beat):**
  1. `30-minute intro call — no deck`
  2. `Senior engineers, not account managers`
  3. `Direct access to the founding team`
- **LinkedIn:** `Follow Mavverik on LinkedIn` *(keep)*

### 3.5 Footer (closure)

- `AI-native consulting for the enterprise` *(keep)*
- `© {year} Mavverik` *(keep)*

### 3.6 Navigation (no change)

Links `Founders` / `Capabilities` / `Contact` and CTA `Contact` stay. The `Capabilities` nav label intentionally differs from the `Practice areas` overline (wayfinding vs. classification, per `round3-services`).

---

## 4. What to remove per section

| Section | Remove / change |
|---------|-----------------|
| **Hero** | Remove pedigree half `Built by teams from Microsoft, OpenAI & Google`. Collapse the two-column aside into one client-trust line. Drop `in production` from the subhead. |
| **Founders** | Remove the org re-listing (`…inside Microsoft, OpenAI, and Google`) and the `first architecture review to production` journey echo from the closing line. |
| **Services** | Remove the literal `Production` (featured footer) and `in production` (data footer) repetitions — replace with the varied lines in §3.3. |
| **Contact** | Remove client names from the lead. Remove the `Reply within one business day` trust bullet (dup of the hint). Replace the H2's `shipping AI in production` phrasing. |
| **Footer** | Nothing to remove (already minimal, already deduped per `round3-chrome`). |

---

## 5. File-by-file implementation steps

> Copy-only edits. Do **not** touch layout, motion, Tailwind classes, structure, or `aria-*` unless a removed line leaves an empty node.

### 5.1 `app/sections/Hero.tsx`
1. Line ~78–80 subhead: delete ` in production` so it ends `…live, governed systems.`
2. Lines ~98–122 `motion.aside`: replace the two-`<p>` grid with a **single** line — `Trusted by enterprise teams at J.P. Morgan & Barclays.` Keep the `aria-label` (update to `Client trust`), keep `border-t … pt-grid-6` wrapper; collapse the `grid grid-cols-1 sm:grid-cols-2` to a single paragraph. Bold `J.P. Morgan` and `Barclays` with the existing `font-medium text-foreground` spans.
3. Verify no MS/OpenAI/Google strings remain in this file.

### 5.2 `app/sections/Founders.tsx`
1. Lines ~121–124 closing paragraph: replace text with `One founding team — the engineers who architect your systems are the ones accountable for them.`
2. Keep the accent `<span>` on `One founding team`; delete the `…with the same rigor we applied inside Microsoft, OpenAI, and Google.` tail.
3. Leave lead, H2, and `orgs[]` array untouched.

### 5.3 `app/sections/Services.tsx`
1. Line ~182 featured footer: `Governed LLM systems, live in regulated financial institutions.`
2. Line ~188 data footer: `Dashboards, forecasting, and decision models in daily use.`
3. Leave `services[]` titles/taglines, H2, overline untouched.

### 5.4 `app/sections/Contact.tsx`
1. Line ~62 H2: `Talk to the team that ships — not the one that pitches.`
2. Lines ~120–126 lead: replace with the §3.4 lead; **delete** the `Trusted by production teams at J.P. Morgan and Barclays.` sentence and its two `<span>` client name nodes.
3. Lines ~19–23 `trustSignals[]`: replace `"Reply within one business day"` with `"Direct access to the founding team"`; keep the other two; reorder to match §3.4.
4. Leave email, hint, and LinkedIn untouched.

### 5.5 `app/components/Footer.tsx` & `app/layout.tsx`
- No copy changes. (Verify only — these already match closure ownership.)

### 5.6 `app/components/Navigation.tsx`
- No copy changes. (Verify only.)

---

## 6. Composer 2.5 subagent assignment plan (for the implementation phase)

All subagents run on **`composer-2.5-fast`**. Edits are non-overlapping by file, so they can run **in parallel**. Each subagent receives the exact target strings from §3 and the steps from §5 — no interpretation, copy-paste fidelity.

| Subagent | Model | File(s) | Task | Depends on |
|----------|-------|---------|------|-----------|
| **A — Hero copy** | `composer-2.5-fast` | `app/sections/Hero.tsx` | §5.1: subhead trim + aside → single client line | none |
| **B — Founders copy** | `composer-2.5-fast` | `app/sections/Founders.tsx` | §5.2: closing line rewrite | none |
| **C — Services copy** | `composer-2.5-fast` | `app/sections/Services.tsx` | §5.3: two proof footers | none |
| **D — Contact copy** | `composer-2.5-fast` | `app/sections/Contact.tsx` | §5.4: H2 + lead + trust bullet swap | none |
| **E — Verify/QA** | `composer-2.5-fast` | all of the above + Footer/Nav/layout | Run §7 acceptance checks + `npm run build`; report dup grep results | A–D complete |

**Orchestration:** launch A–D concurrently in one batch; on completion launch E. Each prompt must include: (1) the exact before/after string, (2) "copy-only, do not alter classes/structure/motion/aria", (3) the file path and approximate line. E does not edit copy — it only verifies and reports.

---

## 7. Acceptance criteria

**Deduplication (grep-level, must all pass):**
- [ ] `Microsoft|OpenAI|Google` appears **only** in `Founders.tsx` (org cards + lead).
- [ ] `J.P. Morgan|Barclays` appears **only** in `Hero.tsx`.
- [ ] `business day` / response-time promise appears **once** total (Contact hint).
- [ ] `first architecture review` appears **only** in `Hero.tsx` subhead.
- [ ] `production` / `in production` count reduced to ≤ 3 page-wide (Hero H1 + Services featured "live in…" + Contact, with no two adjacent sections repeating the literal phrase "in production").
- [ ] `One senior team` (Hero) and `One founding team` (Founders) are the only "team" near-duplicates; no third instance.

**Ownership (per §2 table):**
- [ ] Hero carries client trust, no pedigree.
- [ ] Founders carries pedigree, no client names, no Hero journey phrase.
- [ ] Services carries scope only, no names of any kind.
- [ ] Contact carries the ask + single response-time + 3 distinct trust bullets, no names.
- [ ] Footer unchanged, closure only.

**Integrity:**
- [ ] No structural/class/motion/`aria` changes beyond removed empty nodes.
- [ ] No empty/orphaned JSX nodes after the Hero aside collapse and Contact lead trim.
- [ ] `npm run build` passes; `/` returns 200; TypeScript/lint clean.
- [ ] Every target string in §3 matches the rendered DOM exactly.

---

## 8. Out of scope (do not touch in this pass)

- Visual/layout/motion fixes from `round3-*` (icons, grid spans, glow, dividers) — already handled or separate.
- Founder real names/photos (`round3-founders` P0) — requires source data; copy plan keeps org-card structure ready for it.
- CTA color-token consolidation, card interactivity — `evaluation.md` P2/P3.
