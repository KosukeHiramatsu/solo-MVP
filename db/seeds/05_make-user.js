/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user").del();
  await knex("user").insert([
    {
      id: 101, // 「夏の北海道」と「週末弾丸東京」の作成者
      name: "田中 太郎",
      profile_image_url: "https://images.example.com/profiles/101.jpg",
    },
    {
      id: 102, // 「秋の京都・紅葉めぐり」の作成者
      name: "佐藤 花子",
      profile_image_url: null,
    },
    {
      id: 105, // 「石垣島ダイビング」の作成者
      name: "鈴木 一郎",

      profile_image_url: "https://images.example.com/profiles/105.jpg",
    },
  ]);
};
