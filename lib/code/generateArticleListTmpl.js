const endent = require('endent')
const defaultConfig = JSON.parse(require(`./configTmpl.js`))

module.exports = (site, config = defaultConfig) => {
  let personInfoComment = endent`
    <span class="token comment">
    /**
     * Nice to meet you!
     */</span>
  `

  let personInfo = endent`
    <span class="token keyword">var</span> ${config.name} <span class="token operator">=</span><span class="token punctuation"> {</span>
      fullName<span class="token punctuation">:</span><span class="token string"> '${config.fullName}'</span><span class="token punctuation">,</span><span class="token comment"> // </span><a class="token md-link" href="${config.personSite}">@${config.name}</a>
      skills<span class="token punctuation">:</span><span class="token string"> '${config.skills}'</span><span class="token punctuation">,</span><span class="token comment"> // ${config.hobbies}</span>
      city<span class="token punctuation">:</span><span class="token string"> '${config.city}'</span><span class="token comment"> // from ${config.hometown}</span>
    <span class="token punctuation">}</span>
  `

  let projectInfoComment = endent`
    <span class="token comment">
    /**
     * Here are my latest projects or contributions.
     */</span>
  `

  let projects = endent`
    ${config.name}<span class="token punctuation">.</span>projects <span class="token operator">=</span> <span class="token punctuation">[</span>
      ${config.projects.reduce((str, p, i) => {
    let substr
    if (i + 1 < config.projects.length) {
      substr = `<span class="token string">"<a class="token md-link" href="${p[1]}">${p[0]}</a>"</span><span class="token punctuation">,</span>\n`
    } else {
      substr = `<span class="token string">"<a class="token md-link" href="${p[1]}">${p[0]}</a>"</span>`
    }
    return str + substr
  }, ``)}
    <span class="token punctuation">]</span>
  `

  let articleComment = endent`
    <span class="token comment">
    /**
     * Here are my articles.
     */</span>
  `

  let articles = endent`
    ${config.name}<span class="token punctuation">.</span>articles <span class="token operator">=</span> <span class="token punctuation">[</span>
      ${site.files.reduce((str, p, i) => {
    if (p.history[2].replace('.html', '') === p.history[2]) {
      return str + ''
    }

    let substr

    if (i + 1 < site.files.length) {
      substr = `<span class="token string">"<a class="token md-link" href="./#articles/${p.history[2].replace('.html', '')}">${p.metadata.title}</a>"</span><span class="token punctuation">,</span>\n`
    } else {
      substr = `<span class="token string">"<a class="token md-link" href="./#articles/${p.history[2].replace('.html', '')}">${p.metadata.title}</a>"</span>`
    }

    return str + substr
  }, ``)}
    <span class="token punctuation">]</span>
  `

  return endent`
    const endent = require('endent')

    module.exports = () => endent\`
      ${personInfoComment}
      ${personInfo}
      ${projectInfoComment}
      ${projects}
      ${articleComment}
      ${articles}

      console.log(${config.name})
    \`
  `
}
