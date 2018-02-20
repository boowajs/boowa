var generateApp = require('./generateApp')
var generateFile = require('./generateFile')
var generateArticleScript = require('./generateArticleScript')
var generateArticleHtml = require('./generateArticleHtml')
var pkgTmpl = require('./pkgTmpl')
var devInstall = require('./devInstall')
var serviceWorkerTmpl = require('./serviceWorkerTmpl')
var readmeMdTmpl = require('./readmeMdTmpl')
var fs = require('fs')
var log = require('../../log')

module.exports = (theme, isUpdate) => {
  var cwd = process.cwd()
  var config = isUpdate ? require(`${cwd}/_config.json`) : undefined

  var configTmpl = require(`./${theme}/configTmpl`)
  var generateTmpl = require(`./${theme}/generateTmpl`)
  var articleDemoMdTmpl = require(`./${theme}/articleDemoMdTmpl`)

  log.warn(`boowa ${isUpdate ? 'update' : 'init'} start...`)

  generateApp(theme).then(() => log.info(`choo app generated.`))

  generateFile(`package.json`, pkgTmpl)
  generateFile(`service-worker.js`, serviceWorkerTmpl)
  generateFile(`_articles/sheetify_document.md`, articleDemoMdTmpl)
  generateFile(`README.md`, readmeMdTmpl)

  generateArticleHtml(theme).then(site => {
    generateFile(`app/pages/article/article.js`, generateArticleScript(site))
    generateFile(`app/tmpl/homepage.html`, generateTmpl(site, config))
  })

  if (theme === 'austere') {
    var generateHeaderTmpl = require(`./${theme}/generateHeaderTmpl`)
    generateFile(`app/tmpl/header.html`, generateHeaderTmpl(config))
  }

  if (!isUpdate) {
    generateFile(`_config.json`, configTmpl)
    devInstall()
  }
}
