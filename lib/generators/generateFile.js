var mkdirp = require('mkdirp')
var getDirName = require('path').dirname
var fs = require('fs')
var log = require('../../log')

module.exports = (dest, tmpl) => {

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
          resolve()
        }
      })
    }
  })
}
