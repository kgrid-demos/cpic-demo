[![GitHub release](https://img.shields.io/github/release/kgrid-demos/cpic-kit.svg)](https://github.com/kgrid-demos/cpic-kit/releases/)
[![CircleCI](https://circleci.com/gh/kgrid-demos/cpic-kit.svg?style=svg)](https://circleci.com/gh/kgrid-demos/cpic-kit)


KGrid CPIC Kit packages [Activator](http://kgrid.org/kgrid-activator/), [Library](http://kgrid.org/kgrid-library) and CPIC Demo Site.  The kit is designed as a personnel CPIC Knowledge Grid used to explore the capablities of KGrid and [CPIC Knowlege Objects](https://kgrid-objects.github.io/cpic-collection/).

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
[GitHub CPIC Kit Release](https://github.com/kgrid-demos/cpic-kit/releases/latest).
* Unzip cpic-kit.zip
* Via a terminal interface navigate to the *cpic_kit* directory

From the command line install the cpic kit

`npm install`

The install process is downloading the KGrid applications (library and activator) and loading the
CPIC Knowledge Objects into the system.

## Usage

### Starting KGrid CPIC Kit
Starting the KGrid CPIC Kit will start up an instance of the KGrid Activator, KGrid Library and CPIC Kit Web. The CPIC Kit Web server will serve the CPIC web demo application.

From the command line of the kit directory start the kit.

`npm start`

Once started you will have:
  - Local KGrid Library:   running at http://localhost:8081
  - Local KGrid Activator: running at http://localhost:8082
  - Web Demo App:  running at http://localhost:8083

#### Local KGrid Library

The local KGrid Library manages the CPIC collection of Knowledge Objects.

For Mac, type ` open http://localhost:8081 `;

For Windows, type ` start http://localhost:8081 `

#### Local KGrid Activator

The local KGrid Activator activates the CPIC collection of Knowledge Objects.

To check the status of the activator,

For Mac, type ` open http://localhost:8082/health `;

For Windows, type ` start http://localhost:8082/health `


#### Web Demo

This app simulates a panel of a patient's genotype and diplotype and generates drug dosing recommendations.

Geno-to-pheno Knowledge objects are used to determine each gene's phenotype, if applicable.

Relevant drugs recommendations are then determined based on the available genetic information, using the drug dosing recommendation KO.

To access the demo,

For Mac, type ` open http://localhost:8083 `;

For Windows, type ` start http://localhost:8083 `

To run the app,

  - Click on the button to select a patient, the preset data will be auto filled in the input panel and results will displayed;
  - You can manually change diplotype information in the input panel, the phenotype result and recommendation will be updated accordingly;

Note:
  - Click on the setting (gear icon) in the right upper corner, an overlay will allow you to choose a different activator;
  - Click on the app log, the log area will expand to show more details on the interactions with the connected KGrid activator.


#### Command Line Demo
Takes in multiple patient clinical lab reports (genotype and diplotype) and using the CPIC objects to determines a patient’s predicted metabolizer phenotype and therapeutic recommendations for a set of drugs.

`npm run cpic cli-client/panel.csv`

To have the script output to a file use the following command:

`npm run cpic cli-client/panel.csv > output.json`

For more help with the command line client run

`npm run cpic --help`

### Stopping KGrid CPIC Kit
Stopping the running KGrid activator, library and demo web site can be accomplished with npm stop command
`npm stop`

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
[CPIC Kit GitHub release](https://github.com/kgrid-objects/cpic-collection/releases) in the
[CPIC Kit repository](https://github.com/kgrid-objects/cpic-collection).  The _package_ npm command will zip
up the CPIC Kit required files into a cpic-kit.zip in the _dist_ directory.

```npm run package```
