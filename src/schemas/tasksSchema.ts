import Joi from "joi";
import { NameTaskParams, NewTaskParams, OrderTaskParams, AnnotationAndDateParams } from "./../services/taskService";

export const nameTaskSchema = Joi.object<NameTaskParams>({
  name: Joi.string().min(1).required(),
});

export const newTaskSchema = Joi.object<NewTaskParams>({
  name: Joi.string().min(1).required(),
  order: Joi.number().required(),
});

export const orderTaskSchema = Joi.object<OrderTaskParams>({
  order: Joi.number().required(),
});

export const annotationAndDateTaskSchema = Joi.object<AnnotationAndDateParams>({
  annotation: Joi.string().required(),
  date: Joi.date() || null,
});
