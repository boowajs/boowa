var html = require('choo/html')
var raw = require('choo/html/raw')
var Nanocomponent = require('nanocomponent')
var css = require('sheetify')
var fs = require('fs')
var header = require('../../components/header')
var nestList = require('../../components/nestList')

css('./homepage.scss')

class Component extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <div>
        ${ nestList.render(state, emit) }
      </div>
    `
  }

  update () {
    return true
  }
}

module.exports = new Component()
