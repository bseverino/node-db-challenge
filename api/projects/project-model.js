const db = require('../../data/db-config.js')
const knex = require('knex')

module.exports = {
    find,
    findById,
    add,
    addTask,
    findTasks
}

function find() {
    return db('project')
}

function findById(id) {
    return db('task')
        .where('project_id', id)
        .then(tasks => {
            return db('project')
                .where('project_id', id)
                .first()
                .then(project => {
                    return {
                        ...project,
                        tasks
                    }
                })
        })
}

function add(data) {
    return db('project')
        .insert(data)
}

function addTask(data) {
    return db('task as t')
        .insert(data)
}

function findTasks(id) {
    return db('task as t')
        .where('t.project_id', id)
        .join('project as p', 't.project_id', 'p.project_id')
        .select('t.task_id', 'p.project_name', 'p.project_description', 't.task_description', 't.task_notes', 't.task_completed')
}