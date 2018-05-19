const exec = require('child_process').exec
const log = require('../log')

const pkgs = [
  'bankai',
  'brfs',
  'choo',
  'endent',
  'detect-indent',
  'github-markdown-css',
  'nanocomponent',
  'prismjs',
  'sheetify',
  'sheetify-sass'
]

const installPkgs = pkgs.map(pkg => {
  return () => {
    let cmd = `npm install --save --cache-min Infinity --loglevel error ${pkg}`

    exec(cmd, err => {
      log.info(`pkg: ${pkg} installed.`)
      return Promise.resolve(pkg)
    })
  }
})

module.exports = () => new Promise(async (resolve, reject) => {
  log.warn('Installing packages, this might take a couple of minutes.')
  await installPkgs.reduce((p, fn) => {
    return p = p.then(fn)
  }, Promise.resolve())
  resolve()
})
