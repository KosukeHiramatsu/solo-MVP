/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("cost", function (table) {
    table.increments("id").primary();
    table.string("type", 64);
    table
      .integer("related_project_id")
      .references("project.id")
      .onDelete("CASCADE")
      .notNullable();
    table.integer("related_task_id").references("task.id").onDelete("CASCADE");
    table.decimal("cost", 32, 2);
    table.string("currency", 64);
    table.datetime("date_of_used");
    table.datetime("date_of_add").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cost");
};
