const { auth } = require("../utils/auth")
const router = require('express').Router()
const { createRoom, getRooms, updateRoom } = require('../controllers/room.controller')

router.route('/create').post(createRoom)
router.route('/update').put(updateRoom)
router.route('/get').get(getRooms)

module.exports = router
