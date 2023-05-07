import { AuthenticatedRequest } from "@/middlewares/authenticatedMiddleware";
import { allLists, deleteList, newList, TitleListParams } from "@/services/listsService";
import { Response } from "express";
import httpStatus from "http-status";

export async function newListPost(req: AuthenticatedRequest, res: Response) {
  const { title } = req.body as TitleListParams;
  const { userId } = req;

  try {
    await newList({ title, userId });
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function allListsGet(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const lists = await allLists(userId);
    return res.status(httpStatus.OK).send(lists);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function listDelete(req: AuthenticatedRequest, res: Response) {
  const { listId } = req.params;

  try {
    await deleteList(Number(listId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
