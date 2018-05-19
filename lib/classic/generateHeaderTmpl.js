const endent = require('endent')
const defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (config = defaultConfig) => {
  let subtmpl = ``

  for (let key in config.links) {
    subtmpl += `<a href="${config.links[key]}">${key} </a>\n`
  }

  return endent`
    module.exports = state => \`
      <nav>
        ${subtmpl}
        <a class="cta" href="/">Blog </a>
      </nav>
      ${'${'}!state.isArticle ? \`
        <div class='header-wrap'>
          <img src='${config.avatar}' />
          <h1>${config.name}</h1>
          <p>${config.description}</p>
        </div>
      \` : \`\`${'}'}
    \`
  `
}
