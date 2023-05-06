import { Router } from "express";
import { signInPost, signUpPost } from "../controllers/authenticationController";
import { signInSchema, signUpSchema } from "./../schemas/authenticationSchema";
import { validateBody } from "../middlewares/validationMiddleware";

const authenticationRouter = Router();

authenticationRouter
  .post("/sign-up", validateBody(signUpSchema), signUpPost)
  .post("/sign-in", validateBody(signInSchema), signInPost);

export { authenticationRouter };
