function createProjectRepository(knex, table = "project") {
  /**
   * @param {number} limit - プロジェクトの最大数（制限）
   * @return {Promise<Array>} - すべてのプロジェクトデータ
   */
  const list = async (limit = 100) =>
    await knex.select("*").from(table).limit(limit);
  /**
   * @param {number} id - プロジェクト ID
   * @return {Promise<Object|undefined>} - id に合致する注文データ、不合致の場合は undefined
   */
  // const find = async (id) => {
  //   const result = await knex
  //     .select(
  //       `${table}.id`,
  //       `${table}.date_ordered`,
  //       `${table}.date_shipped`,
  //       `${table}.customer_id`,
  //       knex.ref("customer.first_name").as("customer_first_name"),
  //       knex.ref("customer.last_name").as("customer_last_name"),
  //       knex.ref("customer.country").as("customer_country"),
  //     )
  //     .from(table)
  //     .innerJoin("customer", "customer.id", `${table}.customer_id`)
  //     .innerJoin("order_product", "order_product.order_id", `${table}.id`)
  //     .where(`${table}.id`, "=", id);
  //   console.log(result);
  //   if (!result[0]) {
  //     return undefined;
  //   }
  //   const products = await knex
  //     .select("*")
  //     .from("product")
  //     .innerJoin("order_product", "order_product.product_id", "product.id");
  //   result[0]["products"] = products;
  //   return result[0];
  // };

  /**
   * @param {Object} payload - 作成する新規プロジェクトデータ
   * @return {Promise<Object>} - 作成された新規プロジェクトのすべてのデータ
   */
  const create = async (payload) => {
    const result = await knex(table)
      .insert({
        name: payload.name,
        region: payload.date_ordered,
        detail: payload.detail,
        date_of_created: payload.date_of_created,
        date_of_lastEdit: payload.date_of_lastEdit,
        createdBy: payload.createdBy,
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
    const updateData = {
      // ここにコードを書いてください
    };
  };

  /**
   * @param {number} id - 注文 ID
   * @return {Promise<Object>} - 削除された注文のすべてのデータ
   */
  const remove = async (id) => {
    // ここにコードを書いてください
  };

  return { list, create, update, remove };
}

module.exports = { createProjectRepository };
