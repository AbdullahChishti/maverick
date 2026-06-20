# Mavverik Homepage — Copy, Section Architecture & Chrome Critique

**Date:** 2026-06-20  
**Scope:** `page.tsx`, `Navigation.tsx`, `Footer.tsx`, `Hero.tsx`, `Founders.tsx`, `Services.tsx`, `Contact.tsx`, `layout.tsx` (metadata only)  
**Method:** Read-only review of live section order, copy strings, nav/footer IA, and cross-section duplication. No code changes.

---

## Overall Score: **7.2 / 10**

The four-section funnel is structurally sound and much leaner than earlier iterations. The regulated-enterprise promise is sharp in the H1, Founders owns pedigree cleanly, and Capabilities copy is the strongest writing on the page. What holds the score back: the hero subhead and footer tagline are nearly the same sentence; the “architecture review → production” arc appears five times before scroll ends; **“AI-native consulting”** exists only in the footer copyright row while the page sells **“Production AI the regulators sign off on”** — two positioning frames that never meet. Chrome IA is cohesive; chrome copy is not.

---

## Per-Area Scores

| Area | Score | One-line verdict |
|------|-------|------------------|
| **Section architecture (4 sections)** | **8.0** | Right count and order for a boutique regulated-AI consultancy. |
| **Hero** | **7.5** | Strong H1; subhead and micro-journey over-repeat the same arc. |
| **Founders** | **7.0** | Credible org proof; no people, org names echo three times in one band. |
| **Services / Capabilities** | **8.0** | Specific, differentiated practice copy; clearest “what we do.” |
| **Contact** | **7.0** | Honest close; “ships” and response-time copy collide with footer. |
| **Navigation** | **8.0** | Lean three-link IA, CTA/email aligned; hero omitted by design. |
| **Footer** | **6.5** | Mirrors nav well but duplicates hero promise and splits brand frame. |
| **AI-native positioning** | **6.0** | Regulatory/production story dominates; “AI-native” is a footnote. |
| **Copy deduplication** | **6.5** | Major phrase overlap hero ↔ footer; arc repeated across hero chrome. |
| **Page flow / narrative** | **7.5** | Promise → proof → capability → contact reads correctly for enterprise buyers. |

---

## Section Order & Architecture

**Current stack** (`page.tsx`):

```
Navigation
  Hero          (#hero)
  Founders      (#founders)
  Services      (#capabilities)
  Contact       (#contact)
Footer
```

### Is four sections right?

**Yes — keep four.** For a senior, founder-led AI consultancy targeting regulated enterprises, four beats is the correct information budget:

| Section | Job | Verdict |
|---------|-----|---------|
| Hero | Promise + primary CTA + engagement arc | Keep |
| Founders | Pedigree / “why trust us” | Keep — replaces a standalone Proof section without duplicating org names above the fold |
| Capabilities | Scope of work / “what we build” | Keep — five practices need room; featured AI tile earns its space |
| Contact | Conversion + expectation-setting | Keep |

**Do not add** a fifth “Work,” “Clients,” or “Process” section unless you have named case studies or a repeatable engagement model to show. Client names (J.P. Morgan, Barclays) were deliberately removed; adding an empty proof section would hurt more than a tight four-part story.

**Do not merge** Founders into Hero. Prior rounds correctly killed the hero proof strip; Founders as a dedicated dark band gives pedigree nav weight without cluttering the promise.

**Order is correct:** credibility before capability (`Founders` → `Capabilities`) matches how regulated buyers evaluate — *who* before *what*. Alternative order (Capabilities first) would front-load generic consulting scope before trust is established.

**Minor IA gap:** Hero secondary CTA **“Meet the team”** points to `#founders`, but nav labels that section **“Founders”** not “Team.” Acceptable, but the CTA language and nav label could align (“Meet the founders” or nav → “Team”).

---

## Section-by-Section Copy Notes

### Hero (`#hero`)

