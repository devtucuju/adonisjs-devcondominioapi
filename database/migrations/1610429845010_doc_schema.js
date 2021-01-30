"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DocSchema extends Schema {
  up() {
    this.create("docs", (table) => {
      table.increments();
      table.string("title");
      table.string("fileurl");
      table.timestamps();
    });
  }

  down() {
    this.drop("docs");
  }
}

module.exports = DocSchema;
