import { prisma } from "@/config";

async function createTask(name: string, listId: number) {
  return prisma.tasks.create({ data: { list_id: listId, name, anotation: "", date: new Date() } });
}

async function findManyUnfinishedTasks(listId: number) {
  return prisma.tasks.findMany({ where: { list_id: listId, is_completed: false } });
}

const tasksRepository = { createTask, findManyUnfinishedTasks };

export default tasksRepository;
