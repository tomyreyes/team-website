const bookshelf = require('./bookshelf')
require('./profile')

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  profile: function() {
    return this.hasOne('Profile')
  }
})

module.exports = bookshelf.model('User', User)
