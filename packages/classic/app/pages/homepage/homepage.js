var html = require('choo/html')
var Nanocomponent = require('choo/component')
var css = require('sheetify')
var articleList = require('../../components/articleList')

css('./homepage.scss')

class Component extends Nanocomponent {
  createElement (state, emit) {
    return html`
      <div>
        ${articleList.render(state, emit)}
      </div>
    `
  }

  update () {
    return true
  }
}

module.exports = new Component()
