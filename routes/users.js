const { Router } = require('express')
const router = Router()
const controller = require('../controller/users')

router.get('/personal', controller.getPersonal)
router.patch('/:id', controller.update)

module.exports = router