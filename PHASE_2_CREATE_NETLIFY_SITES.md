# PHASE 2: Create Netlify Sites for Dev & Staging

**Time Required:** 45 minutes  
**Prerequisites:** 
- GitHub/GitLab account with mk3dprint repository
- Netlify account (you already have this for production)
- Develop branch created and pushed to GitHub (from PHASE 1)

---

## Overview: What We're Creating

After this phase, you'll have:

| Site Name | Netlify Project | Git Branch | Public URL | Purpose |
|-----------|-----------------|-----------|-----------|---------|
| mk3dprint | mk3dprint | main | mk3dprint.org | **Production (Live)** |
| NEW: mk3dprint-staging | mk3dprint-staging | develop | staging-xxx.netlify.app | **Staging (Test)** |
| NEW: mk3dprint-dev | mk3dprint-dev | feature/* | dev-xxx.netlify.app | **Development (Dev)** |

---

## STEP 1: Create STAGING Site (20 minutes)

### 1a. Create New Netlify Site

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **Add new site** → **Import an existing project**
3. When prompted to select Git provider:
   - Click **GitHub** (or your Git provider)
   - Select your mk3dprint repository
   - Click **Install** if prompted to authorize Netlify with GitHub

### 1b. Configure Staging Site Settings

After selecting repository, you'll see configuration screen:

**Field: Project name**
```
mk3dprint-staging
```

**Field: Base directory**
```
(leave blank)
```

**Field: Build command**
```
npm run build
```

**Field: Publish directory**
```
out
```

Click **Deploy site**

Wait for initial deployment (5-10 minutes). It may fail because we haven't set branch yet, that's OK.

### 1c. Update Branch Connection to Develop

1. Once site is created, click **Site settings**
2. Go to **Build & deploy** → **Deploy settings** → **Edit settings**
3. Find **Production branch** (currently shows "main")
4. Change it to: **develop**
5. Click **Save**

**Result:** Staging site now deploys automatically whenever you push to develop branch

### 1d. Set Environment Variables (from NETLIFY_ENV_SETUP.md)

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables** (or **+ Add variable**)
3. Add staging environment variables (see NETLIFY_ENV_SETUP.md)
4. Click **Save**

**Checkpoint:** Staging site is ready
- Check **Deployments** tab
- If still in old state, click **Trigger deploy** to build with develop branch

---

## STEP 2: Create DEV Site (20 minutes)

Repeat STEP 1 for development site:

### 2a. Create New Netlify Site

1. Click **Add new site** → **Import an existing project**
2. Select your mk3dprint GitHub repository again
3. Authorize if prompted

### 2b. Configure Dev Site Settings

**Field: Project name**
```
mk3dprint-dev
```

**Field: Base directory**
```
(leave blank)
```

**Field: Build command**
```
npm run build
```

**Field: Publish directory**
```
out
```

Click **Deploy site**

Wait for initial deployment.

### 2c. Enable Deploy Previews for Feature Branches

For dev site, we want automatic deploys for ALL feature branches.

1. Go to **Site settings** → **Build & deploy** → **Deploy settings** → **Edit settings**
2. Find **Production branch** and set to: **main** (or leave as default)
3. Find **Deploy previews** section
4. Make sure it's **Enabled**
5. Find **Deploy context** or similar
6. Ensure **Deploy previews from pull requests** is enabled
7. Click **Save**

**Alternative (Simpler):** 
Instead of production branch, you can:
1. Go to **Deploy settings** → **Edit settings**
2. Change **Production branch** to **develop** (same as staging)
3. This will deploy develop branch to dev site (fine for testing)

### 2d. Set Environment Variables

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables**
3. Add development environment variables (see NETLIFY_ENV_SETUP.md)
4. Click **Save**

**Checkpoint:** Dev site is ready
- Check **Deployments** tab
- Trigger deploy if needed

---

## STEP 3: Update PRODUCTION Site Settings (5 minutes)

Your existing mk3dprint.org site needs to be explicitly set to main branch.

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click **mk3dprint** (your production site)
3. Go to **Site settings** → **Build & deploy** → **Deploy settings** → **Edit settings**
4. Find **Production branch** and ensure it's set to: **main**
5. Confirm **Build command** is: `npm run build`
6. Confirm **Publish directory** is: `out`
7. Click **Save**

**Important:** This ensures production ONLY deploys when main branch is updated

### Update Production Environment Variables

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Verify all production environment variables are set correctly
3. If you need to update any, click **Edit variables**

---

## STEP 4: Test the Setup (10 minutes)

### Test Dev Deployment

1. Create a feature branch locally:
   ```bash
   cd ~/mk3dprint
   git checkout develop
   git pull origin develop
   git checkout -b feature/test-deploy
   ```

2. Make a small visible change (e.g., edit a comment in a file)
   ```bash
   # Edit any file, save it
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "test: netlify dev deployment"
   git push -u origin feature/test-deploy
   ```

4. Monitor Netlify:
   - Go to mk3dprint-dev site
   - Click **Deployments** tab
   - You should see new deployment starting
   - Click on it to see **Deploy log**
   - Once complete (should take 3-5 minutes), visit the dev site URL
   - Verify your test change is visible

### Test Staging Deployment

1. Create PR from feature/test-deploy → develop on GitHub
   - Go to GitHub repository
   - Click **New pull request**
   - From: feature/test-deploy, To: develop
   - Click **Create pull request**

2. Review the PR (you can merge immediately for testing)
3. Click **Merge pull request**

4. Monitor Netlify:
   - Go to mk3dprint-staging site
   - Click **Deployments** tab
   - You should see new deployment starting
   - Once complete, visit staging site URL
   - Verify your test change is visible

### Test Production (Final Validation)

1. Create PR from develop → main on GitHub
   - Go to GitHub repository
   - Click **New pull request**
   - From: develop, To: main
   - Click **Create pull request**

2. Review PR changes
3. Click **Merge pull request**

4. Monitor production:
   - Go to mk3dprint.org production site
   - Click **Deployments** tab
   - You should see new deployment starting
   - Once complete, visit mk3dprint.org
   - Verify your test change is visible

5. **Confirm:** Your change went through the full workflow:
   - Dev site ✓
   - Staging site ✓
   - Production site ✓

---

## STEP 5: Clean Up Test Branch

Once testing is complete:

```bash
# Clean up locally
git checkout develop
git branch -D feature/test-deploy

# Clean up remote
git push origin --delete feature/test-deploy
```

---

## Troubleshooting Phase 2

### Deploy Not Showing Up

**Problem:** Pushed to branch but Netlify didn't deploy

**Solutions:**
1. Check **Build & deploy** → **Git repository** is correct repository
2. Verify correct branch is configured in **Deploy settings**
3. Go to **Deployments** → Click **Trigger deploy** manually
4. Check **Deploy log** for errors (usually build errors)

### Wrong Environment Variables

**Problem:** Site deployed but configuration not applied

**Solutions:**
1. Check **Build & deploy** → **Environment** has variables set
2. Verify variable names exactly match your build config
3. Trigger fresh deploy after adding variables
4. Check **Deploy log** to see variables being read

### Can't Find Repository

**Problem:** "Repository not found" error when creating site

**Solutions:**
1. Ensure you're logged into correct GitHub account
2. Verify mk3dprint repo is under that GitHub account
3. Click **GitHub** → **Authorize** again to refresh permissions
4. Try again

---

## Next Steps

1. ✅ **PHASE 1 Complete:** Git branching set up (main, develop branches)
2. ✅ **PHASE 2 Complete:** Three Netlify sites created and configured
3. **PHASE 3 Next:** Document rollback procedures and monitoring

Proceed to **DEPLOYMENT_WORKFLOW.md** for ongoing operational procedures.
