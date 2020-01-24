exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          project_id: 1,
          project_name: 'project name here',
          project_description: 'the project description',
          project_completed: false
        },
        {
          project_id: 2,
          project_name: 'another project',
          project_description: 'another project description',
          project_completed: true
        }
      ]);
    });
};
