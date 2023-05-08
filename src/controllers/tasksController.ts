import {
  allTasksFinished,
  allTasksUnfinished,
  editTaskFinished,
  getTaskById,
  newTask,
  searchTask,
  TitleTaskParams,
} from "./../services/taskService";
import { AuthenticatedRequest } from "@/middlewares/authenticatedMiddleware";
import { Response } from "express";
import httpStatus from "http-status";

export async function newTaskPost(req: AuthenticatedRequest, res: Response) {
  const { name } = req.body as TitleTaskParams;
  const { listId } = req.params;

  try {
    await newTask(name, Number(listId));
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function unfinishedTasksGet(req: AuthenticatedRequest, res: Response) {
  const { listId } = req.params;

  try {
    const allTasks = await allTasksUnfinished(Number(listId));
    return res.status(httpStatus.OK).send(allTasks);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function finishedTasksGet(req: AuthenticatedRequest, res: Response) {
  const { listId } = req.params;

  try {
    const tasksFinished = await allTasksFinished(Number(listId));
    return res.status(httpStatus.OK).send(tasksFinished);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function editTasksPut(req: AuthenticatedRequest, res: Response) {
  const { taskId } = req.params;

  try {
    await editTaskFinished(Number(taskId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function getSearchTasks(req: AuthenticatedRequest, res: Response) {
  const { search } = req.query as { search: string };
  const { userId } = req;

  if (!search) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }

  const searchLowerCase = search.toLowerCase();

  try {
    const tasks = await searchTask(searchLowerCase, userId);
    return res.status(httpStatus.OK).send({ tasks });
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function getTask(req: AuthenticatedRequest, res: Response) {
  const { taskId } = req.params;

  try {
    const findTask = await getTaskById(Number(taskId));
    return res.status(httpStatus.OK).send([findTask]);
  } catch (error) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }
}
