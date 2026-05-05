import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
      <h1 className="text-xl font-bold">🛒 Nexus Store</h1>

      <div className="relative">
        🛒
        <span className="absolute -top-2 -right-2 bg-purple-600 text-xs px-2 rounded-full">
          {cart.length}
        </span>
      </div>
    </div>
  );
}
