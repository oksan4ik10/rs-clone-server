const errorHandler = require('../utils/errorHandler')
const Users = require('../models/users')
module.exports.getPersonal = async (req, res) => {
    try{
        const user = await Users.findOne({_id: req.user.id})
        res.status(200).json(user)

    } catch(e){
        errorHandler(res,e)
    }

}

module.exports.addBook = async (req, res) => {
    try{
        const book = await Users.findOne( {$and: [
            {_id: req.user.id},
            {booksLike:{ $all: req.body.bookId}}]}
        )
        if(book){
            res.status(409).json({
                message:"Книга уже есть в разделе 'Хочу почитать' "
            })
        } else{
            const user = await Users.updateOne(
                {_id: req.user.id},
                {$addToSet: { books: req.body.bookId}}
            )
            res.status(200).json({
                modifiedCount: user.modifiedCount
            })
    }
    } catch(e){
        errorHandler(res,e)
    }

}

module.exports.deleteBook = async (req, res) => {
    try{
        
        const user = await Users.updateOne(
            {_id: req.user.id},
            {$pull: { books: req.body.bookId}}
        )
        res.status(200).json({
            modifiedCount: user.modifiedCount
        })
    } catch(e){
        errorHandler(res,e)
    }

}

module.exports.checkBook = async (req, res) => {
    try{
        
        const user = await Users.findOne( {$and: [
            {_id: req.user.id},
            {books:{ $all: req.params.bookId}}]}
        )
        if(user) res.status(200).json({
            status: true
        })
        else res.status(200).json({
            status: false
        })
    } catch(e){
        errorHandler(res,e)
    }

}

module.exports.addLikeBook = async (req, res) => {
    try{
            const book = await Users.findOne( {$and: [
                {_id: req.user.id},
                {books:{ $all: req.body.bookId}}]}
            )
            if(book){
                res.status(409).json({
                    message:"Книга уже есть в прочитанном"
                })
            } else{
                const user = await Users.updateOne(
                    {_id: req.user.id},
                    {$addToSet: { booksLike: req.body.bookId}}
                    )
                    res.status(200).json({
                    modifiedCount: user.modifiedCount
                })
                res.status(200).json({
                    modifiedCount: res.modifiedCount
                })
            }

        } catch(e){
            console.log(e);
        }


}

module.exports.deleteLikeBook = async (req, res) => {
    try{
        
        const user = await Users.updateOne(
            {_id: req.user.id},
            {$pull: { books: req.body.bookId}}
        )
        res.status(200).json({
            modifiedCount: user.modifiedCount
        })
    } catch(e){
        errorHandler(res,e)
    }

}

module.exports.checkLikeBook = async (req, res) => {
    try{
        
        const user = await Users.findOne( {$and: [
            {_id: req.user.id},
            {books:{ $all: req.params.bookId}}]}
        )
        if(user) res.status(200).json({
            status: true
        })
        else res.status(200).json({
            status: false
        })
    } catch(e){
        errorHandler(res,e)
    }

}