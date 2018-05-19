const generateApp = require('./generateApp')
const generateFile = require('./generateFile')
const generateArticleScript = require('./generateArticleScript')
const generateArticleHtml = require('./generateArticleHtml')
const pkgTmpl = require('./pkgTmpl')
const devInstall = require('./devInstall')
const serviceWorkerTmpl = require('./serviceWorkerTmpl')
const readmeMdTmpl = require('./readmeMdTmpl')
const fs = require('fs')
const log = require('../log')

module.exports = (theme, isUpdate) => {
  let cwd = process.cwd()
  let config = isUpdate ? require(`${cwd}/_config.json`) : undefined

  let configTmpl = require(`./${theme}/configTmpl`)
  let generateArticleListTmpl = require(`./${theme}/generateArticleListTmpl`)
  let articleDemoMdTmpl = require(`./${theme}/articleDemoMdTmpl`)

  log.warn(`boowa ${isUpdate ? 'update' : 'init'} start...`)

  generateApp(theme).then(() => log.info(`choo app generated.`))

  generateFile(`service-worker.js`, serviceWorkerTmpl)
  generateFile(`_articles/sheetify_document.md`, articleDemoMdTmpl)
  generateFile(`README.md`, readmeMdTmpl)

  generateArticleHtml(theme).then(site => {
    log.info(`article tmpl generated.`)
    generateFile(`app/pages/article/article.js`, generateArticleScript(site))
    generateFile(`app/tmpl/articleList.js`, generateArticleListTmpl(site, config))
  })

  let generateHeaderTmpl = require(`./${theme}/generateHeaderTmpl`)
  generateFile(`app/tmpl/header.js`, generateHeaderTmpl(config))

  if (!isUpdate) {
    generateFile(`package.json`, pkgTmpl)
    generateFile(`_config.json`, configTmpl)
    devInstall()
  }
}
