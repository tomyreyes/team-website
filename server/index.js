const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const morgan = require('morgan')
const PORT = process.env.PORT || 8080
const userRoute = require('./routes/user')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`)
})