| Element | Current copy | Assessment |
|---------|--------------|------------|
| Section tag | `Mavverik` | **Weak.** Repeats the nav wordmark with no new information. Prior rounds used “AI-native consulting”; metadata still carries that frame. Either restore a positioning tag or drop to save a line. |
| H1 | `Production AI` / `the regulators` / `sign off on.` | **Strong.** Distinctive, outcome-led, avoids generic “enterprise AI.” Accent on line 3 lands the regulatory wedge. |
| Subhead | `One senior team, accountable from architecture review to production.` | **Good line, wrong location.** Nearly identical to footer tagline (see dedup). Also compresses “governed systems in production” out while metadata and footer keep the longer form — inconsistent terminal noun. |
| Journey 01 | `Start` → `First architecture review` | Reinforces arc; acceptable once. |
| Journey 02 | `Live` → `Governed systems in production` | Active state highlights outcome; pairs with H1. |
| Figcaption | `Architecture review → production sign-off` | **Third** expression of the same arc in one section. |
| Status strip | `Governed by design` · `Regulatory scrutiny ready` · `Architecture → production` | Strip item 3 **fourth** repeat of arc. Items 1–2 add value; item 3 is redundant with journey + figcaption. |
| Primary CTA | `Start a brief` | Aligned with nav — good. |
| Secondary CTA | `Meet the team` | Clear intent; label ≠ nav “Founders.” |

**Hero score: 7.5/10** — H1 and CTAs carry the section; micro-copy and status strip dilute through repetition; no above-fold proof is a deliberate tradeoff (buyers must scroll to Founders).

---

### Founders (`#founders`)

| Element | Current copy | Assessment |
|---------|--------------|------------|
| Section tag | `Founders` | Matches nav — good. |
| H2 | `Built the systems your enterprise already runs on.` | **Strong.** Active, concrete, avoids “frontier” cliché from earlier drafts. |
| Lead | `Before Mavverik, they led platform and model teams at Microsoft, OpenAI, and Google — shipping governed AI, multi-region cloud, and data systems through Fortune 100 security review. That is the team architecting yours.` | **Best paragraph on the page.** Specific scope, regulated context, direct handoff to buyer. |
| Panel header | `Former leadership` + `Microsoft · OpenAI · Google` | Org string appears **again** immediately after lead — third org listing in ~120 words. |
| Org cards | Microsoft / OpenAI / Google with role + detail lines | Improved from Round 3 (Azure-scale, API-scale inference, etc.). Still no **human names** — enterprise procurement will stall here. |
| Blockquote | `One founding team — the engineers who architect your systems are the ones accountable for them.` | **Good closer.** “Accountable” theme returns (also Hero, Services, metadata) but adds a new angle (same people build + run). |

**Founders score: 7.0/10** — Copy quality is up; trust gap is structural (orgs without people). Dark band correctly punctuates page rhythm between light Hero and sunken Capabilities.

---

### Services / Capabilities (`#capabilities`)

| Element | Current copy | Assessment |
|---------|--------------|------------|
| Section tag | `Capabilities` | Matches nav (section id `capabilities`) — good. |
| H2 | `What we build for enterprise teams.` | Clear, modest. Could be sharper (“What we ship under audit”) but not broken. |
| Intro | `Five practices, one accountable team — scoped to ship and survive the audit.` | **Strong.** Ties scope to regulatory outcome; “accountable” fits here. |
| Featured 01 | `AI & Intelligent Systems` — `Executive AI strategy through governed LLM agents — built for the risk review, not the pilot deck.` / `Live in regulated finance` | **Best capability line.** AI-native behavior without using the words “AI-native.” |
| 02–05 | Data, Cloud, Workflow, App Modernization taglines | Specific, anti-boilerplate (“not another quarterly report,” “no big-bang cutover”). Generic titles, sharp taglines — acceptable for enterprise breadth. |
| Interaction | All rows link to `#contact` | Copy promises scope; UX funnels to contact — coherent. |

**Services score: 8.0/10** — Least duplicated section; carries most of the “what makes Mavverik different” load. Featured AI placement correctly weights the practice.

---

### Contact (`#contact`)

| Element | Current copy | Assessment |
|---------|--------------|------------|
| Section tag | `Contact` | Matches nav — good. |
| H2 | `Talk to the team that ships.` | Echoes production/ship theme (H1, journey, Capabilities “scoped to ship”). Works as close but adds to verb repetition. |
| Lead | `Architecture review, agent rollout, or platform modernization — tell us what you're building. You'll hear back from the engineers who'd do the work.` | **Strong.** Names entry points; reinforces “no sales handoff” without saying it. |
| Trust signals | `30-minute intro — no deck required` · `Senior engineers, not account managers` · `Reply within one business day` | Good expectation-setting. Signal 3 **duplicates** footer. |
| Email hint | `Include your stack, timeline, and team size. We scope from the first conversation — no sales handoff.` | Practical; “first conversation” slightly echoes architecture-review arc. |
| CTAs | `Send an email` + LinkedIn | LinkedIn only here (footer LinkedIn removed) — good dedup vs Round 2. |

