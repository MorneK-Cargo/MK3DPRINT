# mk3dprint.org Development Environment Strategy

## EXECUTIVE SUMMARY

Implement a three-tier deployment architecture (Dev → Staging → Production) to eliminate risk of untested changes affecting your live site. Current single-environment approach (direct-to-production) creates operational risk. Proposed solution leverages Netlify's native multi-site capabilities with Git branching to achieve zero-downtime, validated deployments.

**Time to Deploy:** 2-4 hours | **Risk Level:** Low | **Ongoing Overhead:** Minimal

---

## CURRENT STATE ANALYSIS

### Existing Workflow
```
Local Development → Claude Code edits → Auto-push to mk3dprint.org (LIVE)
```

**Risks Identified:**
- No testing environment before production deployment
- Broken features immediately visible to end users
- No rollback mechanism if issues arise
- No pre-deployment validation

### What We're Building
```
Feature Branch → Dev Site (dev.mk3dprint.org) 
  → Code review/testing
  ↓
Staging Branch → Staging Site (staging.mk3dprint.org) 
  → Final validation
  ↓
Main Branch → Production (mk3dprint.org LIVE)
```

---

## IMPLEMENTATION ARCHITECTURE

### 1. Git Branching Strategy (Recommended: Git Flow)

**Branch Hierarchy:**
- **main** → Production site (mk3dprint.org)
  - Protected branch, requires approval before merge
  - Deploys to Netlify production
  
- **develop** → Staging site (staging.mk3dprint.org)
  - Integration branch for testing
  - Deploys to Netlify staging
  
