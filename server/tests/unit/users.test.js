const knex = require('../../db/config')
const UserHelper = require('../../utils/user')

beforeAll(() => {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => knex.seed.run())
})

afterAll(() => {
  return knex.migrate.rollback()
})

it('User should be found.', () => {
  const email = 'clarkkent@gmail.com'
  expect.assertions(1)
  return UserHelper.findEmail(email).then(data => expect(data).toBeTruthy())
})

it('User should not be found.', () => {
  const email = 'peterparkergmail.com'
  expect.assertions(1)
  return UserHelper.findEmail(email).then(data => expect(data).toBeFalsy())
})
