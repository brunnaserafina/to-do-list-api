import listRepository from "@/repositories/listsRepository";
import tasksRepository from "@/repositories/tasksRepository";

export async function newList(title: string, userId: number, order: number) {
  await listRepository.createList(title, userId, order);
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

export async function editOrderByListId(listId: number, order: number) {
  await listRepository.updateOrderByListId(listId, order);
}

export type NewListParams = { title: string; order: number };
export type TitleListParams = { title: string };
export type OrderListParams = { order: number };
