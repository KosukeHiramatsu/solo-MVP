/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("user_to_cost", function (table) {
    table.integer("user_id").references("user.id").onDelete("CASCADE");
    table.integer("cost_id").references("cost.id").onDelete("CASCADE");
    table.boolean("is_payer").defaultTo(false);
    table.primary(["user_id", "cost_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("user_to_cost");
};
