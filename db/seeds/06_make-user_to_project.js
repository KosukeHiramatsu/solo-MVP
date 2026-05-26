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

    // プロジェクト2: 秋の京都・紅葉めぐり（佐藤が作成、単独または別ユーザーと共有予定）
    { user_id: 102, project_id: 2 },

    // プロジェクト3: 週末弾丸！東京グルメ旅（田中が作成）
    { user_id: 101, project_id: 3 },

    // プロジェクト4: 石垣島ダイビング（鈴木が作成）
    { user_id: 105, project_id: 4 },
  ]);
};
