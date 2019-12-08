const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/storytime'
// Use heroku addons:docs mongolab to view documentation
module.exports = { port, dbURI }
