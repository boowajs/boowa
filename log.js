const pino = require('pino')
const pinoColada = require('pino-colada')
const pumpify = require('pumpify')

module.exports = pino(pumpify(pinoColada(), process.stdout))
