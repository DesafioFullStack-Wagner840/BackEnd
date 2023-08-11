import { z } from "zod";
import { contactSchema } from "./contacts.schemas";

export const userSchema = z.object({
  id: z.number().optional(),
  fullName: z.string().min(3).max(45),
  email: z.string().email(),
  phone: z.number().int(),
  password: z.string().min(8).max(120),
  createdAt: z.date().optional(),
  contacts: z.array(contactSchema).optional(),
});

export const createUserSchema = z.object({
  fullName: z.string().min(3).max(45),
  email: z.string().email(),
  phone: z.number().int(),
  password: z.string().min(8).max(120),
});

export const userResponseSchema = userSchema.omit({
  password: true,
});

export const getUsersResponse = userResponseSchema.array();
