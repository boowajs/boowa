var generateTmpl = require('./generateTmpl')
var generateHeaderTmpl = require('./generateHeaderTmpl')

module.exports = () => {
  generateTmpl()
  generateHeaderTmpl()
}
