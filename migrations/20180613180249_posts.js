
exports.up = function (knex, Promise) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('user_id').references('id').inTable('users')
    table.string('title')
    table.string('content')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('posts')
}
