const express = require('express')
const login = express.Router()
const axios = require('axios')

login.post('/login', (req, res, next) => {
  res.send({ message: 'Hello World' })
})

module.exports = login
