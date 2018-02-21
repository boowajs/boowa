var generateArticleListTmpl = require('./generateArticleListTmpl')
var articleLayout = require('./articleLayout')

module.exports = () => {
  generateArticleListTmpl()
  articleLayout()
}
