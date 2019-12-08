const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const logger = require('./lib/logger')
const errorHandler = require('./lib/errorHandler')
const router = require('./config/router')

const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())

app.use('/api', router)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

app.use(errorHandler)

app.use(logger)

app.listen(port, () => console.log(`App is listening on port ${port}`))

module.exports = app