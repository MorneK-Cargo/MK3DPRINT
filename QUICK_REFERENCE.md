# Quick Reference: mk3dprint.org Dev Environment

## The Three Sites

| Site | Branch | URL | Purpose |
|------|--------|-----|---------|
| **mk3dprint** | `main` | mk3dprint.org | 🔴 PRODUCTION (LIVE) |
| **mk3dprint-staging** | `develop` | staging-xxx.netlify.app | 🟡 STAGING (Test) |
| **mk3dprint-dev** | `feature/*` | dev-xxx.netlify.app | 🟢 DEVELOPMENT (Dev) |

---

## Standard Workflow (2-4 hours per feature)

### 1️⃣ Development (Feature Testing)
```bash
git checkout develop && git pull
git checkout -b feature/my-feature
# ... make changes ...
git push -u origin feature/my-feature
# → Dev site deploys in 30 seconds
# → Test at dev-xxx.netlify.app
```

### 2️⃣ Staging (Final Validation)
```bash
# On GitHub: Create PR feature/my-feature → develop
# On GitHub: Merge PR
# → Staging site deploys in 30 seconds
# → Test at staging-xxx.netlify.app
```

### 3️⃣ Production (Go Live)
```bash
# On GitHub: Create PR develop → main
# On GitHub: Review & Merge PR
# → Production deploys in 30 seconds
# → Live at mk3dprint.org
```

---

## Pre-Deployment Checklist (Before Merging to Main)

```
☐ No console errors (F12 → Console)
☐ Feature works as expected
☐ Mobile responsive
☐ Forms/interactions work
☐ No broken links
☐ Performance acceptable (< 3 sec load)
☐ Tested 30+ minutes in staging
☐ Ready for production
```

---

## Emergency Rollback (< 5 minutes)

**If production is broken:**

### Option 1: Netlify Dashboard (Fastest)
1. Go to Netlify → mk3dprint site
2. Click **Deployments** tab
3. Find last good deployment
4. Click it → **Restore**
5. Done! ✓

### Option 2: Git Revert (Cleanest)
1. Go to GitHub → main branch commits
2. Find bad commit
3. Click **...** → **Revert this commit**
4. Done! (Staging not needed for rollback)

---

## Deployment Monitoring

**Check Status:**
- Netlify Dashboard → Site → Deployments tab
- Should complete in 3-7 minutes
- Green checkmark = success
- Red X = failure (check Deploy log)

**Enable Alerts:**
- Site settings → Notifications
- Enable "Deploy failure" email alerts

---

## Environment Variables

**Set per environment in Netlify:**
- Site settings → Build & deploy → Environment
- Add these for each site:
  - `DATABASE_URL` (different per env)
  - `ABACUSAI_API_KEY` (different per env)
  - `WEB_APP_ID`
  - `NODE_ENV` (development/staging/production)
  - `ENVIRONMENT` (development/staging/production)

---

## Common Issues

| Issue | Solution |
|-------|----------|
| Deploy not starting | Check Deployments tab → Trigger deploy manually |
| Build failing | Check Deploy log for errors → Fix code → Push again |
| Variables not applied | Verify set in Site settings → Environment → Trigger deploy |
| Wrong branch deploying | Verify **Production branch** in Build & deploy → Deploy settings |

---

## Documentation Map

| Need | Document |
|------|----------|
| Full strategy overview | **DEV_ENVIRONMENT_STRATEGY.md** |
| Step-by-step setup | **PHASE_2_CREATE_NETLIFY_SITES.md** |
| Environment variables | **NETLIFY_ENV_SETUP.md** |
| Daily operations | **OPERATIONAL_PROCEDURES.md** |
| Git commands | **IMPLEMENTATION_COMMANDS.sh** |
| This quick ref | **QUICK_REFERENCE.md** (you are here) |

---

## URLs to Bookmark

```
Netlify Dashboard: https://app.netlify.com
GitHub Repository: https://github.com/your-repo/mk3dprint
Production Site: https://mk3dprint.org
Staging Site: https://staging-xxx.netlify.app
Dev Site: https://dev-xxx.netlify.app
```

---

## Git Commands You'll Use

```bash
# Create feature branch
git checkout develop && git pull
git checkout -b feature/name
git push -u origin feature/name

# Sync with develop
git checkout develop && git pull

# Sync with main
git checkout main && git pull

# Delete old feature branch
git branch -D feature/name
git push origin --delete feature/name

# Check current branch
git branch
git status
```

---

## Netlify Keyboard Shortcuts

| Action | Where |
|--------|-------|
| Check deploys | Site → Deployments tab |
| Trigger deploy | Deployments → button "Trigger deploy" |
| View build log | Deployments → click deployment |
| Set variables | Site settings → Build & deploy → Environment |
| Change branch | Site settings → Build & deploy → Deploy settings |

---

## Performance Targets

| Metric | Target |
|--------|--------|
| Dev deploy time | 30 sec |
| Staging deploy time | 30 sec |
| Prod deploy time | 30 sec |
| Build time | 3-7 min |
| Rollback time | 2-5 min |
| Test per environment | 30-60 min |

---

## When to Contact Support

- **Netlify issues:** Check Deploy log first, then review troubleshooting docs
- **Git issues:** Refer to IMPLEMENTATION_COMMANDS.sh or GitHub docs
- **Database issues:** Check NETLIFY_ENV_SETUP.md Prisma section
- **Ops questions:** See OPERATIONAL_PROCEDURES.md

---

## Key Phone Numbers / Contacts

**Your Tech Stack:**
- **Next.js:** 14.2.28
- **Prisma:** 6.7.0
- **Hosting:** Netlify
- **Git:** GitHub

---

**Last Updated:** February 13, 2026  
**Version:** 1.0  
**Owner:** Morne Karg
