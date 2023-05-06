import { Request, Response } from "express";
import httpStatus from "http-status";
import { signIn, signUp, SignUpParams, SignInParams } from "./../services/authenticationService";

export async function signUpPost(req: Request, res: Response) {
  const { name, email, password } = req.body as SignUpParams;

  try {
    await signUp({ name, email, password });
    return res.status(httpStatus.CREATED).send({});
  } catch (error) {
    if (error.name === "invalidDataError") {
      return res.sendStatus(httpStatus.CONFLICT);
    }
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function signInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const response = await signIn({ email, password });
    return res.status(httpStatus.CREATED).send(response);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
