var endent = require('endent')

module.exports = (file, files) => endent`
  <header>
    <h2>${file.metadata.title}</h2>
    <small>${file.metadata.date}</small>
  </header>
  <section class='article'>
    ${file.contents}
  </section>
`
