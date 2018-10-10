---
home: false
sidebarDepth: 2
---

# CPIC Kit Get Started Guide
[![GitHub release](https://img.shields.io/github/release/kgrid-demos/cpic-kit.svg)](https://github.com/kgrid-demos/cpic-kit/releases/)
[![CircleCI](https://circleci.com/gh/kgrid-demos/cpic-kit.svg?style=svg)](https://circleci.com/gh/kgrid-demos/cpic-kit)

KGrid CPIC Kit packages [Activator](http://kgrid.org/kgrid-activator/), [Library](http://kgrid.org/kgrid-library) and CPIC Demo Site.  The kit is designed as a personal CPIC Knowledge Grid used to explore the capabilities of KGrid and [CPIC Knowledge Objects](https://kgrid-objects.github.io/cpic-collection/).


## Installation

To setup the CPIC Kit you need:
- Terminal Window
- [Java 8 or higher](https://www.oracle.com/java/)
- [Node 8 or higher](http://nodejs.org/)

To verify the versions for installed software, type in the following in you terminal widow :

```
java -version                     # JAVA version
npm version                       # node/npm version
```

1.  Download the latest CPIC Kit *cpic-kit.zip* from GitHub,
[GitHub CPIC Kit Release](https://github.com/kgrid-demos/cpic-kit/releases/latest).
1. Unzip cpic-kit.zip to a directory of your choice.  
1. Via a terminal interface navigate to the *cpic_kit* directory and install the kit

For example to create a cpic-kit directory in my projects directory and install the kit:
```bash
unzip cpic-kit.zip -d /Users/me/projects
cd /Users/me/projects/cpic-kit
npm install
```

The install process is downloading the KGrid applications (library and activator) and loading the
CPIC Knowledge Objects into the system.

When complete you should see a similar message

```$bash
Clean up complete
Load KGrid Assets
Downloading kgrid-activator-1.0.1.jar
Downloading kgrid-library-1.0.9.jar
Downloading cpic-all.zip
cpic-all.zip downloaded to dist
kgrid-activator-1.0.1.jar downloaded to activator
kgrid-library-1.0.9.jar downloaded to library
*********************************
*    KGRID INSTALL COMPLETE     *
*                               *
* Type 'npm start' to run KGrid *
*                               *
*********************************
```

## Usage

### Starting KGrid CPIC Kit
Starting the KGrid CPIC Kit will start up an instance of the KGrid Activator, KGrid Library and CPIC Kit Web. The CPIC Kit Web server will serve the CPIC web demo application.

From the command line of the kit directory start the kit.

`npm start`

When complete you should see a similar message

```bash
Starting KGrid CPIC Kit
Starting CPIC Kit demo web site on http://localhost:8083
Starting library on http://localhost:8081
Starting activator on http://localhost:8082
Waiting.....
KGrid CPIC Kit is running
```

Once started you can navigate to the Web and Command Line Demo clients as well as access the
 KGrid Library and KGrid Activator.

 1. [Web Demo Client](#web-demo)
 1. [Command Line Demo Client](#command-line-demo)
 1. [KGrid Library](#local-kgrid-library)
 1. [KGrid Activator](#local-kgrid-activator)

### Web Demo

This app simulates a panel of a patient's genotype and diplotype and generates drug dosing recommendations.
Geno-to-pheno Knowledge objects are used to determine each gene's phenotype, if applicable.
Relevant drugs recommendations are then determined based on the available genetic information, using the drug dosing recommendation KO.

To access the demo,

For Mac, type `open http://localhost:8083`;

For Windows, type `start http://localhost:8083`

To run the app,

  - Click on the button to select a patient, the preset data will be auto filled in the input panel and results will displayed;
  - You can manually change diplotype information in the input panel, the phenotype result and recommendation will be updated accordingly;

Note:
  - Click on the setting (gear icon) in the right upper corner, an overlay will allow you to choose a different activator;
  - Click on the app log, the log area will expand to show more details on the interactions with the connected KGrid activator.


### Command Line Demo
There are three scripts that make up the batch/command line demo

- [csv-to-json.js](https://github.com/kgrid-demos/cpic-kit/master/cli-client/csv-to-json.js) - takes in csv and outputs JSON.  example of a possible extract from a EHR/EMR
- [cli-client.js](https://github.com/kgrid-demos/cpic-kit/master/cli-client/cli-client.js)  - takes in multiple patient clinical lab reports (genotype and diplotype) and uses the CPIC objects 
to determine a patient’s predicted metabolizer phenotype and therapeutic recommendations for a set of drugs.
- [json-to-csv.js](https://github.com/kgrid-demos/cpic-kit/master/cli-client/json-to-csv.js)  - takes the recommendation output of cli-client.js and renders it in csv format

#### JSON Patient Panel Input and Output
Takes in multiple patient clinical lab reports in the form of json

```bash
cat cli-client/panel.json | npm run cpic
```

To have the script output to a file use the following command:

```bash
cat cli-client/panel.json | npm run cpic > output.json
```

#### CSV Patient Panel Input and CSV Output
Here we use all three scripts to take a 
1. multiple patient clinical lab report in a csv format convert and convert to json
1. run the json multiple patient clinical lab report through the CPIC recommendation process
1. add the recommendation information to the csv 

(_Note: a single patient can have several 
recommendations, each recommendation is represent as a new row for the particular patient 
in the cvs file_)

Here is the pipeline command:

```bash
cat cli-client/panel.csv | \
node cli-client/csv-to-json.js |\
node cli-client/cli-client.js |\
node cli-client/json-to-csv.js > cli-client/output.csv
```

### Local KGrid Library

The local KGrid Library manages the CPIC collection of Knowledge Objects.

For Mac, type `open http://localhost:8081`;

For Windows, type `start http://localhost:8081`

### Local KGrid Activator

The local KGrid Activator activates the CPIC collection of Knowledge Objects.

To check the status of the activator,

For Mac,
`open http://localhost:8082/health`

For Windows,
`start http://localhost:8082/health`

### Stopping KGrid CPIC Kit
Stopping the running KGrid activator, library and demo web site can be accomplished with the npm stop command

`npm stop`

A similar message will appear
```bash
Stopping Activator, Library and CPIC Demo web site
kill -15 229
kill -15 228
kill -15 89142

```
## Troubleshooting & Debugging
### Application Logs
On windows the activator, library and web demo components will start their own terminal window. The application logs
will stream to those terminal windows

On macs the application logs will be stored in the _cpic-kit/activator/activator.log_ and _cpic-kit/library/libray.log_ files.

## CPIC Kit Updates
Each time the CPIC Kit is started it will first check to see if there have been any updates to the Kit or it's
dependencies. A _KGrid Assets Status_ section will appear in the terminal window.

```bash

       KGrid Assets Status      
================================
library:
  currentTag:  kgrid-library-1.0.9
  latestTag:   kgrid-library-1.0.9
  description: Changed the publish feature
activator:
  currentTag:  kgrid-activator-1.0.1
  latestTag:   kgrid-activator-1.0.1
  description: Refactored the health endpoint
cpic-kos:
  currentTag:  1.5.0
  latestTag:   1.5.0
  description: Update the Codeine CYP2D6 recommendation object
cpic-kit:
  currentTag:  1.1.0
  latestTag:   v1.1.0
  description: This is the release for KGrid team internal review.
================================

* A new version of CPIC-Kit is available.
  You can download at https://github.com/kgrid-demos/cpic-kit/releases/download/v1.1.0/cpic-kit.zip

Starting KGrid CPIC Kit
...
```

Changes in the library, activator and the CPIC knowledge objects can be update by running ```npm install```

Changes to the CPIC Kit itself will require that you download a new cpic-kit.zip file. the example below
depicts the _KGrid Assets Status_ when you need to download a new cpic-kit.zip.

## Development
For CPIC Kit developers we have outlined the tools and techniques used to code, test and publish
the CPIC Kit.  Please see details in the [Developer Readme](develop/)
