# Memory — mk3dprint.org Development

## Me
Morne Karg, Executive Information Security & GRC Leader. Managing mk3dprint.org website development via Claude Code + Netlify automation.

## Current Context
- **Site:** mk3dprint.org
- **Live Host:** Netlify (automatic push-on-change)
- **Current Workflow:** Edit locally → Claude Code → Auto-push to production
- **Problem:** No staging/dev environment → testing changes risk affecting live site

## Key Acronyms & Terms
| Term | Meaning |
|------|---------|
| **dev** | Development/testing environment (new) |
| **staging** | Pre-production replica of live site |
| **prod/live** | mk3dprint.org on Netlify (public-facing) |
| **CI/CD** | Continuous Integration/Continuous Deployment |

## Strategic Objective
Implement three-tier deployment: Dev → Staging → Production
- Reduces risk to live site
- Enables thorough testing before public release
- Maintains separate databases/configs per environment

## People
| Role | Name |
|------|------|
| **Site Owner** | Morne Karg |

## Projects/Sites
| Name | Status | Details |
|------|--------|---------|
| **mk3dprint.org** | LIVE | Current production site on Netlify |
| **mk3dprint-dev** | TODO | New development environment (internal only) |
| **mk3dprint-staging** | TODO | New staging environment (before production) |
