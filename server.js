const app = require('./app')
const mongoose = require('mongoose')

const path = require('path')



const PORT = process.env.PORT || 3000

 




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