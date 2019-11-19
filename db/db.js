const mongoose = require('mongoose')
const connectionURL = 'mongodb+srv://admin:rojo4321@prueba-pheff.mongodb.net/lab7?retryWrites=true&w=majority'

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,     // crear indexes
  useUnifiedTopology: true,
  useFindAndModify: false
})







