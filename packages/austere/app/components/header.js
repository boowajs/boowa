const html = require('choo/html')
const raw = require('choo/html/raw')
const Nanocomponent = require('nanocomponent')
const css = require('sheetify')
const fs = require('fs')
const header = require('../tmpl/header.js')

const prefix = css('./header.scss')
const emojis = ['🐝', '🚂', '👽', '🍅', '🐻', '🎮']
const emoji =  emojis[Math.floor(Math.random()*emojis.length)]
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
            ${raw(header(state))}
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
