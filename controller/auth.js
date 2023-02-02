const bcrypt = require('bcryptjs');
const Users = require('../models/users');
module.exports.auth = async function (req, res){
        const candidate = await Users.findOne({email:req.body.email});
        if(candidate){
            res.status(409).json({
                message:'Пользователь с таким email уже существует'
            })
        } else{
            const salt = bcrypt.genSaltSync(10);
            const password = req.body.password;
            const user = new Users({
                email:req.body.email,
                password:bcrypt.hashSync(password, salt),
                name: req.body.name,
                books:[]
            })

            try{
                await user.save()
                res.status(200).json(user)
            }catch(e){
                console.log(e)
            }
        }


}

module.exports.login = async function (req, res){
    try{

    }
    catch(e){
        console.log(e);
    }
}