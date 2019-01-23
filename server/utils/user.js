const User = require('../db/models/user')

exports.findEmail = email => {
  return new Promise((resolve, reject) => {
    new User()
      .where('email', email)
      .fetch()
      .then(user => {
        resolve(user)
      })
  })
}
