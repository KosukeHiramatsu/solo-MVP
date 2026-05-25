/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("movement", function (table) {
    table.increments("id").primary();
    table.string("type", 64);
    table
      .integer("previous_place_id")
      .references("task.id")
      .onDelete("CASCADE");
    table
      .integer("releted_project_id")
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
  return knex.schema.dropTable("movement");
};
