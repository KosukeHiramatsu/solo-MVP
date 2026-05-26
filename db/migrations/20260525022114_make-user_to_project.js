/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_to_project", function (table) {
    table.integer("user_id").references("user.id").onDelete("CASCADE");
    table.integer("project_id").references("project.id").onDelete("CASCADE");
    table.primary(["user_id", "project_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user_to_project");
};
