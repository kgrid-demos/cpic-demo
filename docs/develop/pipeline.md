

# Pipeline Batch Command Line Demo

In this example we demonstrate the ability to create pipeline processes around the 
CPIC Recommendation process.  In this case these additional processes handle formatting of the CVS incoming
and outgoing information.

The pipeline consists of the following steps:
1. patient clinical lab report in a CSV format converted into JSON format
1. run CPIC recommendation process
1. format the recommendation output from JSON to the CSV

::: tip
Single patient can have several recommendations, each recommendation is represent as a new row for
the particular patient in the CSV file
:::

Here is the pipeline command:

Unix/Mac
```bash
cat cli-client/panel.csv | \
node cli-client/csv-to-json.js |\
node cli-client/cpic-recommendation.js |\
node cli-client/json-to-csv.js > recommendation.csv
```

Windows
```bash
type cli-client/panel.csv | \
node cli-client/csv-to-json.js |\
node cli-client/cpic-recommendation.js |\
node cli-client/json-to-csv.js > recommendation.csv
```
