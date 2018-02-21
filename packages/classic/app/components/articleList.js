var html = require('choo/html')
var raw = require('choo/html/raw')
var Nanocomponent = require('nanocomponent')
var css = require('sheetify')
var articleList = require('../tmpl/articleList.js')

var prefix = css('./articleList.scss')

class Component extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <ul class='${prefix} ${state.isDark ? "isDark" : ""}'>
        ${raw(articleList(state))}
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
