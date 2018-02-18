var pino = require('pino')
var pinoColada = require('pino-colada')
var pumpify = require('pumpify')

module.exports = pino(pumpify(pinoColada(), process.stdout))
