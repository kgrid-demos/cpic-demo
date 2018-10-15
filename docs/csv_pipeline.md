## CSV Patient Panel Input and CSV Output Demo
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
