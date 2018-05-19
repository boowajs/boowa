const awoo = require('awoo')
const markdown = require('awoo-markdown')
const prism = require('markdown-it-prism-zhc')
const container = require('markdown-it-container')
const matter = require('awoo-matter')
const layouts = require('awoo-layouts')

module.exports = theme => {
  let layout = require(`./${theme}/articleLayout`)

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
