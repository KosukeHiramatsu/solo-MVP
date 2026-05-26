/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("task", function (table) {
    table.increments("id").primary();
    table.string("place_name", 64).notNullable();
    table.string("type", 64).notNullable();
    table.text("detail");
    table.text("item");
    table.string("URL_photo", 2048);
    table.string("URL_home", 2048);
    table.string("URL_googlemap", 2048);
    table.datetime("arrive_time").notNullable();
    table.datetime("departure_time").notNullable();
    table.integer("previous_place_id");
    table
      .integer("related_project_id")
      .references("project.id")
      .notNullable()
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("task");
};
