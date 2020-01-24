exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
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
