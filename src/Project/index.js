const { createProjectRepository } = require("./Project.repository");
const { createProjectService } = require("./Project.service");
const { createProjectController } = require("./Project.controller");

function initProject(knex) {
  const repository = createProjectRepository(knex);
  const service = createProjectService(repository);
  const controller = createProjectController(service);

  return controller;
}

module.exports = { initProject };
