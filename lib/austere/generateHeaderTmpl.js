const endent = require('endent')
const defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (config = defaultConfig) => {
  let tmpl = `<span>${config.fullName}</span>`

  return endent`
    module.exports = state => \`
      ${tmpl}
    \`
  `
}
