var test = require('tape')
var endent = require('endent')
var generateArticleListTmpl = require('../../lib/austere/generateArticleListTmpl')

module.exports = () => {
  var site = {
    files: [
      {
        history: ['', '', 'nice.html'],
        metadata: {
          title: 'A title',
          date: 'Jul 21, 2018'
        }
      },
      {
        history: ['', '', 'sheetify_document.html'],
        metadata: {
          title: 'sheetify',
          date: 'Jul 21, 2017'
        }
      }
    ]
  }
  var config = {
    'homepageList': {
      'Social~*': [
        "<mark><a href='https://github.com/ZhouHansen'>Github</a></mark>, <mark><a href='https://user.qzone.qq.com/308114274/main'>qq</a></mark>",
        'Email is <mark>z308114274@gmail.com</mark>'
      ],
      'Fun facts': [
        'From China Anhui',
        'fan of stendhal'
      ]
    }
  }
  test('austere generateArticleListTmpl', t => {
    t.plan(1)

    t.equal(endent`
      module.exports = state => \`
        <li>
          <h2>Social~*</h2>
          <ul>
            <li><span><mark><a href='https://github.com/ZhouHansen'>Github</a></mark>, <mark><a href='https://user.qzone.qq.com/308114274/main'>qq</a></mark></span></li>
            <li><span>Email is <mark>z308114274@gmail.com</mark></span></li>
          </ul>
        </li>
        <li>
          <h2>Fun facts</h2>
          <ul>
            <li><span>From China Anhui</span></li>
            <li><span>fan of stendhal</span></li>
          </ul>
        </li>
        <li>
          <h2>Posts</h2>
          <ul>
            <li><span><a href='./#articles/nice'>A title</a> Jul 21, 2018</span></li>
            <li><span><a href='./#articles/sheetify_document'>sheetify</a> Jul 21, 2017</span></li>
          </ul>
        </li>
      \`
    `, generateArticleListTmpl(site, config))
  })
}
