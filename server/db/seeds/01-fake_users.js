exports.seed = function(knex, Promise) {
  return knex('users')
    .del()
    .then(function() {
      return Promise.all([
        knex('users').insert({
          id: 1,
          email: 'batman@gmail.com',
          password: 'secret'
        }),
        knex('users').insert({
          id: 2,
          email: 'superman@justiceleague.com',
          password: 'secret'
        })
      ])
    })
}