**Contact score: 7.0/10** — Conversion copy is honest and specific; response-time and “ships” overlap with footer and hero themes.

---

### Navigation

| Element | Current | Assessment |
|---------|---------|------------|
| Links | Founders · Capabilities · Contact | Mirrors footer; hero omitted — standard. |
| CTA | `Start a brief` | Matches hero primary — good cohesion. |
| Email | `contact@mavverik.ai` (lg+) | Third email surface (nav, contact card, footer) — intentional for conversion, not a copy bug. |
| Active state | `aria-current="location"` | Fixed from Round 3 — correct semantics. |
| Scroll spy | `rect.top <= 88` | Threshold vs anchor offset — minor chrome alignment (P2). |
| Logo aria | `Mavverik — home` | Clear. |

**Navigation score: 8.0/10** — IA is lean and labels match section tags. No copy bloat.

---

### Footer

| Element | Current | Assessment |
|---------|---------|------------|
| Wordmark + tagline | `Mavverik` + `One senior team, accountable from architecture review to governed systems in production.` | **P0 dedup** with hero subhead. Wordmark adds no info nav doesn’t already provide (Round 3 flagged this). |
| Nav column | Founders · Capabilities · Contact | Matches header — good. |
| Direct line | `contact@mavverik.ai` + `Replies within one business day.` | **P1 dedup** with Contact trust bullet. |
| Copyright row | `AI-native consulting for the enterprise` · `© {year} Mavverik` | **Only on-page use of “AI-native consulting.”** Conflicts with hero/metadata primary frame (“Production AI the regulators sign off on”). Buyer leaves with two brand stories. |

**Footer score: 6.5/10** — Structurally clean; copy undermines hero and contact through repetition and split positioning.

---

### Metadata (`layout.tsx`) — positioning context

| Field | Copy | Note |
|-------|------|------|
| Title / OG / Twitter | `Mavverik — Production AI the regulators sign off on` | Aligns with H1 — good. |
| Description | `…one senior team — engineers from Microsoft, OpenAI, and Google — accountable from first architecture review to live, governed AI systems…` | **Fourth** architecture-review arc; org names in meta but not hero (SEO/social preview gap for credibility). |
| Keywords | includes `AI-native consulting` | Keyword present; on-page body does not support it until footer coda. |

---

## Copy Deduplication Audit

### P0 — Same sentence, two locations

| Phrase | Locations |
|--------|-----------|
| `One senior team, accountable from architecture review to [governed systems in] production` | **Hero subhead** · **Footer tagline** |

These should not coexist. Pick one canonical home (recommend **Hero only**) and give the footer a **different** job: positioning tagline (`AI-native consulting for the enterprise`) or a one-line capability wedge — not the same promise twice.

### P1 — Same idea, multiple surfaces

| Theme | Count / locations |
|-------|-------------------|
| Architecture review → production (arc) | Hero journey · figcaption · status strip · footer · metadata description · Contact lead (“Architecture review…”) |
| Reply / business day | Contact trust bullet · Footer direct line |
| Accountable / accountability | Hero subhead · Founders blockquote · Services intro · metadata |
| Production / ship / governed | H1 “Production AI” · journey “Governed systems in production” · Contact “ships” · Services “scoped to ship” · featured meta “Live in regulated finance” |
| Microsoft · OpenAI · Google | Founders lead · panel header · three org cards · metadata description (**intentionally concentrated** — acceptable if hero stays clean) |

### P2 — Thematic repetition (acceptable if trimmed elsewhere)

- **Regulatory / audit / risk review:** H1, status strip, Services featured + intro, Founders lead — cohesive regulated-enterprise wedge; don’t add more, trim hero status strip instead.
- **“Start a brief”:** Nav + Hero — good CTA consistency, not a problem.

---

## AI-Native Positioning Assessment

**Score: 6.0/10**

The site sells **regulated production AI** far more convincingly than **AI-native consulting**.

| Frame | Where it appears | Strength |
|-------|------------------|----------|
| Production AI / regulators sign off | H1, title, metadata, SignalGraph figcaption | **Primary** — clear, differentiated |
| Governed / audit-ready systems | Hero, Founders, Services, status strip | Strong supporting proof |
| AI-native consulting | Footer copyright row, metadata keywords only | **Orphan** — never argued on-page |
| LLM / agents | Services featured, Contact lead | Present but buried mid-page |

