const app = require('./app')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const Books = require('./routes/books')


const PORT = process.env.PORT || 3000

 
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())

app.use(Books)


async function start() {
  try {
    await mongoose.connect(
        'mongodb+srv://admin:1234@cluster0.9dw2jf9.mongodb.net/rs-clone',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    app.listen(PORT, () => {
      console.log('Server has been started...')
    })
  } catch (e) {
    console.log(e)
  }
}

start()