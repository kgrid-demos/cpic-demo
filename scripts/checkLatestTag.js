
const download = require('download');
const request = require('request');
const jp = require('jsonpath');
const fileExists = require('file-exists');

const filter = '$.assets[*].browser_download_url'

module.exports = {

  checkLatestTag: function(asset){

    var options = {
      url: asset.url+"/releases/latest",
      headers: {
        'User-Agent': 'request'
      }
    };
    // console.log("Asset==>"+JSON.stringify(asset))
    return new Promise( (resolve, reject) => {

      request(options, function (error, response, body) {
        if (error){
          reject(error);
        } else {
          let download_url = jp.value(JSON.parse(body), filter);
          let tag_name = jp.value(JSON.parse(body), '$.tag_name');
          var artifact ={}
          let filename = download_url.substring(
              (download_url.lastIndexOf('/') + 1));
          artifact.name= asset.name
          artifact.filename=filename
          artifact.tag_name=tag_name
          resolve(artifact);
        }
      });

    });

 }

};
