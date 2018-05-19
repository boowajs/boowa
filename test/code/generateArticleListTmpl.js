var test = require('tape')
var endent = require('endent')
var site = require('./fixtures/site')
var generateArticleListTmpl = require('../../lib/code/generateArticleListTmpl')

module.exports = () => {
  test('code generateArticleListTmpl', t => {
    t.plan(1)

    t.equal(endent`
      const endent = require('endent')

      module.exports = () => endent\`
        <span class="token comment">
        /**
         * Nice to meet you!
         */</span>
        <span class="token keyword">var</span> yourname <span class="token operator">=</span><span class="token punctuation"> {</span>
          fullName<span class="token punctuation">:</span><span class="token string"> 'your fullname'</span><span class="token punctuation">,</span><span class="token comment"> // </span><a class="token md-link" href="https://github.com/">@yourname</a>
          skills<span class="token punctuation">:</span><span class="token string"> '/your skills/'</span><span class="token punctuation">,</span><span class="token comment"> // your hobbies</span>
          city<span class="token punctuation">:</span><span class="token string"> 'China, Nanjing'</span><span class="token comment"> // from China, Anhui</span>
        <span class="token punctuation">}</span>
        <span class="token comment">
        /**
         * Here are my latest projects or contributions.
         */</span>
        yourname<span class="token punctuation">.</span>projects <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token string">"<a class="token md-link" href="https://github.com/choojs/choo">choo</a>"</span><span class="token punctuation">,</span>
          <span class="token string">"<a class="token md-link" href="https://github.com/choojs/bankai">bankai</a>"</span>
        <span class="token punctuation">]</span>
        <span class="token comment">
        /**
         * Here are my articles.
         */</span>
        yourname<span class="token punctuation">.</span>articles <span class="token operator">=</span> <span class="token punctuation">[</span>
          <span class="token string">"<a class="token md-link" href="./#articles/sheetify_document">sheetify document</a>"</span>
        <span class="token punctuation">]</span>

        console.log(yourname)
      \`
    `, generateArticleListTmpl(site))
  })
}
