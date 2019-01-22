const express = require('express')
const login = express.Router()
const UsersController = require('../controllers/usersController')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

login.post('/login', (req, res, next) => {
  UsersController.findEmail(req.body.email)
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'Authentication failed.'
        })
      }
      bcrypt.compare(
        req.body.password,
        user.get('password'),
        (error, result) => {
          if (error) {
            return res.status(401).json({
              message: 'Authentication failed.'
            })
          }
          if (!result) {
            return res.status(401).json({
              message: 'Authentication failed.'
            })
          }
          const token = jwt.sign(
            {
              email: user.get('email'),
              id: user.get('id')
            },
            process.env.JWT_KEY,
            { expiresIn: '1h' }
          )
          return res.status(200).json({
            message: 'Login Succesful!',
            token: token
          })
        }
      )
    })
    .catch(err => {
      res.status(500).json({
        message: err
      })
    })
})

module.exports = login
