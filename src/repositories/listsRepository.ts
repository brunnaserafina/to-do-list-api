import { prisma } from "@/config";

async function createList(title: string, userId: number) {
  return prisma.lists.create({ data: { title, user_id: userId } });
}

const listRepository = { createList };

export default listRepository;
