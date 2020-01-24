exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'project name here',
          description: 'the project description',
          completed: false
        },
        {
          id: 2,
          name: 'another project',
          description: 'another project description',
          completed: true
        }
      ]);
    });
};