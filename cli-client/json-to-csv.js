#!/usr/bin/env node
const json2csvParser = require('json2csv').Parser;
const readStdIn = require('./read-std-in');

const fields = ['patient.name', 'patient.id', 'time', 'recommendations.type', 'recommendations.drug',
  'recommendations.genes', 'recommendations.recommendation.implication', 'recommendations.recommendation.content',
  'recommendations.recommendation.classification'];
const nestedParser = new json2csvParser({fields, unwind: 'recommendations'});

readStdIn().then(input => {
  let data = JSON.parse(input);
  // Eliminate invalid results
  data.map((patient) =>
    patient.recommendations = patient.recommendations.filter((recommendation) =>
        (typeof recommendation === 'object'))
  );
  console.log(nestedParser.parse(data));
});