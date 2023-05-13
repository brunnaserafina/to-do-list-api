import listRepository from "@/repositories/listsRepository";
import tasksRepository from "@/repositories/tasksRepository";

export async function newList(params: TitleListParams): Promise<void> {
  const { title, userId } = params;

  await listRepository.createList(title, userId);
}

export async function allLists(userId: number) {
  const listsByUser = await listRepository.findManyListsByUserId(userId);

  return listsByUser;
}

export async function deleteList(listId: number) {
  await tasksRepository.deleteTask(listId);
  await listRepository.deleteListByListId(listId);
}

export async function editList(listId: number, title: string) {
  await listRepository.editListByListId(listId, title);
}

export type TitleListParams = { title: string; userId: number };
