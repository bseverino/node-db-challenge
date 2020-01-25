exports.up = function(knex) {
  return knex.schema

    .createTable('project', tbl => {
        tbl.increments()
            .unique()
        tbl.string('name', 128)
            .notNullable()
            .index()
        tbl.string('description')
        tbl.boolean('completed')
            .defaultTo(0)
    })

    .createTable('resource', tbl => {
        tbl.increments()
        tbl.string('name', 128)
            .notNullable()
            .index()
        tbl.string('description')
    })

    .createTable('project_resource', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
                .inTable('project')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
                .inTable('resource')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })

    .createTable('task', tbl => {
        tbl.increments()
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
                .inTable('project')
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
        .dropTableIfExists('task')
        .dropTableIfExists('project_resource')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
