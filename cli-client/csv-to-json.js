#!/usr/bin/env node
const csvtojson = require('csvtojson');
const readStdIn = require('./read-std-in');

readStdIn().then(input => transformToJSON(input));

// Transform into json
function transformToJSON(input) {
  csvtojson()
  .fromString(input)
  .then(json => {
    console.log(JSON.stringify(json, null, 4));
  });
}