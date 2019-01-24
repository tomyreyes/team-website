const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserHelper = require('../utils/user')

exports.signUp = (req, res, next) => {
  UserHelper.findEmail(req.body.email).then(user => {
    if (user) {
      return res
        .status(422)
        .json({ message: 'A User with this email already exists.' })
    }
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({
          error: err
        })
      }
      UserHelper.createUserAndProfile(req.body.email, hash)
        .then(() => {
          return res
            .status(201)
            .json({ message: 'Success, your account has been created!' })
        })
        .catch(err => {
          return res.status(500).json({
            message:
              'An error occurred in making your account. Please Try again.'
          })
        })
    })
  })
}

exports.login = (req, res, next) => {
  UserHelper.findEmail(req.body.email)
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
}
