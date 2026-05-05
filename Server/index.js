import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Gen-Z Trends API is running 🚀");
});

// Sample Trends API
app.get("/api/trends", (req, res) => {
  const trends = [
    { id: 1, title: "AI replacing jobs", type: "tech" },
    { id: 2, title: "Gen-Z fashion revival", type: "fashion" },
    { id: 3, title: "Viral meme culture", type: "social" }
  ];

  res.json(trends);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
