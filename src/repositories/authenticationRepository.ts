import { prisma } from "@/config";

async function createUser(name: string, email: string, password: string) {
  return prisma.users.create({ data: { name, email, password } });
}

async function findUniqueEmail(email: string) {
  return prisma.users.findFirst({ where: { email } });
}

const authenticationRepository = {
  createUser,
  findUniqueEmail,
};

export default authenticationRepository;
