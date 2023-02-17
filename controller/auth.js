const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Users = require('../models/users');
const config = require('../db/config')
const errorHandler = require('../utils/errorHandler')
const nodemailer = require('nodemailer');

module.exports.login = async function (req, res){
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
                errorHandler(res, e)
            }
        }


}

module.exports.auth = async function (req, res){
    try{
        const candidate = await Users.findOne({email: req.body.email});
        if(candidate){
            const passwordRes = bcrypt.compareSync(req.body.password, candidate.password)
            if(passwordRes){
                const token= jwt.sign({
                    userId: candidate._id
                }, config.keys, {expiresIn: 60*60*24*365});
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
        errorHandler(res, e)
    }
}

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
        user: 'ilovehamster@mail.ru',
        pass: 'FEXMkJKA0hHfcske2xty'
    }
});

module.exports.forget = async (req, res) => {
    try{
        const {email} = req.body;
        const candidate = await Users.findOne({email: req.body.email});
        if(candidate){
            console.log(email);
            const msg = {
                from: '"The Exapress App" <theExpressApp@example.com>', // sender address
                to: `${email}`, // list of receivers
                subject: "Sup", // Subject line
                text: "Long time no see", // plain text body,
                html:`<b>Ehuuu</b>`
            }
            // send mail with defined transport object
            const info = await transporter.sendMail(msg);
        
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            
            res.send('Email Sent!')

        } else{
            res.status(404).json({
                message: "Пользователь с таким email не найден"
            })
        }
    }
    catch(e){
        errorHandler(res, e)
    }
}