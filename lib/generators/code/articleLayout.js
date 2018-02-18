var endent = require('endent')

module.exports = (file, files) => endent`
  <header>
    <h1>
      ${file.metadata.title}
    </h1>
  </header>
  <header>
    <span class='author'>
      <span class='gray'>By</span>
      <a rel="author" href="https://github.com/ZhouHansen">Zhou Hancheng</a>
    </span>
    <span class='reading-time gray'>
      ${file.metadata.readingTime}
    </span>
  </header>
  <section class='article'>
    ${file.contents}
  </section>
`
