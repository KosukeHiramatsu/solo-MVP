/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("task", function (table) {
    table.increments("id").primary();
    table.boolean("IsMovement").notNullable();
    table.integer("sequence").notNullable();
    table.string("type", 64).notNullable();
    table.string("name", 64);
    table.text("detail");
    table.string("URL_photo", 2048);
    table.string("URL_home", 2048);
    table.string("URL_googlemap", 2048);
    table.datetime("arrive_time").notNullable();
    table.datetime("departure_time").notNullable();
    table
      .integer("related_project_id")
      .references("project.id")
      .onDelete("CASCADE")
      .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("task");
};
