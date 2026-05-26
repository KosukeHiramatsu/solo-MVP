/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("project").del();
  await knex("project").insert([
    {
      id: 1,
      name: "夏の北海道大自然ドライブ",
      region: "北海道",
      detail:
        "富良野のラベンダー畑と美瑛の丘を巡る3泊4日のドライブ計画。レンタカーは新千歳空港で手配済み。",
      date_of_created: "2026-04-10",
      date_of_lastEdit: "2026-04-15",
      createdBy_id: 101,
    },
    {
      id: 2,
      name: "秋の京都・紅葉めぐり",
      region: "近畿",
      detail:
        "紅葉の時期に合わせて、嵐山と清水寺を巡る。両親も一緒なので、移動を少なくしたゆったりめのスケジュール。",
      date_of_created: "2026-05-02",
      date_of_lastEdit: "2026-05-20",
      createdBy_id: 102,
    },
    {
      id: 3,
      name: "週末弾丸！東京グルメ旅",
      region: "関東",
      detail: null, // 詳細が未定の場合はnull（定義上許容されています）
      date_of_created: "2026-05-22",
      date_of_lastEdit: "2026-05-22",
      createdBy_id: 101,
    },
    {
      id: 4,
      name: "石垣島ダイビングライセンス取得",
      region: "沖縄",
      detail:
        "石垣島でのダイビングライセンス取得を目的とした旅行。宿泊は現地のダイバーズペンションを予定。",
      date_of_created: "2026-05-25",
      date_of_lastEdit: "2026-05-26",
      createdBy_id: 105,
    },
  ]);
};
