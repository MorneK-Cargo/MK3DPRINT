# Git Workflow - MK3DPRINT Development

## Branch Strategy

```
main (production)
  └── staging (pre-production testing)
        └── dev/thingiverse-integration (feature branch)
```

## Setup Git Repository

### Initial Configuration
```bash
cd /Users/mornekarg/MK3DPRINT

# Initialize git (if not already done)
git init

# Configure git user
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Create initial commit
git commit -m "Initial MK3DPRINT website structure"
```

## Development Workflow

### 1. Create Feature Branch
```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feat/thingiverse-trending-widget

# Or for staging:
git checkout -b staging/thingiverse-integration
```

### 2. Make Changes
```bash
# Make your code changes
# Test locally
# Commit changes

git status                              # Check what changed
git add .                               # Stage all changes
git commit -m "Detailed commit message" # Commit with message
```

### 3. Commit Message Format
```
<type>: <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `security`: Security fix
- `docs`: Documentation
- `style`: CSS/formatting changes

**Examples:**
```
feat: Add Thingiverse trending widget with auto-refresh

- Implemented Thingiverse API integration using RSS feeds
- Created trending widget component with responsive design
- Added weekly auto-refresh capability with caching
- Includes search functionality for design discovery

Fixes #123
```

### 4. Push to Remote
```bash
# First push (new branch)
git push -u origin feat/thingiverse-trending-widget

# Subsequent pushes
git push origin feat/thingiverse-trending-widget
```

### 5. Create Pull Request
```bash
# On GitHub, create PR from feature branch to main
# Add description, testing notes, and screenshots
# Request reviews from team
```

### 6. Merge to Main
```bash
# After approval, merge PR on GitHub
# Or merge locally:

git checkout main
git pull origin main
git merge feat/thingiverse-trending-widget
git push origin main
```

## Development Checklist

### Before Committing
- [ ] Code tested locally
- [ ] No console errors
- [ ] Responsive design verified
- [ ] XSS prevention implemented
- [ ] Commit message is clear and descriptive

### Before Push
- [ ] All tests passing
- [ ] No sensitive data in code (API keys, passwords)
- [ ] Code follows project standards
- [ ] Documentation updated

### Before PR/Merge
- [ ] All changes documented
- [ ] Changelog updated
- [ ] Team reviewed code
- [ ] Staging deployment tested

## Useful Git Commands

### View History
```bash
git log --oneline -10              # Last 10 commits
git log --graph --all --oneline    # Visual branch history
git show <commit-hash>              # View specific commit
```

### Undo Changes
```bash
git status                          # See what's changed
git diff                           # See changes not staged
git diff --staged                  # See staged changes

# Undo unstaged changes
git checkout -- filename.js

# Undo staged changes
git reset HEAD filename.js

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

### Branching
```bash
git branch                         # List local branches
git branch -a                      # List all branches
git branch -d branch-name          # Delete local branch
git push origin --delete branch-name  # Delete remote branch

git checkout branch-name           # Switch branch
git checkout -b new-branch         # Create and switch to new branch
```

### Syncing
```bash
git fetch origin                   # Fetch latest from remote
git pull origin main               # Fetch and merge
git pull origin main --rebase      # Fetch and rebase (cleaner history)
```

## Deployment Process

### 1. Feature Branch → Staging
```bash
# Create pull request from feature branch to staging
# Code review and approval
# Merge to staging branch
# Netlify auto-deploys staging environment

# Test at: mk3dprint-staging.netlify.app (or similar)
```

### 2. Staging → Production
```bash
# Create pull request from staging to main
# Final UAT testing
# Approve and merge

# Netlify auto-deploys to production
# Verify at: mk3dprint.org
```

## Netlify Configuration

### Deploy Settings
```toml
# netlify.toml configuration

[build]
  command = "# No build step needed for static site"
  publish = "."

# Deploy previews (for PRs)
[build.environment]
  NODE_VERSION = "18"

# Branch deploys
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Troubleshooting

### Merge Conflicts
```bash
# When pulling or merging, if conflicts occur:

# View conflicts
git diff

# Resolve manually in your editor
# Look for <<<<<<, ======, >>>>>> markers

# After resolving:
git add resolved-file.js
git commit -m "Resolve merge conflicts"
git push origin branch-name
```

### Accidentally Committed to Main
```bash
# If you committed to main and it wasn't ready:

# Create a new branch from current HEAD
git branch feature-branch

# Reset main to previous commit
git checkout main
git reset --hard HEAD~1
git push origin main --force

# Note: Only do this if changes aren't public yet!
```

### Lost Commits
```bash
# Git doesn't lose commits easily
git reflog              # Shows all commits ever
git checkout <commit-hash>  # Recover lost commit
```

## Team Collaboration

### Code Review Checklist
- [ ] Code follows style guide
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No console errors/warnings
- [ ] Performance acceptable
- [ ] Security best practices followed
- [ ] Mobile responsive tested

### Commit Review Checklist
- [ ] One logical change per commit
- [ ] Clear commit message
- [ ] Commit size reasonable (not too large)
- [ ] Related issues referenced
- [ ] Breaking changes documented

## Best Practices

1. **Commit Often** - Small, focused commits are better
2. **Pull Before Push** - Always sync before pushing
3. **Clear Messages** - Write descriptive commit messages
4. **Test Before Push** - Don't push broken code
5. **Use Branches** - Never work directly on main
6. **Review Before Merge** - Get team approval
7. **Document Changes** - Update README, CHANGELOG, etc.

## Useful Aliases

Add these to `.git/config` or `~/.gitconfig`:

```bash
[alias]
  st = status
  co = checkout
  br = branch
  ci = commit
  unstage = reset HEAD --
  last = log -1 HEAD
  visual = log --graph --oneline --all
  sync = !git fetch origin && git rebase origin/main
```

Usage:
```bash
git st          # Instead of git status
git co -b feat  # Instead of git checkout -b feat
git visual      # Instead of git log --graph --oneline --all
```

---
**Note:** Always communicate with your team about branches and deployments!
