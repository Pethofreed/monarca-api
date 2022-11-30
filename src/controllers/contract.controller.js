const Room = require('../models/Room.model')
const Contract = require('../models/Contract.model')

module.exports = {
  async createContract (req, res) {
    try {
      const { body } = req;
      const contract = await Contract.create(body);
      await Room.findByIdAndUpdate(
        body.roomId,
        { status: 'occupied' },
        {new: true}
      )
      res.status(201).json(contract)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async getContracts (req, res) {
    try {
      const contracts = await Contract.find({ contractStatus: 'initiated' })
      res.status(201).json(contracts)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async getAllContracts (req, res) {
    try {
      const contracts = await Contract.find()
      res.status(201).json(contracts)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async updateContract (req, res) {
    try {
      const { body } = req;
      await Contract.findByIdAndUpdate(body._id, body, {new:true})

      const rooms = await Room.find()
      res.status(201).json(rooms)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async finishContract (req, res) {
    try {
      const { body } = req;
      await Contract.findByIdAndUpdate(body._id, body, {new:true})
      await Room.findByIdAndUpdate(
        body.roomId,
        { status: 'cleaning' },
        {new: true}
      )

      const contracts = await Contract.find()
      res.status(201).json(contracts)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // async destroy (req, res) {
  //   try {
  //     const { body, user: { userId } } = req;
  //     await Storage.findByIdAndRemove(body._id)

  //     const storages = await Storage.find({ userId })
  //     res.status(201).json({ storages })
  //   } catch (error) {
  //     res.status(400).json({ error })
  //   }
  // },
}
