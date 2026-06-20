# Dev server stability — investigation (2026-06-20)

## Current status

| Check | Result |
|--------|--------|
| Dev server | **Running** — single `npm run dev` on **http://localhost:3000** |
| HTTP health | **200** on `/` after clean restart |
| `.next` | Cleared and regenerated in **dev** mode (was stale **production** output before fix) |
| Active `next dev` processes | **1** (PID ~65365 at time of fix) |

## Symptoms reported

Dev server appears to “go down” after edits — browser shows errors or connection refused while agents continue working.

## Root causes (evidence from Cursor terminal history)

### 1. Many competing dev / start processes (primary)

Cursor agent terminals show **74+** separate `npm run dev` invocations, plus **6+** `npm run start -- -p 3000` attempts.

Effects observed in logs:

- **`EADDRINUSE`** — second process cannot bind port 3000.
- **“Port 3000 is in use … using port 3001 instead”** — at least **9** times in `dev-server.log` and terminal logs. User hits `:3000` while the live server is on `:3001`.
- **`pkill -f "next"`** and **`kill -9` on :3000/:3001** — kills the dev server another session was using (several terminals show **exit_code: 137**, SIGKILL).

**Conclusion:** Instability is largely **operational** — multiple subagents starting, stopping, and relocating dev without coordinating on one port/process.

### 2. `.next` deleted or rebuilt while dev was running (primary)

At least **13** terminal sessions ran **`rm -rf .next`** (often bundled with restart or build).

Documented errors while a server still served requests:

- `ENOENT: no such file or directory, open '.next/routes-manifest.json'` (hundreds of occurrences across terminals `290498`, `328996`, `674148`, etc.)
- `ENOENT: … '.next/required-server-files.json'` (e.g. terminal `302620` during `rm -rf .next && npm run build && npm run start`)

Example agent commands found:

- `rm -rf .next node_modules/.cache && npm run build`
- `rm -rf .next && npm run build … && npm run start -- -p 3000`

**Conclusion:** Deleting or replacing `.next` during **`next dev`** leaves the running process with missing manifests → 500s and “server down” until restart. Running **`next build`** concurrently writes a **production** tree that conflicts with dev’s expectations.

### 3. Production vs dev `.next` mismatch

Before this fix, `.next` contained **production** artifacts (`BUILD_ID`, `export-marker.json`, full static optimization) and **no** `.next/dev` cache — consistent with a recent **`next build`** while dev was not the sole writer.

Dev and production both use `.next`; only one mode should own the directory at a time.

### 4. `hero-wave.mp4` (~11 MB) — minor / secondary

- File: `public/hero-wave.mp4` (~11M).
- Used in `HeroVideoBackground.tsx` with `preload="auto"`.

Static files under `public/` are **not** bundled through webpack HMR; they are served as-is. The video increases **page weight and decode cost**, not typical HMR rebuild size. Unlikely to be the main cause of dev **crashes**, though `preload="auto"` is worth tuning for production.

## Package scripts (reference)

```json
"dev": "next dev",
"build": "next build",
"start": "next start"
```

No custom port in `dev`; default **3000**. Agents sometimes passed `-p 3000` explicitly or started production `start` on the same port.

## Fix applied (this session)

1. Confirmed no stale listeners on port 3000 (none at start).
2. **`rm -rf .next`** (no dev running).
3. Started **one** background `npm run dev`.
4. Verified **`GET /` → 200**.

Do **not** run `build` or `rm -rf .next` while this dev instance is running.

## Recommendations

### Single dev instance rule

- **One** long-lived `npm run dev` per workspace.
- Before starting dev: `lsof -i :3000` and `pgrep -fl "next dev"`.
- Stop existing dev gracefully (Ctrl+C in owning terminal) before starting another — avoid blanket `pkill -f next`.

### Never run build + dev simultaneously

- Do **not** run `npm run build`, `rm -rf .next`, or `npm run start` while `next dev` is active.
- If you need a production check: stop dev → `npm run build` → `npm run start` (or use a **different port** for start, e.g. `-p 3002`).

### One terminal owns dev

- Prefer a **dedicated terminal** (or single background job) for dev; agents should **reuse** the running server and only curl/browser-test — not respawn dev on every edit.

### Agent / subagent checklist

1. Is something already listening on **3000**? If yes, use it; do not start another.
2. Need to verify production? Stop dev first, then build — never `rm -rf .next` with dev up.
3. After accidental `.next` corruption (ENOENT manifest errors): stop dev → `rm -rf .next` → start dev again.

### Optional code tweak (low priority)

- Consider `preload="metadata"` (or `"none"`) on the hero video to reduce initial bandwidth; unrelated to dev process stability.

## Quick recovery recipe

```bash
# Stop dev (Ctrl+C in the terminal that started it), then:
lsof -i :3000
pgrep -fl "next dev"
# kill only maverick next dev PIDs if needed
rm -rf .next
npm run dev
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```

---

*Generated from terminal log analysis and live verification on 2026-06-20. Not committed.*
