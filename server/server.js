/*
'use strict'

const express = require('express')
const app = express()
const path = require('path')

// For hot reloading
const webpack = require('webpack')
const config = require('../webpack.config')
const compiler = webpack(config)
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

// middleware
const bodyParser = require('body-parser')
const morgan = require('morgan')

// middleware to make parsing requests easier //
// this middleware allows us to parse the body as json and make it accessible from req.body property
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// middleware for development
app.use(morgan('dev'))

// serve hot-reloading bundle to client
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

// serve up index.html
// app.use(express.static(path.resolve(__dirname, '../index.html')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../index.html'))
})

// ROUTES //
const router = express.Router()

// middleware for every request //
router.use((req, res, next) => {
  console.log('Every request goes through here!')
  next()
})

const apartmentsRoutes = require('./routes/apartmentsRoutes')

app.use('/apartments', apartmentsRoutes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('not found')
  err.status(404)
  next(err)
})

// Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.json({
    error: {
      message: err.message
    }
  })
})

const port = process.env.PORT || 3000

app.listen(port, function () {
  console.log('running on http://localhost:' + port)
})
*/

const open = require('open')
// import favicon from 'serve-favicon'
const express = require('express')
const webpack = require('webpack')
const path = require('path')
const config = require('../webpack.config')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

/* eslint-disable no-console */

const port = process.env.PORT || 3000
const app = express()
const compiler = webpack(config)

// Serve hot-reloading bundle to client
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))
// app.use(favicon(path.join(__dirname, 'assets', 'public', 'favicon.ico')))

// middleware
const bodyParser = require('body-parser')
const morgan = require('morgan')

// middleware to make parsing requests easier //
// this middleware allows us to parse the body as json and make it accessible from req.body property
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

// middleware for development
app.use(morgan('dev'))

// looks for 'index.html' in '/../build' by default //
app.use(express.static(path.join(__dirname, '/../dist')))

// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../index.html'))
// })

// redirect gets to root if address not found //
app.get('*', (req, res) => {
  res.redirect('/')
})

// ROUTES //
const router = express.Router()

// middleware for every request //
router.use((req, res, next) => {
  console.log('Every request goes through here!')
  next()
})

const apartmentsRoutes = require('./routes/apartmentsRoutes')

app.use('/apartments', apartmentsRoutes)

app.listen(port, function () {
  console.log('running on http://localhost:' + port)
})

// app.listen(port, function (err) {
//   if (err) {
//     console.log(err)
//   } else {
//     open(`http://localhost:${port}`)
//   }
// })
