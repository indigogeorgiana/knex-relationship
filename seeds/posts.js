
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {user_id: 99903, title: 'hello i am a blog post', content: 'bloggity mc froggity'},
        {user_id: 99903, title: 'hello again its me mr blog', content: 'blogs are weird'},
        {user_id: 99905, title: 'hey guys, blog here', content: 'only one person reads them dont they?'}
      ])
    })
}
