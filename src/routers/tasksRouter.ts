import { titleTaskSchema } from "./../schemas/tasksSchema";
import { validateBody } from "@/middlewares/validationMiddleware";
import { authenticateToken } from "@/middlewares/authenticatedMiddleware";
import { Router } from "express";
import {
  editTasksPut,
  finishedTasksGet,
  getSearchTasks,
  getTask,
  newTaskPost,
  putAnotationTask,
  unfinishedTasksGet,
  deleteTask,
  editTaskUnfinishedPut,
} from "@/controllers/tasksController";

const tasksRouter = Router();

tasksRouter
  .all("/*", authenticateToken)
  .post("/add/:listId", validateBody(titleTaskSchema), newTaskPost)
  .get("/unfinished/:listId", unfinishedTasksGet)
  .get("/finished/:listId", finishedTasksGet)
  .put("/edit/:taskId", editTasksPut)
  .put("/edit/unfinished/:taskId", editTaskUnfinishedPut)
  .get("/", getSearchTasks)
  .get("/:taskId", getTask)
  .put("/anotation/:taskId", putAnotationTask)
  .delete("/:taskId", deleteTask);

export { tasksRouter };
