const mongoose = require('mongoose');
const { model, models, Schema } = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const contractSchema = new Schema({
  codeContract: {
    type: Number,
    index: { unique: true, }
  },
  renters: {
    type: Object,
  },
  origin: {
    type: String,
  },
  destiny: {
    type: String,
  },
  country: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  profession: {
    type: String,
  },
  company: {
    type: String,
  },
  nit: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  room: {
    type: String,
  },
  dateOfAdmission: {
    type: Date,
  },
  departureDate: {
    type: Date,
  },
  rate: {
    type: Number,
  },
  baggage: {
    type: Boolean,
  },
  wayToPay: {
    type: String,
  },
  contractStatus: {
    type: String,
  },
}, {
  timestamps: true
})

contractSchema.plugin(AutoIncrement, { codeContract: 'order_seq', inc_field: 'codeContract' });
const Contract = model('Contract', contractSchema)

module.exports = Contract
