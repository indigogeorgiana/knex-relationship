const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profile/:id', (req, res) => {
  const id = req.params.id
  db.getProfile(id)
    .then(profs => {
      console.log({profs})
      res.render('profile', {profs})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add', (req, res) => {
  db.addProfile()
    .then(results => {
      res.render('add', {results})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/add', (req, res) => {
  const newName = req.body.name
  const newEmail = req.body.email
  db.addProfile(newName, newEmail)
    .then(results => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/add', (req, res) => {
  const newUrl = req.body.url
  db.getUrl(newUrl)
    .then(results => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
