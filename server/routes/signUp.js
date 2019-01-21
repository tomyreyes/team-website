const express = require('express')
const signUp = express.Router()
const axios = require('axios')

signUp.post('/sign-up', (req, res, next) => {
  if (!req.body) {
    res.status(404).send({
      error: {
        message: 'No information provided',
        status: 404
      }
    })
  }
  //Expect to receive email and password from the client
  //I first need to check the db if the email already exists.
  //I will then bcrypt password and store to database
})

module.exports = signUp
