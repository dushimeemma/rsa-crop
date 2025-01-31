import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Add crop
app.post("/crops", async (req, res) => {
  const crop = await prisma.crop.create({ data: req.body });
  res.json(crop);
});

// Get all crops
app.get("/crops", async (req, res) => {
  const crops = await prisma.crop.findMany();
  res.json(crops);
});

// Search crops by name
app.get("/crops/search", async (req, res) => {
  const { name } = req.query;
  const crops = await prisma.crop.findMany({
    where: { name: { contains: String(name), mode: "insensitive" } },
  });
  res.json(crops);
});

// Check harvest readiness
app.get("/crops/filter", async (req, res) => {
  const today = new Date();
  const crops = await prisma.crop.findMany();
  const filtered = crops.filter((crop) => {
    const diff = Math.abs(
      new Date(crop.expectedHarvest).getTime() - today.getTime()
    );
    return diff <= 7 * 24 * 60 * 60 * 1000;
  });
  res.json(filtered);
});

app.listen(5001, () => console.log("Server running on port 5001"));
