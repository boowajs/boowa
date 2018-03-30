#! /usr/bin/env node

var prompt = require('inquirer').createPromptModule()
var fs = require('fs')
var version = require('./package.json').version
var serve = require('./serve')
var log = require('./log')
var action = process.argv[2]

if (!action) {
  fs.access(`${process.cwd()}/.boowatheme`, err => {
    if (!err) {
      var theme = fs.readFileSync(`${process.cwd()}/.boowatheme`, 'utf8').trim()
      require(`./lib`)(theme, true)
    } else {
      log.info('Press ^C at any time to quit.')
      prompt([{
        type: 'list',
        name: 'theme',
        message: 'choose a blog theme',
        choices: [
          'classic',
          'code',
          'austere'
        ]
      }]).then(async anwsers => {
        require(`./lib`)(anwsers.theme)
      })
    }
  })
} else if (action === 'build') {
  var theme = fs.readFileSync(`${process.cwd()}/.boowatheme`, 'utf8').trim()
  require(`./lib/build.js`)(theme)
} else if (action === 'create') {
  var theme = fs.readFileSync(`${process.cwd()}/.boowatheme`, 'utf8').trim()
  var mdName = process.argv[3]
  if (mdName) {
    require(`./lib/create.js`)(mdName, theme)
  } else {
    prompt([{
      type: 'input',
      name: 'mdName',
      message: 'markdown file name'
    }]).then(async anwsers => {
      log.info('Press ^C at any time to quit.')
      require(`./lib/create.js`)(anwsers.mdName, theme)
    })
  }
} else if (action === 'serve') {
  var port = process.argv[3]
  serve(port)
}
