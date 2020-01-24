const db = require('../../data/db-config.js')

module.exports = {
    find,
    findById,
    add,
    addTask,
    findTasks
}

function find() {
    return db('projects')
}

function findById(id) {
    return db('projects')
        .where('id', id)
        .first()
}

function add(data) {
    return db('projects')
        .insert(data)
        .then(() => {
            return find()
        })
}

function addTask(data) {
    return db('tasks as t')
        .insert(data)
}

function findTasks(id) {
    return db('tasks as t')
        .where('t.project_id', id)
        .join('projects as p', 't.project_id', 'p.id')
        .select('t.id', 'p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes', 't.completed')
}