import tasksRepository from "../repositories/tasksRepository";

export async function newTask(name: string, listId: number) {
  await tasksRepository.createTask(name, listId);
}

export async function allTasksUnfinished(listId: number) {
  const tasks = await tasksRepository.findManyUnfinishedTasks(listId);

  return tasks;
}

export async function allTasksFinished(listId: number) {
  const tasks = await tasksRepository.findManyFinishedTasks(listId);

  return tasks;
}

export async function editTaskFinished(taskId: number) {
  await tasksRepository.updateFinishedTask(taskId);
}

export async function searchTask(search: string, userId: number) {
  const tasks = await tasksRepository.getTasksBySearch(search, userId);

  return tasks;
}

export async function getTaskById(taskId: number) {
  const findTask = await tasksRepository.findTaskById(taskId);
  return findTask;
}

export async function editAnotationByTaskId(taskId: number, anotation: string) {
  await tasksRepository.updateAnotationByTaskId(taskId, anotation);
}

export async function deleteTaskById(taskId: number) {
  await tasksRepository.deleteTaskByTaskId(taskId);
}

export type TitleTaskParams = { name: string };
