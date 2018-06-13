exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('id').inTable('users')
    table.string('URL')
    table.string('profile_pic')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}
