exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments()
    tbl.string('name').notNullable()
    tbl.text('description')
    tbl.boolean('complete').defaultTo(false).notNullable()
  })
  return knex.schema.createTable('task', (tbl) => {
    tbl.increments()
    tbl.text('description').required().notNullable()
    tbl.text('notes')
    tbl.boolean('complete').defaultTo(false).notNullable()
    tbl
      .integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
  })
  re
}

exports.down = function (knex) {
  knex.dropTableIfExists('task')
  knex.dropTableIfExists('resources')
  knex.dropTableIfExists('project_resources')
  knex.dropTableIfExists('projects')
}
