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
const router = require("express").Router();
const axios = require("axios");
const Product = require("../models/Product");

router.post("/", async (req, res) => {
  try {
    const { name, category, description } = req.body;

    // 🔥 AI prompt
    const prompt = `Suggest 4 similar product names for:
    Name: ${name}
    Category: ${category}
    Description: ${description}`;

    const aiRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_KEY}`
        }
      }
    );

    const aiText = aiRes.data.choices[0].message.content;

    // 🔍 Match products from DB (simple logic)
    const products = await Product.find({
      name: { $regex: aiText, $options: "i" }
    }).limit(4);

    res.json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json("AI error");
  }
});

module.exports = router;
