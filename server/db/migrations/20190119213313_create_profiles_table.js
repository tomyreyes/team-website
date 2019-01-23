exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function(table) {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.string('name').nullable()
    table.string('email').nullable()
    table.string('bio').nullable()
    table
      .integer('user_id')
      .unique()
      .references('users.id')
    table.dateTime('created_at', 6).defaultTo(knex.fn.now(6))
    table.dateTime('updated_at', 6).nullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profiles')
}
