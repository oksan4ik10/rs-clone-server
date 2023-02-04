const { Router } = require('express')
const router = Router()
const controller = require('../controller/books')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.get('/best/list', controller.getBestBook)
module.exports = router