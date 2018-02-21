var generateArticleHtml = require('./generateArticleHtml')
var generateFile = require('./generateFile')
var generateArticleScript = require('./generateArticleScript')
var log = require('../log')

module.exports = (theme, quiet) => {
  var generateArticleListTmpl = require(`./${theme}/generateArticleListTmpl`)
  var cwd = process.cwd()
  var config = require(`${cwd}/_config.json`)

  if (!quiet){
    log.warn(`boowa build start...`)
  }

  generateArticleHtml(theme).then(site => {
    generateFile(`${cwd}/app/pages/article/article.js`, generateArticleScript(site))
    generateFile(`${cwd}/app/tmpl/articleList.js`, generateArticleListTmpl(site, config))
  })

  var generateHeaderTmpl = require(`./${theme}/generateHeaderTmpl`)
  generateFile(`app/tmpl/header.html`, generateHeaderTmpl(config))
}
