import { Response } from "express";
import WealthProfile from "../models/wealthProfile.model";
import { AuthRequest } from "../middlewares/auth.middleware";

// SAVE OR UPDATE STEP 
export const saveStep = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;
    const { step, data } = req.body;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    if (!step || !data) {
      res.status(400).json({ message: "Step or data is important" });
      return;
    }


    const profile = await WealthProfile.findOneAndUpdate(
      { user: userId },
      {
        ...data,
        currentStep: step,
        user: userId,
      },
      {
        new: true,      
        upsert: true,   // if not find then create 
        runValidators: true,
      }
    );

    res.status(200).json({
      message: `Step ${step} saved successfully`,
      profile,
    });
  } catch (error) {
    console.error("SaveStep error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// SUBMIT FINAL FORM
export const submitProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const profile = await WealthProfile.findOneAndUpdate(
      { user: userId },
      { isCompleted: true, currentStep: 5 },
      { new: true }
    );

    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
      return;
    }

    res.status(200).json({
      message: "Profile submitted successfully",
      profile,
    });
  } catch (error) {
    console.error("SubmitProfile error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// GET PROFILE
export const getProfile = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const profile = await WealthProfile.findOne({ user: userId });

    if (!profile) {
      res.status(404).json({ message: "Profile not found" });
      return;
    }

    res.status(200).json({ profile });
  } catch (error) {
    console.error("GetProfile error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};