'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WalllikeSchema extends Schema {
  up () {
    this.create('wall_likes', table => {
      table.increments()
      table
        .integer('wall_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('walls')
        .onDelete('cascade')
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('wall_likes')
  }
}

module.exports = WalllikeSchema
