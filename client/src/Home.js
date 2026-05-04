export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-xl rounded-xl p-4 hover:scale-105 transition">
      <img src={product.image} className="h-40 w-full object-cover rounded" />

      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">₹{product.price}</p>

      <button className="bg-purple-600 text-white px-4 py-2 rounded mt-2">
        Add to Cart
      </button>
    </div>
  );
}
