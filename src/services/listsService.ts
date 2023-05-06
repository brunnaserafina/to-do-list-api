import listRepository from "@/repositories/listsRepository";

export async function newList(params: TitleListParams): Promise<void> {
  const { title, userId } = params;

  listRepository.createList(title, userId);
}

export async function allLists(userId: number) {
  const listsByUser = listRepository.findManyListsByUserId(userId);

  return listsByUser;
}

export type TitleListParams = { title: string; userId: number };
