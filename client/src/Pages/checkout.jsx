export default function Checkout() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded">
        Place Order
      </button>
    </div>
  );
}
import { useCart } from "../context/CartContext";
import axios from "axios";

export default function Checkout() {
  const { cart, setCart } = useCart();

  const placeOrder = async () => {
    const total = cart.reduce((a, b) => a + b.price, 0);

    await axios.post("http://localhost:5000/api/orders", {
      items: cart,
      total
    });

    alert("Order placed successfully!");
    setCart([]);
  };

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <button
        onClick={placeOrder}
        className="bg-green-600 px-4 py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}
