var html = require('choo/html')
var raw = require('choo/html/raw')
var Nanocomponent = require('nanocomponent')
var css = require('sheetify')
var fs = require('fs')
var articleList = require('../../components/articleList')

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