**Gap:** A buyer searching for “AI-native consulting for the enterprise” lands on regulatory sign-off copy and may not connect the two. The featured capability (“built for the risk review, not the pilot deck”) *is* AI-native behavior — but that phrase never bridges to the footer tagline.

**Recommendation:** Choose one lead frame and make the other subordinate:

- **Option A (regulatory-led):** Keep H1; change footer coda to something like `Governed AI systems for regulated enterprises` — drop “AI-native consulting” or relegate to meta keywords only.
- **Option B (AI-native-led):** Hero tag → `AI-native consulting`; H1 becomes subordinate or merged: e.g. `AI-native systems production teams and regulators both sign off on.`

Current split reads as two drafts merged, not one positioning strategy.

---

## Nav / Footer Cohesion

| Check | Status |
|-------|--------|
| Link labels match (Founders / Capabilities / Contact) | ✅ |
| Section ids match hrefs (`#founders`, `#capabilities`, `#contact`) | ✅ |
| Primary CTA string (`Start a brief`) nav ↔ hero | ✅ |
| Email address consistent | ✅ |
| LinkedIn only in Contact (not footer) | ✅ Fixed vs Round 2 |
| Footer tagline vs hero subhead | ❌ Near-duplicate |
| Footer coda vs hero H1 positioning | ❌ Split frame |
| Response-time promise | ❌ Contact + footer |
| Hero “Meet the team” vs nav “Founders” | ⚠️ Minor label drift |
| Section tags vs nav labels | ✅ Capabilities, Founders, Contact align |

**Chrome cohesion score: 7.5/10** — Structural IA is excellent; body copy at the page edges (hero subhead, footer) works against itself.

---

## Page Flow Narrative

```
[Nav: brand + wayfinding + CTA]

HERO — Promise
  "Production AI the regulators sign off on"
  → Start a brief / Meet the team
  → (scroll) status strip reinforces governance

FOUNDERS — Proof (dark band)
  "Built the systems your enterprise already runs on"
  → Microsoft / OpenAI / Google pedigree
  → Accountability close

CAPABILITIES — Scope
  "What we build" + audit-survival framing
  → AI featured; four supporting practices

CONTACT — Convert
  "Talk to the team that ships"
  → Email + trust signals + LinkedIn

[Footer: repeat nav + email + split tagline]
```

**Flow score: 7.5/10**

The story arc is correct for enterprise AI consulting. Weak points:

1. **Proof is below the fold** — deliberate, but first-time visitors get promise + repeated arc before credentials.
2. **Footer anticlimax** — Contact and footer both use warm raised surfaces; footer repeats hero promise then introduces a *different* brand line in the coda.
3. **No client proof beat** — acceptable per product decision; copy must work harder in Founders (names, outcomes).

---

## P0 / P1 / P2 Issues

### P0 — Fix before sharing with buyers or investors

| # | Issue | Location | Recommendation |
|---|-------|----------|------------------|
| 1 | Hero subhead ≈ footer tagline | Hero, Footer | One canonical “one senior team…” line. Footer: use positioning tagline or capability wedge instead. |
| 2 | Split brand frame: “Production AI regulators sign off on” vs “AI-native consulting” | Hero/H1 vs footer coda | Unify positioning; either elevate AI-native with on-page copy or demote it to SEO-only. |
| 3 | Architecture-review arc ×4 inside Hero alone | Journey, figcaption, status strip, subhead | Remove or replace status strip item 3 and/or figcaption; keep journey OR figcaption, not both. |

### P1 — Should fix; materially improves clarity and trust

| # | Issue | Location | Recommendation |
|---|-------|----------|------------------|
| 4 | “Reply within one business day” duplicated | Contact, Footer | Keep in one place (Contact trust list); footer direct line → scoping hint or remove. |
| 5 | No founder names / titles | Founders | Add at least one named principal with verifiable role, or soften nav prominence until names exist. |
| 6 | Org names listed 3× in Founders | Lead, panel header, cards | Drop pill `Microsoft · OpenAI · Google` from panel header; cards carry the weight. |
| 7 | Hero section tag `Mavverik` wastes a line | Hero | Replace with `AI-native consulting` or delete tag. |
| 8 | Metadata description repeats arc + orgs hero omits | layout.tsx | Social preview should match on-page story; if hero stays proof-free, metadata is the only above-fold cred — align intentionally. |
| 9 | “Meet the team” ≠ “Founders” | Hero CTA, Nav | Align label: `Meet the founders` or nav → `Team`. |
| 10 | Contact + footer visual merge | Contact, Footer | Both `bg-surface-raised`; footer needs distinct coda surface (see Round 3 chrome) so close has punctuation. |

