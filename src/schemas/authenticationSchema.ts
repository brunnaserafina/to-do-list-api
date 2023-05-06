import Joi from "joi";
import { SignInParams, SignUpParams } from "@/services/authenticationService";

export const signUpSchema = Joi.object<SignUpParams>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const signInSchema = Joi.object<SignInParams>({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
