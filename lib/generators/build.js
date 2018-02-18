var generateArticleHtml = require('./generateArticleHtml')
var generateFile = require('./generateFile')
var generateArticleScript = require('./generateArticleScript')
var log = require('../../log')

module.exports = async theme => {
  var site = await generateArticleHtml(theme)
  var generateTmpl = require(`./${theme}/generateTmpl`)
  var cwd = process.cwd()
  var config = require(`${cwd}/_config.json`)

  await generateFile(`${cwd}/app/pages/article/article.js`, generateArticleScript(site))
  await generateFile(`${cwd}/app/tmpl/homepage.html`, generateTmpl(site, config))

  log.info('boowa build')
}
