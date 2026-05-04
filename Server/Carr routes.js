const router = require("express").Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

module.exports = router;
