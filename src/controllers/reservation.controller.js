const Reservation = require('../models/Reservation.model')

module.exports = {
  async createReservation (req, res) {
    try {
      const { body } = req;
      await Reservation.create(body);
      const reservations = await Reservation.find({ status: 'active' })

      res.status(201).json(reservations)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async getReservations (req, res) {
    try {
      const reservations = await Reservation.find({ status: 'active' })
      res.status(201).json(reservations)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  // async getAllContracts (req, res) {
  //   try {
  //     const contracts = await Contract.find()
  //     res.status(201).json(contracts)
  //   } catch (error) {
  //     res.status(400).json({ error })
  //   }
  // },
  // async updateContract (req, res) {
  //   try {
  //     const { body } = req;
  //     await Contract.findByIdAndUpdate(body._id, body, {new:true})

  //     const rooms = await Room.find()
  //     res.status(201).json(rooms)
  //   } catch (error) {
  //     res.status(400).json({ error })
  //   }
  // },
  // async finishContract (req, res) {
  //   try {
  //     const { body } = req;
  //     await Contract.findByIdAndUpdate(body._id, body, {new:true})
  //     await Room.findByIdAndUpdate(
  //       body.roomId,
  //       { status: 'cleaning' },
  //       {new: true}
  //     )

  //     const contracts = await Contract.find()
  //     res.status(201).json(contracts)
  //   } catch (error) {
  //     res.status(400).json({ error })
  //   }
  // },
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
