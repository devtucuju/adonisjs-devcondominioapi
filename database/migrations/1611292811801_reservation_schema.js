'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservationSchema extends Schema {
  up () {
    this.create('reservations', table => {
      table.increments()
      table
        .integer('unit_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('units')
        .onDelete('cascade')
      table
        .integer('area_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('areas')
        .onDelete('cascade')
      table.datetime('reservation_date')
      table.timestamps()
    })
  }

  down () {
    this.drop('reservations')
  }
}

module.exports = ReservationSchema
