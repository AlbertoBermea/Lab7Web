const express = require('express')
const users = require('./controllers/users.js')

const router = express.Router()

router.get('/persons',users.getUsers)
router.get('/persons/:id',users.getUser)
router.post('/persons',users.createUser)
router.patch('/persons/:id',users.updateUser)
router.delete('/persons/:id',users.deleteUser)

module.exports = router