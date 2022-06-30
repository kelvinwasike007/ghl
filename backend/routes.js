const express = require('express')

const router = new express.Router()

const accountController = require('./controllers/accountController')

router.post('/account', accountController.add)
router.post('/login', accountController.login)

module.exports = router