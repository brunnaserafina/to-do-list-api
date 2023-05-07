import { authenticateToken } from "../middlewares/authenticatedMiddleware";
import { Router } from "express";
import { signInPost, signOutPut, signUpPost } from "../controllers/authenticationController";
import { signInSchema, signUpSchema } from "./../schemas/authenticationSchema";
import { validateBody } from "../middlewares/validationMiddleware";

const authenticationRouter = Router();

authenticationRouter
  .post("/sign-up", validateBody(signUpSchema), signUpPost)
  .post("/sign-in", validateBody(signInSchema), signInPost)
  .put("/sign-out", authenticateToken, signOutPut);

export { authenticationRouter };
