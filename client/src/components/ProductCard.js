const router = require("express").Router();
const Order = require("../models/Order");

router.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

router.get("/", async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

module.exports = router;
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-lg hover:scale-105 transition">

      <img
        src={product.image}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-3 text-white">
        {product.name}
      </h2>

      <p className="text-purple-400 font-bold">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-purple-600 w-full mt-3 py-2 rounded-lg text-white hover:bg-purple-700"
      >
        🛒 Add to Cart
      </button>
    </div>
  );
          }
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-xl"
    >
      <img src={product.image} className="h-40 w-full rounded" />

      <h2 className="text-white mt-2">{product.name}</h2>
      <p className="text-purple-400">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="bg-purple-600 w-full mt-3 py-2 rounded"
      >
        Add to Cart
      </button>
    </motion.div>
  );
}
<Recommendations product={product} />
  import Recommendations from "./Recommendations";import { useEffect, useState } from "react";
