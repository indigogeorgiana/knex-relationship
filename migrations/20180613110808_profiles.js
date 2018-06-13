exports.up = (knex, Promise) => {
  return knex.schema.createTable('profiles', (table) => {
    table.increments('id').primary()
    table.string('url')
    table.string('img')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('profiles')
}
