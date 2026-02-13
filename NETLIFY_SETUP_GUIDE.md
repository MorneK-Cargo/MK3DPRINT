# Netlify Multi-Environment Setup Guide

## QUICK START (Do This First)

### Prerequisites
- Git repository initialized locally and pushed to GitHub/GitLab
- Netlify account with access to current mk3dprint.org deployment
- Admin access to domain registrar (if custom domains needed)

---

## STEP 1: Create Develop Branch (5 min)

```bash
cd ~/mk3dprint

# Create develop branch
git checkout -b develop

# Push to remote
git push -u origin develop

# Verify branches exist
git branch -a
```

**Expected Output:**
```
* develop
  main
```

---

## STEP 2: Create Two New Netlify Sites (20 min)

### Site #1: Staging Environment

1. Log into netlify.com
2. Click "Add new site" → "Import an existing project"
3. Select your Git repository (GitHub/GitLab)
4. Fill in:
   - **Project name:** mk3dprint-staging
   - **Base directory:** (leave blank unless subfolder)
   - **Build command:** npm run build
   - **Publish directory:** dist (or build, confirm with your project)
5. Click "Deploy site"
6. Wait for initial deployment
7. Note the deploy URL (should be `https://mk3dprint-staging-xxx.netlify.app`)

### Update Staging Netlify Settings

1. Go to Site settings → Build & deploy
2. Click "Deploy settings" → Edit settings
3. Change **Production branch** from "main" to "develop"
4. Click "Save"

**Result:** Every push to develop automatically deploys to staging site

### Site #2: Dev Environment

1. Repeat Site #1 process
2. **Project name:** mk3dprint-dev
3. In Build & deploy settings → Deploy settings → Edit
4. Change **Production branch** to "feature/*" (or accept deploy previews)
5. Save

**Result:** Every push to feature branches auto-deploys to dev site

---

## STEP 3: Update Current Production Site (5 min)

Go to your existing mk3dprint.org site in Netlify:

1. Click "Site settings" → "Build & deploy"
2. Verify **Production branch** is set to "main"
3. Click "Deploy settings" → "Edit settings"
4. Confirm settings:
   - **Base directory:** (blank)
   - **Build command:** npm run build
   - **Publish directory:** dist

**Result:** Production only deploys on main branch merges

---

## STEP 4: Configure Environment Variables (Optional but Recommended)

If your site needs different configs per environment:

### For Staging Site

1. Go to mk3dprint-staging in Netlify
2. Click "Site settings" → "Build & deploy" → "Environment"
3. Click "Edit variables"
4. Add environment-specific variables:
   ```
   NODE_ENV = staging
   API_URL = https://staging-api.mk3dprint.org (if applicable)
   LOG_LEVEL = info
   ```
5. Save

### For Dev Site

1. Go to mk3dprint-dev in Netlify
2. Repeat above with dev-specific values:
   ```
   NODE_ENV = development
   API_URL = http://localhost:3000 (if applicable)
   LOG_LEVEL = debug
   ```

### For Production Site (update existing)

1. Go to mk3dprint (prod site)
2. Update env vars to production values:
   ```
   NODE_ENV = production
   API_URL = https://api.mk3dprint.org
   LOG_LEVEL = warn
   ```

---

## STEP 5: Test the Setup (15 min)

### Test Dev Environment

1. Create feature branch:
   ```bash
   git checkout -b feature/test-setup
   ```

2. Make a visible change (e.g., add comment to HTML):
   ```html
   <!-- Test: Dev environment deployment working -->
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "test: dev environment setup"
   git push -u origin feature/test-setup
   ```

4. In Netlify, go to mk3dprint-dev → Deployments
5. You should see new deploy starting (check "Deploy log" if needed)
6. Once deployed, visit dev site URL and verify your change is visible

### Test Staging Environment

1. Create pull request from feature/test-setup → develop
   ```bash
   # Go to GitHub/GitLab, click "New Pull Request"
   # From: feature/test-setup
   # To: develop
   ```

2. Merge PR (click "Merge pull request")

3. In Netlify, go to mk3dprint-staging → Deployments
4. You should see new deploy
5. Visit staging site and verify change is visible

### Test Production (Final Validation)

1. Create pull request from develop → main
2. Merge PR to main
3. In Netlify, go to mk3dprint → Deployments
4. Verify new deploy starts
5. Visit mk3dprint.org and confirm change is live

---

## STEP 6: Clean Up Test Branch

Once testing is complete:

```bash
git checkout develop
git branch -D feature/test-setup
git push origin --delete feature/test-setup
```

---

## DEPLOYMENT WORKFLOW SUMMARY

From now on, use this workflow:

### Making Changes

```bash
# 1. Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# 2. Make changes locally, test with Claude Code
# 3. Commit and push
git add .
git commit -m "feat: description of changes"
git push -u origin feature/your-feature-name

# 4. Development site auto-deploys
#    Visit dev.mk3dprint.org (or dev-xxx.netlify.app) to test
```

### Testing in Staging

```bash
# 5. Create PR from feature branch to develop
#    (via GitHub/GitLab web interface)
# 6. Merge PR
# 7. Staging site auto-deploys
#    Visit staging.mk3dprint.org to do final validation
```

### Pushing to Production

```bash
# 8. Create PR from develop to main
#    (via GitHub/GitLab web interface)
# 9. Merge PR
# 10. Production auto-deploys
#     Visit mk3dprint.org to confirm live
```

---

## USEFUL NETLIFY LINKS

- **Staging Deployments:** https://app.netlify.com/sites/mk3dprint-staging/deploys
- **Dev Deployments:** https://app.netlify.com/sites/mk3dprint-dev/deploys
- **Prod Deployments:** https://app.netlify.com/sites/mk3dprint/deploys

---

## TROUBLESHOOTING

### Deploy Not Starting After Push

1. Check Git remote is correct: `git remote -v`
2. Verify branch name matches Netlify setting (main, develop, feature/*)
3. Check Netlify Site settings → Git configuration for correct repository

### Wrong Branch Building to Site

1. Go to Netlify Site settings → Build & deploy
2. Click "Deploy settings" → "Edit"
3. Verify **Production branch** is correct
4. Trigger manual deploy if needed (click "Trigger deploy")

### Environment Variables Not Applied

1. Check Netlify Build & deploy → Environment
2. Verify variable names match your build config
3. Rebuild site: Go to Deployments → "Trigger deploy"

---

## NEXT ACTIONS

- [ ] Complete Step 1-4 above
- [ ] Test with feature branch (Step 5)
- [ ] Delete test branch (Step 6)
- [ ] Begin using workflow for real changes
- [ ] Monitor deployments in Netlify dashboards
