const { Router } = require('express')
const { session } = require('passport')
const router = Router()
const passport = require('passport')
const controller = require('../controller/grades')

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.get('/:bookId', controller.getBook)
router.get('/user', passport.authenticate('jwt', {session: false}), controller.getUserGrade)
router.get('/best', controller.getBestBook)

module.exports = router