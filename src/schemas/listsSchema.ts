import Joi from "joi";
import { TitleListParams } from "@/services/listsService";

export const titleListSchema = Joi.object<TitleListParams>({
  title: Joi.string().min(1).required(),
});
