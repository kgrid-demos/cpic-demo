[![GitHub release](https://img.shields.io/github/release/kgrid-demos/cpic-kit.svg)](https://github.com/kgrid-demos/cpic-kit/releases/)
[![CircleCI](https://circleci.com/gh/kgrid-demos/cpic-kit.svg?style=svg)](https://circleci.com/gh/kgrid-demos/cpic-kit)


KGrid CPIC Kit packages [Activator](http://kgrid.org/kgrid-activator/), [Library](http://kgrid.org/kgrid-library) and CPIC Demo Site.  The kit is designed as a personnel CPIC Knowledge Grid used to explore the capablities of KGrid and [CPIC Knowlege Objects](https://kgrid-objects.github.io/cpic-objects/).

## Table of Contents
   * [Installation](#installation)
   * [Usage](#usage)
     * [Start the Kit](#starting-kgrid-cpic-kit)
     * [Stop the Kit](#stopping-kgrid-cpic-kit)
   * [Development](#development)
     * [Testing the Kit](#testing)
     * [Continuous Integration](#continuous-integration)
     * [Packaging the Kit](#packaging-the-kit-for-distribution)
     
## Installation

To setup the CPIC Kit you need:

- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Node.js](http://nodejs.org/)

With [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
and [Node.js](http://nodejs.org/) installed we can download the CPIC Kit.

* Download the latest CPIC Kit *cpic-kit.zip* from GitHub, 
[CPIC Kit](https://github.com/kgrid-demos/cpic-kit/releases/latest). 
* Unzip cpic-kit.zip
* Via a terminal interface navigate to the *cpic_kit* directory

From the command line install the cpic kit
```
npm install
```
The install process is downloading the KGrid applications (library and activator) and loading the 
CPIC Knowledge Objects into the system.

## Usage

### Starting KGrid CPIC Kit
Starting the KGrid CPIC Kit will start up an instance of the KGrid Activator, KGrid Library and CPIC Kit Web. The CPIC Kit Web server will serve the CPIC web demo application.

From the command line of the kit directory start the kit.  This script will automaticaly open a browser window pointing to the  CPIC Kit Web home page.
```
npm start
```
Once running the following components will be running [Activator](http://localhost:8082), [Library](http://localhost:8081), [CPIC Kit Site](http://localhost:8080)


#### Web Demo
This a patient's clinical lab report of genotype and diplotype could use the CPIC objects to determine a patient’s predicted metabolizer phenotype and therapeutic recommendations for a set of drugs.

[CPIC Kit Site](http://localhost:8080)

#### Command Line Demo
Takes in multiple patient clinical lab reports (genotype and diplotype) see [panel.csv](https://github.com/kgrid-demos/cpic-kit/blob/master/cli-client/panel.csv) and using the CPIC objects to determines a patient’s predicted metabolizer phenotype and therapeutic recommendations for a set of drugs.

```npm run cpic cli-client/panel.csv``` 

### Stopping KGrid CPIC Kit
Stopping the running KGrid activator, library and demo web site can be accomplished with npm stop command
```
npm stop
```

## Development
For CPIC Kit developers we have outlined the tools and techniques used tocode, test and publish 
the CPIC Kit.  

#### Running 
You can start the kit via ```npm start```.  Starting the kit runs the KGrid Activator, 
KGrid Library and a web server that will serve up the web cpic demo application.  Stopping these applications 
require ```npm stop```.

#### Testing
The kit has a set of _smoked tests_ that are designed to ensure that the CIPC Kit and be install and started. The tests
excersie the CPIC KOs and demo clients.  They utilize 
* [Jest](https://jestjs.io/) a unit test platform for JavaScript
* [Newman](https://www.npmjs.com/package/newman) a command-line collection runner for [Postman](https://www.getpostman.com/). 

You can run the tests via the _test_ npm command. 

```npm test```

#### Continuous Integration
The CPIC Kit utilizes [CircleCI](https://circleci.com/gh/kgrid-demos/cpic-kit) to build/test/package the kit. 

#### Packaging the Kit for distribution 
Publishing a version of the kit requires you to create a new CPIC Kit zip file and creating a new
[CPIC Kit GitHub release](https://github.com/kgrid-objects/cpic-objects/releases) in the 
[CPIC Kit repository](https://github.com/kgrid-objects/cpic-objects).  The _package_ npm command will zip
up the CPIC Kit required files into a cpic-kit.zip in the _dist_ directory.

```npm run package```

