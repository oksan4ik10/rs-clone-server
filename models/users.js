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
    books:[
        { book:{
            ref:'books',
            type: Schema.Types.ObjectId,
           
        },
        required: false}
       
    ]
})
module.exports = model('users', UserSchema)
