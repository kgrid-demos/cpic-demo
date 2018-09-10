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
Starting the KGrid CPIC Kit will start up an instance of the KGrid Activator, KGrid Library and CPIC Kit Web. The CPIC Kit Web server will serve the CPIC web demo application.

From the command line of the kit directory start the kit.  This script will automaticaly open a browser window pointing to the  CPIC Kit Web home page.
```
npm start
```
Once running the following components will be running [Activator](http://localhost:8082), [Library](http://localhost:8081), [CPIC Kit Site](http://localhost:8080)


#### Web Demo
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis arcu est, in consectetur libero venenatis sed. Duis non elementum orci, non laoreet augue. Ut non molestie mi. Sed blandit maximus sapien ornare lacinia. Mauris varius vehicula nibh, at bibendum odio porta ac. Phasellus in enim pellentesque, convallis magna ut.
[CPIC Kit Site](http://localhost:8080)

#### Command Line Demo
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis arcu est, in consectetur libero venenatis sed. Duis non elementum orci, non laoreet augue. Ut non molestie mi. Sed blandit maximus sapien ornare lacinia. Mauris varius vehicula nibh, at bibendum odio porta ac. Phasellus in enim pellentesque, convallis magna ut.
```npm run cpic cli_client/panel.csv```

### Stopping KGrid CPIC Kit
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis arcu est, in consectetur libero venenatis sed. Duis non elementum orci, non laoreet augue. Ut non molestie mi. Sed blandit maximus sapien ornare lacinia. Mauris varius vehicula nibh, at bibendum odio porta ac. Phasellus in enim pellentesque, convallis magna ut.
```
npm stop
```
