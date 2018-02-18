var generateApp = require('./generateApp')
var generateFile = require('./generateFile')
var generateArticleScript = require('./generateArticleScript')
var generateArticleHtml = require('./generateArticleHtml')
var packageJsonTmpl = require('./packageJsonTmpl')
var serviceWorkerTmpl = require('./serviceWorkerTmpl')
var readmeMdTmpl = require('./readmeMdTmpl')
var fs = require('fs')
var log = require('../../log')

module.exports = async (theme, isUpdate) => {
  var cwd = process.cwd()
  var config = isUpdate ? require(`${cwd}/_config.json`) : undefined

  var configTmpl = require(`./${theme}/configTmpl`)
  var generateTmpl = require(`./${theme}/generateTmpl`)
  var articleDemoMdTmpl = require(`./${theme}/articleDemoMdTmpl`)

  await generateApp(theme)
  await generateFile(`${cwd}/package.json`, packageJsonTmpl)
  await generateFile(`${cwd}/service-worker.js`, serviceWorkerTmpl)
  await generateFile(`${cwd}/_articles/sheetify_document.md`, articleDemoMdTmpl)
  await generateFile(`${cwd}/README.md`, readmeMdTmpl)
  if (!isUpdate) {
    await generateFile(`${cwd}/_config.json`, configTmpl)
  }
  var site = await generateArticleHtml(theme)
  await generateFile(`${cwd}/app/pages/article/article.js`, generateArticleScript(site))
  await generateFile(`${cwd}/app/tmpl/homepage.html`, generateTmpl(site, config))
  if (theme === 'austere') {
    var generateHeaderTmpl = require(`./${theme}/generateHeaderTmpl`)
    await generateFile(`${cwd}/app/tmpl/header.html`, generateHeaderTmpl(config))
  }
  log.info(`boowa ${isUpdate ? 'update' : 'init'}`)
}
