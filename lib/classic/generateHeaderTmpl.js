var endent = require('endent')
var defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (config) => {
  var config = config ? config : defaultConfig
  var subtmpl = ``

  for (var key in config.links) {
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
