import { Router } from "express";
import { register, login } from "../controllers/auth.controller";
import {protect} from "../middlewares/auth.middleware"
const router = Router();

// POST /api/auth/register
router.post("/register",protect, register);

// POST /api/auth/login
router.post("/login",protect, login);

export default router;