var html = require('choo/html')
var raw = require('choo/html/raw')
var Nanocomponent = require('nanocomponent')
var css = require('sheetify')
var header = require('../tmpl/header.js')

var prefix = css('./header.scss')

class Component extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <header class=${prefix}>
        ${raw(header(state))}
      </header>
    `
  }

  update () {
    return true
  }
}

function clickButton (state, emit) {
  return () => {
    state.isDark = !state.isDark
    emit('render')
  }
}

module.exports = new Component()
