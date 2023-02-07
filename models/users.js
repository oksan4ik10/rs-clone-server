const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique:true
      },
    password: {
        type: String,
        required: true
      },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "./images/avatar.jpg"
    },
    books:[
       
    ]
})
module.exports = model('users', UserSchema)
