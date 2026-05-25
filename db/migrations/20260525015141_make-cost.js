/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cost", function (table) {
    table.increments("id").primary();
    table.string("type", 64);
    table
      .integer("releted_project")
      .references("project.id")
      .onDelete("CASCADE")
      .notNullable();
    table.integer("releted_task").references("task.id").onDelete("CASCADE");
    table
      .integer("releted_movement")
      .references("movement.id")
      .onDelete("CASCADE");
    table.decimal("cost", 32, 2);
    table.string("currency", 64);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cost");
};
