import { Router } from "express";
import { signUpPost } from "../controllers/authenticationController";
import { signUpSchema } from "./../schemas/authenticationSchema";
import { validateBody } from "../middlewares/validationMiddleware";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", validateBody(signUpSchema), signUpPost);

export { authenticationRouter };    
