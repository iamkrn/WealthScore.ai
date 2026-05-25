import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/auth.route";
import wealthProfileRoutes from "./routes/wealthProfile.route";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", wealthProfileRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "WealthScore API is running " });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;