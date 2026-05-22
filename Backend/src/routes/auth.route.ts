import { Router } from "express";
import { register, login } from "../controllers/auth.controller";

const router = Router();

// POST /api/auth/register — public route
router.post("/register", register);

// POST /api/auth/login — public route
router.post("/login", login);

export default router;