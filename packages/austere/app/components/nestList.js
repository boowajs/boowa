var html = require('choo/html')
var raw = require('choo/html/raw')
var Nanocomponent = require('nanocomponent')
var css = require('sheetify')
var fs = require('fs')
var nestList = fs.readFileSync('./app/tmpl/homepage.html', 'utf8')

var prefix = css('./nestList.scss')

class Component extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <ul class='${prefix} ${state.isDark ? "isDark" : ""}'>
        ${raw(nestList)}
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
