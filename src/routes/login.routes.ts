import { Router } from "express";
import { ensureData } from "../middlewares/ensureData.middleware";
import { loginSchema } from "../schemas/login.schema";
import { createLoginController } from "../controllers/login.controller";

export const loginRoutes: Router = Router();

loginRoutes.post("", ensureData(loginSchema), createLoginController);
