const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB || 'mongodb://localhost/storytime'

module.exports = { port, dbURI }
