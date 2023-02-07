const { Router } = require('express')
const { session } = require('passport')
const router = Router()
const passport = require('passport')
const controller = require('../controller/users')

router.get('/personal', passport.authenticate('jwt', {session: false}), controller.getPersonal)
router.post('/', passport.authenticate('jwt', {session: false}),controller.addBook)
router.post('/delete', passport.authenticate('jwt', {session: false}),controller.deleteBook)

router.get('/books/:bookId', passport.authenticate('jwt', {session: false}), controller.checkBook)

router.post('/booksLike', passport.authenticate('jwt', {session: false}),controller.addLikeBook)
router.post('/booksLike/delete', passport.authenticate('jwt', {session: false}),controller.deleteLikeBook)

router.get('/booksLike/:bookId', passport.authenticate('jwt', {session: false}), controller.checkLikeBook)

module.exports = router