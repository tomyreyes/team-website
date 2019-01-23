const bookshelf = require('./bookshelf')
require('./user')

const Profile = bookshelf.Model.extend({
  tableName: 'profiles',
  hasTimestamps: true,
  user: function() {
    return this.belongsTo('User')
  }
})

module.exports = bookshelf.model('Profile', Profile)
