import Joi from "joi";
import { NewListParams, TitleListParams, OrderListParams } from "@/services/listsService";

export const newListSchema = Joi.object<NewListParams>({
  title: Joi.string().min(1).required(),
  order: Joi.number().required(),
});

export const titleListSchema = Joi.object<TitleListParams>({
  title: Joi.string().min(1).required(),
});

export const orderListSchema = Joi.object<OrderListParams>({
  order: Joi.number().required(),
});
