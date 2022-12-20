const express = require('express')
const router = express.Router()
const ticketsCtrl = require('../controllers/tickets')

// You Do - Define the Route below
router.post('/flights/:id/tickets/new', ticketsCtrl.create)

module.exports = router