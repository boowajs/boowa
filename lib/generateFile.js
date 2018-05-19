const mkdirp = require('mkdirp')
const getDirName = require('path').dirname
const fs = require('fs')
const log = require('../log')

module.exports = (file, tmpl) => {
  let cwd = process.cwd()
  let dest = `${cwd}/${file}`

  return new Promise((resolve, reject) => {
    fs.access(getDirName(dest), err => {
      if (err) {
        mkdirp(getDirName(dest), err => {
          if (err) {
            reject()
            log.error(err)
          } else {
            writeFile()
          }
        })
      } else {
        writeFile()
      }
    })

    function writeFile() {

      fs.writeFile(dest, tmpl, 'utf8', err => {
        if (err) {
          reject()
          log.error(err)
        } else {
          log.info(`file: ${file} generated.`)
          resolve()
        }
      })
    }
  })
}
