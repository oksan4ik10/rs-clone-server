const express = require('express')
const bodyParser = require('body-parser')
const booksRoute = require('./routes/books')
const authRoute = require('./routes/auth')
const gradeRoute = require('./routes/grades')
const userRoute = require('./routes/users')
const reviewRoute = require('./routes/reviews')

const passport = require('passport')
const app = express()

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use('/api/books',booksRoute)
app.use('/api',authRoute)
app.use('/api/grades', gradeRoute)
app.use('/api/users', userRoute)
app.use('/api/reviews', reviewRoute)

module.exports = app;