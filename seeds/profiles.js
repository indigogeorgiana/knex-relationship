exports.seed = (knex, Promise) => {
  return knex('profiles').del()
    .then(() => {
      return knex('profiles').insert([
        {id: 1, user_id: 99901, url: 'aardvark@example.org', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu4ZaCEs5piUVlY4PM-ngB6y5QC0UhSIo3OH-iiMoovll2yEVn'},
        {id: 2, user_id: 99902, url: 'baboon@example.org', img: 'http://www.kinyu-z.net/data/wallpapers/148/1221658.jpg'},
        {id: 3, user_id: 99903, url: 'capybara@example.org', img: 'https://pbs.twimg.com/profile_images/735141315847979009/wRSudPRg_400x400.jpg'},
        {id: 4, user_id: 99904, url: 'duck@example.org', img: 'https://pbs.twimg.com/profile_images/643130160019959808/REHYwDyH_400x400.jpg'},
        {id: 5, user_id: 99905, url: 'elephant@example.org', img: 'http://dreamstop.com/wp-content/uploads/2015/10/elephant-dream.jpeg'},
        {id: 6, user_id: 99906, url: 'flying.fox@example.org', img: 'https://lh6.googleusercontent.com/-FTdEoPL_AWQ/AAAAAAAAAAI/AAAAAAAAARs/lzfXe0pA5pA/photo.jpg'},
        {id: 7, user_id: 99907, url: 'gila.monster@example.org', img: 'http://www.iconarchive.com/download/i78003/designbolts/monsters-university/Monsters-4.ico'},
        {id: 8, user_id: 99908, url: 'heron@example.org', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCw6k91d-FXr2Ey--MVOibajlnBiUasxf7xAgAiKZ0A8FIXYRx'},
        {id: 9, user_id: 99909, url: 'impala@example.org', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNr4aSrD0iwCZ7pWIHqGIwdKQDJcVZs-H4nddZe7keFaITK2ZuA'},
        {id: 10, user_id: 99910, url: 'jerboa@example.org', img: 'https://d2ujflorbtfzji.cloudfront.net/key-image/f8b30a3e-12f7-475f-92a9-a141da444ad6.png'},
        {id: 11, user_id: 99911, url: 'kinkajou@example.org', img: 'https://pm1.narvii.com/6784/3838bfbf5f40aaee335a4b714389abf6f0450a72v2_128.jpg'},
        {id: 12, user_id: 99912, url: 'lemur@example.org', img: 'https://avatarfiles.alphacoders.com/806/80696.jpg'},
        {id: 13, user_id: 99913, url: 'mongoose@example.org', img: 'https://pbs.twimg.com/profile_images/705611888327942144/mk-zu6wP_400x400.jpg'},
        {id: 14, user_id: 99914, url: 'nyala@example.org', img: 'https://78.media.tumblr.com/avatar_ed9008141161_128.pnj'},
        {id: 15, user_id: 99915, url: 'ocelot@example.org', img: 'https://pbs.twimg.com/profile_images/723041148453982208/9W4gJ39t_400x400.jpg'},
        {id: 16, user_id: 99916, url: 'panda@example.org', img: 'https://pbs.twimg.com/profile_images/694529544020180992/QrZplG-q_400x400.jpg'},
        {id: 17, user_id: 99917, url: 'quokka@example.org', img: 'https://i.pinimg.com/originals/84/62/fe/8462feed99db2c0cae5b4073a19ea270.jpg'},
        {id: 18, user_id: 99918, url: 'rail@example.org', img: 'https://authentic-scandinavia.com/system/images/addons/photos/585/medium.jpg?1500632601'},
        {id: 19, user_id: 99919, url: 'sloth@example.org', img: 'https://pbs.twimg.com/profile_images/3774080612/7d840b52d729e4621f958a0d1880fa02.jpeg'},
        {id: 20, user_id: 99920, url: 'terrapin@example.org', img: 'https://pbs.twimg.com/profile_images/689569629178503168/aW3kOY2G_400x400.jpg'},
        {id: 21, user_id: 99921, url: 'urial@example.org', img: 'https://pm1.narvii.com/6635/0ded8fa6342d11ec2f766fd9533b68be834e6d26_128.jpg'},
        {id: 22, user_id: 99922, url: 'viscacha@example.org', img: 'https://static.greatbigcanvas.com/images/square/national-geographic/a-herbivorous-viscacha-nurses-her-baby-atacama-desert-chile,ng738625.jpg?max=128'},
        {id: 23, user_id: 99923, url: 'wombat@example.org', img: 'https://78.media.tumblr.com/avatar_36153e73bccd_128.pnj'},
        {id: 24, user_id: 99924, url: 'xerus@example.org', img: 'https://i1.rgstatic.net/ii/profile.image/278734830620675-1443466970294_Q64/Kei_Suzuki3.jpg'},
        {id: 25, user_id: 99925, url: 'yak@example.org', img: 'https://78.media.tumblr.com/avatar_316c07c97463_128.pnj'},
        {id: 26, user_id: 99926, url: 'zebu@example.org', img: 'https://78.media.tumblr.com/avatar_316c07c97463_128.pnj'}
      ])
    })
}
