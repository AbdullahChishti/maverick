# Mavverik versioning and releases

This project uses **Git tags** to mark named production releases. Tags are pointers to specific commits; they do not rewrite history on `main`.

## Main keeps full history

Updating `main` with new commits does **not** erase older work. Every past commit remains in the repository. A “revert to an old version” means checking out or deploying a commit (or tag) that already exists—not recovering deleted history.

If you need proof, run:

```bash
git log main --oneline
```

You will see the full timeline, including releases before the latest change.

## Named releases (tags)

Production milestones are tagged with [Semantic Versioning](https://semver.org/) style names:

| Tag     | Commit   | Summary                                      |
|---------|----------|----------------------------------------------|
| `v1.0.0` | `275e1dd` | QuantumBlack hero video and minimal v3 redesign |
| `v1.1.0` | `60e9f71` | Contact section aligned with Team layout     |
| `v1.1.1` | `14fb500` | Page title Mavverik (matches current production HEAD) |

List all release tags:

```bash
git tag -l
git tag -l -n1    # with annotation message
```

See commits on `main`:

```bash
git log main --oneline
```

Show what a tag points to:

```bash
git show v1.0.0 --no-patch
```

## Work locally at an old version

To browse or build an older release in a **detached HEAD** state:

```bash
git fetch origin --tags
git checkout v1.0.0
```

Install dependencies and run the dev server as usual. To return to latest `main`:

```bash
git checkout main
git pull origin main
```

For longer work based on an old release, create a branch from the tag instead of staying detached:

```bash
git checkout -b hotfix/from-v1.0.0 v1.0.0
```

## Redeploy an older version to production

**Option A — Vercel CLI** (from a clean checkout of the tag):

```bash
git checkout v1.0.0
vercel --prod
git checkout main
```

**Option B — Vercel dashboard**

Use **Deployments** → select a past successful deployment → **Promote to Production** (rollback). This does not require changing Git; it redeploys artifacts Vercel already built.

After rollback, `main` may still point at a newer commit. That is normal: Git history and live production can differ until you tag and deploy again from `main`.

## Restore `main` to behave like an old release (safely)

Avoid `git push --force` to `main`. Prefer one of these:

### 1. Revert forward (keeps history, best for shared `main`)

Create new commits that undo changes since the release:

```bash
git checkout main
git pull origin main
# Revert commits after the tag (newest first), or revert a range:
git revert --no-commit v1.0.0..HEAD
git commit -m "revert: restore main to v1.0.0 behavior"
git push origin main
```

Adjust the range and message for your target tag. Each revert is a normal commit on `main`.

### 2. Branch from a tag (best for experiments or a parallel line)

```bash
git checkout -b release/v1.0.0-maintenance v1.0.0
# merge fixes, then deploy from this branch or open an MR
```

Production can deploy from that branch without moving `main` backward.

### 3. Reset locally only (never force-push `main` without team agreement)

`git reset --hard v1.0.0` rewinds **your** local `main`. Pushing that requires force and rewrites remote history—**not recommended** for this repo’s workflow.

## Recommended workflow

1. **Tag each production release** after deploy verification:

   ```bash
   git tag -a v1.2.0 <commit-sha> -m "Release v1.2.0: short description"
   git push origin v1.2.0
   ```

2. **Use `develop` (or feature branches)** for experiments and WIP; merge to `main` when ready for production, then tag.

3. **Document** the tag in the annotation message (`git tag -a`) so `git tag -l -n1` stays readable.

4. **Deploy** from `main` (or from an explicit tag checkout when rolling back).

## Quick reference

| Goal                         | Command / action                                      |
|-----------------------------|--------------------------------------------------------|
| List versions               | `git tag -l`                                           |
| View history                | `git log main --oneline`                               |
| Local old version           | `git checkout v1.0.0`                                  |
| Prod rollback (CLI)         | checkout tag → `vercel --prod`                         |
| Prod rollback (dashboard)   | Promote previous deployment                            |
| Undo on `main` without force | `git revert` (range or individual commits)             |
