import { z } from "zod";
import {
  contactSchema,
  createContactSchema,
} from "../schemas/contacts.schemas";

export type TContact = z.infer<typeof contactSchema>;
export type TCreateContact = z.infer<typeof createContactSchema>;
