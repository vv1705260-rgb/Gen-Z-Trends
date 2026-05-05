const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// register
router.post("/register", async (req, res) => {
  const hashed = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    email: req.body.email,
    password: hashed
  });

  res.json(user);
});

// login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const match = await bcrypt.compare(req.body.password, user.password);

  if (!match) return res.status(400).json("Invalid");

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
});

module.exports = router;
import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  res.json({ message: "Login API working" });
});

router.post("/register", (req, res) => {
  res.json({ message: "Register API working" });
});

export default router;
