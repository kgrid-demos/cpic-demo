const prettyjson = require('prettyjson');
const check = require('./checkLatestTag.js');
var pkg = require('../package.json');

let requests = Object.keys(pkg.githubAssets).map(
    key => {
      var asset = JSON.parse(JSON.stringify(pkg.githubAssets[key]))
      asset.name=key
      // console.log("key===>"+JSON.stringify(asset))
      return check.checkLatestTag(asset)
    });

var kitAsset = {"name":"cpic-kit","url":"https://api.github.com/repos/kgrid-demos/cpic-kit","download_url":"","tag_name":""}
kitAsset.tag_name=pkg.version
requests.push(check.checkLatestTag(kitAsset))

var assetStatus ={}
var kitUpdated = false
var componentsUpdated = false

Promise.all(requests).then(function (values) {
  console.log("\n       KGrid Assets Status      ");
  console.log("================================")
  for (var i = 0; i < values.length; i++) {
    var assetStatus ={}
    assetStatus[values[i].name]={}
    if(values[i].name=="cpic-kit"){
      assetStatus[values[i].name].currentTag  = kitAsset.tag_name
      kitAsset.download_url=values[i].download_url
    }else{
      assetStatus[values[i].name].currentTag  = pkg.githubAssets[values[i].name].tag_name
    }
    assetStatus[values[i].name].latestTag = values[i].tag_name
    assetStatus[values[i].name].description = values[i].description
    if(assetStatus[values[i].name].latestTag==assetStatus[values[i].name].currentTag | assetStatus[values[i].name].latestTag==undefined ){
      console.log(prettyjson.render(assetStatus, {noColor:false, keysColor: 'green'}))
    }else {
      if(values[i].name=="cpic-kit"){
        kitUpdated = kitUpdated || (assetStatus[values[i].name].latestTag!=assetStatus[values[i].name].currentTag)
      }else {
        componentsUpdated = componentsUpdated || (assetStatus[values[i].name].latestTag!=assetStatus[values[i].name].currentTag)
      }
      console.log(prettyjson.render(assetStatus,  {noColor:false, keysColor: 'yellow'}))
    }
  }
  console.log("================================\n")
  if(kitUpdated){
    console.log("* A new version of CPIC-Kit is avaliable.\n  You can download at "+kitAsset.download_url+"\n")
  }
  if(componentsUpdated){
    console.log("* A new version of one or more KGrid components is avaliable. You can run `npm install` to update.\n")
  }


});
