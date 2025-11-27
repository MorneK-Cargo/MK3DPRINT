# Cloudflare Firewall Rules for mk3dprint.org

## How to Add Custom Rules

1. Log into Cloudflare Dashboard: https://dash.cloudflare.com
2. Select your domain: **mk3dprint.org**
3. Go to **Security** → **WAF** (Web Application Firewall)
4. Click **Create rule** under Custom rules

---

## Recommended Custom Security Rules

### Rule 1: Block Known Bad Bots
**Rule Name:** `Block Bad Bots`

**Expression:**
```
(cf.client.bot) and not (cf.verified_bot_category in {"Search Engine Crawler" "Page Preview Service"})
```

**Action:** Block

**Description:** Blocks malicious bots while allowing legitimate search engine crawlers (Google, Bing, etc.)

---

### Rule 2: Geographic Rate Limiting
**Rule Name:** `Rate Limit Aggressive Traffic`

**Expression:**
```
(http.request.uri.path contains "/quote" or http.request.uri.path contains "/contact") and (rate(5m) > 10)
```

**Action:** Challenge (CAPTCHA)

**Description:** Limits form submissions to 10 requests per 5 minutes to prevent spam and DDoS on quote/contact forms

---

### Rule 3: Block Common Attack Patterns
**Rule Name:** `Block SQL Injection and XSS Attempts`

**Expression:**
```
(http.request.uri.query contains "union select") or
(http.request.uri.query contains "<?php") or
(http.request.uri.query contains "<script>") or
(http.request.uri.query contains "javascript:") or
(http.request.uri.query contains "../")
```

**Action:** Block

**Description:** Blocks common SQL injection, XSS, and path traversal attack attempts

---

### Rule 4: Protect Admin Areas (if you add any)
**Rule Name:** `Challenge Admin Access`

**Expression:**
```
(http.request.uri.path contains "/admin" or http.request.uri.path contains "/wp-admin" or http.request.uri.path contains "/login")
```

**Action:** JS Challenge

