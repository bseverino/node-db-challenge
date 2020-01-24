exports.up = function(knex) {
  return knex.schema

    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
            .index()
        tbl.string('description')
        tbl.boolean('completed')
            .defaultTo(0)
    })

    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
            .index()
        tbl.string('description')
    })

    .createTable('project_resources', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
                .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
                .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })

    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
                .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('description')
            .notNullable()
        tbl.text('notes')
        tbl.boolean('completed')
            .defaultTo(0)
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
};
