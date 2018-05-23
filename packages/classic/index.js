const css = require('sheetify')
const choo = require('choo')
const html = require('choo/html')
const homePage = require('./app/pages/homepage/homepage')
const article = require('./app/pages/article/article')
const header = require('./app/components/header')

css('./app/styles/global.scss')
css('github-markdown-css')
css('prismjs')

const TITLE = 'boowa-blog'

const app = choo()

const renderhomepage = (state, emit) => {
  emit(state.events.DOMTITLECHANGE, TITLE)
  state.isArticle = false
  return html`
    <body class='${state.isDark ? 'isDark' : ''}'>
      ${header.render(state, emit)}
      <main class='homepage'>
        ${homePage.render(state, emit)}
      </main>
    </body>
  `
}
const renderarticle = (state, emit) => {
  state.isArticle = true
  return html`
    <body class='${state.isDark ? 'isDark' : ''}'>
      ${header.render(state, emit)}
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
