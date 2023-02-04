const Books = require('../models/books')
const errorHandler = require('../utils/errorHandler')
module.exports.getAll = async function (req, res){
    try{
        const books = await Books.find({})
        res.status(200).json(books)
    }
    catch(e){
        errorHandler(res, e)
    }
}
module.exports.getById= async function (req, res){
    try{
        const book = await Books.findById(req.params.id)
        res.status(200).json(book)
    }
    catch(e){
        errorHandler(res, e)
    }
}

module.exports.getBestBook = async (res, req) => {
    try{

    } catch(e){
        errorHandler(res,e)
    }

}