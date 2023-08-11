import { Router } from "express";
import { ensureData } from "../middlewares/ensureData.middleware";
import { userSchema } from "../schemas/users.schemas";
import {
  createUserController,
  getAllUsersController,
  getUserContactsController,
  getUserController,
} from "../controllers/users.controllers";

export const userRoutes: Router = Router();

userRoutes.post("", ensureData(userSchema), createUserController);
userRoutes.get("", getAllUsersController);
userRoutes.get("/:id", getUserController);
userRoutes.get("/:id/contacts", getUserContactsController);
