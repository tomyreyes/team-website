exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return Promise.all([
        knex('users').insert({
          email: 'batman@gmail.com',
          password: 'secret'
        }),
        knex('users').insert({
          email: 'superman@justiceleague.com',
          password: 'secret'
        })
      ])
    })
}
