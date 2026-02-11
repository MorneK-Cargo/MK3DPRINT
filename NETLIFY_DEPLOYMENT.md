# Netlify Deployment Guide for MK3DPRINT

## Overview
Your new mk3dprint website has been configured for static export deployment. The site is built and ready to be deployed to Netlify.

## Current Status
✓ Site successfully migrated to new Abacus design
✓ Static export configured (`output: 'export'` in next.config.js)
✓ Build completed successfully (`npm run build`)
✓ Static files ready in `./out/` directory
✓ API routes removed for static compatibility

## Deployment Steps

### Step 1: Connect GitHub Repository to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign in with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Select "GitHub" as your Git provider
5. Authorize Netlify to access your repositories
6. Select repository: `MorneK-Cargo/MK3DPRINT`
7. Click "Deploy site"

### Step 2: Configure Build Settings

When prompted for build settings:

**Build command:**
```
npm run build
```

**Publish directory:**
```
out
```

**Environment variables:**
- `NEXT_OUTPUT_MODE` = `export`

### Step 3: Verify Deployment

1. Netlify will automatically build and deploy
2. You'll receive a unique Netlify URL like: `https://xxx.netlify.app`
3. Test the site thoroughly:
   - Homepage loads correctly
   - All images display properly
   - Navigation links work
   - Mobile responsiveness works
   - No console errors

### Step 4: Update Cloudflare DNS

Once Netlify deployment is confirmed working:

1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Select your domain: `mk3dprint.org`
3. Go to DNS Records
4. Update or add CNAME record:
   - **Name:** `mk3dprint.org` (or `www`)
   - **Target:** Your Netlify URL (e.g., `xxx.netlify.app`)
   - **TTL:** Auto
5. Save changes
6. Wait 5-10 minutes for DNS propagation

### Step 5: Configure Netlify Domain

1. In Netlify dashboard, go to your site settings
2. Go to "Domain management"
3. Add custom domain: `mk3dprint.org`
4. Follow the verification steps
5. Enable HTTPS (automatic with Netlify)

## Important Notes

### About the Build
- Build time: ~2-3 minutes
- Output size: ~200KB (just static HTML, CSS, JS)
- No database or API required for production
- All images are static/embedded

### Contact Form Handling
The original site had API routes that are **not** compatible with static export. If you need contact forms:

**Option 1: Use External Service (Recommended)**
- Formspree: `https://formspree.io`
- Getform: `https://getform.io`
- Netlify Forms: Built-in Netlify feature

**Option 2: JavaScript-based Email**
- Use a service like SendGrid or Mailgun

### Caching & Performance
Netlify automatically caches:
- All static assets (HTML, CSS, JS)
- Images
- Fonts

For cache busting, Netlify handles this automatically with Next.js builds.

### Troubleshooting

**Issue: 404 errors on pages**
- Solution: Ensure `out/404.html` exists (it does by default)
- Netlify will serve this for all 404s

**Issue: Images not loading**
- Check browser console for image URL errors
- Ensure CDN image URLs are correctly formatted
- All image URLs should be absolute (not relative)

**Issue: Slow performance**
- Run Lighthouse audit to identify issues
- Check Netlify Analytics for slow pages
- Consider CDN optimization in Cloudflare

## File Structure in `out/`

```
out/
├── index.html              (Main homepage)
├── 404.html               (Error page)
├── robots.txt             (SEO)
├── og-image.png           (Social preview)
├── favicon.svg            (Browser icon)
├── _next/                 (Next.js bundle)
│   ├── static/            (JS, CSS chunks)
│   └── image-manifest.json
└── images/                (All site images)
```

## Build Configuration

**next.config.js:**
```javascript
const nextConfig = {
  distDir: '.next',
  output: 'export',           // Static export mode
  images: { unoptimized: true },  // CDN-hosted images
  typescript: { ignoreBuildErrors: false },
  eslint: { ignoreDuringBuilds: true },
};
```

**.env:**
```
NEXT_OUTPUT_MODE=export
DATABASE_URL=... (not used in static mode)
ABACUSAI_API_KEY=... (can be removed)
```

## Post-Deployment Checklist

- [ ] Site accessible at mk3dprint.org
- [ ] Homepage displays correctly
- [ ] All sections load (services, gallery, etc.)
- [ ] Images display properly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] No console errors in DevTools
- [ ] HTTPS enabled
- [ ] Fast performance (< 2s load time)
- [ ] Contact forms working (via external service)

## Support

For Netlify support: https://docs.netlify.com
For questions about your site: Ask me!

---
**Last Updated:** February 10, 2026
**Site Version:** Abacus AI Redesign
**Deployment Status:** Ready for Production
