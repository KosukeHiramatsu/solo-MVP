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
      type: "交通費", // 飛行機代
      related_project_id: 1,
      related_task_id: null, // 移動に対するコストなのでタスクはnull
      related_movement_id: 1, // movementのID1（飛行機）に紐付け
      cost: 45000.0,
      currency: "JPY",
      date_of_used: "2026-08-10 09:00:00",
      date_of_add: now,
    },
    {
      id: 2,
      type: "宿泊費", // 白金温泉 ホテルプラザ
      related_project_id: 1,
      related_task_id: 4, // taskのID4（宿泊）に紐付け
      related_movement_id: null, // タスクに対するコストなので移動はnull
      cost: 32000.0,
      currency: "JPY",
      date_of_used: "2026-08-10 17:30:00",
      date_of_add: now,
    },
    {
      id: 3,
      type: "食費", // あさひかわラーメン村
      related_project_id: 1,
      related_task_id: 6,
      related_movement_id: null,
      cost: 1800.0,
      currency: "JPY",
      date_of_used: "2026-08-11 14:30:00",
      date_of_add: now,
    },

    // ==========================================
    // プロジェクト2: 秋の京都・紅葉めぐり（related_project_id: 2）
    // ==========================================
    {
      id: 4,
      type: "拝観料", // 清水寺
      related_project_id: 2,
      related_task_id: 9,
      related_movement_id: null,
      cost: 400.0,
      currency: "JPY",
      date_of_used: "2026-11-20 14:00:00",
      date_of_add: now,
    },
    {
      id: 5,
      type: "交通費", // タクシー代（高台寺〜ホテル）
      related_project_id: 2,
      related_task_id: null,
      related_movement_id: 7,
      cost: 3500.0,
      currency: "JPY",
      date_of_used: "2026-11-20 19:30:00",
      date_of_add: now,
    },
    {
      id: 6,
      type: "食費", // 嵐山よしむら（蕎麦）
      related_project_id: 2,
      related_task_id: 14,
      related_movement_id: null,
      cost: 4200.0,
      currency: "JPY",
      date_of_used: "2026-11-21 13:00:00",
      date_of_add: now,
    },

    // ==========================================
    // プロジェクト3: 週末弾丸！東京グルメ旅（related_project_id: 3）
    // ==========================================
    {
      id: 7,
      type: "交通費", // 地下鉄（築地〜浅草）
      related_project_id: 3,
      related_task_id: null,
      related_movement_id: 9,
      cost: 220.0,
      currency: "JPY",
      date_of_used: "2026-05-30 10:30:00",
      date_of_add: now,
    },
    {
      id: 8,
      type: "食費", // 浅草 今半（すき焼き）
      related_project_id: 3,
      related_task_id: 17,
      related_movement_id: null,
      cost: 15000.0,
      currency: "JPY",
      date_of_used: "2026-05-30 13:15:00",
      date_of_add: now,
    },
    {
      id: 9,
      type: "チケット", // 東京スカイツリー
      related_project_id: 3,
      related_task_id: 18,
      related_movement_id: null,
      cost: 3100.0,
      currency: "JPY",
      date_of_used: "2026-05-30 15:45:00",
      date_of_add: now,
    },
  ]);
};
