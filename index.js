const superagent = require('superagent')
const versionCompare = require('./version-compare')

module.exports = function (name, packageConfig) {
  return new Promise(function(resolve, reject) {
    superagent
    .get(`https://registry.npmjs.org/${name}`)
    .end(function (err, res) {
      if (err) reject(err)
      var latestVersion = JSON.parse(res.text)['dist-tags'].latest
      var localVersion = packageConfig.version
      resolve(versionCompare(localVersion, latestVersion))
    })
  })
}