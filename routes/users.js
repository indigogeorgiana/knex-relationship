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
  db.getProfiles(id)
    .then(user => {
      // console.log(user)
      res.render('profile', {user: user[0]})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/adduser', (req, res) => {
  res.render('adduser')
})

router.post('/adduser', (req, res) => {
  const username = req.body.username
  const email = req.body.email
  const url = req.body.url
  const picture = req.body.picture

  db.addUser(username, email)
    .then((userid) => {
      return db.addProfile(userid, url, picture)
        // .then(() => {
        //   res.redirect('/')
        // })
        .catch(err => {
          res.status(500).send('DATABASE ERROR: ' + err.message)
        })
    })
    .then(() => {
      res.redirect('/')
    })
})

router.get('/blog/:id', (req, res) => {
  const id = req.params.id
  db.getBlog(id)
    .then(blog => {
    // console.log(user)
      res.render('blog', {blog: blog})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/bloglist', (req, res) => {
  db.getBlogs()
    .then(blogs => {
      console.log(blogs)
      res.render('bloglist', {blogs: blogs})
    })
    .catch(err => {
      res.status(500).send('Database Error: ' + err.message)
    })
})

module.exports = router
