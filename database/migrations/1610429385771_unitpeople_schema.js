'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UnitpeopleSchema extends Schema {
  up() {
    this.create('unitpeoples', table => {
      table.increments();
      table
        .integer('id_unit')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('units')
        .onDelete('cascade');

      table.string('name');
      table.date('birthdate');
      table.timestamps();
    });
  }

  down() {
    this.drop('unitpeoples');
  }
}

module.exports = UnitpeopleSchema;
