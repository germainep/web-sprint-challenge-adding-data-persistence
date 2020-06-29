exports.up = function (knex) {
  return knex.schema
             .createTable('projects', ( tbl ) => {
               tbl.increments().unsigned()
               tbl.string('name').notNullable()
               tbl.text('description')
               tbl.boolean('complete').defaultTo(false).notNullable()
             })
             .createTable('task', ( tbl ) => {
               tbl.increments().unsigned()
               tbl.text('description').required().notNullable()
               tbl.text('notes')
               tbl.boolean('complete').defaultTo(false).notNullable()
               tbl
                   .integer('project_id')
                   .unsigned()
                   .notNullable()
                   .references('id')
                   .inTable('projects')
                   .onDelete('CASCADE')
                   .onUpdate('CASCADE')
             })
             .createTable('resources', ( tbl ) => {
               tbl.increments()
               tbl.string('name').notNullable()
               tbl.text('description')
             })
             .createTable('projects_resources', ( tbl ) => {
               tbl
                   .integer('project_id')
                   .unsigned()
                   .notNullable()
                   .references('id')
                   .inTable('projects')
               tbl
                   .integer('resource_id')
                   .unsigned()
                   .notNullable()
                   .references('id')
                   .inTable('resources')
               tbl
                   .primary('project_id', 'resource_id')
                   .onUpdate('CASCADE')
                   .onDelete('CASCADE')
             })
}

exports.down = function (knex) {
  return knex.schema
             .dropTableIfExists('task')
             .dropTableIfExists('projects_resources')
             .dropTableIfExists('resources')
             .dropTableIfExists('projects')
}
