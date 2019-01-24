const User = require('../db/models/user')
const Profile = require('../db/models/profile')
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

exports.createUserAndProfile = (email, hash) => {
  const newUser = new User({
    email: email,
    password: hash
  })
  return newUser.save().then(user => {
    const newProfile = new Profile({
      user_id: user.get('id')
    })
    return newProfile.save().then(profile => {
      return profile
    })
  })
}
