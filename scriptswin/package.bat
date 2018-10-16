@echo off

rd /s /q dist
mkdir dist\cpic-kit
dir
xcopy  package.json dist\cpic-kit
xcopy  package-lock.json dist\cpic-kit
xcopy  scripts dist\cpic-kit\scripts\
xcopy  scripts dist\cpic-kit\scriptwin\
xcopy  tests dist\cpic-kit\tests\
xcopy  cli-client dist\cpic-kit\cli-client\
xcopy  web dist\cpic-kit\web\

cd dist
zip -r cpic-kit.zip cpic-kit

rmdir /s /q cpic-kit
