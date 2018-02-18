var getGlobalpath = require('get-installed-path').getInstalledPath
var awoo = require('awoo')

module.exports = async theme => {
  var src = await getGlobalpath('boowa')

  return awoo(async site => {
    site.config({
      source: `${src}/packages/${theme}`,
      destination: process.cwd()
    })

    site._config.exclude = site._config.exclude.filter(file => {
      return file !== 'package.json' && file !== ''
    })

    return site
  })
}
