#!/bin/bash
# mk3dprint.org - Dev Environment Implementation
# Execute these commands in order to set up three-tier deployment

echo "=== PHASE 1: GIT BRANCHING SETUP ==="
echo ""

# Step 1: Check current status
echo "[1] Checking current Git status..."
git status

# Step 2: Ensure you're on main branch
echo ""
echo "[2] Switching to main branch..."
git checkout main
git pull origin main

# Step 3: Create develop branch from main
echo ""
echo "[3] Creating develop branch..."
git checkout -b develop
git push -u origin develop

# Step 4: Verify branches exist
echo ""
echo "[4] Verifying branches..."
git branch -a

echo ""
echo "✓ PHASE 1 COMPLETE"
echo "You now have three branches:"
echo "  - main (production)"
echo "  - develop (staging)"
echo "  - feature/* (development)"
echo ""
echo "Next: Create Netlify sites (PHASE 2)"
