exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          project_id: 1,
          description: 'task description',
          notes: 'the task notes',
          completed: false
        },
        {
          id: 2,
          project_id: 1,
          description: 'another task description',
          notes: 'the task notes',
          completed: false
        },
        {
          id: 3,
          project_id: 2,
          description: 'description',
          notes: 'this project only has one task',
          completed: true
        }
      ]);
    });
};
