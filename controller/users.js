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
        
        const user = await Users.updateOne(
            {_id: req.user.id},
            {$addToSet: { books: req.body.bookId}}
        )
        res.status(200).json({
            modifiedCount: user.modifiedCount
        })
    } catch(e){
        errorHandler(res,e)
    }

}