# Netlify Deployment Setup for GitHub Actions

## What's Been Done

✅ Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
✅ Configured Next.js to export as static HTML
✅ All code is committed and pushed to GitHub

## What You Need to Do

### Step 1: Get Netlify Site ID

1. Go to https://app.netlify.com
2. Log in with your account
3. Select "mk3dprint" site
4. Go to **Settings** → **Site Information**
5. Copy the **Site ID** (looks like: `abc123def456`)

### Step 2: Create Netlify Auth Token

1. Go to https://app.netlify.com/user/applications/personal
2. Click **New access token**
3. Give it a name like "GitHub Actions"
4. Click **Generate token**
5. Copy the token (you'll only see it once!)

### Step 3: Add GitHub Secrets

1. Go to your GitHub repository: https://github.com/MorneK-Cargo/MK3DPRINT
2. Go to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add two secrets:

**Secret 1:**
- Name: `NETLIFY_SITE_ID`
- Value: (paste your Site ID from Step 1)
- Click "Add secret"

**Secret 2:**
- Name: `NETLIFY_AUTH_TOKEN`
- Value: (paste your token from Step 2)
- Click "Add secret"

### Step 4: Trigger Deployment

Once you add the secrets, the GitHub Actions will:
1. Automatically run when you push to main
2. Build the Next.js site as static HTML
3. Deploy to Netlify

To manually trigger now:
1. Go to GitHub repo → **Actions**
2. Select "Deploy to Netlify" workflow
3. Click **Run workflow** → **Run workflow**

## What Happens Next

- GitHub Actions builds the Next.js site (`npm run build`)
- Output goes to `/out` directory
- Netlify deploys the `/out` folder
- Site updates at https://mk3dprint.org

## Troubleshooting

If the build fails:
1. Check **Actions** tab in GitHub
2. Click the failed workflow
3. See error messages
4. Common issues:
   - Missing npm packages
   - TypeScript errors
   - Environment variables needed

## Verify Deployment

Once deployed, check:
- [ ] Site loads at https://mk3dprint.org
- [ ] Trending designs section visible
- [ ] No errors in browser console
- [ ] Mobile responsive
- [ ] Forms work (contact, quote)

---

**Current Deployment Status:**
- Code: ✅ Pushed to GitHub
- GitHub Actions: ✅ Ready
- Netlify Config: ✅ Configured
- Secrets: ⏳ Waiting for you to add

**Next Action:** Add the two secrets to GitHub (Steps 1-3 above)
