import Joi from "joi";
import { TitleTaskParams } from "./../services/taskService";

export const titleTaskSchema = Joi.object<TitleTaskParams>({
  name: Joi.string().min(1).required(),
});
