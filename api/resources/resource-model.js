const db = require('../../data/db-config.js')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('resource')
}

function findById(id) {
    return db('resource')
        .where('id', id)
        .first()
}

function add(data) {
    return db('resource')
        .insert(data)
}