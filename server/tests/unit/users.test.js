const knex = require('../../db/config')
const UserHelper = require('../../utils/user')
const User = require('../../db/models/user')
const Profile = require('../../db/models/profile')

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
  const email = 'superman@justiceleague.com'
  expect.assertions(1)
  return UserHelper.findEmail(email).then(data => expect(data).toBeTruthy())
})

it('User should not be found.', () => {
  const email = 'spiderman@avengers.com'
  expect.assertions(1)
  return UserHelper.findEmail(email).then(data => expect(data).toBeFalsy())
})

it('Relationship between User and Profile exists.', () => {
  expect.assertions(1)
  return new User({ id: 1 }).fetch({ withRelated: 'profile' }).then(user => {
    expect(user.related('profile').get('user_id')).toBe(1)
  })
})
