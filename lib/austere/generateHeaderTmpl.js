var endent = require('endent')
var defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (config) => {
  var config = config ? config : defaultConfig

  var tmpl = `<span>${config.fullName}</span>`

  return endent`
    module.exports = state => \`
      ${tmpl}
    \`
  `
}
