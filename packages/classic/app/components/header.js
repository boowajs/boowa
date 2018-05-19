const html = require('choo/html')
const raw = require('choo/html/raw')
const Nanocomponent = require('nanocomponent')
const css = require('sheetify')
const header = require('../tmpl/header.js')

const prefix = css('./header.scss')

class Component extends Nanocomponent {
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

module.exports = new Component()
