import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleError } from "./error";
import { contactRoutes } from "./routes/contacts.routes";
import { userRoutes } from "./routes/users.routes";
import { loginRoutes } from "./routes/login.routes";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);
app.use("/login", loginRoutes);

app.use(handleError);

export default app;
