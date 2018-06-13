exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.string('url')
    table.string('img')
    table.integer('user_Id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}
