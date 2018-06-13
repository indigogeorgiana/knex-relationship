exports.seed = (knex, Promise) => {
  return knex('profiles').del()
    .then(() => {
      return knex('profiles').insert([
        {id: 1, user_id: 99901, URL: 'www.url.com', profile_pic: 'http://barkpost.com/wp-content/uploads/2015/07/16.jpg'},
        {id: 2, user_id: 99903, URL: 'www.url2.com', profile_pic: 'https://www.wellnesspetfood.com/sites/default/files/inline-images/11twexf.jpg'},
        {id: 3, user_id: 99905, URL: 'www.url3.com', profile_pic: 'https://i.ytimg.com/vi/7z8KLlCfzwc/maxresdefault.jpg'}
      ])
    })
}
