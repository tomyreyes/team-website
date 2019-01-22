const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/users-controller')

router.post('/sign-up', UsersController.signUp)
router.post('/login', UsersController.login)

module.exports = router
