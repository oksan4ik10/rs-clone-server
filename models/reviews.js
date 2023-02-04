const { Schema, model } = require('mongoose')

const ReviewSchema = new Schema ({
    bookId:{
        ref:'books',
        type: Schema.Types.ObjectId,
        required: true       
    },
    userId:{
        ref:'users',
        type: Schema.Types.ObjectId,
        required: true       
    },
    text: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    }

})

module.exports = model('reviews', ReviewSchema)
