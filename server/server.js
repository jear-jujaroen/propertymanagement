'use strict'

const express = require('express')

const PORT = 8000

const app = express()
app.get('/', function (req, res) {
  res.send('Welcome to PropertyManagement')
})

app.listen(PORT)
console.log('running on http://localhost:' + PORT)
