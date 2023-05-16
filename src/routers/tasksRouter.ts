import { nameTaskSchema } from "./../schemas/tasksSchema";
import { Router } from "express";
import { validateBody } from "@/middlewares/validationMiddleware";
import { authenticateToken } from "@/middlewares/authenticatedMiddleware";
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
  editTaskName,
  editOrderTasks,
} from "@/controllers/tasksController";
import { newTaskSchema, orderTaskSchema } from "@/schemas/tasksSchema";

const tasksRouter = Router();

tasksRouter
  .all("/*", authenticateToken)
  .post("/add/:listId", validateBody(newTaskSchema), newTaskPost)
  .get("/unfinished/:listId", unfinishedTasksGet)
  .get("/finished/:listId", finishedTasksGet)
  .put("/edit/:taskId", validateBody(orderTaskSchema), editTasksPut)
  .put("/edit/unfinished/:taskId", validateBody(orderTaskSchema), editTaskUnfinishedPut)
  .get("/", getSearchTasks)
  .get("/:taskId", getTask)
  .put("/anotation/:taskId", putAnotationTask)
  .delete("/:taskId", deleteTask)
  .put("/:taskId", validateBody(nameTaskSchema), editTaskName)
  .put("/order/:taskId", validateBody(orderTaskSchema), editOrderTasks);

export { tasksRouter };
