import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, setCart } = useCart();

  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 text-white min-h-screen bg-black">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div key={i} className="flex justify-between bg-white/10 p-3 rounded mb-2">
              <span>{item.name}</span>
              <span>₹{item.price}</span>

              <button
                onClick={() => removeItem(i)}
                className="text-red-400"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="mt-4 text-xl">Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}
