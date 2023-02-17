const { Router } = require('express')
const router = Router()
const controller = require('../controller/auth')

router.post('/login', controller.login)
router.post('/auth', controller.auth)

router.put('/forgetpassword', controller.forget)

module.exports = router