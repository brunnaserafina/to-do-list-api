import tasksRepository from "../repositories/tasksRepository";

export async function newTask(name: string, listId: number, order: number) {
  await tasksRepository.createTask(name, listId, order);
}

export async function allTasksUnfinished(listId: number) {
  const tasks = await tasksRepository.findManyUnfinishedTasks(listId);

  return tasks;
}

export async function allTasksFinished(listId: number) {
  const tasks = await tasksRepository.findManyFinishedTasks(listId);

  return tasks;
}

export async function editTaskFinished(taskId: number, order: number) {
  await tasksRepository.updateFinishedTask(taskId, order);
}

export async function editTaskUnfinished(taskId: number, order: number) {
  await tasksRepository.updateUnfinishedTask(taskId, order);
}

export async function searchTask(search: string, userId: number) {
  const tasks = await tasksRepository.getTasksBySearch(search, userId);

  return tasks;
}

export async function getTaskById(taskId: number) {
  const findTask = await tasksRepository.findTaskById(taskId);
  return findTask;
}

export async function editAnotationByTaskId(taskId: number, anotation: string, date: Date) {
  await tasksRepository.updateAnotationByTaskId(taskId, anotation, date);
}

export async function deleteTaskById(taskId: number) {
  await tasksRepository.deleteTaskByTaskId(taskId);
}

export async function editTaskNameById(taskId: number, name: string) {
  await tasksRepository.editTaskNameByTaskId(taskId, name);
}

export async function editOrderTaskByTaskId(taskId: number, order: number) {
  await tasksRepository.updateOrderTaskByTaskId(taskId, order);
}

export type NewTaskParams = { name: string; order: number };
export type NameTaskParams = { name: string };
export type OrderTaskParams = { order: number };
export type AnnotationAndDateParams = { annotation: string; date: Date };
