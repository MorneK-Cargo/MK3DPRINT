# Netlify Environment Variables Setup

## Security Strategy

Your API keys and secrets should NEVER be in Git. Instead, set them directly in Netlify's dashboard for each site.

**Environment Variable Mapping:**

| Variable | Development | Staging | Production |
|----------|-------------|---------|-----------|
| `DATABASE_URL` | Dev DB (or staging) | Staging DB | Production DB |
| `ABACUSAI_API_KEY` | Dev key | Staging key | Prod key |
| `WEB_APP_ID` | dev-app-id | staging-app-id | prod-app-id |
| `NOTIF_ID_CONTACT_FORM_SUBMISSION` | dev-notif-id | staging-notif-id | prod-notif-id |
| `NOTIF_ID_QUOTE_REQUEST` | dev-notif-id | staging-notif-id | prod-notif-id |
| `NEXT_OUTPUT_MODE` | export | export | export |
| `NODE_ENV` | development | staging | production |
| `ENVIRONMENT` | development | staging | production |

---

## Step-by-Step: Set Environment Variables in Netlify

### For PRODUCTION Site (mk3dprint)

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click on **mk3dprint** site
3. Go to **Site settings** → **Build & deploy** → **Environment**
4. Click **Edit variables** (or **+ Add variable**)
5. Add these variables (use your actual production values):

```
DATABASE_URL = postgresql://user:password@prod-db.com:5432/mk3dprint_prod?connect_timeout=15
ABACUSAI_API_KEY = [your-production-abacus-key]
WEB_APP_ID = [your-production-web-app-id]
NOTIF_ID_CONTACT_FORM_SUBMISSION = [your-production-notif-id]
NOTIF_ID_QUOTE_REQUEST = [your-production-notif-id]
NEXT_OUTPUT_MODE = export
NODE_ENV = production
ENVIRONMENT = production
```

6. Click **Save**
7. Trigger deploy: Go to **Deployments** → Click **Trigger deploy** → **Deploy site**

**Result:** Production site rebuilds with production variables

---

### For STAGING Site (mk3dprint-staging)

*After you create the staging Netlify site (see PHASE 2 below)*

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click on **mk3dprint-staging** site
3. Go to **Site settings** → **Build & deploy** → **Environment**
4. Click **Edit variables**
5. Add these variables (use staging/test values):

```
DATABASE_URL = postgresql://user:password@staging-db.com:5432/mk3dprint_staging?connect_timeout=15
ABACUSAI_API_KEY = [your-staging-abacus-key]
WEB_APP_ID = [your-staging-web-app-id]
NOTIF_ID_CONTACT_FORM_SUBMISSION = [your-staging-notif-id]
NOTIF_ID_QUOTE_REQUEST = [your-staging-notif-id]
NEXT_OUTPUT_MODE = export
NODE_ENV = staging
ENVIRONMENT = staging
```

6. Click **Save**

**Result:** Staging site uses staging database and API keys

---

### For DEV Site (mk3dprint-dev)

*After you create the dev Netlify site (see PHASE 2 below)*

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click on **mk3dprint-dev** site
3. Go to **Site settings** → **Build & deploy** → **Environment**
4. Click **Edit variables**
5. Add these variables:

```
DATABASE_URL = postgresql://user:password@dev-db.com:5432/mk3dprint_dev?connect_timeout=15
ABACUSAI_API_KEY = [your-dev-abacus-key]
WEB_APP_ID = [your-dev-web-app-id]
NOTIF_ID_CONTACT_FORM_SUBMISSION = [your-dev-notif-id]
NOTIF_ID_QUOTE_REQUEST = [your-dev-notif-id]
NEXT_OUTPUT_MODE = export
NODE_ENV = development
ENVIRONMENT = development
```

6. Click **Save**

---

## Database Considerations (Prisma)

Since mk3dprint uses Prisma, you have two options:

### Option A: Separate Databases (Recommended)
- Dev: `mk3dprint_dev` database
- Staging: `mk3dprint_staging` database
- Production: `mk3dprint_prod` database
- Each has its own `DATABASE_URL` pointing to different database

**Pros:**
- Complete isolation
- Safe testing without affecting production
- Can reset dev/staging anytime

**Cons:**
- Need to manage 3 databases
- Seed scripts need to run for each environment

### Option B: Shared Database (Not Recommended)
- All environments use same production database
- Only change `ENVIRONMENT` variable

**Pros:**
- Simpler setup
- Only 1 database to manage

**Cons:**
- **Risk:** Dev/staging changes directly affect production data
- Not recommended for production systems

**Recommendation:** Use Option A (separate databases)

---

## Prisma Migrations per Environment

If you use Prisma migrations:

```bash
# Production - never auto-migrate in CI
# Manual migration before deploy

# Staging - auto-migrate safe to test
DATABASE_URL=staging npm run prisma:migrate:deploy

# Dev - auto-migrate, safe to reset anytime
DATABASE_URL=dev npm run prisma:migrate:deploy
```

---

## Verifying Environment Variables Are Set

After setting environment variables in Netlify:

1. Go to site → **Deployments**
2. Find recent deployment → Click **Deployment log**
3. Look for lines showing environment variables being loaded:

```
Environment: 
DATABASE_URL set ✓
ABACUSAI_API_KEY set ✓
NODE_ENV=production ✓
```

If variables don't show in build log, check:
1. Variables were saved in Site settings → Environment
2. Did you trigger a fresh deploy after adding variables?
3. Check build command in **Build & deploy** → **Deploy settings** shows `npm run build`

---

## Next Steps

1. **Gather your environment values:**
   - Production database URL
   - Production API keys (AbacusAI, NotifIDs)
   - Staging/Dev alternatives (or separate values)

2. **Do NOT commit actual values to Git**
   - Keep `.env` file local only
   - Use `.env.example` as template
   - Ensure `.gitignore` includes `.env`

3. **Proceed to PHASE 2:**
   - Create two new Netlify sites
   - Set environment variables in each site
   - Configure branch connections
