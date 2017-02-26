'use strict'

const express = require('express')
const router = express.Router()

// POST /apartments/:aID/tenants
// Route for creating a tenant
router.post('/:aID/tenants', function (req, res) {
  res.json({
    response: 'POST Testing /tenants route',
    apartmentId: req.params.aID,
    body: req.body
  })
})

// PUT /apartments/:aID/tenants/:tID
// Edit a specific tenant
router.put('/:aID/tenants/:tID', function (req, res) {
  res.json({
    response: 'PUT Testing /tenants route',
    apartmentId: req.params.aID,
    tenantId: req.params.tID,
    body: req.body
  })
})

// DELETE /apartments/:aID/tenants/:tID
// Delete a specific tenant
router.delete('/:aID/tenants/:tID', function (req, res) {
  res.json({
    response: 'DELETE Testing /tenants route',
    apartmentId: req.params.aID,
    tenantId: req.params.tID
  })
})

module.exports = router
