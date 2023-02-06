const Users = require('../models/users')
const Grades = require('../models/grades')
const Books = require('../models/books')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res){
    try{
        const gradeUser = await Grades.findOne({bookId: req.body.bookId, userId: req.user.id})
        if(gradeUser){
            gradeUser.value = req.body.value;
            await gradeUser.save();
      
        } else{
            const gradeNew = new Grades({
                bookId: req.body.bookId,
                userId: req.user.id,
                value: req.body.value
            })
            await gradeNew.save()
         
        }
        const books = await Grades.find({
            bookId: req.body.bookId
        })
        const grade = books.reduce((prev,next)=>prev+next.value, 0) / books.length;
        const book = await Books.findOne({bookId: req.body.bookId})
        book.raiting = grade;
        await book.save()
        res.status(200).json(book)


    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getUserGrade = async (req, res) => {
    try{
        const gradeUser = await Grades.findOne({bookId: req.params.bookId, userId: req.body.userId});
        console.log();
        if(gradeUser) res.status(200).json(gradeUser)
        else res.status(404).json({
            "message": "Нет оценки"
        })
    } catch(e){
        errorHandler(res,e)
    }

}

