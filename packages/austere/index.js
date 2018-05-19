const css = require('sheetify')
const choo = require('choo')
const html = require('choo/html')
const homePage = require('./app/pages/homepage/homepage')
const article = require('./app/pages/article/article')
const header = require('./app/components/header')

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

const app = choo()

const renderhomepage = (state, emit) => {
  emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class='${state.isDark ? "isDark" : ""}'>
      ${ header.render(state, emit) }
      <main class='homepage'>
        ${ homePage.render(state, emit) }
      </main>
    </body>
  `
}
const renderarticle = (state, emit) => {
  return html`
    <body class='${state.isDark ? "isDark" : ""}'>
      ${ header.render(state, emit) }
      <main class='article'>
        ${ article.render(state, emit) }
      </main>
    </body>
  `
}

app.route('/', renderhomepage)
app.route('/articles/:article', renderarticle)
app.mount('body')
