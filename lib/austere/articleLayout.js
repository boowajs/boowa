const endent = require('endent')

module.exports = (file, files) => {
  var index = files.indexOf(file)
  var prev = files[index - 1]
  var next = files[index + 1]
  return endent`
    <header>
      <h2>${file.metadata.title}</h2>
      <small>${file.metadata.date} - by <a href='${file.metadata.twitter}'>@${file.metadata.author}</a></small>
    </header>
    <section class='article'>
      ${file.contents}
    </section>
    <footer>
      ${prev ? `<a href='./#articles/${prev.history[2].replace(".html", "")}'>&lt; ${prev.metadata.title}</a>` : ''}
      ${next ? `<a href='./#articles/${next.history[2].replace(".html", "")}'>&gt; ${next.metadata.title}</a>` : ''}
    </footer>
  `
}
