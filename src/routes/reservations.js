const { auth } = require("../utils/auth")
const router = require('express').Router()
const {
  getReservations,
  createReservation,
} = require('../controllers/reservation.controller')

router.route('/create').post(createReservation)
router.route('/get').get(getReservations)

module.exports = router
