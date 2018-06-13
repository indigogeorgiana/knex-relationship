
exports.up = (knex, Promise) => {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('blog')
    table.integer('user_Id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('posts')
}
