const html = require('choo/html')
const raw = require('choo/html/raw')
const Nanocomponent = require('choo/component')
const css = require('sheetify')
const articleList = require('../tmpl/articleList.js')

const prefix = css('./articleList.scss')

class Component extends Nanocomponent {
  createElement (state, emit) {
    return html`
      <ul class='${prefix} ${state.isDark ? 'isDark' : ''}'>
        ${raw(articleList(state))}
      </ul>
    `
  }

  update () {
    return true
  }
}

module.exports = new Component()
