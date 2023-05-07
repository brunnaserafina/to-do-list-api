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

async function findToken(token: string) {
  return prisma.sessions.findFirst({
    where: {
      token,
    },
  });
}

async function updateSessionToFinish(sessionId: number) {
  return prisma.sessions.update({
    where: { id: sessionId },
    data: { active: false },
  });
}

const authenticationRepository = {
  createUser,
  findUniqueEmail,
  createSession,
  findToken,
  updateSessionToFinish,
};

export default authenticationRepository;
