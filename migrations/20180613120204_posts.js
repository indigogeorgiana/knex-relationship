
exports.up = (knex, Promise) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('content')
    table.integer('user_id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('posts')
}
