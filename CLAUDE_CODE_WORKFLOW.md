# Claude Code + Dev Environment Workflow

## How to Use Claude Code with Three-Tier Setup

Your existing Claude Code + auto-push workflow becomes even more powerful with dev/staging/production separation.

---

## UPDATED WORKFLOW FOR CLAUDE CODE

### Before (Old Way)
```
Claude Code edits → Auto-push to main → Netlify deploys to production (LIVE)
Risk: Untested changes go live immediately
```

### After (New Way)
```
Claude Code edits → Auto-push to feature branch → Dev site deploys
Verify on dev site → PR to develop → Staging site deploys
Final check on staging → PR to main → Production deploys
Risk: Zero risk to production
```

---

## STEP-BY-STEP: Making Changes with Claude Code

### 1. Create Feature Branch Before Opening Claude Code

```bash
cd ~/mk3dprint

# Ensure you're on develop
git checkout develop
git pull origin develop

# Create feature branch
git checkout -b feature/my-change

# Push branch to GitHub/GitLab
git push -u origin feature/my-change
```

### 2. Open Claude Code on Feature Branch

```bash
# Claude Code will now work on the feature branch
# Any changes it pushes will go to feature/my-change branch
# Netlify will auto-deploy to dev site
```

### 3. Monitor Development Site

- Netlify dashboard → mk3dprint-dev → Deployments
- Watch for new deploy to start (usually within 30 seconds of push)
- Once deployment completes, visit dev.mk3dprint.org to test changes
- If issues found, have Claude Code make corrections (still on feature branch)

### 4. When Satisfied with Changes

```bash
# Stop Claude Code edits
# Perform final manual test on dev site

# Then move to staging via GitHub/GitLab:
# 1. Go to GitHub/GitLab web interface
# 2. Create Pull Request: feature/my-change → develop
# 3. Review changes in PR
# 4. Click "Merge pull request"
```

### 5. Verify Staging Site

- Netlify dashboard → mk3dprint-staging → Deployments
- Wait for deploy to complete
- Visit staging.mk3dprint.org
- Perform final validation testing
- If issues found, go back to feature branch, have Claude fix, then update PR

### 6. Promote to Production

```bash
# Go to GitHub/GitLab web interface
# Create Pull Request: develop → main
# Review changes
# Click "Merge pull request"

# Netlify auto-deploys to mk3dprint.org (LIVE)
# Monitor for success
```

---

## CLAUDE CODE TIPS FOR THIS WORKFLOW

### Set Up Multi-Workspace (Recommended)

If Claude Code supports multiple workspace configurations:

1. **Workspace 1: Feature Development**
   - Path: ~/mk3dprint
   - Branch: feature/* (active feature branch)
   - Purpose: Active development

2. **Workspace 2: Staging Review**
   - Path: ~/mk3dprint
   - Branch: develop
   - Purpose: Review staging before prod merge

3. **Workspace 3: Production Monitoring**
   - Path: ~/mk3dprint
   - Branch: main
   - Purpose: Monitor production, prepare hotfixes

### Naming Convention for Feature Branches

Use descriptive names so you know what's being tested:

```
feature/homepage-redesign
feature/fix-contact-form
feature/add-blog-section
feature/update-pricing-page
feature/performance-optimization
```

---

## AUTOMATIC TESTING IN DEV ENVIRONMENT

### Pre-Deployment Checklist for Claude Code

Before you declare changes ready for staging, Claude Code should verify:

```
DEV SITE TEST CHECKLIST:
☐ Page loads without console errors (F12 → Console)
☐ All links navigate correctly
☐ Form submission works (if applicable)
☐ Mobile responsive (test on mobile-width browser)
☐ Images load correctly
☐ Styling matches intended design
☐ No typos or broken text
☐ Load time acceptable (< 3 seconds)
☐ Analytics/tracking firing (if applicable)
```

### Automated Validation (Optional Future Enhancement)

You could add a lighthouse score check:

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit on dev site
lighthouse https://dev-xxx.netlify.app --output=json
```

---

## ROLLING BACK IF ISSUES FOUND

### Issue Found During Staging Testing

```bash
# Option 1: Fix in feature branch (if minor)
# Have Claude Code make corrections on feature branch
# Push to feature/your-change
# Dev site updates
# Test again in dev
# Once working, update PR to develop
# Staging auto-updates

# Option 2: Revert PR (if major issue)
# Click "Revert" on the PR in GitHub/GitLab
# Develop branch rolls back
# Staging site auto-reverts
# Create new feature branch to fix issue properly
```

### Issue Found in Production (Critical)

```bash
# Emergency Option: Revert main branch
# Go to GitHub/GitLab
# Find commit on main that caused issue
# Click "Revert this commit"
# This creates new commit that undoes the change
# Push to main
# Production auto-deploys with revert
# Time to recover: 2-5 minutes

# Then fix properly on feature branch
# Test in dev/staging
# Re-deploy to production when ready
```

---

## INTEGRATION WITH CLAUDE CODE

### When Starting Claude Code Session

```
"I'm working on feature/my-change branch for the mk3dprint.org site.
This branch auto-deploys to dev.mk3dprint.org for testing.

Once changes are working in dev, I'll merge to develop (staging),
then finally to main (production).

Please make changes and push to this feature branch.
I'll test on the dev site and let you know if adjustments needed."
```

### Claude Code Prompt for Deployment-Safe Development

```
"Make the following changes to mk3dprint.org:
[Your requirements]

Remember:
- Changes will auto-push to feature/my-change branch
- Dev site (dev.mk3dprint.org) will update in ~30 seconds
- I'll test there and give you feedback
- Only proceed if confident in changes
- If unsure, ask before pushing"
```

---

## DAILY WORKFLOW SUMMARY

### Monday: New Feature
```
1. git checkout -b feature/new-feature (locally)
2. Open Claude Code → make changes
3. Monitor dev.mk3dprint.org
4. Test and iterate
```

### Wednesday: Ready for Staging
```
1. Create PR feature → develop on GitHub
2. Merge PR
3. Test on staging.mk3dprint.org
4. Get approval if needed
```

### Friday: Deploy to Production
```
1. Create PR develop → main on GitHub
2. Merge PR
3. Monitor mk3dprint.org production deployment
4. Announce to stakeholders
```

---

## NETLIFY NOTIFICATIONS (Keep You Informed)

### Enable Email Alerts

Netlify → Site settings → Notifications

Set up notifications for:
- Build success
- Build failure
- Deploy success
- Deploy failure

This way you know immediately if deployment had issues.

---

## QUESTIONS FOR CLAUDE CODE SETUP

Before starting full workflow:

1. Is mk3dprint currently a Git repository?
   - If no: `git init`, commit initial code, push to GitHub/GitLab

2. Do you have Netlify access?
   - Confirm you can log in and see current mk3dprint.org site

3. What's your current build process?
   - Build command: `npm run build` or other?
   - Output directory: `dist`, `build`, `_site`, or other?
   - (Need this for Netlify settings)

4. Any environment variables (API keys, feature flags, etc.)?
   - If yes, document per environment (dev/staging/prod)

Answer these and we can finalize the setup.
