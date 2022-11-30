const jwt = require('jsonwebtoken')
const User = require('../models/User.model')

module.exports = {
  async createUser (req, res) {
    try {
      const { body } = req;
      const user = await User.create(body);
      res.status(201).json(user)
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  async signin(req, res){
    try {
      const { user, password } = req.body

      const data = await User.findOne({ user })

      if(!data){
        throw Error('Usuario o contraseña invalido')
      }

      if(data.password !== password) {
        throw Error('Usuario o contraseña invalido')
      }

      const token = jwt.sign(
        {
          userId: data._id,
        },
        process.env.SECRET,
      )

      res.status(201).json(token)
    } catch(error) {
      res.status(401).json({message: error.message})
    }
  }
}
