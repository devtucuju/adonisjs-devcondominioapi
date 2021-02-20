'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');
//para uma unidade estar livre, a tabela unit não deve estar associada
// a tabela user
class UnitSchema extends Schema {
  up() {
    this.create('units', table => {
      table.increments();
      table.string('name').notNullable();
      table.integer('id_user').notNullable().defaultTo("0");
      table.timestamps();

      // table
      //   .foreign('id_user')
      //   .references('id')
      //   .inTable('users')
      //   .onDelete('cascade');
    });
  }

  down() {
    this.drop('units');
  }
}

module.exports = UnitSchema;
