require('dotenv').config()
const cors = require('cors')
const morgan = require('morgan')
const { connect } = require('./db')
const express = require('express')
const RoomRouer = require('./routes/room')
const UserRouter = require('./routes/user')
const ContractRouter = require('./routes/contract')
const ReservationRouter = require('./routes/reservations')

const port = process.env.PORT || 8000
const app = express()
connect()

app.use(express.json())
app.use(cors({
  origin: "*",
  methods: "GET,POST,PUT",

}))
app.use(morgan('dev'))

app.get('/', (req,res) => {
  res.status(200).json({ message: 'Hi hotel-app, welcome.'})
})

app.use('/rooms', RoomRouer)
app.use('/user', UserRouter)
app.use('/contracts', ContractRouter)
app.use('/reservations', ReservationRouter)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})
