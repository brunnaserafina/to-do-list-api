import { titleTaskSchema } from "./../schemas/tasksSchema";
import { validateBody } from "@/middlewares/validationMiddleware";
import { authenticateToken } from "@/middlewares/authenticatedMiddleware";
import { Router } from "express";
import { finishedTasksGet, newTaskPost, unfinishedTasksGet } from "@/controllers/tasksController";

const tasksRouter = Router();

tasksRouter
  .all("/*", authenticateToken)
  .post("/add/:listId", validateBody(titleTaskSchema), newTaskPost)
  .get("/unfinished/:listId", unfinishedTasksGet)
  .get("/finished/:listId", finishedTasksGet);

export { tasksRouter };
