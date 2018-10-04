#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build
# copy web demo to github pages dist
cp -r web docs/.vuepress/dist

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://${GITHUB_TOKEN}@github.com/kgrid-demos/cpic-kit.git master:gh-pages