var endent = require('endent')

module.exports = site => {
  var mdFiles = site.files.filter(file => file.metadata)
  var tmpl = ``

  mdFiles.forEach((p, i) => {
    var newline = i === mdFiles.length - 1 ? '' : '\n'
    tmpl += `<li><a href='./#articles/${p.history[2].replace(".html", "")}'>${p.metadata.title} <mark>${p.metadata.date}</mark></a></li>` + newline
  })

  return endent`
    module.exports = state => \`
      ${tmpl}
    \`
  `
}
