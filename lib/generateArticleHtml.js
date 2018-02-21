var awoo = require('awoo')
var markdown = require('awoo-markdown')
var prism = require('markdown-it-prism-zhc')
var container = require('markdown-it-container')
var matter = require('awoo-matter')
var layouts = require('awoo-layouts')

module.exports = theme => {
  var layout = require(`./${theme}/articleLayout`)

  return awoo(async site => {
    site.config({
      source: `${process.cwd()}/_articles`,
      destination: `${process.cwd()}/app/articles`
    })

    site.use(matter)
    site.use(markdown, { plugins: [ [ prism ], [ container, 'markdown-body' ] ] })
    site.use(layouts, { layouts: { main: layout } })

    return site
  })
}
