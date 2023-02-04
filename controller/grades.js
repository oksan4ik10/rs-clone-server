const Users = require('../models/users')
const Grades = require('../models/grades')
const errorHandler = require('../utils/errorHandler')

module.exports.create = async function (req, res){
    try{
        const grade = await Grades.findOne({bookId: req.body.bookId, userId: req.user.id})
        if(grade){
            grade.value = req.body.value;
            await grade.save();
            res.status(200).json(grade)
        } else{
            const gradeNew = new Grades({
                bookId: req.body.bookId,
                userId: req.user.id,
                value: req.body.value
            })
            await gradeNew.save()
            res.status(200).json(gradeNew)
        }
    }
    catch(e){
        errorHandler(res,e)
    }
}

module.exports.getBook = async (req, res) => {
    try{

        const books = await Grades.find({
            bookId: req.params.bookId
        })
        const grade = books.reduce((prev,next)=>prev+next.value, 0) / books.length;
        console.log(grade);
        res.status(200).json({
            raiting: grade
        })

    } catch(e){
       errorHandler(res,e)
    }

}
module.exports.getUserGrade = async (req, res) => {
    try{

    } catch(e){
        errorHandler(res,e)
    }

}

module.exports.getBestBook = async (res, req) => {
    try{

    } catch(e){
        errorHandler(res,e)
    }

}