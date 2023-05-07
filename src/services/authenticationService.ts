import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { invalidDataError } from "../errors/invalidDataError";
import { unauthorizedError } from "../errors/unauthorizedError";
import authenticationRepository from "../repositories/authenticationRepository";

export async function signUp(params: SignUpParams) {
  const { name, email, password } = params;

  const emailAlreadyExists = await authenticationRepository.findUniqueEmail(email);

  if (emailAlreadyExists) {
    throw invalidDataError;
  } else {
    await createUser({ name, email, password });
  }
}

export async function signIn(params: SignInParams) {
  const { email, password } = params;

  const user = await authenticationRepository.findUniqueEmail(email);

  if (user) {
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) throw unauthorizedError();
  } else {
    throw invalidDataError;
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

  await authenticationRepository.createSession(user.id, token);

  return {
    name: user.name,
    email: user.email,
    token,
  };
}

export async function finalizeSession(token: string) {
  const findToken = await authenticationRepository.findToken(token);

  await authenticationRepository.updateSessionToFinish(findToken.id);
}

async function createUser({ name, email, password }: SignUpParams) {
  const encryptedPassword = await bcrypt.hash(password, 12);

  return authenticationRepository.createUser(name, email, encryptedPassword);
}

export type SignUpParams = { name: string; email: string; password: string };

export type SignInParams = { email: string; password: string };
