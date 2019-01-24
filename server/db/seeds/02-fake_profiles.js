exports.seed = function(knex, Promise) {
  return knex('profiles')
    .del()
    .then(function() {
      return Promise.all([
        knex('profiles').insert({
          name: 'Batman',
          email: 'batman@justiceleague.com',
          bio: 'I am justice, I am the night.',
          user_id: 1
        }),
        knex('profiles').insert({
          name: 'Superman',
          email: 'superman@justiceleague.com',
          bio: 'I’m here to fight for truth and justice',
          user_id: 2
        })
      ])
    })
}
