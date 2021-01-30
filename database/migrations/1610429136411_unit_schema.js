'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UnitSchema extends Schema {
  up() {
    this.create('units', table => {
      table.increments();
      table.string('name').notNullable();
      table.integer('id_user').notNullable().unsigned();
      table.timestamps();

      table
        .foreign('id_user')
        .references('id')
        .inTable('users')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('units');
  }
}

module.exports = UnitSchema;
