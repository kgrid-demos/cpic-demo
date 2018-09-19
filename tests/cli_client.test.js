var shell = require('shelljs');

describe('smoke test cpic cli client', () => {
  test('sample panel', () => {
    shell.exec('node cli-client/cli-client.js cli-client/panel.csv', {silent:true}, function(code, stdout, stderr) {
      const recommendation = JSON.parse(stdout);
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
      console.log( abacavir_recommendation.genes['HLA-B'].diplotype );
      expect(abacavir_recommendation.genes['HLA-B'].diplotype).toBe("*1/*1");

    });
  });

});