const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUser: getUser,
  getUsers: getUsers,
  getProfile: getProfile,
  addProfile: addProfile,
  getUrl: getUrl
}

function getUsers (testConn) {
  const conn = testConn || connection
  return conn('users').select()
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function getProfile (id, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .select('profiles.id as id', 'users.name as name', 'users.email as email', 'profiles.url as url')
    .where('users.id', id)
}

function addProfile (data, testConn) {
  const conn = testConn || connection
  return conn('users')
    .join('profiles', 'users.id', 'profiles.user_id')
    .select('user.id as id', 'users.name as name', 'users.email as email', 'profiles.url as url')
    .insert({
      name: data.newName,
      email: data.newEmail
    })
}

function getUrl (newUrl, testConn) {
  const conn = testConn || connection
  return conn('profiles')
    .insert({
      url: newUrl
    })
}
