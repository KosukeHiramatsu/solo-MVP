/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("projects", function (table) {
    table.increments("id").primary();
    table.string("name", 64).notNullable();
    table.string("region", 64);
    table.text("detail");
    table.decimal("total_cost", 32, 2);
    table.date("date_of_created").notNullable();
    table.date("date_of_lastEdit").notNullable();
    table.string("region", 64).notNullable();
    table.string("postal_code", 12).notNullable();
    table.string("country", 64).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("customer");
};
