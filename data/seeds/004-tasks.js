exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          task_id: 1,
          project_id: 1,
          task_description: 'task description',
          task_notes: 'the task notes',
          task_completed: false
        },
        {
          task_id: 2,
          project_id: 1,
          task_description: 'another task description',
          task_notes: 'the task notes',
          task_completed: false
        },
        {
          task_id: 3,
          project_id: 2,
          task_description: 'description',
          task_notes: 'this project only has one task',
          task_completed: true
        }
      ]);
    });
};
