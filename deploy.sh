#!/bin/bash
# Deploy to GitHub Pages
# Usage: ./deploy.sh

echo "🚀 Deploying Vash Rebrand to GitHub Pages..."

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Are you in the build directory?"
    exit 1
fi

# Initialize git if needed
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/Vash-666/vashist-rohit.git
fi

# Add all files
git add -A

# Commit with timestamp
COMMIT_MSG="Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

# Push to gh-pages branch (or main for user sites)
# Uncomment the appropriate line:
# git push origin HEAD:gh-pages --force
git push origin HEAD:main --force

echo "✅ Deployed successfully!"
echo "🌐 Site will be live at: https://vash-666.github.io/vashist-rohit"
