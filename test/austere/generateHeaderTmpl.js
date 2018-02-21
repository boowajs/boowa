var test = require('tape')
var endent = require('endent')
var generateHeaderTmpl = require('../../lib/austere/generateHeaderTmpl')

module.exports = () => {
  var config = {
    fullName: 'your fullname'
  }
  test('austere generateHeaderTmpl', t => {
    t.plan(1)

    t.equal(endent`
      module.exports = state => \`
        <span>your fullname</span>
      \`
    `, generateHeaderTmpl(config))
  })
}
