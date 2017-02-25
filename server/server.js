'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// to make parsing requests easier //
// this middleware allows us to parse the body as json and make it accessible from req.body property
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/', function (req, res, next) {
  console.log('testing req.body is', req.body.color)
  next()
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('running on http://localhost:' + port)
})
