---
home: false
sidebarDepth: 2
footer: MIT Licensed | Copyright © 2018-present University of Michigan, Medical School
---

# CPIC Kit Development

## Development
For CPIC Kit developers we have outlined the tools and techniques used to code, test and publish
the CPIC Kit.  

### Running
You can start the kit via ```npm start```.  Starting the kit runs the KGrid Activator,
KGrid Library and a web server that will serve up the web CPIC demo application.  Stopping these applications
require ```npm stop```.

### Testing
The kit has a set of _smoke tests_ that are designed to ensure that the CIPC Kit and be installed and started. The tests
exercise the CPIC KOs and demo clients.  They utilize
* [Jest](https://jestjs.io/) a unit test platform for JavaScript
* [Newman](https://www.npmjs.com/package/newman) a command-line collection runner for [Postman](https://www.getpostman.com/).

You can run the tests via the _test_ npm command.

`npm test`

### Continuous Integration
The CPIC Kit utilizes [CircleCI](https://circleci.com/gh/kgrid-demos/cpic-kit) to build/test/package the kit.

### Packaging the Kit for distribution
Publishing a version of the kit requires you to create a new CPIC Kit zip file and create a new
[CPIC Kit GitHub release](https://github.com/kgrid-objects/cpic-collection/releases) in the
[CPIC Kit repository](https://github.com/kgrid-objects/cpic-collection).  The _package_ npm command will zip
up the CPIC Kit required files into a cpic-kit.zip in the _dist_ directory.

```npm run package```

### Publish Documentation

Running Local Dev Docs Publish
```
npm install
npm run docs:dev
```

Build dist directory ready for publish

```
npm run docs:build`
```

CircleCi publishes the documentation using [VuePress](https://vuepress.vuejs.org/) and 
the ```.circleci/vuepress_deploy.sh``` script.  The gh-pages branch is used for the publishing process and setup in the
GitHub repository's GitHub Pages.