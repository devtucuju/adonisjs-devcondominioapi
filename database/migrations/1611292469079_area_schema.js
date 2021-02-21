'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AreaSchema extends Schema {
  up () {
    this.create('areas', (table) => {
      table.increments()
      table.integer('allowed').defaultTo(1) // 0 1
      table.string('title')
      table.string('cover')
      table.string('days')
      table.time('start_time')
      table.time('end_time')
      table.timestamps()
    })
  }

  down () {
    this.drop('areas')
  }
}

module.exports = AreaSchema
