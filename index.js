const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const router = require('./config/router')
const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/dist`))

app.use('/api', router)

app.listen(port, () => console.log(`App is listening on port ${port}`))