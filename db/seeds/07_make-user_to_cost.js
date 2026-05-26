/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_to_cost").del();
  await knex("user_to_cost").insert([
    // cost:1（飛行機代） -> 田中(101)が2人分を立て替えて支払ったケース
    { user_id: 101, cost_id: 1, is_payer: true },
    { user_id: 102, cost_id: 1, is_payer: false },

    // cost:2（宿泊費） -> 佐藤(102)が2人分を立て替えて支払ったケース
    { user_id: 101, cost_id: 2, is_payer: false },
    { user_id: 102, cost_id: 2, is_payer: true },

    // cost:3（食費） -> 田中(101)が自分自身の分だけ支払ったケース
    { user_id: 101, cost_id: 3, is_payer: true },

    // ==========================================
    // プロジェクト2: 秋の京都・紅葉めぐり（佐藤:102 単独または個別会計）
    // ==========================================
    // cost:4, 5, 6 -> すべて佐藤(102)が自身の分として支払ったケース
    { user_id: 102, cost_id: 4, is_payer: true },
    { user_id: 102, cost_id: 5, is_payer: true },
    { user_id: 102, cost_id: 6, is_payer: true },

    // ==========================================
    // プロジェクト3: 週末弾丸！東京グルメ旅（田中:101 単独または個別会計）
    // ==========================================
    // cost:7, 8, 9 -> すべて田中(101)が自身の分として支払ったケース
    { user_id: 101, cost_id: 7, is_payer: true },
    { user_id: 101, cost_id: 8, is_payer: true },
    { user_id: 101, cost_id: 9, is_payer: true },
  ]);
};
