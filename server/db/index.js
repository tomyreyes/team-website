require('dotenv').config()
const knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_URL || {
    host: '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  }
})

module.exports = knex
