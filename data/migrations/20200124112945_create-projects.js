exports.up = function(knex) {
  return knex.schema

    .createTable('project', tbl => {
        tbl.increments('project_id')
        tbl.string('project_name', 128)
            .notNullable()
            .index()
        tbl.string('project_description')
        tbl.boolean('project_completed')
            .defaultTo(0)
    })

    .createTable('resource', tbl => {
        tbl.increments('resource_id')
        tbl.string('resource_name', 128)
            .notNullable()
            .index()
        tbl.string('resource_description')
    })

    .createTable('project_resources', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
                .inTable('project')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('resource_id')
                .inTable('resource')
            .onUpdate('CASCADE')
            .onDelete('RESTRICT')
    })

    .createTable('task', tbl => {
        tbl.increments('task_id')
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
                .inTable('project')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('task_description')
            .notNullable()
        tbl.text('task_notes')
        tbl.boolean('task_completed')
            .defaultTo(0)
    })

};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('task')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
