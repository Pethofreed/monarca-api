const mongoose = require('mongoose');
const { model, models, Schema } = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const reservationSchema = new Schema({
  codeReservation: {
    type: Number,
    index: { unique: true, }
  },
  room: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  observations: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  reservationDate: {
    type: Date,
    required: true,
  },
}, {
  timestamps: true
})

reservationSchema.plugin(AutoIncrement, { codeReservation: 'order_seq', inc_field: 'codeReservation' });
const Reservation = model('Reservation', reservationSchema)

module.exports = Reservation