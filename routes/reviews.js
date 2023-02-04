const { Router } = require('express')
const router = Router()
const controller = require('../controller/reviews')

router.post('/', passport.authenticate('jwt', {session: false}), controller.create)
router.delete('/:id', passport.authenticate('jwt', {session: false}), controller.delete)
router.patch('/:id', passport.authenticate('jwt', {session: false}),controller.update)
router.get('/user/:bookId', passport.authenticate('jwt', {session: false}),controller.getReviewUser)
router.get('/:bookId',controller.getBookReviews)
router.get('/last',controller.geReviewsLast)

module.exports = router