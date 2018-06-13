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
      res.render('./profile', user)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/add', (req, res) => {
  res.render('add')
})

router.post('/add', (req, res) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email
  }
  const newProfile = {
    URL: req.body.URL,
    profile_pic: req.body.profile_pic
  }
  db.addUser(newUser, newProfile)
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/user/:id/post', (req, res) => {
  res.render('post')
})

router.post('/user/:id/post', (req, res) => {
  const newPost = {
    user_id: req.params.id,
    title: req.body.title,
    content: req.body.title
  }
  db.addPost(newPost)
    .then(result => {
      res.redirect('/')
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
module.exports = router

router.get('/blogs', (req, res) => {
  db.viewPosts()
    .then(result => {
      res.render('blogs', {result})
      blogSort()
    })
})

function blogSort (obj) {

}
