#!/usr/bin/env node
const program = require('commander');
const axios = require('axios');
const csvtojson = require('csvtojson');
const readStdIn = require('./read-std-in');

const genophenokolistPath = '/99999/fk4qj7sz2t/v0.1.0/genophenokolist';
const druglistPath = '/99999/fk4qj7sz2s/v0.1.0/druglist';
const stdin = process.stdin;
var host;
var results = [];

program
  .version('0.1.0')
  .description('Use the CPIC toolkit to process panels of patient data')
  .arguments('[host]').action((hostArg) => {
    host = hostArg || 'http://localhost:8082';
  }).on('--help', function() {
    console.log('');
    console.log('Examples:');
    console.log('');
    console.log('  $ cat panel.json | cpic http://localhost:8081 > results.json');
    console.log('  $ cat panel.json | cpic https://kgrid-activator.herokuapp.com');
  }).parse(process.argv);

// Read from standard in
readStdIn().then(input => processPatientData(input));

function processArray(array, fn) {
    var index = 0;
    return new Promise(function(resolve, reject) {
        function next() {
            if (index < array.length) {
                fn(array[index++]).then(next, reject);
            } else {
                resolve();
            }
        }
        next();
    })
}


function processPatientData (input) {
  var data = JSON.parse(input);
  processArray(data, singlepatientprocess).then(function() {
    console.log(JSON.stringify(results, null,4))// all done here
}, function(reason) {
      console.log(reason)// rejection happened
});
}

function singlepatientprocess(patientData){
  var drugObj = {};
  var patientRecommendations = [];
  var prescriptions;
  if(patientData.prescriptions)
    patientData.prescriptions.split(' ').forEach(rx => {drugObj[rx] = true});
  return postJsonRequest(genophenokolistPath, patientData.diplotype)
  .then(response => generatePhentotypes(response.data.result, patientData.diplotype))
  .then(phenotypePanel => generateDrugRecs(drugObj, phenotypePanel, patientRecommendations))
  .then(phenotypePanel => aggregateResults(patientData.patient, patientRecommendations))
  .catch(error => {
    if(error.response) {
      console.error(error.response.data);
    } else if (error.request) {
      console.error('Cannot connect to', error.request._currentUrl, 'check the host name or specify a host with $ cpic <dataFilename> [host]');
      process.exit(1);
    } else {
      console.error(error.message);
    }
  });
}

function postJsonRequest(path, data) {
  return axios({
    method: 'post',
    url: host + path,
    headers: {'Content-Type': 'application/json'},
    data: data
  });
}

function aggregateResults(patient, patientRecommendations) {
  var currentTime = new Date().toLocaleString('en-US');
  patientResult = {
    "patient": patient,
    "time": currentTime,
    "recommendations": patientRecommendations
  };
  results.push(patientResult);
}

function generatePhentotypes(diplotypeObjectMap, diplotypePanel) {
  var gToPMap = diplotypeObjectMap;

  // Create an array of genotype to phenotype request promises
  var gToPPromises = Object.keys(gToPMap).map(function (key) {
    if (gToPMap[key] != '' && gToPMap[key] != null) {
      return postJsonRequest(gToPMap[key] + '/phenotype', diplotypePanel);
    }
  }).filter(element => {return element}); // gets rid of null or undefined elements

  // Use each genotype to phenotype object to get the phenotype panel
  return axios.all(gToPPromises).then((results) => {
    var phenotypePanel = {};
    var ret = results.forEach(response => {
      var phenotype = response.data.result;
      Object.keys(phenotype).map(key => {
        phenotypePanel[key] = phenotype[key];
      });
    });
    // Add in diplotypes that weren't processed in the first stage
    Object.keys(diplotypePanel).forEach(gene => {
      if(!phenotypePanel[gene] && diplotypePanel[gene]){
        phenotypePanel[gene] = {};
        phenotypePanel[gene].diplotype = diplotypePanel[gene];
        phenotypePanel[gene].phenotype = '';
      }
    });
    return phenotypePanel;
  })
  .catch(error => {
    console.error(error);
  })
}

function generateDrugRecs(rxObj, phenotypePanel, patientRecommendations) {
  // Get the list of drug recommendation objects
  return postJsonRequest(druglistPath, rxObj)
  .then(response => {
    var drugMap = response.data.result;
    var drugRecPromises = [];
    // Create an array of drug recommendation request promises
    Object.keys(drugMap).forEach(drugKey => {
      if (drugMap[drugKey] != '')
        drugRecPromises.push(
            postJsonRequest(drugMap[drugKey] + '/dosingrecommendation',
                phenotypePanel));
    });
    // Use each drug recommendation object to get a recommendation
    return axios.all(drugRecPromises).then(results => {
      results.forEach(response => {
        var result = response.data.result;
        patientRecommendations.push(result);
      });
      return phenotypePanel;
    })
  }).catch(error => {
    console.error(error);
  });
}
