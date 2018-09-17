[![CircleCI](https://circleci.com/gh/kgrid-demos/cpic-kit.svg?style=svg)](https://circleci.com/gh/kgrid-demos/cpic-kit)

This readme is designed to aid CPIC Kit developers.  We will outline the tools and techniques to 
code, test and publish the CPIC Kit.  

## Requirements
To setup the CPIC Kit you need:

- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Node.js](http://nodejs.org/)

## Running
Detail instructions about running the released kit can be found on the 
[CPIC Kit](https://demo.kgrid.org/cpic-kit/). The kit is designed around node/npm lifecycle.

You can start the kit via ```npm start``` and ```npm stop```.  Starting the kit runs the KGrid Activator, 
KGrid Library and a web server that will serve up the web cpic demo application

## Testing
The kit has a set of _smoked tests_ that are designed to ensure that the CIPC Kit and be install and started. The tests
excersie the CPIC KOs and demo clients.  They utilize 
* [Jest](https://jestjs.io/) a unit test platform for JavaScript
* [Newman](https://www.npmjs.com/package/newman) a command-line collection runner for [Postman](https://www.getpostman.com/). 

You can run the tests via 

```npm test```

## Publishing
Publishing a version of the kit requires you to create a new CPIC Kit zip file and creating a new
[CPIC Kit GitHub release](https://github.com/kgrid-objects/cpic-objects/releases) in the 
[CPIC Kit repository](https://github.com/kgrid-objects/cpic-objects).  The _package_ npm command will zip
up the CPIC Kit required files into a cpic-kit.zip in the dist directory.

```npm run package```

