
const download = require('download');
const request = require('request');
const jp = require('jsonpath');

module.exports = {

  checkLatestTag: function(asset){

    var options = {
      url: asset.url+"/releases/tags/"+asset.tag_name,
      headers: {
        'User-Agent': 'request'
      }
    };

    return new Promise( (resolve, reject) => {

      request(options, function (error, response, body) {
        if (error){
          reject(error);
        } else {
          let download_url = jp.value(JSON.parse(body), '$.assets[*].browser_download_url');
          let description = jp.value(JSON.parse(body), '$.body');
          let tag_name = jp.value(JSON.parse(body), '$.tag_name');
          var artifact ={}
          artifact.name= asset.name
          artifact.tag_name=tag_name
          artifact.download_url=download_url
          artifact.description=description
          resolve(artifact);
        }
      });

    });

 }

};
