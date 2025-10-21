import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./db.js";
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

// Root route
app.get("/", (req, res) => {
  res.send({ message: "✅ ToDo API running successfully" });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

