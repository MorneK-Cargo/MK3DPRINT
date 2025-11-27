# MK3DPRINT.ORG Security Checklist

## Immediate Actions (Do These Today)

### 1. Cloudflare Account Security
- [ ] Enable 2FA on Cloudflare account
- [ ] Review and update account password (use strong, unique password)
- [ ] Save backup codes in secure location
- [ ] Review members with access (remove unnecessary users)

### 2. Domain Security
- [ ] Enable domain lock at registrar
- [ ] Enable DNSSEC in Cloudflare DNS settings
- [ ] Verify domain contact information is correct

### 3. SSL/TLS Configuration
- [ ] Set SSL/TLS mode to "Full (strict)"
- [ ] Enable "Always Use HTTPS"
- [ ] Enable "Automatic HTTPS Rewrites"
- [ ] Set minimum TLS version to 1.2

### 4. Firewall & DDoS Protection
- [ ] Enable WAF Managed Rules
- [ ] Create basic firewall rules (see guide)
- [ ] Verify DDoS protection is enabled
- [ ] Enable Bot Fight Mode

### 5. Email Security
- [ ] Add SPF record to DNS
- [ ] Add DMARC record to DNS
- [ ] Configure DKIM (from email provider)

### 6. Content Protection
- [ ] Enable Hotlink Protection
- [ ] Enable Email Address Obfuscation
- [ ] Review page rules

### 7. Monitoring
- [ ] Set up Cloudflare notifications for security events
- [ ] Add site to Google Search Console
- [ ] Review analytics weekly

## Monthly Maintenance

- [ ] Review Cloudflare security analytics
- [ ] Check firewall event log for threats
- [ ] Verify SSL certificate validity
- [ ] Review DNS records for unauthorized changes
- [ ] Update website dependencies
- [ ] Check domain lock status

## Emergency Contacts

**Cloudflare Support:** https://support.cloudflare.com
**Netlify Support:** https://www.netlify.com/support/
**Domain Registrar:** [Your registrar contact info]

## Important URLs

- Cloudflare Dashboard: https://dash.cloudflare.com
- Netlify Dashboard: https://app.netlify.com
- GitHub Repository: https://github.com/[your-username]/[your-repo]

## Backup Information

**DNS Records Backup:** Keep a copy of all DNS records
**SSL Certificate:** Auto-renewed by Cloudflare/Netlify
**Backup Codes:** Stored securely offline

## Incident Response Plan

If you suspect a security issue:

1. **Immediate Actions:**
   - Change Cloudflare password
   - Review recent Cloudflare activity in Audit Log
   - Check DNS records for unauthorized changes
   - Review firewall events
   - Contact Cloudflare support if needed

2. **Investigation:**
   - Check Netlify deploy logs
   - Review GitHub commit history
   - Check email for suspicious notifications

3. **Recovery:**
   - Restore from last known good deployment (Netlify)
   - Roll back DNS changes if needed
   - Update all passwords
   - Enable stricter security rules

## Notes

- Last security review: [DATE]
- Last DNS change: [DATE]
- Last SSL renewal: Auto-renewed
- Current Cloudflare plan: [Free/Pro/Business]
