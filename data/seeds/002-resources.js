exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {
          resource_id: 1,
          resource_name: 'Lambda Student',
          resource_description: 'a soon to be hired developer'
        },
        {
          resource_id: 2,
          resource_name: 'MacBook Pro #1',
          resource_description: 'an overly expensive laptop computer'
        },
        {
          resource_id: 3,
          resource_name: 'coffee',
          resource_description: 'for energy'
        }
      ]);
    });
};
