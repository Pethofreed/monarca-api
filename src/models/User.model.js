const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
}, {
  timestamps: true
})

const User = model('User', UserSchema)

module.exports = User
