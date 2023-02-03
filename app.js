const express = require('express')
const bodyParser = require('body-parser')
const booksRoute = require('./routes/books')
const authRoute = require('./routes/auth')
const passport = require('passport')
const app = express()

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use('/api/books',booksRoute)
app.use('/api',authRoute)


module.exports = app;