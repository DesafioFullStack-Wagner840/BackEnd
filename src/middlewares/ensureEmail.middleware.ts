import { NextFunction, Request } from "express";
import { TCreateUser } from "../interfaces/user.interface";
import { Repository } from "typeorm";
import { User } from "../entities/users.entity";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

export const ensureEmailIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const user: TCreateUser = req.body;

  const userRepositoy: Repository<User> = AppDataSource.getRepository(User);

  if (!user.email) {
    next();
  }

  const emailFound = await userRepositoy.findOneBy({ email: user.email });
  if (emailFound) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
