const endent = require('endent')
const defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (config = defaultConfig) => {
  let tmpl = `<img src='${config.avatar}' />`

  return endent`
    module.exports = state => \`
      ${tmpl}
    \`
  `
}
