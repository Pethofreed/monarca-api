const { model, models, Schema } = require('mongoose')

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  available: {
    type: Boolean,
    required: true
  },
  status: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

const Room = model('Room', roomSchema)

module.exports = Room
