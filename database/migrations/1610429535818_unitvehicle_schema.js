'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitvehicleSchema extends Schema {
  up () {
    this.create('unitvehicles', table => {
      table.increments()
      table
        .integer('unit_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('units')
        .onDelete('cascade')
      table.string('title')
      table.string('color')
      table.string('plate')
      table.timestamps()
    })
  }

  down () {
    this.drop('unitvehicles')
  }
}

module.exports = UnitvehicleSchema
