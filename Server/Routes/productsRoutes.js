const router = require("express").Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

module.exports = router;
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { id: 1, name: "Streetwear Hoodie", price: 999 },
    { id: 2, name: "Gen-Z Sneakers", price: 1999 }
  ]);
});

export default router;
