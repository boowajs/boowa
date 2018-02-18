var generateTmpl = require('./generateTmpl')
var articleLayout = require('./articleLayout')

module.exports = () => {
  generateTmpl()
  articleLayout()
}
