import { prisma } from "@/config";

async function createList(title: string, userId: number, order: number) {
  return prisma.lists.create({ data: { title, user_id: userId, order } });
}

async function findManyListsByUserId(userId: number) {
  return prisma.lists.findMany({ where: { user_id: userId }, orderBy: { order: "asc" } });
}

async function deleteListByListId(listId: number) {
  return prisma.lists.delete({ where: { id: listId } });
}

async function editListByListId(listId: number, title: string) {
  return prisma.lists.update({ where: { id: listId }, data: { title } });
}

async function updateOrderByListId(listId: number, order: number) {
  return prisma.lists.update({ where: { id: listId }, data: { order } });
}

const listRepository = { createList, findManyListsByUserId, deleteListByListId, editListByListId, updateOrderByListId };

export default listRepository;
