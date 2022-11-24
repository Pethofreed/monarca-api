const { auth } = require("../utils/auth")
const router = require('express').Router()
const {
  createContract,
  updateContract,
  finishContract,
  getAllContracts,
  getContracts,
} = require('../controllers/contract.controller')

router.route('/create').post(createContract)
router.route('/update').put(updateContract)
router.route('/finish').put(finishContract)
router.route('/get').get(getContracts)
router.route('/getAll').get(getAllContracts)

module.exports = router
