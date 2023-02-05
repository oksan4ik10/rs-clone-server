const errorHandler = require('../utils/errorHandler')
const Reviews = require('../models/reviews')
module.exports.create = async (req, res) => {
    try{
        const review = await Reviews.findOne({bookId: req.body.bookId, userId: req.user.id})
        if(review){
            review.text = req.body.text;
            review.date = Date.now()
            await review.save();
            res.status(200).json(review)
        } else{
            const reviewNew = new Reviews({
                bookId: req.body.bookId,
                userId: req.user.id,
                text: req.body.text
            })
            await reviewNew.save()
            res.status(200).json(reviewNew)
        }
     

    } catch(e){
        errorHandler(res,e)
    }

}

module.exports.delete = async (req, res) => {
    try{
        const review = await Reviews.deleteOne({_id: req.params.reviewId})
        if(review.deletedCount === 1) res.status(200).json({
            success: true
        })
        else res.status(404).json({
            success: false,
            "message":"Книга с таким id не найдена"
        })

    } catch(e){
        errorHandler(res,e)
    }

}
module.exports.update = async (req, res) => {
    try{

    } catch(e){
        errorHandler(res,e)
    }

}
module.exports.getReviewUser = async (req, res) => {
    try{

    } catch(e){
        errorHandler(res,e)
    }

}
module.exports.getBookReviews = async (req, res) => {
    try{

    } catch(e){
        errorHandler(res,e)
    }

}
module.exports.geReviewsLast = async (req, res) => {
    try{

    } catch(e){
        errorHandler(res,e)
    }

}
