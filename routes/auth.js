const { Router } = require('express')
const Books = require('../models/users')
const router = Router()
const controller = require('../controller/auth')

router.post('/login', controller.login)
router.post('/auth', controller.auth)

module.exports = router