import { prisma } from "@/config";

async function createTask(name: string, listId: number) {
  return prisma.tasks.create({ data: { list_id: listId, name, anotation: "", date: new Date() } });
}

async function findManyUnfinishedTasks(listId: number) {
  return prisma.tasks.findMany({ where: { list_id: listId, is_completed: false } });
}

async function findManyFinishedTasks(listId: number) {
  return prisma.tasks.findMany({ where: { list_id: listId, is_completed: true } });
}

async function updateFinishedTask(taskId: number) {
  return prisma.tasks.update({ where: { id: taskId }, data: { is_completed: true } });
}

async function deleteTask(listId: number) {
  return prisma.tasks.deleteMany({ where: { list_id: listId } });
}

async function getTasksBySearch(search: string, userId: number) {
  return prisma.tasks.findMany({
    where: { name: { contains: search.toLowerCase(), mode: "insensitive" }, lists: { user_id: userId } },
    include: { lists: true },
  });
}

const tasksRepository = {
  createTask,
  findManyUnfinishedTasks,
  findManyFinishedTasks,
  updateFinishedTask,
  deleteTask,
  getTasksBySearch,
};

export default tasksRepository;
