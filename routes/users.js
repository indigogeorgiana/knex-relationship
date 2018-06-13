const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('./templates/main', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getProfiles(id)
    .then(user => {
      console.log(user)
      res.render('./templates/profile', {user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
