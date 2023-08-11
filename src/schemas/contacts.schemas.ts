import { z } from "zod";

export const contactSchema = z.object({
  id: z.number().optional(),
  userId: z.number(),
  fullName: z.string().min(3).max(45),
  email: z.string().email(),
  phone: z.number().int(),
  createdAt: z.date().optional(),
});

export const createContactSchema = z.object({
  userId: z.number(),
  fullName: z.string().min(3).max(45),
  email: z.string().email(),
  phone: z.number().int(),
});

export const contactResponseSchema = z.object({
  id: z.number().optional(),
  userId: z.number(),
  fullName: z.string().min(3).max(45),
  email: z.string().email(),
  phone: z.number().int(),
  createdAt: z.date().optional(),
});

export const getContactsResponse = contactResponseSchema.array();
