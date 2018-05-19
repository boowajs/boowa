const endent = require('endent')

module.exports = site => {
  let insertScript = `\n`
  let insertTitleObject = `var titleObject = {`
  let mdFiles = site.files.filter(file => file.metadata)

  mdFiles.forEach((file, i) => {
    let fileName = file.history[2]

    if (i !== mdFiles.length - 1) {
      insertTitleObject += `\n  ${fileName.replace('.html', '')}: '${file.metadata.title}',`
    } else {
      insertTitleObject += `\n  ${fileName.replace('.html', '')}: '${file.metadata.title}'\n}\n`
    }

    if (fileName !== fileName.replace('.html', '')) {
      insertScript += `var ${fileName.replace('.html', '')} = fs.readFileSync('./app/articles/${fileName}', 'utf8')\n`
    }
  })

  return endent`
    var html = require('choo/html')
    var raw = require('choo/html/raw')
    var Nanocomponent = require('nanocomponent')
    var css = require('sheetify')
    var fs = require('fs')
    ${insertScript}
    ${insertTitleObject}
    css('./article.scss')

    class Component extends Nanocomponent {
      constructor () {
        super()
      }

      createElement (state, emit) {
        var article = state.params.article

        emit(state.events.DOMTITLECHANGE, titleObject[article])

        return html\`
          <article class='boowa-article'>
            ${"${raw(eval(article))}"}
          </article>
        \`
      }

      update () {
        return true
      }
    }
    module.exports = new Component()
  `
}
