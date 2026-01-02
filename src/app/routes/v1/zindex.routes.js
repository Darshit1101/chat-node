import { Router } from "express";
import authRouter from "./auth.routes.js";
import activeDevicesRouter from "./activeDevices.routes.js";
import chatRouter from "./chat.routes.js";

const v1Router = Router();
v1Router.use("/auth", authRouter);
v1Router.use("/active-device", activeDevicesRouter);
v1Router.use("/chat", chatRouter);

export default v1Router;
