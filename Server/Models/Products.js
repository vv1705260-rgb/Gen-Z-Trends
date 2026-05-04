const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  description: String
});

module.exports = mongoose.model("Product", productSchema);
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
  import Recommendations from "./Recommendations";
