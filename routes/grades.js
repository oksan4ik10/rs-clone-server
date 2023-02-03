const { Router } = require('express')
const { session } = require('passport')
const router = Router()
const passport = require('passport')
const controller = require('../controller/grades')

router.post('/', passport.authenticate('jwt', {session: false}), controller.postGrade)

module.exports = router