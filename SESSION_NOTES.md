# MK3DPRINT Website Setup Session - November 25, 2025

## What We Accomplished

### 1. DNS Configuration & Domain Setup
- **Domain**: mk3dprint.org
- **Hosting**: Netlify (https://mk-3d-printing.netlify.app)
- **DNS Provider**: Cloudflare

#### DNS Records Configured:
```
Type: CNAME
Name: mk3dprint.org
Target: mk-3d-printing.netlify.app
Proxy: DNS only (grey cloud)

Type: CNAME
Name: www
Target: mk-3d-printing.netlify.app
Proxy: DNS only (grey cloud)
```

**Important Notes:**
- Cloudflare proxy (orange cloud) was interfering with Netlify SSL verification
- Keep proxy OFF (grey cloud) until Netlify provisions SSL certificate
- Once SSL is working, you can enable Cloudflare proxy (orange cloud)
- Primary domain set to: mk3dprint.org (without www)

### 2. Netlify Forms Integration
Replaced Formspree placeholder with Netlify Forms (free, built-in solution)

**Changes Made to index.html (line ~359):**

**Before:**
```html
<form class="quote-form" method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```

**After:**
```html
<form class="quote-form" name="quote" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="quote" />
  <p style="display: none;">
    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
  </p>
```

**Key Attributes Added:**
- `name="quote"` - Form identifier
- `data-netlify="true"` - Enables Netlify Forms
- `netlify-honeypot="bot-field"` - Spam protection
- Hidden `form-name` field for Netlify detection

### 3. Netlify Configuration Fixed
**Issue**: Website returning 404 errors

**Root Cause**: Publish directory not set correctly

**Solution**:
- Site Configuration → Build settings
- Publish directory: `Scanform3dP_Export`
- Triggered fresh deployment

### 4. Form Field Removed
Removed "Material Preference" field from quote form per your request.

**Deleted lines 390-401:**
```html
<label>
  <span>Material Preference</span>
  <select name="material" required>
    <option value="">Select material...</option>
    <option value="pla">PLA Plastic</option>
    <option value="abs">ABS Plastic</option>
    <option value="nylon">Nylon</option>
    <option value="resin">Resin</option>
    <option value="flexible">Flexible TPU</option>
    <option value="unsure">Not sure yet</option>
  </select>
</label>
```

## Project Structure

```
MK3DPRINT/
├── .git/
├── Scanform3dP_Export/        # Website files (publish directory)
│   ├── index.html             # Main website file (form on line ~359)
│   ├── style.css
│   ├── search.html
│   ├── netlify.toml           # Netlify redirects config
│   ├── _redirects
│   ├── images/
│   ├── data/
│   └── js/
└── SESSION_NOTES.md           # This file
```

## GitHub Repository
- **URL**: https://github.com/MorneK-Cargo/MK3DPRINT
- **Branch**: main
- **Auto-deploy**: Enabled (pushes to main auto-deploy to Netlify)

## Next Steps - Form Notifications

### Configure Email Notifications in Netlify:
1. Go to Netlify dashboard
2. Click **Forms** in left sidebar
3. Click on the **"quote"** form (appears after first submission)
4. Click **"Settings and notifications"** or **"Form notifications"**
5. Click **"Add notification"**
6. Select **"Email notification"**
7. Enter email: `info@mk3dprint.org`
8. Select trigger: **"New form submission"**
9. Click **"Save"**

### View Form Submissions:
- Netlify Dashboard → Forms → "quote" form
- Shows all submissions with full details
- Free plan: 100 submissions/month

## SSL/TLS Certificate
- **Provider**: Let's Encrypt (via Netlify)
- **Domains**: mk3dprint.org, www.mk3dprint.org
- **Created**: Nov 21, 2025
- **Expires**: Feb 19, 2026 (auto-renews)
- **Status**: Active

**Note**: If SSL warning appears in Netlify, ensure Cloudflare proxy is OFF (grey cloud) for DNS records.

## Troubleshooting

### If website shows 404:
1. Check Netlify → Site configuration → Build settings
2. Verify "Publish directory" = `Scanform3dP_Export`
3. Trigger new deployment

### If DNS not resolving:
1. Verify Cloudflare DNS records point to `mk-3d-printing.netlify.app`
2. Ensure Cloudflare proxy is OFF (grey cloud) during initial setup
3. Flush DNS cache: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`
4. Hard refresh browser: Cmd + Shift + R

### If form not working:
1. Check form has `data-netlify="true"` attribute
2. Ensure `name="quote"` is set on form tag
3. Verify hidden `form-name` input exists
4. Check Netlify → Forms → "Form detection is enabled"
5. Submit test form to activate it in Netlify

### Cache Issues:
- **Cloudflare**: Dashboard → Caching → "Purge Everything"
- **Browser**: Cmd + Shift + R (hard refresh)
- **DNS**: Terminal: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder`

## Contact Information
- **Website**: https://mk3dprint.org
- **Email**: info@mk3dprint.org
- **WhatsApp**: +264 83 429 0501
- **Location**: Windhoek, Namibia

## Git Commands Reference

### Making Changes:
```bash
cd /Users/mornekarg/MK3DPRINT
git status
git add Scanform3dP_Export/index.html
git commit -m "Your commit message"
git push origin main
```

### Checking Status:
```bash
git status
git log --oneline -5
git diff
```

## Important URLs
- **Live Site**: https://mk3dprint.org
- **Netlify URL**: https://mk-3d-printing.netlify.app
- **GitHub Repo**: https://github.com/MorneK-Cargo/MK3DPRINT
- **Netlify Dashboard**: https://app.netlify.com (search for mk3dprint.org)
- **Cloudflare Dashboard**: https://dash.cloudflare.com

## Session Completed
- **Date**: November 25, 2025, 7:38 PM
- **Status**: ✅ Website live and working
- **Form**: ✅ Netlify Forms integrated and tested
- **DNS**: ✅ Configured and resolving
- **SSL**: ✅ Active and working

---

*Generated with Claude Code*
*Assistant: Claude (Anthropic)*