### P2 — Polish; nice to have

| # | Issue | Location | Recommendation |
|---|-------|----------|------------------|
| 11 | “Ship / production / governed” verb family repeated | Hero, Services, Contact | Vary Contact H2: e.g. `Talk to the engineers who'd do the work.` |
| 12 | Scroll-spy threshold (88) vs anchor offset | Navigation | Align to `--nav-h` token. |
| 13 | Email appears 3× (nav lg+, contact, footer) | Chrome | Acceptable for conversion; optional nav email hide if footer always visible. |
| 14 | Footer wordmark duplicates nav | Footer | Replace with tagline-only column per Round 3 chrome note. |
| 15 | “Accountable” in four sections | Hero, Founders, Services, metadata | Thematic glue — trim one instance if hero/footer dedup is fixed. |

---

## Recommendations (Prioritized)

### Copy — do first

1. **Deduplicate the hero/footer promise.** Keep hero subhead; rewrite footer left column to the chosen primary frame (regulatory *or* AI-native — not both unconnected).
2. **Trim hero arc repetition.** Drop status strip `Architecture → production` or figcaption; keep the journey timeline as the single in-hero arc visual.
3. **Resolve AI-native vs regulatory positioning** in one sentence visible in hero, footer coda, and metadata description.
4. **Single response-time promise** — Contact only.
5. **Founders: add names** or reduce nav weight until you can. Org-only proof is the largest enterprise-trust gap on the page.

### Section architecture — hold steady

6. **Keep four sections** in current order. Do not reintroduce a standalone Proof section or client logo strip without named outcomes.
7. **Keep Founders before Capabilities** for regulated-enterprise buyers.

### Chrome — align labels and surfaces

8. **Nav ↔ hero secondary CTA:** align “Founders” / “Meet the team.”
9. **Footer coda:** distinct surface + one positioning line; no second copy of hero subhead.
10. **Hero section tag:** replace `Mavverik` with positioning overline or remove.

### Suggested rewrites (copy-only; not implemented)

| Location | Current | Suggested |
|----------|---------|-----------|
| Hero section tag | `Mavverik` | `AI-native consulting` *(if Option B)* or remove |
| Footer tagline | `One senior team, accountable from architecture review to governed systems in production.` | `Governed AI for teams that answer to regulators.` *(if Option A)* |
| Footer coda | `AI-native consulting for the enterprise` | Merge with chosen primary frame; e.g. `Production AI · governed by design` |
| Hero status strip (item 3) | `Architecture → production` | `Risk review ready` or remove item |
| Hero figcaption | `Architecture review → production sign-off` | `From review to sign-off` *(shorter)* or remove if journey stays |
| Contact H2 | `Talk to the team that ships.` | `Talk to the engineers who'd do the work.` |
| Footer direct line sub | `Replies within one business day.` | `Tell us your stack and timeline.` |
| Founders panel header (right) | `Microsoft · OpenAI · Google` | Remove — redundant with cards |
| Hero secondary CTA | `Meet the team` | `Meet the founders` |

---

## Summary Verdict

| Question | Answer |
|----------|--------|
| Is 4 sections right? | **Yes.** Promise → proof → capability → contact is the correct architecture. |
| Is copy deduplicated? | **No.** Hero/footer promise overlap and hero-internal arc repetition are the main offenders. |
| Is messaging clear? | **Mostly.** Regulated production AI reads clearly; AI-native consulting does not. |
| Is AI-native positioning strong? | **No.** It lives in the footer coda and keywords, not the narrative. |
| Is nav/footer cohesive? | **Structurally yes; copy no.** Links and CTAs align; taglines and response-time do not. |
| Overall page flow? | **Good arc, weak landing.** Proof and positioning payoffs arrive late or split across hero/footer. |

**Target state after copy pass:** one primary positioning frame, one “one senior team” promise, one response-time claim, one architecture-review arc expression in Hero — **~8.5/10** without adding sections or client names.

---

*Review only. No site code edited. No commit.*
