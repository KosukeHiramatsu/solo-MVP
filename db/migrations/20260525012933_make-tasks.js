/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("task", function (table) {
    table.increments("id").primary();
    table.string("place_name", 64).notNullable();
    table.string("type", 64);
    table.text("detail");
    table.text("item");
    table.string("URL_photo", 64);
    table.string("URL_home", 64);
    table.string("URL_googlemap", 64);
    table.string("previous_place", 64);
    table.date("arrive_time").notNullable();
    table.date("departure_time").notNullable();
    table
      .integer("related_project_id")
      .references("project.id")
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
