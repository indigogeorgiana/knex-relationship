const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfiles,
  addUser,
  addProfile,
  getBlog,
  getBlogs
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function getProfiles (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('profile', 'users.id', 'profile.user_id')
    .select()
    .where('users.id', id)
}

function addUser (username, email, testConn) {
  const conn = testConn || connection
  return conn('users').insert([
    {name: username, email: email}
  ])
}

function addProfile (userid, url, picture, testConn) {
  // console.log(userid[0], url, picture)
  const conn = testConn || connection
  return conn('profile').insert([
    {url: url, picture: picture, user_id: userid[0]}
  ])
}

function getBlog (id, conn = connection) {
  return conn('posts')
    .select()
    .where('id', id)
}

function getBlogs (conn = connection) {
  return conn('users')
    .join('posts', 'posts.user_id', 'users.id')
    .select('users.name', 'posts.title')
}
