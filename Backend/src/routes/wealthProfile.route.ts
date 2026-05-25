import { Router } from "express";
import { saveStep, submitProfile, getProfile } from "../controllers/wealthProfile.controller";
import { protect } from "../middlewares/auth.middleware";

const router = Router();


// GET /api/profile
router.get("/", protect, getProfile);

// POST /api/profile/save-step
router.post("/save-step", protect, saveStep);

// POST /api/profile/submit 
router.post("/submit", protect, submitProfile);

export default router;