import { Router } from "express";
import { ensureData } from "../middlewares/ensureData.middleware";
import { contactSchema } from "../schemas/contacts.schemas";
import {
  createContactController,
  getAllContactsController,
} from "../controllers/contacts.controller";

export const contactRoutes: Router = Router();

contactRoutes.post("", ensureData(contactSchema), createContactController);
contactRoutes.get("", getAllContactsController);
