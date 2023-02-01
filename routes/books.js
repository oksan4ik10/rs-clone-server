const { Router } = require('express')
const Books = require('../models/books')
const router = Router()
const controller = require('../controller/books')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)

module.exports = router