import getChatHistory from "../../controllers/v1/chat/getChatHistory.controller.js";
import AuthMiddleware from "../../../middleware/auth.middleware.js";
import { Router } from "express";

const router = Router();
router.get("/:receiverId", AuthMiddleware, getChatHistory);

export default router;
