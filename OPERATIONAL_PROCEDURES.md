# Operational Procedures: Dev → Staging → Production Workflow

**Audience:** Anyone deploying changes to mk3dprint.org  
**Duration:** 2-4 hours per feature (including testing)

---

## Standard Deployment Workflow

### Phase 1: Development (30-60 minutes)

```bash
# 1. Ensure you're on develop branch and up to date
git checkout develop
git pull origin develop

# 2. Create feature branch from develop
git checkout -b feature/your-feature-name

# 3. Work with Claude Code (or edit manually)
# Make changes, test locally with: npm run dev

# 4. Commit and push to GitHub
git add .
git commit -m "feat: description of your changes"
git push -u origin feature/your-feature-name
```

**Result:** 
- Dev site (dev-xxx.netlify.app) auto-deploys within 30 seconds
- Your feature is now visible at dev site for testing

### Phase 2: Staging Validation (30-60 minutes)

```bash
# 5. Once satisfied with dev testing, create Pull Request
# Go to GitHub → mk3dprint repository
# Click "New pull request"
# Set: feature/your-feature-name → develop
# Click "Create pull request"
# Click "Merge pull request"

# Local: Pull develop to sync
git checkout develop
git pull origin develop
```

**Result:**
- Staging site (staging-xxx.netlify.app) auto-deploys within 30 seconds
- Feature now in staging for final validation
- Database is separate staging database (safe to test)

**Testing in Staging:**
- [ ] All functionality works as expected
- [ ] No console errors (F12 → Console tab)
- [ ] Forms/interactions work correctly
- [ ] Mobile responsive (test at different screen sizes)
- [ ] Performance acceptable
- [ ] Analytics firing correctly
- [ ] No broken links

### Phase 3: Production Deployment (5 minutes)

```bash
# 6. Once staging validated, create PR to main
# Go to GitHub → mk3dprint repository
# Click "New pull request"
# Set: develop → main
# Click "Create pull request"
# Review all changes one final time
# Click "Merge pull request"

# Local: Pull main to sync
git checkout main
git pull origin main
```

**Result:**
- Production site (mk3dprint.org) auto-deploys within 30 seconds
- Feature is now live to all users

**Post-Deployment:**
- [ ] Verify site loads correctly
- [ ] Spot-check feature on production
- [ ] Monitor for errors (check analytics/logs if available)
- [ ] Be on-call for 15 minutes if rollback needed

---

## Monitoring & Alerts

### Real-Time Deployment Status

**Check Netlify Deployments:**
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click site (mk3dprint, mk3dprint-staging, mk3dprint-dev)
3. Click **Deployments** tab
4. See real-time status of current and past deployments

**Check Deployment Logs:**
- Click any deployment
- Click **Deployment log** to see build output
- Look for errors in build process

### Enable Email Notifications

**Set up Netlify alerts to notify on deployment issues:**

1. Go to site → **Site settings** → **Notifications**
2. Click **Slack**, **Email**, or **Webhooks**
3. Choose what to be notified about:
   - Build success
   - Build failure
   - Deploy success
   - Deploy failure

Recommended: Enable **Deploy failure** alerts so you know immediately if something breaks.

---

## Rollback Procedures

### Quick Rollback (< 5 minutes)

If production deployment causes issues:

#### Option 1: Revert in Netlify (Fastest)

1. Go to mk3dprint site
2. Click **Deployments** tab
3. Find the last successful deployment (before your change)
4. Click on it
5. Click **Restore** button
6. Confirm restoration

**Result:** Previous version is now live (2-5 minute downtime)

#### Option 2: Revert in Git (Recommended)

1. Go to GitHub → mk3dprint repository
2. Click **[n] commits** to see commit history
3. Find your problematic commit
4. Click **...** menu → **Revert this commit**
5. GitHub creates new commit that undoes your changes
6. Push to main

```bash
# Local sync
git checkout main
git pull origin main
```

**Result:** Previous code is restored via new commit (cleaner history)

#### Option 3: Manual Fix (If Quick Fix Available)

If the fix is simple:
1. Create new feature branch from develop
2. Make the fix
3. Test in dev/staging
4. Merge to develop then main
5. Deploy normally

**When to use:** Only if you can fix and re-test within 10 minutes

