"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FoundandlostSchema extends Schema {
  up() {
    this.create("foundandlosts", (table) => {
      table.increments();
      table.string("status").defaultTo("LOST"); //LOST RECOVERED
      table.string("photo");
      table.string("description");
      table.string("where");
      table.timestamps();
    });
  }

  down() {
    this.drop("foundandlosts");
  }
}

module.exports = FoundandlostSchema;
