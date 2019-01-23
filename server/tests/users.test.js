process.env.NODE_ENV = 'test'
const knex = require('../db/config')
const User = require('../db/models/user')
const UserHelper = require('../utils/user')

beforeEach(() => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run())
})

afterEach(() => {
  return knex.migrate.rollback()
})

it('works with promises', () => {
  const email = 'clarkkent@gmail.com'
  expect.assertions(1)
  return UserHelper.findEmail(email).then(data => expect(data).toBeTruthy())
})
