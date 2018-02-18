var http = require('http')
var serveStatic = require('serve-static')
var finalhandler = require('finalhandler')
var log = require('./log')

module.exports = (port) => {
  var port = port || 8080
  var serve = serveStatic(`${process.cwd()}`)

  var server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res))
  })
  log.info(`HTTP: http://localhost:${port}`)
  server.listen(port)
}
