const css = require('sheetify')
const choo = require('choo')
const html = require('choo/html')
const homePage = require('./app/pages/homepage/homepage.js')
const article = require('./app/pages/article/article.js')

css('./app/styles/global.scss')
css('github-markdown-css')
css('prismjs')

const TITLE = 'boowa-blog'

const app = choo()

const renderhomepage = (state, emit) => {
  emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <main class='homepage'>
        ${homePage.render(state, emit)}
      </main>
    </body>
  `
}
const renderarticle = (state, emit) => {
  return html`
    <body>
      <main class='article'>
        ${article.render(state, emit)}
      </main>
    </body>
  `
}

if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-service-worker/clear')())
}
app.use(require('choo-service-worker')())
app.route('/', renderhomepage)
app.route('/articles/:article', renderarticle)
app.mount('body')
