const endent = require('endent')
const defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (site, config = defaultConfig) => {
  let mdFiles = site.files.filter(file => file.metadata)

  let tmpl = ``

  for (let key in config.homepageList) {
    tmpl += endent`
      <li>
        <h2>${key}</h2>
        <ul>
          ${config.homepageList[key].reduce((str, p, i) => {
    let newline = i === config.homepageList[key].length - 1 ? '' : '\n'
    let substr = `<li><span>${p}</span></li>` + newline
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
    let newline = i === mdFiles.length - 1 ? '' : '\n'
    let substr = `<li><span><a href='./#articles/${p.history[2].replace('.html', '')}'>${p.metadata.title}</a> ${p.metadata.date}</span></li>` + newline
    return str + substr
  }, ``)}
      </ul>
    </li>
  `

  return endent`
    module.exports = state => \`
      ${tmpl}
    \`
  `
}
