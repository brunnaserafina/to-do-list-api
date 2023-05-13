import { prisma } from "@/config";

async function createList(title: string, userId: number) {
  return prisma.lists.create({ data: { title, user_id: userId } });
}

async function findManyListsByUserId(userId: number) {
  return prisma.lists.findMany({ where: { user_id: userId } });
}

async function deleteListByListId(listId: number) {
  return prisma.lists.delete({ where: { id: listId } });
}

async function editListByListId(listId: number, title: string) {
  return prisma.lists.update({ where: { id: listId }, data: { title } });
}

const listRepository = { createList, findManyListsByUserId, deleteListByListId, editListByListId };

export default listRepository;
