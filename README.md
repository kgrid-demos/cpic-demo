KGrid CPIC Kit packages Activator, Library and CPIC Demo Site.  The kit is designed as a personnel 
CPIC Knowledge Grid used to explore the capablities of KGrid and examing the CPIC Knowlege Objects.

## Requirements
To setup the CPIC Kit you need:

- [JDK 1.8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Node.js](http://nodejs.org/)


## Installation

* Create c*pic_kit* directory
* Download the latest CPIC Kit *cpic-kit.zip* from GitHub, 
[CPIC Kit](https://github.com/kgrid-demos/cpic-kit/releases/latest). 
* Unzip cpic-kit.zip into the *cpic_kit* directory
* Via a terminal interface navigate to the *cpic_kit* directory

From the command line install the cpic kit
```
npm install
```
The install process is downloading the KGrid applications (library and activator) and loading the 
CPIC Knowledge Objects into the system.


## Usage

### Starting KGrid CPIC Kit
Starting the KGrid CPIC Kit will start up an instance of the KGrid Activator, KGrid Library and CPIC Kit Web server used to serve the CPIC web demo application.

From the command line of the kit direcdtory start the kit via npm start script.  Your browser open to the CPIC Kit Web page.
```
npm start
```

Once running the following components will be running
* [Activator](http://localhost:8082)
* [Library](http://localhost:8081)
* [CPIC Kit Site](http://localhost:8080)


#### Web Demo
[CPIC Kit Site](http://localhost:8080)

#### Command Line Demo

```npm run cpic cli_client/panel.csv```

### Stopping KGrid CPIC Kit

```
npm stop
```
