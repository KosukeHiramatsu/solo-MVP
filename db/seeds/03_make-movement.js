/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movement").del();
  await knex("movement").insert([
    {
      id: 1,
      type: "飛行機",
      previous_place_id: null,
      next_place_id: 1,
      related_project_id: 1,
    },
    // 空港(task:1)からファーム富田(task:2)への移動
    {
      id: 2,
      type: "レンタカー",
      previous_place_id: 1,
      next_place_id: 2,
      related_project_id: 1,
    },
    // ファーム富田(task:2)から青い池(task:3)への移動
    {
      id: 3,
      type: "レンタカー",
      previous_place_id: 2,
      next_place_id: 3,
      related_project_id: 1,
    },
    // 青い池(task:3)からホテル(task:4)への移動
    {
      id: 4,
      type: "レンタカー",
      previous_place_id: 3,
      next_place_id: 4,
      related_project_id: 1,
    },

    // ==========================================
    // プロジェクト2: 秋の京都・紅葉めぐり
    // ==========================================
    // 京都駅(task:8)から清水寺(task:9)への移動
    {
      id: 5,
      type: "市バス",
      previous_place_id: 8,
      next_place_id: 9,
      related_project_id: 2,
    },
    // 清水寺(task:9)から高台寺(task:10)への移動
    {
      id: 6,
      type: "徒歩",
      previous_place_id: 9,
      next_place_id: 10,
      related_project_id: 2,
    },
    // 高台寺(task:10)から嵐山のホテル(task:11)への移動
    {
      id: 7,
      type: "タクシー",
      previous_place_id: 10,
      next_place_id: 11,
      related_project_id: 2,
    },
    // ホテル(task:11)からトロッコ駅(task:12)への移動
    {
      id: 8,
      type: "送迎バス",
      previous_place_id: 11,
      next_place_id: 12,
      related_project_id: 2,
    },

    // ==========================================
    // プロジェクト3: 週末弾丸！東京グルメ旅
    // ==========================================
    // 築地(task:15)から浅草寺(task:16)への移動
    {
      id: 9,
      type: "地下鉄",
      previous_place_id: 15,
      next_place_id: 16,
      related_project_id: 3,
    },
    // 浅草寺(task:16)から今半(task:17)への移動
    {
      id: 10,
      type: "徒歩",
      previous_place_id: 16,
      next_place_id: 17,
      related_project_id: 3,
    },
    // 今半(task:17)からスカイツリー(task:18)への移動
    {
      id: 11,
      type: "電車",
      previous_place_id: 17,
      next_place_id: 18,
      related_project_id: 3,
    },
    // スカイツリー(task:18)から月島(task:19)への移動
    {
      id: 12,
      type: "地下鉄",
      previous_place_id: 18,
      next_place_id: 19,
      related_project_id: 3,
    },
  ]);
};
