const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

const router = require('./config/router')
const { port, dbURI } = require('./config/environment')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))

// app.use('/api', router)

app.listen(port, () => console.log(`App is listening on port ${port}`))

// new code here
// app.use(express.static(`${__dirname}/dist`))


// app.listen(port, () => console.log(`app is listening on port ${port}`))
