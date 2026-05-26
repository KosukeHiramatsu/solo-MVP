function createTaskRepository(knex, table = "task") {
  /**
   * @param {number} limit - プロジェクトの最大数（制限）
   * @return {Promise<Array>} - すべてのプロジェクトデータ
   */
  const list = async (id) => {
    const result = await knex
      .select("*")
      .where(`${table}.related_project_id`, id)
      .from(table)
      .returning("*");
    console.log(result);
    return result;
  };
  /**
   * @param {number} id - プロジェクト ID
   * @return {Promise<Object|undefined>} - id に合致する注文データ、不合致の場合は undefined
   */
  const find = async (id) => {
    const result = await knex
      .select(`${table}.id`)
      .from(table)
      .where(`${table}.id`, "=", id);
    return result[0];
  };

  /**
   * @param {Object} payload - 作成する新規プロジェクトデータ
   * @return {Promise<Object>} - 作成された新規プロジェクトのすべてのデータ
   */
  const create = async (payload) => {
    const result = await knex(table)
      .insert({
        place_name: payload.place_name,
        type: payload.type,
        detail: payload.detail ?? null,
        item: payload.item ?? null,
        URL_photo: payload.URL_photo ?? null,
        URL_home: payload.URL_home ?? null,
        URL_googlemap: payload.URL_googlemap ?? null,
        arrive_time: payload.arrive_time,
        departure_time: payload.departure_time,
        previous_place_id: payload.previous_place_id ?? null,
        related_project_id: payload.related_project_id,
      })
      .returning("*");
    return result[0];
  };

  /**
   * @param {number} id - 注文 ID
   * @param {Object} payload - 更新する注文データ
   * @return {Promise<Object>} - 更新された注文のすべてのデータ
   */
  const update = async (id, payload) => {
    const result = await knex(table)
      .where({ id: id })
      .update(payload)
      .returning("*");
    return result[0];
  };

  /**
   * @param {number} id - 注文 ID
   * @return {Promise<Object>} - 削除された注文のすべてのデータ
   */
  const remove = async (id) => {
    await knex(table).where("id", id).del();
  };

  return { list, find, create, update, remove };
}

module.exports = { createTaskRepository };
