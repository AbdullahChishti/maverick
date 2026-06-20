# Round 2 Critique — Page Composition + Legacy

## SCORE: 4/10

The homepage has a clear four-section spine (Hero → Services → Proof → Contact), but every live section repeats the same editorial “chapter number + overline + headline” choreography. Two consecutive full-bleed dark bands (Proof + Contact) fight the actual Hero for attention. Seven legacy section files sit exported but never rendered — mostly generic filler that duplicates live content. Visual hierarchy is flat; text repeats (founder cred, client names, “why us” bullets) across sections.

---

## Dead file audit

Repo-wide search (`app/` + full repo for component names) shows **only** `app/page.tsx` imports live sections. Legacy sections appear in `app/sections/index.ts`, their own files, and stale `PROJECT_STRUCTURE.md` — **never imported or rendered**.

| File | Used anywhere? | Recommendation |
|------|------------------|------------------|
| `About.tsx` | **No** | **delete** — generic “technology partner” + Precision/Innovation/Partnership values |
| `Vision.tsx` | **No** | **delete** — centered manifesto band; “trusted global leader” filler |
| `Customers.tsx` | **No** | **delete** — name-only logo strip; superseded by `Proof.tsx` client cards |
| `Founders.tsx` | **No** | **delete** — founder cred already in `Hero.tsx` (lines 80–81) |
| `Approach.tsx` | **No** | **delete** — generic Discover/Design/Build/Scale process |
| `Industries.tsx` | **No** | **delete** — eight-sector grid with boilerplate descriptions |
| `WhyMaverick.tsx` | **No** | **delete** — seven icon cards duplicating `Proof` differentiators |

No salvage-then-delete needed: anything specific (founder names, client names) already lives in live sections or is too generic to merge.

---

## Hero-redundancy analysis

### Which live sections look like heroes?

| Section | Hero treatment | Evidence |
|---------|----------------|----------|
| **Hero** | **Yes — primary hero** | `min-h-[100dvh]`, blur orb, dual CTAs, display H1 |
| **Services** | **Partial — editorial hero header** | Giant `02`, overline, H2 in bordered header band; no full-bleed/dark/CTA |
| **Proof** | **Yes — impact hero band** | `section-impact` full dark bleed, giant `03`, statement H2 |
| **Contact** | **Yes — closing hero band** | `section-contact` (`#050505`), giant `04`, statement H2 |

### Competing hero count

- **1** true viewport hero (Hero)
- **3** sections share the giant numeral + overline + headline pattern (Hero `01`, Services `02`, Proof `03`, Contact `04`)
- **2** full-bleed dark statement bands after the light body (Proof + Contact), plus Footer `#030303` → **~40% of scroll is dark slab**

Services is not a second `100dvh` hero, but the **numbered chapter header** makes all four sections feel like sequential hero bands instead of one hero + supporting sections.

### Recommended hierarchy

1. **Hero** — keep sole owner of: full viewport, gradient/blur, primary CTA, display-scale H1
2. **Services** — **de-hero**: drop giant `02` or shrink to caption; simple left-aligned `h2` + grid-first layout
3. **Proof** — **de-hero the header** but keep dark band OR lighten Proof and reserve dark for Contact only (pick one dark moment)
4. **Contact** — if Proof stays dark, **lighten Contact** to `bg-surface` with contact panel; if Proof lightens, Contact owns the dark close

**Ideal rhythm:** Light hero → light content (Services) → proof content (stats/cards, medium contrast) → dark close (Contact only) → footer.

---

## Specific flaws

- **Every live section uses the same chapter-number device** — Hero `01` (```57:64:app/sections/Hero.tsx```), Services `02` (```188:204:app/sections/Services.tsx```), Proof `03` (```95:116:app/sections/Proof.tsx```), Contact `04` (```52:69:app/sections/Contact.tsx```). Four competing “openings.”

- **Hero blur orb is decorative noise** — comment says “restraint” but still ships ambient wallpaper (```40:43:app/sections/Hero.tsx```).

- **Services intro duplicated** — `SERVICES_INTRO` in header (lg) and body (mobile) (```205:217:app/sections/Services.tsx```).