**Description:** Adds JavaScript challenge to any admin/login paths (even if they don't exist, prevents scanning)

---

### Rule 5: Block Suspicious User Agents
**Rule Name:** `Block Malicious User Agents`

**Expression:**
```
(http.user_agent contains "sqlmap") or
(http.user_agent contains "nikto") or
(http.user_agent contains "nmap") or
(http.user_agent contains "masscan") or
(http.user_agent eq "")
```

**Action:** Block

**Description:** Blocks known hacking/scanning tools and empty user agents

---

### Rule 6: Protect Against Hotlinking (Optional)
**Rule Name:** `Prevent Image Hotlinking`

**Expression:**
```
(http.request.uri.path contains "/images/") and
not (http.referer contains "mk3dprint.org") and
not (http.referer eq "")
```

**Action:** Block

**Description:** Prevents other websites from embedding your images and stealing bandwidth

---

### Rule 7: Challenge Excessive API/Form Requests
**Rule Name:** `Rate Limit All Requests`

**Expression:**
```
(rate(1m) > 100)
```

**Action:** Challenge (CAPTCHA)

**Description:** Global rate limit - challenges users making more than 100 requests per minute (likely bots)

---

### Rule 8: Block Countries (Optional - Use Carefully)
**Rule Name:** `Geographic Restrictions`

**Expression:**
```
(ip.geoip.country in {"CN" "RU" "KP"}) and not (cf.verified_bot_category in {"Search Engine Crawler"})
```

**Action:** Challenge (CAPTCHA)

**Description:** Challenges traffic from high-risk countries while allowing search engine bots. **Only use if you don't expect legitimate traffic from these regions.**

⚠️ **WARNING:** This can block legitimate visitors. For a local Namibian business, this might be acceptable, but use with caution.

---

## Priority Order

Cloudflare executes rules in order of priority. Set these priorities:

1. **Priority 1:** Block Bad Bots (blocks immediately)
2. **Priority 2:** Block Malicious User Agents (blocks immediately)
3. **Priority 3:** Block SQL Injection/XSS (blocks immediately)
4. **Priority 4:** Challenge Admin Access (adds verification)
5. **Priority 5:** Rate Limit Aggressive Traffic (protects forms)
6. **Priority 6:** Rate Limit All Requests (global protection)
7. **Priority 7:** Prevent Image Hotlinking (optional)
8. **Priority 8:** Geographic Restrictions (optional)

---

## How to Test Your Rules

After adding rules, test your website:

1. ✅ Visit your website normally - should work fine
2. ✅ Submit a quote form - should work
3. ✅ Try submitting 15+ quote forms rapidly - should trigger CAPTCHA
4. ✅ Check Google Search Console - make sure Google can still crawl your site

---

## Free Plan Limitations

Cloudflare Free Plan allows:
- ✅ 5 custom firewall rules
- ✅ WAF Managed Rules (enable this!)
- ✅ Basic rate limiting
- ✅ Bot Fight Mode

### Recommended 5 Rules for Free Plan:

1. **Block Bad Bots** (Priority 1)
2. **Block Malicious User Agents** (Priority 2)
3. **Block SQL Injection/XSS** (Priority 3)
4. **Rate Limit Forms** (Priority 4)
5. **Global Rate Limit** (Priority 5)

---

## Additional Free Security Settings to Enable

Go to **Security** → **Settings** and enable:

### 1. Security Level
- Set to **Medium** or **High**
- Location: Security → Settings → Security Level

### 2. Bot Fight Mode
- ✅ Enable "Bot Fight Mode"
- Location: Security → Bots → Bot Fight Mode

### 3. Challenge Passage
- Set to **30 minutes**
- Location: Security → Settings → Challenge Passage

### 4. Browser Integrity Check
- ✅ Enable
- Location: Security → Settings → Browser Integrity Check

---

## Monitoring Your Rules

After setting up rules:

1. Go to **Security** → **Events**
2. Monitor blocked/challenged requests
3. Look for patterns of attacks
4. Adjust rules if you see false positives (legitimate users blocked)

---

## What to Watch For

### Good Signs:
- ✅ Blocked requests from scanning tools
- ✅ Reduced spam in contact forms
- ✅ Lower server load

### Warning Signs (False Positives):
- ⚠️ Legitimate users reporting CAPTCHA challenges
- ⚠️ Google Search Console showing crawl errors
- ⚠️ Your own IP getting blocked

If you see false positives:
1. Go to Security → Events
2. Find the blocked request
3. Add exception for that IP or pattern

---

## Emergency: Disable All Rules

If rules cause problems:

1. Go to Security → WAF
2. Toggle each rule to **Disabled**
3. Test website
4. Re-enable rules one by one to find the problem

---

## Support Resources

- Cloudflare Firewall Documentation: https://developers.cloudflare.com/waf/
- Expression Builder Help: https://developers.cloudflare.com/ruleset-engine/rules-language/
- Community Forum: https://community.cloudflare.com/

---

## Quick Copy-Paste Rules

### Minimal Setup (3 Rules):

**Rule 1:** Block Bad Bots
```
(cf.client.bot) and not (cf.verified_bot_category in {"Search Engine Crawler" "Page Preview Service"})
```
Action: Block

**Rule 2:** Block Attack Patterns
```
(http.request.uri.query contains "union select") or (http.request.uri.query contains "<?php") or (http.request.uri.query contains "<script>")
```
Action: Block

**Rule 3:** Rate Limit Forms
```
(http.request.uri.path contains "/quote" or http.request.uri.path contains "/contact") and (rate(5m) > 10)
```
Action: Challenge

---

## Notes

- Start with **3-5 rules** and monitor
- Add more rules based on attack patterns you observe
- Don't block too aggressively - can hurt legitimate traffic
- Always test after adding new rules
- Keep WAF Managed Rules enabled (free and effective)
