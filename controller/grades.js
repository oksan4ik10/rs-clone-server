const Users = require('../models/users')
const Grades = require('../models/grades')

module.exports.postGrade = async function (req, res){
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
        console.log(e);
    }
}