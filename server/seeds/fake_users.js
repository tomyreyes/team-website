exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return Promise.all([
        knex('users').insert({
          email: 'brucewayne@gmail.com',
          password: 'secret'
        }),
        knex('users').insert({
          email: 'clarkkent@gmail.com',
          password: 'secret'
        })
      ])
    })
}
