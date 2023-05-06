import { AuthenticatedRequest } from "@/middlewares/authenticatedMiddleware";
import { newList, TitleListParams } from "@/services/listsService";
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
