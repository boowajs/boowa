const generateArticleHtml = require('./generateArticleHtml')
const generateFile = require('./generateFile')
const generateArticleScript = require('./generateArticleScript')
const log = require('../log')

module.exports = (theme, quiet) => {
  let generateArticleListTmpl = require(`./${theme}/generateArticleListTmpl`)
  let cwd = process.cwd()
  let config = require(`${cwd}/_config.json`)

  if (!quiet) {
    log.warn(`boowa build start...`)
  }

  generateArticleHtml(theme).then(site => {
    generateFile(`${cwd}/app/pages/article/article.js`, generateArticleScript(site))
    generateFile(`${cwd}/app/tmpl/articleList.js`, generateArticleListTmpl(site, config))
  })

  let generateHeaderTmpl = require(`./${theme}/generateHeaderTmpl`)
  generateFile(`app/tmpl/header.html`, generateHeaderTmpl(config))
}
