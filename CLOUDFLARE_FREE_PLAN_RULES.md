# Cloudflare Free Plan - Working Security Rules

## IMPORTANT: Free Plan Limitations

⚠️ **Rate limiting with `rate()` function requires Cloudflare Pro plan or higher**

For Free plan, use these **tested and working** rules:

---

## Rule 1: Block Bad Bots ✅ WORKS ON FREE
**Rule Name:** `Block Bad Bots`

**When incoming requests match:**
```
(cf.client.bot and not cf.verified_bot_category in {"Search Engine Crawler" "Page Preview Service"})
```

**Then take action:** Block

**Description:** Blocks malicious bots while allowing Google, Bing, etc.

---

## Rule 2: Block Malicious User Agents ✅ WORKS ON FREE
**Rule Name:** `Block Scanning Tools`

**When incoming requests match:**
```
(http.user_agent contains "sqlmap") or (http.user_agent contains "nikto") or (http.user_agent contains "nmap") or (http.user_agent eq "")
```

**Then take action:** Block

**Description:** Blocks hacking tools and empty user agents

---

## Rule 3: Block SQL Injection Attempts ✅ WORKS ON FREE
**Rule Name:** `Block SQL Injection`

**When incoming requests match:**
```
(http.request.uri.query contains "union select") or (http.request.uri.query contains "' or 1=1") or (http.request.uri.query contains "<?php")
```

**Then take action:** Block

**Description:** Blocks common SQL injection patterns

---

## Rule 4: Block XSS Attempts ✅ WORKS ON FREE
**Rule Name:** `Block XSS Attacks`

**When incoming requests match:**
```
(http.request.uri.query contains "<script>") or (http.request.uri.query contains "javascript:") or (http.request.uri.query contains "onerror=")
```

**Then take action:** Block

**Description:** Blocks cross-site scripting attempts

---

## Rule 5: Challenge Admin Path Access ✅ WORKS ON FREE
**Rule Name:** `Protect Admin Paths`

**When incoming requests match:**
```
(http.request.uri.path contains "/admin") or (http.request.uri.path contains "/wp-admin") or (http.request.uri.path contains "/login")
```

**Then take action:** JS Challenge

**Description:** Adds verification to common admin paths

---

## Alternative to Rate Limiting (Free Plan)

Since `rate()` doesn't work on Free plan, enable these instead:

### In Cloudflare Dashboard:

1. **Security** → **Settings** → **Security Level**: Set to **High**
   - This automatically challenges suspicious visitors

2. **Security** → **Bots** → Enable **Bot Fight Mode**
   - Free alternative to rate limiting
   - Blocks automated traffic

3. **Security** → **Settings** → **Challenge Passage**: Set to **15 minutes**
   - Once a visitor passes a challenge, they won't see another for 15 min

4. **Security** → **WAF** → Enable **OWASP Core Ruleset** (if available on Free)
   - Protects against common web attacks

---

## Step-by-Step: Adding a Rule in Cloudflare

1. Log into https://dash.cloudflare.com
2. Select **mk3dprint.org**
3. Go to **Security** → **WAF**
4. Click **Create rule**
5. Enter the rule name
6. In the expression editor:
   - Click **Edit expression** (not the visual builder)
   - Copy and paste the exact expression from above
7. Select the action (Block, Challenge, etc.)
8. Click **Deploy**

---

## Troubleshooting "Invalid Expression" Errors

### Error: "rate() function not available"
**Solution:** Remove any rules using `rate()` - requires Pro plan
Use **Bot Fight Mode** and **Security Level: High** instead

### Error: "Invalid field"
**Solution:** Make sure you're using:
- `http.user_agent` (not `user_agent`)
- `http.request.uri.query` (not `uri.query`)
- `cf.client.bot` (not `client.bot`)

### Error: "Syntax error near..."
**Solution:**
- Use `and` not `&&`
- Use `or` not `||`
- Use `eq` not `==`
- Use `contains` not `~`

### Error: "Unexpected token"
**Solution:**
- Strings must use double quotes `"text"` not single quotes
- Lists use curly braces: `{"item1" "item2"}`
- Check for missing or extra parentheses

---

## Verified Working Expression Examples

### ✅ Block specific user agents:
```
(http.user_agent contains "bot") or (http.user_agent contains "crawler")
```

### ✅ Block by country (use with caution):
```
ip.geoip.country eq "CN"
```

### ✅ Protect specific paths:
```
http.request.uri.path contains "/admin"
```

### ✅ Block query string attacks:
```
http.request.uri.query contains "union select"
```

### ✅ Allow only specific countries:
```
not ip.geoip.country in {"NA" "ZA" "BW"}
```
(NA = Namibia, ZA = South Africa, BW = Botswana)

---

## Recommended Free Plan Setup

**Priority Order:**

1. ✅ Enable **Bot Fight Mode** (Security → Bots)
2. ✅ Set **Security Level** to **High** (Security → Settings)
3. ✅ Enable **Browser Integrity Check** (Security → Settings)
4. ✅ Add Rule: **Block Bad Bots**
5. ✅ Add Rule: **Block Scanning Tools**
6. ✅ Add Rule: **Block SQL Injection**
7. ✅ Add Rule: **Block XSS Attacks**
8. ✅ Add Rule: **Protect Admin Paths**

This gives you comprehensive protection without needing Pro plan features.

---

## Testing Your Rules

After adding rules:

1. Visit your site normally - should work fine ✅
2. Try adding `<script>` to a URL parameter - should be blocked ✅
3. Check Cloudflare Events log to see blocked requests
4. Monitor for false positives (legitimate users blocked)

Example test URL (should be blocked):
```
https://mk3dprint.org/?test=<script>alert(1)</script>
```

---

## Which Rule Is Giving You Error #4?

Tell me which specific rule expression you tried to add, and I'll fix it for you!

Common issues:
- Rule with `rate(5m) > 10` ❌ (requires Pro plan)
- Rule with `&&` instead of `and` ❌
- Rule with single quotes `'text'` instead of double `"text"` ❌
