import { NextFunction, Request, Response } from "express";
import { TCreateContact } from "../interfaces/contacts.interface";
import { AppDataSource } from "../data-source";
import { Contacts } from "../entities/contacts.entity";
import { Repository } from "typeorm";
import { AppError } from "../error";

export const ensureContactIsUnique = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const contacts: TCreateContact = req.body;

  const contactRepositoy: Repository<Contacts> =
    AppDataSource.getRepository(Contacts);

  if (!contacts.email) {
    next();
  }

  const contactFound = await contactRepositoy.findOneBy({
    email: contacts.email,
  });

  if (contactFound) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
