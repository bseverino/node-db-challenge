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
        .select('id', 'description', 'notes', 'completed')
        .then(tasks => {
            return db('project_resource as x')
                .where('project_id', id)
                .join('resource as r', 'x.resource_id', 'r.id')
                .select('r.id', 'r.name', 'r.description')
                .then(resources => {
                    return db('project')
                        .where('id', id)
                        .first()
                        .then(project => {
                            return {
                                ...project,
                                tasks,
                                resources
                            }
                        })
            })
        })
}

// async function add(data) {
//     db('project').insert(data)
//         .then(res => {
//             console.log(res)
//         })
    
    
// }

function add(data) {
    return db('project')
        .insert(data)
}

function addTask(data) {
    return db('task')
        .insert(data)
}

function findTasks(id) {
    return db('task as t')
        .where('t.project_id', id)
        .join('project as p', 't.project_id', 'p.id')
        .select('t.id', 'p.name as project_name', 'p.description as project_description', 't.description as task_description', 't.notes', 't.completed')
}