const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },

})

module.exports = model('book', bookSchema)