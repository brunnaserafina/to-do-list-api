import { prisma } from "@/config";

async function createTask(name: string, listId: number, order: number) {
  return prisma.tasks.create({ data: { list_id: listId, name, annotation: "", order } });
}

async function findManyUnfinishedTasks(listId: number) {
  return prisma.tasks.findMany({ where: { list_id: listId, is_completed: false }, orderBy: { order: "asc" } });
}

async function findManyFinishedTasks(listId: number) {
  return prisma.tasks.findMany({ where: { list_id: listId, is_completed: true }, orderBy: { order: "asc" } });
}

async function updateFinishedTask(taskId: number, order: number) {
  return prisma.tasks.update({ where: { id: taskId }, data: { is_completed: true, order } });
}

async function updateUnfinishedTask(taskId: number, order: number) {
  return prisma.tasks.update({ where: { id: taskId }, data: { is_completed: false, order } });
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

async function findTaskById(taskId: number) {
  return prisma.tasks.findUnique({ where: { id: taskId } });
}

async function updateAnotationByTaskId(taskId: number, annotation: string, date: Date) {
  return prisma.tasks.update({ where: { id: taskId }, data: { annotation, date } });
}

async function deleteTaskByTaskId(taskId: number) {
  return prisma.tasks.delete({ where: { id: taskId } });
}

async function editTaskNameByTaskId(taskId: number, name: string) {
  return prisma.tasks.update({ where: { id: taskId }, data: { name } });
}

async function updateOrderTaskByTaskId(taskId: number, order: number) {
  return prisma.tasks.update({ where: { id: taskId }, data: { order } });
}

const tasksRepository = {
  createTask,
  findManyUnfinishedTasks,
  findManyFinishedTasks,
  updateFinishedTask,
  deleteTask,
  getTasksBySearch,
  findTaskById,
  updateAnotationByTaskId,
  deleteTaskByTaskId,
  updateUnfinishedTask,
  editTaskNameByTaskId,
  updateOrderTaskByTaskId,
};

export default tasksRepository;
