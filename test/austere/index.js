var generateArticleListTmpl = require('./generateArticleListTmpl')
var generateHeaderTmpl = require('./generateHeaderTmpl')

module.exports = () => {
  generateArticleListTmpl()
  generateHeaderTmpl()
}
