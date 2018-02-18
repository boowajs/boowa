var generateFile = require('./generateFile')
var build = require(`./build`)

module.exports = async (blogname, theme) => {
  await generateFile(`${process.cwd()}/_articles/${blogname}.md`, require(`./${theme}/articleMdTmpl`))
  build(theme)
}
