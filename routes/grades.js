const { Router } = require('express')
const { session } = require('passport')
const router = Router()
const passport = require('passport')
const controller = require('../controller/grades')

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.get('/:bookId', passport.authenticate('jwt', {session: false}), controller.getUserGrade)

module.exports = router