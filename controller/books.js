const Books = require('../models/books')
module.exports.getAll = async function (req, res){
    try{
        const books = await Books.find({})
        console.log(books);
        res.status(200).json(books)
    }
    catch(e){
        console.log(e);
    }
}