import bcrypt from "bcrypt";
import { invalidDataError } from "../errors/invalidDataError";
import authenticationRepository from "@/repositories/authenticationRepository";

export async function signUp(params: SignUpParams) {
  const { name, email, password } = params;

  const emailAlreadyExists = await authenticationRepository.findUniqueEmail(email);

  if (emailAlreadyExists) {
    throw invalidDataError;
  } else {
    await createUser({ name, email, password });
  }
}

async function createUser({ name, email, password }: SignUpParams) {
  const encryptedPassword = await bcrypt.hash(password, 12);

  return authenticationRepository.createUser(name, email, encryptedPassword);
}

export type SignUpParams = { name: string; email: string; password: string };