- **Services header is a narrative band before the grid** — bordered mega-header (```186:208:app/sections/Services.tsx```) reads like a second hero before content.

- **Proof unsubstantiated metrics** — “90-day”, “99.9%”, “3×” without sourcing (```7:11:app/sections/Proof.tsx```).

- **Proof + Contact = double dark close** — `section-impact` (```82:82:app/sections/Proof.tsx```) then `section-contact` `#050505` (```34:34:app/sections/Contact.tsx```) then Footer `#030303` (```5:5:app/components/Footer.tsx```).

- **Repeated client social proof** — Proof cards (```31:46:app/sections/Proof.tsx```) and Contact paragraph (```80:83:app/sections/Contact.tsx```) both cite J.P. Morgan / Barclays.

- **Founder cred stated twice** — Hero subcopy (```80:81:app/sections/Hero.tsx```); dead `Founders.tsx` has same beat (```58:63:app/sections/Founders.tsx```).

- **Dead exports pollute barrel** — seven legacy exports (```6:13:app/sections/index.ts```).

- **Legacy `WhyMaverick` duplicates live Proof** — seven generic props (```15:58:app/sections/WhyMaverick.tsx```) overlap Proof differentiators (```13:29:app/sections/Proof.tsx```).

- **Legacy `Customers` is weakest hero-band** — centered overline + name list, no outcomes (```53:73:app/sections/Customers.tsx```).

- **Legacy `Vision` is pure manifesto filler** — centered blockquote with accent spans (```13:35:app/sections/Vision.tsx```).

- **Nav only knows four sections** — `sectionIds` (```13:13:app/components/Navigation.tsx```) — legacy IDs (`about`, `vision`, etc.) are orphaned.

---

## Concrete recommendations

### Delete (7 files)

- `app/sections/About.tsx`
- `app/sections/Vision.tsx`
- `app/sections/Customers.tsx`
- `app/sections/Founders.tsx`
- `app/sections/Approach.tsx`
- `app/sections/Industries.tsx`
- `app/sections/WhyMaverick.tsx`

### Remove from `index.ts`

Delete lines 6–13 (legacy block and comment). Keep only Hero, Services, Proof, Contact exports.

### De-hero live sections

| Section | Action |
|---------|--------|
| **Services** | Remove giant `02` or reduce to `text-caption`; drop bordered header band; lead with bento grid |
| **Proof** | Shrink `03` header; consider light background — stats/cards carry proof |
| **Contact** | If Proof stays dark, lighten Contact; if Proof lightens, Contact owns dark close — not both |
| **Hero** | Keep hero treatment; optional: reduce blur orb |

### Docs

Update `PROJECT_STRUCTURE.md` to remove legacy section references.

---

## Verdict

**Per-file**

| File | Verdict |
|------|---------|
| `Hero.tsx` | **Keep** — sole legitimate hero; trim blur if pursuing minimalism |
| `Services.tsx` | **Keep, de-hero** — good grid; header competes with Hero |
| `Proof.tsx` | **Keep, de-hero or de-dark** — strongest substance; dark band overclaims |
| `Contact.tsx` | **Keep, pick one dark moment** — don’t stack dark with Proof |
| All 7 legacy | **Delete** — unused, generic, duplicated |

**Overall:** Composition is **over-chaptered** (four numbered bands) and **under-hierarchied** (two dark closes). Cut legacy dead weight, collapse header patterns to Hero-only, and establish light → content → single dark close.

---

## 4-sentence summary

**Composition score: 4/10** — clear four-section structure but flat hierarchy and repeated editorial devices. **Three of four live sections** use redundant hero-style treatments (giant chapter numbers + overline + headline; Proof and Contact add full-bleed dark bands). **Delete all seven legacy files** (`About`, `Vision`, `Customers`, `Founders`, `Approach`, `Industries`, `WhyMaverick`) plus their `index.ts` exports — none are imported anywhere. **Overall verdict:** keep the four live sections, delete all legacy filler, de-hero Services/Proof/Contact headers, and reserve one dark band for the page close.
