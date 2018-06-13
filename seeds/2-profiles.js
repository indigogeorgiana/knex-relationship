
exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex('profiles').insert([
    {id: 1, user_id: 99901, url: 'google.com'},
    {id: 2, user_id: 99902, url: 'amazon.com'},
    {id: 3, user_id: 99903, url: 'ebay.com'}
  ])
}
