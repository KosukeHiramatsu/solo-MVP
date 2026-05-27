const express = require("express");
const knex = require("../index");

const { initProject } = require("./Project/index");
const { initTask } = require("./Task/index");
// const { initMovement } = require("./Movement/index");

function buildApp() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  const ProjectController = initProject(knex);
  const TaskController = initTask(knex);
  //   const MovementController = initMovement(knex);

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
  app.post("/api/tasks", TaskController.upsert);
  app.patch("/tasks/:id", validateIdMiddleware, TaskController.update);
  app.delete("/tasks/:id", validateIdMiddleware, TaskController.remove);

  //   app.get("/Movements/:id", validateIdMiddleware, MovementController.list);
  //   app.get('/Movements', MovementController.list);
  //   app.post("/Movements", MovementController.create);
  //   app.patch('/Movements/:id', validateIdMiddleware, MovementController.update);
  //   app.delete('/Movements/:id', validateIdMiddleware, MovementController.remove);

  app.use((req, res) => res.status(404).json({ error: "Not Found" }));

  return app;
}

module.exports = { buildApp };
