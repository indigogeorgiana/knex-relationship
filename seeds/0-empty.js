
exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('profiles')()
    .then(empty('users'))
}

// This equates to:

// function empty (table) {
//   function (table) {
//     knex(table).del()
//       return empty('profiles')()
//        .then(empty('users'))
//   }
// }
