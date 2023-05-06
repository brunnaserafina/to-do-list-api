import tasksRepository from "../repositories/tasksRepository";

export async function newTask(name: string, listId: number) {
  await tasksRepository.createTask(name, listId);
}

export type TitleTaskParams = { name: string };
