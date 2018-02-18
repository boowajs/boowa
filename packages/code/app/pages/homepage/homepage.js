var html = require('choo/html')
var raw = require('choo/html/raw')
var Nanocomponent = require('nanocomponent')
var css = require('sheetify')
var fs = require('fs')
var tmpl = fs.readFileSync('./app/tmpl/homepage.html', 'utf8')

css('./homepage.scss')

class Component extends Nanocomponent {
  constructor () {
    super()
  }

  createElement (state, emit) {
    return html`
      <pre class='language-javascript homepage-pre'>
        <div class="avatar"></div>
        <code class='language-javascript'>
          ${raw(tmpl)}
        </code>
      </pre>
    `
  }

  update () {
    return false
  }
}
module.exports = new Component()
