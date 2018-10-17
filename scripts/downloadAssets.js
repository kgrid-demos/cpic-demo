
const download = require('download');
const request = require('request');
const jp = require('jsonpath');
// const fileExists = require('file-exists');
const fs = require('fs-extra')

const filter = '$.assets[*].browser_download_url'

module.exports = {

  downloadAssets: function(asset){

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
          fs.pathExists(asset.destination + "/" + filename).then(exists => {
            if (exists) {
              console.log("Already have " + filename);
              resolve(artifact);
            } else {
              console.log("Downloading " + filename);
              download(download_url, asset.destination, "{'extract':true}").then(() => {
                console.log(filename + ' downloaded to '+asset.destination);
                resolve(artifact);
              });
            }
          });
        }
      });

    });

 }

};
