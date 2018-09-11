#!/usr/bin/env sh

# Setup
rm -rf dist
mkdir -p dist/kit

cp -r package.json dist/kit
cp -f package-lock.json dist/kit
cp -r  scripts dist/kit
cp -r  scriptswin dist/kit
cp -r  web dist/kit
cp -r  cli-client dist/kit
cd kit
zip -r -X dist/cpic-kit.zip * -x \"*.DS_Store\" "*.zip*"
rm -r dist/kit