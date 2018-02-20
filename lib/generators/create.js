var generateFile = require('./generateFile')
var build = require(`./build`)

module.exports = async (blogname, theme) => {
  generateFile(`${process.cwd()}/_articles/${blogname}.md`, require(`./${theme}/articleMdTmpl`))
    .then(() => {
      build(theme, true)
    })
}
