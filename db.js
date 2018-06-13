const environment = process.env.NODE_ENV || 'development'
var config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  addUser,
  addPost,
  viewPosts
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('profiles', 'profiles.user_id', 'users.id')
    .where('user_id', id)
    .first()
}

function addUser (newUser, newProfile, testConn) {
  const conn = testConn || connection
  return conn('users')
    .insert(newUser).into('users')
    .then(response => {
      newProfile.user_id = response[0]
      console.log(newProfile)
      return conn('profiles')
        .insert(newProfile).into('profiles')
    })
}

function addPost (newPost, testConn) {
  const conn = testConn || connection
  return conn('posts')
    .insert(newPost)
}

function viewPosts (testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('posts', 'posts.user_id', 'users.id')
    .select('users.name', 'posts.title')
}
