const validator = require('validator')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  },
  born: {
    type: String
  },
  timeline: {
    type: String
  },
  alliegance: {
    type: [String]
  },
  father: {
    type: String
  },
  mother: {
    type: String
  },
  spouse: {
    type: String
  }

})

const User = mongoose.model('User', userSchema)

module.exports = User
