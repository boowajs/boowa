var html = require('choo/html')
var raw = require('choo/html/raw')
var Nanocomponent = require('nanocomponent')
var css = require('sheetify')
var fs = require('fs')
var header = fs.readFileSync('./app/tmpl/header.html', 'utf8')

var prefix = css('./header.scss')
var emojis = ['🐝', '🚂', '👽', '🍅', '🐻', '🎮']
var emoji =  emojis[Math.floor(Math.random()*emojis.length)]
class Component extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <header class=${prefix}>
        <div>
          <a href="./">
            <span class="js-random-emoji">
            ${emoji}
            </span>
            ${raw(header)}
          </a>
        </div>
        <button onclick=${clickButton(state, emit)} type="button" aria-pressed="false">
          ${state.isDark ? 'Not Dark mode' : 'Dark mode'}
        </button>
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
