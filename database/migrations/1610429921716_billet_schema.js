'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BilletSchema extends Schema {
  up() {
    this.create('billets', table => {
      table.increments();
      table
        .integer('id_unit')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('units')
        .onDelete('cascade');
      table.string('title');
      table.string('fileurl');
      table.timestamps();
    });
  }

  down() {
    this.drop('billets');
  }
}

module.exports = BilletSchema;
