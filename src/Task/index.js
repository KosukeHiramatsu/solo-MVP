const { createTaskRepository } = require("./Task.repository");
const { createTaskService } = require("./Task.service");
const { createTaskController } = require("./Task.controller");

function initTask(knex) {
  const repository = createTaskRepository(knex);
  const service = createTaskService(repository);
  const controller = createTaskController(service);

  return controller;
}

module.exports = { initTask };
