import { prisma } from "@/config";

async function createUser(name: string, email: string, password: string) {
  return prisma.users.create({ data: { name, email, password } });
}

async function findUniqueEmail(email: string) {
  return prisma.users.findFirst({ where: { email } });
}

async function createSession(userId: number, token: string) {
  return prisma.sessions.create({ data: { user_id: userId, token } });
}

const authenticationRepository = {
  createUser,
  findUniqueEmail,
  createSession
};

export default authenticationRepository;
