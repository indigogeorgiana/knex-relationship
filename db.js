const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  getProfiles
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
    .join('profiles', 'users.id', 'profiles.user_id')
    .select()
    .where('users.id', id)
}

// .join('user_hobbies', 'user_users.id', 'user_hobbies.user_id')
// .join('hobbies', 'user_hobbies.hobby_id', 'hobbies.id')