- **feature/*** → Dev site (dev.mk3dprint.org)
  - Individual development branches
  - Auto-deploys to dev environment for testing

**Workflow Process:**
```
1. Create feature branch from develop
   git checkout -b feature/my-changes develop

2. Make changes locally, test in dev environment
   
3. Push to GitHub/GitLab
   git push origin feature/my-changes

4. Dev site auto-updates (dev.mk3dprint.org shows your changes)

5. Test thoroughly in dev, then create Pull Request to develop

6. Merge approved PR to develop
   → Staging site updates (staging.mk3dprint.org)

7. Final testing in staging

8. When ready, create PR from develop → main

9. Approval/merge to main
   → Production deploys (mk3dprint.org LIVE)
```

### 2. Netlify Configuration

**Create Three Netlify Sites:**

| Site Name | Branch | URL | Purpose |
|-----------|--------|-----|---------|
| mk3dprint | main | mk3dprint.org | Production (LIVE) |
| mk3dprint-staging | develop | staging.mk3dprint.org | Pre-production testing |
| mk3dprint-dev | feature/* | dev.mk3dprint.org | Development/testing |

**Netlify Build Settings per Site:**

```
Build Command: npm run build
Publish Directory: dist (or build, depends on your setup)
Environment Variables: 
  - NODE_ENV: production (main/develop)
  - NODE_ENV: staging (develop)
  - NODE_ENV: development (feature branches)
  - API_URL: Environment-specific endpoints
  - LOG_LEVEL: Varies by environment
```

### 3. Environment-Specific Configuration

**Create `.env.development`, `.env.staging`, `.env.production`:**

```bash
# .env.development
NODE_ENV=development
API_URL=http://localhost:3000/api
LOG_LEVEL=debug
FEATURE_FLAGS=all

# .env.staging
NODE_ENV=staging
API_URL=https://staging-api.mk3dprint.org/api
LOG_LEVEL=info
FEATURE_FLAGS=all

# .env.production
NODE_ENV=production
API_URL=https://api.mk3dprint.org/api
LOG_LEVEL=warn
FEATURE_FLAGS=stable-only
```

**Build Script in package.json:**
```json
{
  "scripts": {
    "build": "vite build",
    "build:dev": "NODE_ENV=development vite build",
    "build:staging": "NODE_ENV=staging vite build",
    "build:prod": "NODE_ENV=production vite build"
  }
}
```

---

## DEPLOYMENT WORKFLOW

### Pre-Deployment Validation Checklist

Before merging to main:
- [ ] All tests passing (if test suite exists)
- [ ] No console errors in staging environment
- [ ] Performance: Page load times within acceptable range
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Forms/interactive elements tested end-to-end
- [ ] Links verified (no 404s)
- [ ] Accessibility audit passed (WAVE, Lighthouse)
- [ ] SEO metadata correct for prod environment
- [ ] Analytics/tracking enabled correctly

### Rollback Procedure

If production deployment causes issues:

**Option 1: Quick Rollback (via Netlify)**
- Netlify dashboard → Deployments tab
- Click previous successful deployment
- Click "Restore" to redeploy previous version
- Time to restore: ~1-2 minutes

**Option 2: Git Rollback**
- Identify commit hash of last stable build
- `git revert [commit-hash]`
- Push to main → Netlify auto-redeploys

---

## SETUP CHECKLIST (IMMEDIATE ACTIONS)

### Phase 1: Git Setup (30 minutes)
- [ ] If not using Git: Initialize Git repo locally
  ```bash
  cd mk3dprint
  git init
  git add .
  git commit -m "Initial commit"
  ```
- [ ] Create GitHub/GitLab repository
- [ ] Push local code to remote
- [ ] Create `develop` branch
  ```bash
  git checkout -b develop
  git push -u origin develop
  ```
- [ ] Create `.env.example` template (don't commit secrets)

### Phase 2: Netlify Configuration (45 minutes)
- [ ] Log into Netlify.com
- [ ] Create two new sites (mk3dprint-staging, mk3dprint-dev)
- [ ] Connect all three sites to your Git repo
- [ ] Configure branch deployments:
  - **Site 1:** main branch → mk3dprint.org
  - **Site 2:** develop branch → staging.mk3dprint.org
  - **Site 3:** feature/* branches → dev.mk3dprint.org
- [ ] Set environment variables per site (.env files)
- [ ] Enable deploy previews for feature branches
- [ ] Configure domain aliases (optional):
  - staging.mk3dprint.org (for staging site)
  - dev.mk3dprint.org (for dev site)

### Phase 3: Local Workflow Setup (30 minutes)
- [ ] Create feature branch from develop
  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b feature/first-test
  ```
- [ ] Make a test change (e.g., update a comment)
- [ ] Commit and push
  ```bash
  git add .
  git commit -m "Test: Dev environment setup"
  git push -u origin feature/first-test
  ```
- [ ] Verify dev.mk3dprint.org deploys automatically
- [ ] Test on dev site, then create PR to develop
- [ ] Verify staging.mk3dprint.org updates
- [ ] Merge to main and verify production.mk3dprint.org updates

### Phase 4: Documentation (15 minutes)
- [ ] Create DEPLOYMENT.md file documenting this workflow
- [ ] Add to project README
- [ ] Bookmark Netlify deploy URLs and environment settings

---

## RISK MITIGATION

| Risk | Mitigation | Ownership |
|------|-----------|-----------|
| Accidental merge to main | Branch protection rules in Git + PR review | Git config |
| Config/secrets in Git | .env.example template + .gitignore | Developer discipline |
| Stale staging environment | Auto-deploy on develop branch merge | Netlify config |
| Failed deployment to prod | Automated rollback capability | Netlify built-in |
| Performance regression | Load testing in staging before prod merge | Manual validation |

---

## ONGOING OPERATIONS

### Weekly Routine
- Review staging environment for issues
- Delete old feature branches (keeps repo clean)
- Monitor production deployments (Netlify notifications)

### Monitoring & Alerts (Optional but Recommended)
- Enable Netlify notifications → Slack/Email
- Set up basic uptime monitoring (Pingdom, etc.)
- Track error rates in production (Sentry, LogRocket, etc.)

---

## ALTERNATIVE: CI/CD PIPELINE (ADVANCED)

If you want automation for testing, add GitHub Actions:

```yaml
# .github/workflows/test-and-deploy.yml
name: Test & Deploy
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [develop, main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm run test (if applicable)
```

This ensures code is validated before Netlify deploys.

---

## SUCCESS METRICS

Once implemented, track:
- **Deployment frequency:** How often can you safely deploy? (Target: Daily)
- **Lead time:** Time from feature completion to production (Target: <4 hours)
- **Failure rate:** % of deployments that require rollback (Target: <5%)
- **Recovery time:** Time to rollback if issues arise (Target: <5 minutes)

---

## NEXT STEPS

1. **Confirm Git Setup:** Are you currently using Git/GitHub for mk3dprint?
2. **Confirm Netlify Access:** Can you access current Netlify site settings?
3. **Define Environment Vars:** What configuration needs to differ between dev/staging/prod?
4. **Begin Phase 1:** Start with Git branching strategy setup

This strategy eliminates risk while maintaining Claude Code's convenience for development. Questions?
