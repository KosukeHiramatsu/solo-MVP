/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("project", function (table) {
    table.increments("id").primary();
    table.string("name", 64).notNullable();
    table.string("region", 64);
    table.text("detail");
    table.date("date_of_created").notNullable();
    table.date("date_of_lastEdit").notNullable();
    table.integer("createdBy_id");
    //   .references("user.id")
    //   .onDelete("CASCADE")
    //   .notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("project");
};
