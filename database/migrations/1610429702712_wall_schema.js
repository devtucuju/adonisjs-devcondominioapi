'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WallSchema extends Schema {
  up () {
    this.create('walls', (table) => {
      table.increments()

      table.string('title')
      table.string('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('walls')
  }
}

module.exports = WallSchema
