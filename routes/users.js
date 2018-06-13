const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.render('./temps/home', {users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/add', (req, res) => {
  res.render('./temps/add')
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getProfiles(id)
    .then(user => {
      res.render('./temps/profile', {user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addprofile', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const img = req.body.img
  db.addUsers(name, email)
    .then((userid) => {
      return db.addProfiles(img, userid)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    }).then(() => {
      res.redirect('/')
    })
})

router.post('/addblog', (req, res) => {
  const id = req.body.user
  console.log(id)
  const title = req.body.title
  const blog = req.body.blog
  console.log(id)
  db.addBlog(id, title, blog)
    .then(() => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router
