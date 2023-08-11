import { Request, Response } from "express";
import { TCreateUser, TUser } from "../interfaces/user.interface";
import { getOneServiceUser } from "../services/users/getOneServiceUser.service";
import { getUserContactServiceUser } from "../services/users/getUserContactServiceUser.service";
import { createServiceUser } from "../services/users/createUsers.service";
import { getAllServiceUsers } from "../services/users/getUsers.service";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: TCreateUser = req.body;

  const user: TUser = await createServiceUser(data);

  return res.status(201).json(user);
};

export const getAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TUser[] = await getAllServiceUsers();

  return res.status(200).json(users);
};

export const getUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = Number(req.params.id);

  const user: TUser = await getOneServiceUser(id);

  return res.status(200).json(user);
};

export const getUserContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = Number(req.params.id);

  const userContacts = await getUserContactServiceUser(id);

  return res.status(200).json(userContacts);
};
