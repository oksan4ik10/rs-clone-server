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
        default: "https://www.murrayglass.com/wp-content/uploads/2020/10/avatar-scaled.jpeg"
    },
    books:[
       
    ]
})
module.exports = model('users', UserSchema)
