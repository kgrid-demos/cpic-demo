const check = require('./checkLatestTag.js');
var pkg = require('../package.json');

let requests = Object.keys(pkg.githubAssets).map(
    key => {
      var asset = JSON.parse(JSON.stringify(pkg.githubAssets[key]))
      asset.name=key
      // console.log("key===>"+JSON.stringify(asset))
      return check.checkLatestTag(asset)
    });

var kitAsset = {"name":"cpic-kit","url":"https://api.github.com/repos/kgrid-demos/cpic-kit","tag_name":""}
kitAsset.tag_name=pkg.version
requests.push(check.checkLatestTag(kitAsset))


Promise.all(requests).then(function (values) {

  console.log("Compare KGrid Assets");
  console.log(" Components  |      Current Tag       |   Latest Tag  ")

  for (var i = 0; i < values.length; i++) {
    var latestTag = values[i].tag_name
    var currentTag = ''
    if(values[i].name=="cpic-kit"){
      currentTag = kitAsset.tag_name
    }else{
      currentTag = pkg.githubAssets[values[i].name].tag_name
    }
    console.log(values[i].name.padEnd(12,' ')+" | "+currentTag.padEnd(22,' ')+" | "+latestTag.padEnd(20,' '))

  }

});
