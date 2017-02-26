'use strict'

const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Request at /apartments received!')
  next()
})

// GET /apartments
router.get('/', function (req, res) {
  res.json({response: ' GET Testing /apartments route'})
})

// POST /apartments
// Route for creating apartments
router.post('/', function (req, res) {
  res.json({
    response: 'POST Testing /apartments route',
    body: req.body
  })
})

// GET /apartments/:aID
// Route for specific apartments
router.get('/:aID', function (req, res) {
  res.json({response: 'GET Testing /apartments route for id ' + req.params.aID})
})

// PUT /apartments/:aID/
// Edit a specific apartment
router.put('/:aID', function (req, res) {
  res.json({
    response: 'PUT Testing /apartments route',
    apartmentId: req.params.aID,
    body: req.body
  })
})

// DELETE /apartments/:aID/tenants/:tID
// Delete a specific tenant
router.delete('/:aID', function (req, res) {
  res.json({
    response: 'DELETE Testing /apartments route',
    apartmentId: req.params.aID
  })
})

module.exports = router
