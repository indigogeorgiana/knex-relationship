const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser,
  getUsers,
  getProfiles,
  addUsers,
  addProfiles

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

function addUsers (name, email, testConn) {
  const conn = testConn || connection
  return conn('users')
    .insert({'name': name, 'email': email})
}

function addProfiles (img, userid, testConn) {
  const conn = testConn || connection
  return conn('profiles')
    .insert({'img': img, user_id: userid[0]})
}
// .join('user_hobbies', 'user_users.id', 'user_hobbies.user_id')
// .join('hobbies', 'user_hobbies.hobby_id', 'hobbies.id')
