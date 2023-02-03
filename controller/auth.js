const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Users = require('../models/users');
const config = require('../db/config')
const errorHandler = require('../utils/errorHandler')

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
                errorHandler(e)
            }
        }


}

module.exports.login = async function (req, res){
    try{
        const candidate = await Users.findOne({email: req.body.email});
        if(candidate){
            const passwordRes = bcrypt.compareSync(req.body.password, candidate.password)
            if(passwordRes){
                const token= jwt.sign({
                    userId: candidate._id
                }, config.keys, {expiresIn: 3600});
                res.status(200).json({
                    token: `Bearer ${token}`
                })
            } else{
                res.status(401).json({
                    message: "Пароль не верный. Попробуйте снова"
                })
            }

        } else{
            res.status(404).json({
                message: "Пользователь с таким email не найден"
            })
        }
    }
    catch(e){
        errorHandler(e)
    }
}