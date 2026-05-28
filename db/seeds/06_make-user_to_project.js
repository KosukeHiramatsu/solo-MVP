/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_to_project").del();
  await knex("user_to_project").insert([
    { user_id: 101, project_id: 1 },
    { user_id: 102, project_id: 1 },

    { user_id: 102, project_id: 2 },

    { user_id: 101, project_id: 3 },

    { user_id: 105, project_id: 4 },
  ]);
};
