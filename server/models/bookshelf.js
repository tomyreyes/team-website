const knexConfig = require('../knexfile')
const knex = require('knex')(knexConfig)
const bookshelf = require('bookshelf')(knex)

bookshelf.plugin('registry')

module.exports = bookshelf
