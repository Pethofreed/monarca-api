const Room = require('../models/Room.model')

module.exports = {
  async createRoom (req, res) {
    try {
      const { name, available, status } = req.body;
      const room = await Room.create({ name, available, status });
      res.status(201).json(room)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async getRooms (req, res) {
    try {
      const rooms = await Room.find()
      res.status(201).json(rooms)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async updateRoom (req, res) {
    try {
      const { body } = req;
      await Room.findByIdAndUpdate(body._id, body, {new:true})

      const rooms = await Room.find()
      res.status(201).json(rooms)
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
