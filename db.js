const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  addUser: addUser
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

function addUser (newUser, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('profiles', 'profiles.user_id', 'users.id')
    .insert(newUser)
}