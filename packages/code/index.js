var css = require('sheetify')
var choo = require('choo')
var html = require('choo/html')
var homePage = require('./app/pages/homepage/homepage.js')
var article = require('./app/pages/article/article.js')

css('./app/styles/global.scss')
css('github-markdown-css')
css('prismjs')

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator && navigator.onLine) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }).catch(err => {
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}

const TITLE = 'boowa-blog'

var app = choo()

var renderhomepage = (state, emit) => {
  emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <main class='homepage'>
        ${ homePage.render(state, emit) }
      </main>
    </body>
  `
}
var renderarticle = (state, emit) => {
  return html`
    <body>
      <main class='article'>
        ${ article.render(state, emit) }
      </main>
    </body>
  `
}

app.route('/', renderhomepage)
app.route('/articles/:article', renderarticle)
app.mount('body')
