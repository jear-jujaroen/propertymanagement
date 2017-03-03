'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

// for development //
const morgan = require('morgan')
// give us colorful status codes for our API responses
app.use(morgan('dev'))

// to make parsing requests easier //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// looks for index.html in public folder
app.use(express.static(path.join(__dirname, '../public')))

// ROUTES //
const router = express.Router()

// middleware for every request //
router.use((req, res, next) => {
  console.log('Every request goes through here!')
  next()
})

// modularized routes //
const apartmentRoutes = require('./routes/apartmentRoutes')

app.use('/apartments', apartmentRoutes)

const port = process.env.PORT || 3030

app.listen(port)
console.log('running on http://localhost:' + port)
