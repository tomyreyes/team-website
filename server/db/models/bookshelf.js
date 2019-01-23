const knexConfig = require('../config')
const bookshelf = require('bookshelf')(knexConfig)

bookshelf.plugin('registry')

module.exports = bookshelf
