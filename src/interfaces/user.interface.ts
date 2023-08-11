import { z } from "zod";
import { createUserSchema, userSchema } from "../schemas/users.schemas";

export type TUser = z.infer<typeof userSchema>;
export type TCreateUser = z.infer<typeof createUserSchema>;
