'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class WarningSchema extends Schema {
  up() {
    this.create('warnings', table => {
      table.increments();
      table
        .integer('id_unit')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('units')
        .onDelete('cascade');
      table.string('title');
      table.string('status').defaultTo('IN_REVIEW'); //IN_REVIEW RESOLVED
      table.text('photos');
      table.timestamps();
    });
  }

  down() {
    this.drop('warnings');
  }
}

module.exports = WarningSchema;
