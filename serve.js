const http = require('http')
const serveStatic = require('serve-static')
const finalhandler = require('finalhandler')
const log = require('./log')

module.exports = (port = 8080) => {
  let serve = serveStatic(`${process.cwd()}`)

  let server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
  })
  log.info(`HTTP: http://localhost:${port}`)
  server.listen(port)
}
