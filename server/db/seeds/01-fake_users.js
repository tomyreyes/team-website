const bcrypt = require('bcrypt')

exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return Promise.all([
        knex('users').insert({
          email: 'batman@gmail.com',
          password: bcrypt.hashSync(process.env.USER_SEED_PASSWORD, 10)
        }),
        knex('users').insert({
          email: 'superman@justiceleague.com',
          password: bcrypt.hashSync(process.env.USER_SEED_PASSWORD, 10)
        })
      ])
    })
}
