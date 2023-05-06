import { titleListSchema } from "./../schemas/listsSchema";
import { Router } from "express";
import { validateBody } from "@/middlewares/validationMiddleware";
import { newListPost } from "@/controllers/listsController";
import { authenticateToken } from "@/middlewares/authenticatedMiddleware";

const listsRouter = Router();

listsRouter.all("/*", authenticateToken).post("/add", validateBody(titleListSchema), newListPost);

export { listsRouter };
