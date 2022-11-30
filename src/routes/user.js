const { auth } = require("../utils/auth")
const router = require('express').Router()
const { createUser, signin } = require('../controllers/user.controller')

router.route('/create').post(createUser)
router.route('/signin').post(signin)

module.exports = router
