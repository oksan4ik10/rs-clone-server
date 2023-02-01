const express = require('express')
const booksRoute = require('./routes/books')
const app = express()
app.use('/api/books',booksRoute)

module.exports = app;