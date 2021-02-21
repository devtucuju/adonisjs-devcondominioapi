'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UnitpetSchema extends Schema {
  up () {
    this.create('unitpets', table => {
      table.increments()
      table
        .integer('unit_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('units')
        .onDelete('cascade')
      table.string('name')
      table.string('race')
      table.timestamps()
    })
  }

  down () {
    this.drop('unitpets')
  }
}

module.exports = UnitpetSchema
