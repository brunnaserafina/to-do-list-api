import { prisma } from "@/config";

async function createList(title: string, userId: number) {
  return prisma.lists.create({ data: { title, user_id: userId } });
}

async function findManyListsByUserId(userId: number) {
  return prisma.lists.findMany({ where: { user_id: userId } });
}

const listRepository = { createList, findManyListsByUserId };

export default listRepository;
