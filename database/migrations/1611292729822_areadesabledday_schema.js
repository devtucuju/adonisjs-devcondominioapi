'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AreadesableddaySchema extends Schema {
  up () {
    this.create('areadesableddays', table => {
      table.increments()
      table
        .integer('area_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('areas')
        .onDelete('cascade')
      table.date('day')
      table.timestamps()
    })
  }

  down () {
    this.drop('areadesableddays')
  }
}

module.exports = AreadesableddaySchema
