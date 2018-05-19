const html = require('choo/html')
const Nanocomponent = require('choo/component')
const css = require('sheetify')
const articleList = require('../../components/articleList')

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
