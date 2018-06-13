const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('index', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/user/:id', (req, res) => {
  const id = req.params.id
  db.getUser(id)
    .then(user => {
      console.log(user)
      res.render('./profile', user)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/add', (req, res) => {
  res.render('add')
})

router.get('/add', (req, res) => {
  const newUser = {
    name: res.body.name,
    email: res.body.email,
    URL: res.body.URL,
    profile_pic: res.body.profile_pic
  }
  console.log(newUser)
  db.addUser(newUser)
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
module.exports = router
