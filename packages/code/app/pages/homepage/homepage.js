const html = require('choo/html')
const raw = require('choo/html/raw')
const Nanocomponent = require('nanocomponent')
const css = require('sheetify')
const articleList = require('../../tmpl/articleList.js')
const header = require('../../tmpl/header.js')

css('./homepage.scss')

class Component extends Nanocomponent {
  createElement (state, emit) {
    return html`
      <pre class='language-javascript homepage-pre'>
        <div class="avatar">
          ${raw(header(state))}
        </div>
        <code class='language-javascript'>
          ${raw(articleList(state))}
        </code>
      </pre>
    `
  }

  update () {
    return false
  }
}
module.exports = new Component()