---

## Deployment Checklist (Before Merging to Main)

Use this before every production deployment:

```
PRE-DEPLOYMENT VALIDATION CHECKLIST

Code Review:
☐ Code reviewed by team member (or self-review if solo)
☐ No console errors in staging
☐ No TypeScript/build errors

Functional Testing:
☐ Main feature works as intended
☐ All related features still work
☐ Forms submit successfully
☐ No broken links
☐ Images load correctly
☐ Responsive design verified

Performance:
☐ Page load time acceptable (< 3 seconds)
☐ No performance regressions

Security:
☐ No sensitive data in logs
☐ No API keys exposed
☐ Authentication still working

Analytics & Monitoring:
☐ Analytics events firing
☐ Tracking codes correct for production
☐ Error reporting configured

Database:
☐ No Prisma migration issues
☐ Database queries optimized
☐ No N+1 queries

Deployment Readiness:
☐ Staging tested for 30+ minutes
☐ No known issues
☐ Team notified of upcoming production deploy
☐ Rollback plan documented (if needed)

APPROVED FOR PRODUCTION: ___________  (date/time)
```

---

## Common Issues & Solutions

### Issue: Deployment Failed

**What to do:**
1. Click **Deployments** → recent failed deployment
2. Click **Deployment log**
3. Scroll to find error message (usually at bottom)
4. Common errors:
   - **Build error:** Fix code and push new commit to same branch
   - **Environment variable missing:** Add variable in Site settings → Environment
   - **Database connection error:** Verify DATABASE_URL is correct

### Issue: Feature Works in Dev/Staging but Broken in Production

**Likely causes:**
- Environment variable different
- Database schema mismatch
- Cache issue

**Solutions:**
1. Compare environment variables between staging and production
2. Verify database schema matches
3. Clear browser cache (Ctrl+Shift+Delete)
4. Check Netlify build logs for warnings
5. If critical: Use rollback procedure above

### Issue: Deployment Takes Too Long

**Typical build times:**
- Next.js build: 2-5 minutes
- Prisma migration: 1-2 minutes
- Total: 3-7 minutes

**If taking >10 minutes:**
1. Check build log for warnings/issues
2. May need to optimize Next.js build
3. Check if large file uploads happening

---

## Emergency Procedures

### Critical Issue in Production

If production has a critical issue:

**Step 1: Immediate Action (1 minute)**
```bash
# Rollback to previous version
# Option 1: Use Netlify UI (fastest)
# Option 2: Use Git revert (cleanest)
```

**Step 2: Notify Team (1 minute)**
- Let team know production rolled back
- Estimated time to fix

**Step 3: Investigation (5-10 minutes)**
- Check logs for what went wrong
- Determine if it's code issue or environment issue

**Step 4: Fix & Re-deploy (30-60 minutes)**
- Create feature branch from develop
- Fix the issue
- Test thoroughly in dev/staging
- Deploy to production

---

## Performance Targets

Once implemented, you should achieve:

| Metric | Target | How to Measure |
|--------|--------|---|
| Deployment Frequency | 1-2x per day | Netlify Deployments tab |
| Lead Time | < 4 hours from commit to production | Git log + Netlify deploy time |
| Failure Rate | < 5% of deployments | Count failed rollbacks / total deploys |
| Recovery Time | < 5 minutes | Time from issue detection to rollback |

---

## Regular Maintenance

### Weekly
- [ ] Review staging site for any outstanding issues
- [ ] Delete old feature branches (keep repo clean)
- [ ] Check Netlify build times (optimization opportunities)

### Monthly
- [ ] Review deployment frequency and lead times
- [ ] Audit environment variables (ensure still accurate)
- [ ] Check for Netlify updates or changes

### Quarterly
- [ ] Review rollback procedures (test a rollback)
- [ ] Optimize Next.js build performance
- [ ] Update documentation as needed

---

## Contact & Support

**If deployment issues occur:**
1. Check Netlify **Deployment log** (usually shows the problem)
2. Check if environment variables are set correctly
3. Use **Trigger deploy** to retry if it was a transient error
4. Use rollback procedure if needed

**For ongoing optimization:**
- Monitor build times in Netlify
- Review deployment frequency in TASKS.md
- Consider adding automated testing if needed
