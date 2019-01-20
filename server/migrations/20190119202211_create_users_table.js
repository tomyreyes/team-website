exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table
      .increments('id')
      .unsigned()
      .primary()
    table
      .string('email')
      .unique()
      .notNull()
    table.string('password').notNull()
    table.dateTime('created_at', 6).defaultTo(knex.fn.now(6))
    table.dateTime('updated_at', 6).nullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
