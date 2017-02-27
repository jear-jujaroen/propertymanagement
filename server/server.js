'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

// for development //
const morgan = require('morgan')
// give us colorful status codes for our API responses
app.use(morgan('dev'))

// to make parsing requests easier ///
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

const router = express.Router()

app.use(express.static(path.join(__dirname, '../public')))

const port = process.env.PORT || 3030

// app.get('/', function (req, res) {
//   res.send('Welcome to PropertyManagement')
// })

app.listen(port)
console.log('running on http://localhost:' + port)
