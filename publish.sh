#!/bin/bash

# Install dependencies
pnpm install

# Build packages
pnpm run build

# Loop through packages and push
for package in packages/*; do
  repo_url=$(jq -r '.repository.url' "$package/package.json")
  version=$(jq -r '.version' "$package/package.json")
  
  # Commit and push changes
  cd "$package"
  git add .
  git commit -m "Building package: $version"
  git push "$repo_url" main
  cd ../
done
