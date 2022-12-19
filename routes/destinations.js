const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')

router.get('/new', destinationsCtrl.new)
router.post('/', destinationsCtrl.create)
router.post('/flights/:id/destinations', destinationsCtrl.addToList)

module.exports = router