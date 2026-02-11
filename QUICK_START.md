# MK3DPRINT - Quick Start Deployment

## ⚡ 15-Minute Deployment Guide

Your site is ready. Follow these 5 steps to go live:

---

## Step 1: Deploy to Netlify (5 minutes)

1. Open https://app.netlify.com (sign in with GitHub)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **"GitHub"** as provider
4. Choose repository: **MorneK-Cargo/MK3DPRINT**
5. Click **"Deploy site"**

Netlify will auto-detect settings. If asked:
- **Build command:** `npm run build`
- **Publish directory:** `out`
- **Environment variable:** `NEXT_OUTPUT_MODE` = `export`

**⏱️ Wait for build to complete (2-3 minutes)**

---

## Step 2: Get Your Netlify URL (1 minute)

After deployment:
1. Go to your Netlify site dashboard
2. Find **"Site URL"** (top-left)
3. Copy it (looks like: `https://xxxxx.netlify.app`)
4. Save it for next step

---

## Step 3: Update Cloudflare DNS (5 minutes)

1. Open https://dash.cloudflare.com
2. Select domain: **mk3dprint.org**
3. Go to **DNS** → **Records**
4. Look for existing CNAME or A record pointing to old host
5. Click **"Edit"** (or delete and add new)
6. Create/update CNAME record:
   - **Type:** CNAME
   - **Name:** `mk3dprint.org`
   - **Target:** `xxxxx.netlify.app` (your Netlify URL)
   - **TTL:** Auto
   - **Proxy:** Proxied (orange cloud)
7. Click **"Save"**

---

## Step 4: Wait for DNS (5-10 minutes)

DNS takes 5-10 minutes to propagate globally.

While waiting, verify locally:
```bash
# Open terminal and run:
nslookup mk3dprint.org

# Should eventually show Netlify's IPs
```

---

## Step 5: Verify Site is Live (1 minute)

Open **https://mk3dprint.org** in browser

Check:
- ✓ Site loads
- ✓ Homepage displays
- ✓ Images show
- ✓ Lock icon visible (HTTPS)
- ✓ No console errors (F12)

---

## Troubleshooting

### Site still shows old version?
1. Hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows)
2. Clear browser cache
3. Wait 10 more minutes for DNS

### Build failed on Netlify?
1. Check Netlify build logs
2. Ensure `.env` has: `NEXT_OUTPUT_MODE=export`
3. Contact me for help

### Images not loading?
1. Check browser console (F12)
2. Try hard refresh
3. Check if Cloudflare is blocking (Security → WAF)

---

## Performance Tips (Optional)

In Cloudflare dashboard:

1. **Speed** section:
   - Enable **Brotli** compression
   - Enable **Minification** (CSS, JS, HTML)
   - Enable **Rocket Loader** (faster)

2. **SSL/TLS**:
   - Mode: **"Full (strict)"**

3. **Caching**:
   - Browser Cache TTL: **1 hour**

---

## After Going Live

1. **Update social media** with new URL
2. **Monitor site** first 24 hours
3. **Test on mobile** phone
4. **Check analytics** in Netlify dashboard
5. **Celebrate! 🎉**

---

## Emergency Rollback

If something goes wrong:

1. Go to Cloudflare DNS
2. Update CNAME back to old host
3. Wait 5-10 minutes
4. Old site will be restored

---

## Still Need Help?

See detailed guides:
- **NETLIFY_DEPLOYMENT.md** - Full Netlify setup
- **CLOUDFLARE_CONFIG.md** - DNS & security setup
- **DEPLOYMENT_SUMMARY.md** - Complete technical details

---

**Status:** ✓ Ready for production
**Action:** Follow 5 steps above
**Time needed:** ~15 minutes
**Result:** Site live at mk3dprint.org

Good luck! 🚀
