const User = require('../models/user')

const UsersController = {
  findEmail: email => {
    return new Promise((resolve, reject) => {
      new User()
        .where('email', email)
        .fetch()
        .then(user => {
          resolve(user)
        })
    })
  },

  createUser: (email, hash) => {
    return new Promise((resolve, reject) => {
      const newUser = new User({
        email: email,
        password: hash
      })
      newUser.save().then(user => resolve(user))
    })
  }
}

module.exports = UsersController
