'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class WalllikeSchema extends Schema {
  up() {
    this.create('walllikes', table => {
      table.increments();
      table
        .integer('id_wall')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('walls')
        .onDelete('cascade');
      table
        .integer('id_user')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('walllikes');
  }
}

module.exports = WalllikeSchema;
