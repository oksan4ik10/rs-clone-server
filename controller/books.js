const Books = require('../models/books')
module.exports.getAll = async function (req, res){
    try{
        const books = await Books.find({})
        res.status(200).json(books)
    }
    catch(e){
        console.log(e);
    }
}
module.exports.getById= async function (req, res){
    try{
        const book = await Books.findById(req.params.id)
        res.status(200).json(book)
    }
    catch(e){
        console.log(e);
    }
}