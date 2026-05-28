/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_to_cost").del();
  await knex("user_to_cost").insert([
    { user_id: 101, cost_id: 1, is_payer: true },
    { user_id: 102, cost_id: 1, is_payer: false },

    { user_id: 101, cost_id: 2, is_payer: false },
    { user_id: 102, cost_id: 2, is_payer: true },

    { user_id: 101, cost_id: 3, is_payer: true },

    { user_id: 102, cost_id: 4, is_payer: true },
    { user_id: 102, cost_id: 5, is_payer: true },
    { user_id: 102, cost_id: 6, is_payer: true },

    { user_id: 101, cost_id: 7, is_payer: true },
    { user_id: 101, cost_id: 8, is_payer: true },
    { user_id: 101, cost_id: 9, is_payer: true },
  ]);
};
