const express = require('express')
const signUp = express.Router()
const bcrypt = require('bcrypt')
const UsersController = require('../controllers/usersController')

signUp.post('/sign-up', (req, res, next) => {
  UsersController.findEmail(req.body.email).then(user => {
    if (user) {
      return res.json({ message: 'A User with this email already exists.' })
    }
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      UsersController.createUser(req.body.email, hash).then(user => {
        return res
          .status(201)
          .json({
            message: 'Success, your account has been created!'
          })
          .catch(err => {
            return res.status(500).json({
              message:
                'An error occurred in making your account. Please Try again.'
            })
          })
      })
    })
  })
})

module.exports = signUp
