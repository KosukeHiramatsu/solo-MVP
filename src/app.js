const express = require("express");
const knex = require("../index");

const { initProject } = require("./Project/index");
const { initTask } = require("./Task/index");
// const { initOrder } = require('./order/index');

function buildApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const ProjectController = initProject(knex);
  const TaskController = initTask(knex);
  //   const orderController = initOrder(knex);

  function validateIdMiddleware(req, res, next) {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        error: `Invalid id parameter. Instead received "${req.params.id}" which is a type of "${typeof req.params.id}"`,
      });
    }
    next();
  }

  app.get("/api/Projects", ProjectController.list);
  app.post("/api/Projects", ProjectController.create);
  app.patch(
    "/api/Projects/:id",
    validateIdMiddleware,
    ProjectController.update,
  );
  app.delete(
    "/api/Projects/:id",
    validateIdMiddleware,
    ProjectController.remove,
  );

  app.get("/api/tasks/:id", validateIdMiddleware, TaskController.list);
  app.post("/tasks", TaskController.create);
  app.patch("/tasks/:id", validateIdMiddleware, TaskController.update);
  app.delete("/tasks/:id", validateIdMiddleware, TaskController.remove);

  //   app.get('/orders', orderController.list);
  //   app.get('/orders/:id', validateIdMiddleware, orderController.find);
  //   app.post('/orders', orderController.create);
  //   app.patch('/orders/:id', validateIdMiddleware, orderController.update);
  //   app.delete('/orders/:id', validateIdMiddleware, orderController.remove);

  app.use((req, res) => res.status(404).json({ error: "Not Found" }));

  return app;
}

module.exports = { buildApp };
