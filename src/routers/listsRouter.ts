import { Router } from "express";
import { validateBody } from "@/middlewares/validationMiddleware";
import { allListsGet, editOrderList, editTitleList, listDelete, newListPost } from "@/controllers/listsController";
import { authenticateToken } from "@/middlewares/authenticatedMiddleware";
import { newListSchema, orderListSchema, titleListSchema } from "@/schemas/listsSchema";

const listsRouter = Router();

listsRouter
  .all("/*", authenticateToken)
  .post("/add", validateBody(newListSchema), newListPost)
  .get("/all", allListsGet)
  .delete("/:listId", listDelete)
  .put("/:listId", validateBody(titleListSchema), editTitleList)
  .put("/order/:listId", validateBody(orderListSchema), editOrderList);

export { listsRouter };
