var test = require('tape')
var endent = require('endent')
var file = require('./fixtures/file')
var articleLayout = require('../../lib/code/articleLayout')

module.exports = () => {
  test('code articleLayout', t => {
    t.plan(1)
    t.equal(endent`
      <header>
        <h1>
          A title
        </h1>
      </header>
      <header>
        <span class='author'>
          <span class='gray'>By</span>
          <a rel="author" href="https://github.com/ZhouHansen">Zhou Hancheng</a>
        </span>
        <span class='reading-time gray'>
          xx min read
        </span>
      </header>
      <section class='article'>
        some contents
      </section>
    `, articleLayout(file))
  })
}
