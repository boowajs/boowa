const html = require('choo/html')
const raw = require('choo/html/raw')
const Nanocomponent = require('nanocomponent')
const css = require('sheetify')
const fs = require('fs')
const header = require('../../components/header')
const articleList = require('../../components/articleList')

css('./homepage.scss')

class Component extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <div>
        ${ articleList.render(state, emit) }
      </div>
    `
  }

  update () {
    return true
  }
}

module.exports = new Component()
