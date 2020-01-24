const db = require('../../data/db-config.js')

module.exports = {
    find,
    findById,
    add
}

function find() {
    return db('resources')
}

function findById(id) {
    return db('resources')
        .where('id', id)
        .first()
}

function add(data) {
    return db('resources')
        .insert(data)
        .then(() => {
            return find()
        })
}