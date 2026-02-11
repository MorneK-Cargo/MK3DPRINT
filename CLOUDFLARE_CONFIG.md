# Cloudflare Configuration Guide for MK3DPRINT

## Overview
After deploying to Netlify, you need to update your Cloudflare DNS records to point to your new Netlify site.

## Current DNS Setup
Your domain `mk3dprint.org` is currently pointing to your old hosting. This guide will walk you through updating it to Netlify.

## Step-by-Step Instructions

### Step 1: Get Your Netlify URL

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Select your deployed site
3. Find "Site URL" in the Site Overview (looks like: `https://xxxxx.netlify.app`)
4. Copy this URL

### Step 2: Update Cloudflare DNS Records

1. Go to [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. Select domain: `mk3dprint.org`
3. Navigate to **DNS** → **Records**

#### Option A: Using CNAME (Recommended)

1. Click **Add record**
   - **Type:** CNAME
   - **Name:** `mk3dprint` (or leave blank for root)
   - **Target:** Your Netlify URL (e.g., `xxxxx.netlify.app`)
   - **TTL:** Auto
   - **Proxy status:** Proxied (orange cloud icon recommended)

2. Click **Save**

**Note:** If you have an A record pointing to the old IP, delete it first.

#### Option B: Using Netlify Nameservers

For advanced setup:

1. Go to Netlify Site Settings
2. Navigate to **Domain management**
3. Click **Add custom domain**
4. Follow Netlify's instructions to update nameservers
5. Update Cloudflare nameservers (but keep DNS records in Cloudflare)

### Step 3: Verify DNS Propagation

Wait 5-15 minutes, then verify:

```bash
# Check DNS resolution
nslookup mk3dprint.org

# Should resolve to Netlify's IP
# Expected response shows Netlify nameservers or IP
```

Or use online tool: https://www.nslookup.io/mk3dprint.org

### Step 4: Configure Cloudflare Settings

After DNS update is live:

#### SSL/TLS Settings
1. Go to **SSL/TLS** section
2. Set **SSL/TLS encryption mode:** "Full (strict)"
3. Netlify provides automatic HTTPS

#### Caching Rules (Optional but Recommended)

1. Go to **Caching** → **Rules**
2. Create a rule:
   - **If:** URI path contains `/`
   - **Then:** Cache Level = Cache Everything
   - **Browser Cache TTL:** 1 hour
   - **Edge Cache TTL:** 1 day

#### Security Settings

1. Go to **Security** → **Settings**
2. **Brotli compression:** On (speeds up transfers)
3. **Minify:** On (CSS, JavaScript, HTML)
4. **Rocket Loader:** On (faster page loads)
5. **HTTP/3 (QUIC):** On (modern protocol)

#### Page Rules (Optional)

1. Go to **Rules** → **Page Rules**
2. Create rule for `mk3dprint.org/*`:
   - **Cache Level:** Cache Everything
   - **Browser Cache TTL:** 1 hour
   - **Minify:** On

### Step 5: Enable HTTPS Redirect

1. Go to **Rules** → **Page Rules**
2. Create rule for `http://mk3dprint.org/*`:
   - **Always Use HTTPS:** On

Or use **SSL/TLS** → **Edge Certificates** → **Always Use HTTPS:** On

### Step 6: Verify Site is Live

1. Open https://mk3dprint.org in browser
2. Should show new Abacus-designed site
3. Check certificate (lock icon):
   - Click lock → Connection Secure
   - Certificate issued by Let's Encrypt (Netlify)

## DNS Records Reference

After setup, your DNS records should look like:

| Type  | Name           | Target                    | TTL  | Status   |
|-------|----------------|---------------------------|------|----------|
| CNAME | mk3dprint.org  | xxxxx.netlify.app         | Auto | Proxied  |
| MX    | mk3dprint.org  | (keep existing)           | Auto | (varies) |
| TXT   | mk3dprint.org  | (keep existing)           | Auto | (varies) |

## Troubleshooting

### Issue: Old site still showing

**Solution:**
1. Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. Hard refresh (Ctrl+F5 or Cmd+Shift+R)
3. Wait for DNS propagation (up to 24 hours)
4. Check Cloudflare cache: **Caching** → **Purge Cache** → **Purge Everything**

### Issue: HTTPS not working

**Solution:**
1. Verify SSL/TLS mode is "Full (strict)"
2. Check Netlify has HTTPS enabled
3. In Netlify, verify domain is added in Site Settings
4. Wait 30 minutes for certificate to generate

### Issue: Images not loading

**Solution:**
1. Check image URLs in source code (should be absolute URLs)
2. Verify CDN URLs are accessible
3. Check Cloudflare isn't blocking image domains
4. In Cloudflare, go to **Security** → **WAF** → ensure no rules block images

### Issue: Site is slow

**Solution:**
1. Enable Cloudflare Rocket Loader (faster JS)
2. Enable Brotli compression
3. Enable Minification (CSS, JS, HTML)
4. Set appropriate cache TTLs
5. Run Lighthouse audit on Netlify Analytics

## Important Notes

### SSL Certificate
- Netlify provides free HTTPS via Let's Encrypt
- Automatic renewal (no action needed)
- Cloudflare will proxy through HTTPS

### Cache Management
- Static sites can be cached aggressively
- Cache invalidates on new Netlify deployments
- Browser cache: 1 hour recommended
- Edge cache: 1 day recommended

### Email Services
- MX records continue to work with Cloudflare proxy
- Keep any email-related TXT records unchanged
- SPF/DKIM/DMARC records stay the same

### Analytics
- Cloudflare shows visitor analytics
- Netlify shows deployment analytics
- Both provide performance insights

## Post-Update Checklist

- [ ] Netlify site URL confirmed
- [ ] DNS CNAME record updated in Cloudflare
- [ ] DNS propagation verified
- [ ] Site accessible at mk3dprint.org
- [ ] HTTPS working (lock icon visible)
- [ ] Images loading correctly
- [ ] No mixed content warnings
- [ ] Performance acceptable
- [ ] Email still works
- [ ] Old site fully replaced

## Rollback (if needed)

If you need to revert to old hosting:

1. Go to Cloudflare DNS records
2. Update CNAME target back to old IP/URL
3. Wait for propagation (5-15 minutes)
4. Site will revert to previous version

---
**Last Updated:** February 10, 2026
**Domain:** mk3dprint.org
**CDN:** Cloudflare
**Hosting:** Netlify

