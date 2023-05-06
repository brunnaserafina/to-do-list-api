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

export type TitleTaskParams = { name: string };
