const html = require('choo/html')
const raw = require('choo/html/raw')
const Nanocomponent = require('nanocomponent')
const css = require('sheetify')
const articleList = require('../tmpl/articleList.js')

var prefix = css('./articleList.scss')

class Component extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <ul class='${prefix} ${state.isDark ? "isDark" : ""}'>
        ${raw(articleList(state))}
        <small>the end.</small>
      </ul>
    `
  }

  update () {
    return true
  }
}

function clickButton (state, emit) {
  return () => {
    emit('')
  }
}

module.exports = new Component()
