function createTaskService(repository) {
  const list = async (id) => {
    return await repository.list(id);
  };

  const create = async (payload) => {
    const created = await repository.create(payload);
    return { ok: true, data: created };
  };

  const update = async (id, payload) => {
    const result = await repository.find(id);
    if (!result) return { ok: false, status: 404, message: "id not found" };

    const updated = await repository.update(id, payload);
    return { ok: true, data: updated };
  };

  const remove = async (id) => {
    const result = await repository.find(id);
    if (!result) return { ok: false, status: 404, message: "id not found" };

    await repository.remove(id);
    return { ok: true, data: null };
  };

  return { list, create, update, remove };
}

module.exports = { createTaskService };
