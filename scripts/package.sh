#!/usr/bin/env sh

# Setup
rm -rf dist
mkdir -p dist/cpic-kit

cp -r package.json dist/cpic-kit
cp -f package-lock.json dist/cpic-kit
cp -r  scripts dist/cpic-kit
cp -r  scriptswin dist/cpic-kit
cp -r  web dist/cpic-kit
cp -r  cli-client dist/cpic-kit

cd dist
zip -r -X cpic-kit.zip cpic-kit -x \"*.DS_Store\" "*.zip*"
rm -r cpic-kit

