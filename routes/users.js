const { Router } = require('express')
const router = Router()
const controller = require('../controller/users')

router.get('/personal', controller.getPersonal)
router.post('/', controller.addBook)

module.exports = router