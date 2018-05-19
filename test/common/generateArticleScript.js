var test = require('tape')
var endent = require('endent')
var site = require('./fixtures/site')
var generateArticleScript = require('../../lib/generateArticleScript')

module.exports = () => {
  test('generateArticleScript', t => {
    t.plan(1)
    t.equal(endent`
      var html = require('choo/html')
      var raw = require('choo/html/raw')
      var Nanocomponent = require('nanocomponent')
      var css = require('sheetify')
      var fs = require('fs')

      var sheetify_document = fs.readFileSync('./app/articles/sheetify_document.html', 'utf8')

      var titleObject = {
        sheetify_document: 'sheetify document'
      }

      css('./article.scss')

      class Component extends Nanocomponent {
        constructor () {
          super()
        }

        createElement (state, emit) {
          var article = state.params.article

          emit(state.events.DOMTITLECHANGE, titleObject[article])

          return html\`
            <article class='boowa-article'>
              ${'${' + 'raw(eval(article))' + '}'}
            </article>
          \`
        }

        update () {
          return true
        }
      }
      module.exports = new Component()
    `, generateArticleScript(site))
  })
}
