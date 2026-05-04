const router = require("express").Router();
const Product = require("../models/Product");

// Simple AI-like recommendation logic
router.post("/", async (req, res) => {
  const { category, price } = req.body;

  const recommendations = await Product.find({
    category,
    price: { $lte: price + 500 }
  }).limit(4);

  res.json(recommendations);
});

module.exports = router;
