const download = require('./downloadAssets.js');
var pkg = require('../package.json');
const fs = require('fs-extra');
const unzip = require("unzip");

console.log("Load KGrid Assets");

let assets = Object.values(pkg.githubAssets);

let requests = Object.keys(pkg.githubAssets).map(
    key => {
      var asset = JSON.parse(JSON.stringify(pkg.githubAssets[key]))
      asset.name=key
      // console.log("key===>"+JSON.stringify(asset))
      return download.downloadAssets(asset)
    });

Promise.all(requests).then(function (values) {

  console.log("Completed KGrid Asset Load ");

  fs.createReadStream('dist/cpic-all.zip').pipe(
      unzip.Extract({path: 'library/shelf'}));
  fs.createReadStream('dist/cpic-all.zip').pipe(
      unzip.Extract({path: 'activator/shelf'}));

  for (var i = 0; i < values.length; i++) {
    pkg.githubAssets[values[i].name].tag_name=values[i].tag_name
    fs.writeJsonSync('./package.json', pkg)


    if (values[i].filename.startsWith("kgrid-activator")) {
      fs.move('activator/' + values[i].filename, 'activator/kgrid-activator.jar',
          function (err) {
            if (err) {
              return console.error(err)
            }
          })

    }
    if (values[i].filename.startsWith("kgrid-library")) {
      fs.move('library/' + values[i].filename, 'library/kgrid-library.jar', function (err) {
        if (err) {
          return console.error(err)
        }
      })
    }
  }



});
