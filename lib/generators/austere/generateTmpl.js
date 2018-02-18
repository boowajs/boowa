var endent = require('endent')
var defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (site, config) => {
  var config = config ? config : defaultConfig
  var mdFiles = site.files.filter(file => file.metadata)

  var tmpl = ``

  for (var key in config.homepageList) {
    tmpl += endent`
      <li>
        <h2>${key}</h2>
        <ul>
          ${config.homepageList[key].reduce((str, p, i) => {
            var newline = i === config.homepageList[key].length - 1 ? '' : '\n'
            var substr = `<li><span>${p}</span></li>` + newline
            return str + substr
          }, ``)}
        </ul>
      </li>\n
    `
  }
  tmpl += endent`
    <li>
      <h2>Posts</h2>
      <ul>
        ${mdFiles.reduce((str, p, i) => {
          var newline = i === mdFiles.length - 1 ? '' : '\n'
          var substr = `<li><span><a href='./#articles/${p.history[2].replace(".html", "")}'>${p.metadata.title}</a> ${p.metadata.date}</span></li>` + newline
          return str + substr
        }, ``)}
      </ul>
    </li>
  `

  return tmpl
}
