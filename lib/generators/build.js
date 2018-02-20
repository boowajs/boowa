var generateArticleHtml = require('./generateArticleHtml')
var generateFile = require('./generateFile')
var generateArticleScript = require('./generateArticleScript')
var log = require('../../log')

module.exports = (theme, quiet) => {
  var generateTmpl = require(`./${theme}/generateTmpl`)
  var cwd = process.cwd()
  var config = require(`${cwd}/_config.json`)

  if (!quiet){
    log.warn(`boowa build start...`)
  }
  
  generateArticleHtml(theme).then(site => {
    generateFile(`${cwd}/app/pages/article/article.js`, generateArticleScript(site))
    generateFile(`${cwd}/app/tmpl/homepage.html`, generateTmpl(site, config))
  })
}
