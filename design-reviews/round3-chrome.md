# Chrome + Global — Round 3 Critique

**SCORE: 7/10**

Round 2's worst chrome sins are gone: no dual-theme nav, no footer sitemap bloat, correct **Mavverik** spelling, lean three-link IA. What remains keeps this below Linear/Vercel/Stripe tier: a stale dark `themeColor`, a page bottom that collapses into one warm slab, and section rhythm that relies on ~2–3% luminance shifts instead of deliberate structure.

---

## Ranked Weaknesses

1. **`themeColor: "#141820"` is a live bug** — `layout.tsx` still paints mobile browser chrome dark while the page is fully light. **P0**
2. **Contact + Footer merge into one undifferentiated warm band** — both `--surface-warm`, separated only by a 1px border. The close has no punctuation. **P0**
3. **Section rhythm is perceptually flat** — `#ffffff` → `#faf9f7` → `#f5f4f1` → `#faf9f7` → `#faf9f7`. Bottom third is two consecutive warm bands. **P1**
4. **LinkedIn appears twice at the close** — Contact + Footer, same URL. **P1**
5. **Scroll-spy threshold (`80`) misaligned with `.anchor-target` `scroll-margin-top: 72px`.** **P1**
6. **`aria-current="page"` is semantically wrong** for in-page section links — should be `"location"`. **P1**
7. **Footer wordmark duplicates nav with zero added info.** **P1**
8. **Nav wordmark bypasses `font-display` token** (uses `font-[family-name:var(--font-display)]`). **P2**
9. **Mobile hamburger ~36px touch target** (< 44px min). **P2**

## Page Flow / Section Rhythm assessment

**Recommendation: Keep fully light. Do not add a dark accent band.** The site finally has one token system and one nav-surface model; reintroducing a dark band would resurrect the split-personality `--impact-*` problem for marginal gain. Fix the finale by **differentiating the footer surface** (pure white) and optionally adding section-seam hairlines — not by going dark.

## Specific Text Rewrites

| Location | Current | Replace with |
|----------|---------|--------------|
| Footer left | `Mavverik` wordmark | `AI-native consulting for the enterprise` (muted caption) |
| Footer nav | `LinkedIn` | Remove — keep LinkedIn in Contact only |
| Footer copyright | `© {year} Mavverik` | keep (optionally merge with tagline on one line) |

## Design Fixes

- **P0** — `themeColor: "#ffffff"` in `layout.tsx`.
- **P0** — `.footer-coda` background → `var(--background)` (#ffffff), keep `border-top`.
- **P1** — Scroll-spy offset `80` → `72` to match anchor.
- **P1** — `aria-current={isActive ? "location" : undefined}`.
- **P1** — Footer: remove LinkedIn + wordmark dup; tagline + copyright row.
- **P1** — Section rhythm: add `border-t border-border` seams and/or make footer white so the close reads as a distinct coda.
- **P2** — Nav wordmark → `font-display`; hamburger `min-h-[44px] min-w-[44px]`.

## Priority

| Fix | Priority |
|-----|----------|
| themeColor → #ffffff | P0 |
| Footer surface ≠ Contact warm | P0 |
| Remove footer LinkedIn dup | P1 |
| Scroll-spy / anchor offset align | P1 |
| aria-current=location | P1 |
| Footer copy: tagline replaces wordmark | P1 |
| Section seam rhythm | P1 |
| Nav font-display + hamburger 44px | P2 |
