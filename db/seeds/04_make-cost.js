/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const now = new Date().toISOString();
  // Deletes ALL existing entries
  await knex("cost").del();
  await knex("cost").insert([
    {
      id: 1,
      type: "交通費", // 飛行機代（長距離移動）
      related_project_id: 1,
      related_task_id: null, // 全体に関わる移動コストとしてnull
      cost: 45000.0,
      currency: "JPY",
      date_of_used: "2026-06-01 09:30:00",
      date_of_add: now,
    },
    {
      id: 2,
      type: "宿泊費", // 前泊分のホテル代
      related_project_id: 1,
      related_task_id: 1, // ホテルチェックアウトのタスクに紐付け
      cost: 12000.0,
      currency: "JPY",
      date_of_used: "2026-06-01 08:00:00",
      date_of_add: now,
    },
    {
      id: 3,
      type: "交通費", // 電車賃（大門〜浅草など想定）
      related_project_id: 1,
      related_task_id: 3, // 電車移動のタスクに紐付け
      cost: 650.0,
      currency: "JPY",
      date_of_used: "2026-06-01 08:30:00",
      date_of_add: now,
    },
    {
      id: 4,
      type: "食費", // 空港でのランチ
      related_project_id: 1,
      related_task_id: 5, // ランチのタスクに紐付け
      cost: 2500.0,
      currency: "JPY",
      date_of_used: "2026-06-01 11:15:00",
      date_of_add: now,
    },
    {
      id: 5,
      type: "交通費", // タクシー代またはレンタカー代
      related_project_id: 1,
      related_task_id: 6, // 車移動のタスクに紐付け
      cost: 3800.0,
      currency: "JPY",
      date_of_used: "2026-06-01 12:00:00",
      date_of_add: now,
    },
    {
      id: 6,
      type: "交際費", // 美術館の入場料（チケット代）
      related_project_id: 1,
      related_task_id: 7, // 美術館見学のタスクに紐付け
      cost: 1800.0,
      currency: "JPY",
      date_of_used: "2026-06-01 12:30:00",
      date_of_add: now,
    },
    {
      id: 7,
      type: "食費", // カフェでの休憩代
      related_project_id: 1,
      related_task_id: 9, // カフェ休憩のタスクに紐付け
      cost: 850.0,
      currency: "JPY",
      date_of_used: "2026-06-01 15:00:00",
      date_of_add: now,
    },
    {
      id: 8,
      type: "交通費", // 帰りの電車賃
      related_project_id: 1,
      related_task_id: 10, // 最後の電車移動タスクに紐付け
      cost: 420.0,
      currency: "JPY",
      date_of_used: "2026-06-01 15:40:00",
      date_of_add: now,
    },
    {
      id: 9,
      type: "雑費", // 現地でのコインロッカー代など
      related_project_id: 1,
      related_task_id: null, // 特定のタスクに紐づかないためnull
      cost: 500.0,
      currency: "JPY",
      date_of_used: "2026-06-01 10:00:00",
      date_of_add: now,
    },
    {
      id: 10,
      type: "お土産代", // クライアントまたは社内へのお土産
      related_project_id: 1,
      related_task_id: null,
      cost: 5500.0,
      currency: "JPY",
      date_of_used: "2026-06-01 16:30:00",
      date_of_add: now,
    },
  ]);
};
