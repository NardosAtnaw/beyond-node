const express = require('express')

const controller = require('../controllers/dashboard')

const router = express.Router()

router.get('/register', controller.getData)
router.post('/register', controller.addCustomer)


module.exports = router