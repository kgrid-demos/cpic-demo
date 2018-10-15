var shell = require('shelljs');

describe('smoke test cpic cli client', () => {
  test('simple json panel', ()  => {

     var cli = shell.cat("cli-client/panel.json").exec('node cli-client/cli-client.js ', {silent:true});

     expect(cli.stderr).toBe("");

      const recommendation = JSON.parse(cli.stdout);
      const hankhill = recommendation.find(function(element){
        if(element.patient.id=="1"){
          return element;
        };
      });

      expect(hankhill.patient.name).toBe("Hank Hill");

      const abacavir_recommendation = hankhill.recommendations.find(function(element){
        if(element.drug=="abacavir"){
          return element;
        };
      });

      expect(abacavir_recommendation.genes['HLA-B'].diplotype).toBe("*1/*1");

  });

  test('simple csv panel to json panel', ()  => {

    var cli = shell.cat("cli-client/panel.csv").exec(' node cli-client/csv-to-json.js ', {silent:true});

    expect(cli.stderr).toBe("");

    var jsonPanel = shell.cat('cli-client/panel.json');

    expect(cli.stdout.replace(/\s/g, "")).toBe(jsonPanel.replace(/\s/g, ""));

  });

  test('simple csv panel', ()  => {

    var cli = shell.cat("cli-client/panel.csv").exec(' node cli-client/csv-to-json.js | node cli-client/cli-client.js', {silent:true});

    expect(cli.stderr).toBe("");

    const recommendation = JSON.parse(cli.stdout);
    const hankhill = recommendation.find(function(element){
      if(element.patient.id=="1"){
        return element;
      };
    });

    expect(hankhill.patient.name).toBe("Hank Hill");

    const abacavir_recommendation = hankhill.recommendations.find(function(element){
      if(element.drug=="abacavir"){
        return element;
      };
    });

    expect(abacavir_recommendation.genes['HLA-B'].diplotype).toBe("*1/*1");

  });


  test('simple csv panel', ()  => {

    var cli = shell.cat('cli-client/panel.csv').exec( ' node cli-client/csv-to-json.js | node cli-client/cli-client.js | node cli-client/json-to-csv.js', {silent:true});

    expect(cli.stderr).toBe("");

    expect( (cli.stdout.match(/Hank Aaron/g)||[]).length).toBe(2);
    expect( (cli.stdout.match(/Hank Hill/g)||[]).length).toBe(3);

  });

})


