var endent = require('endent')
var defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (config) => {
  var config = config ? config : defaultConfig

  return endent`
    <span>
    ${config.fullName}
    </span>
  `
}
