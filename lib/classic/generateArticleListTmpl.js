const endent = require('endent')

module.exports = site => {
  let mdFiles = site.files.filter(file => file.metadata)
  let tmpl = ``

  mdFiles.forEach((p, i) => {
    let newline = i === mdFiles.length - 1 ? '' : '\n'
    tmpl += `<li><a href='./#articles/${p.history[2].replace('.html', '')}'>${p.metadata.title} <mark>${p.metadata.date}</mark></a></li>` + newline
  })

  return endent`
    module.exports = state => \`
      ${tmpl}
    \`
  `
}
