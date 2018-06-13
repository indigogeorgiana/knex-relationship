
exports.seed = (knex, Promise) => {
  return knex('posts').del()
    .then(function () {
      return knex('posts').insert([
        {id: 1, title: 'Blog 101', blog: 'Sometimes you just gotta write for the sake of writing ... but I ... I don\' have to do anything because I am me!', user_id: 99905},
        {id: 2, title: 'I try and I try', blog: 'This is a blog about trying. We all try sometimes, but sometimes you find that little extra bit hidding deep inside that you didn\'t know was there ... untill it pops out and supprises you. Keep trying y\'all, life is worth the effort', user_id: 99917},
        {id: 3, title: 'Sometimes hard enough is not good enough', blog: 'If you have ever felt like just giving up, you should know that you are not alone. Life can be a right cunt sometimes and it surely enjoys testing our metal. Keep you chin up people, there can always be a next time and we all get stuck in the mud sometime :D', user_id: 99912}
      ])
    })
}
