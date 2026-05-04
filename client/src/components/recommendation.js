import { useEffect, useState } from "react";
import axios from "axios";

export default function Recommendations({ product }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.post("http://localhost:5000/api/recommend", {
      category: product.category,
      price: product.price
    })
    .then(res => setItems(res.data));
  }, [product]);

  return (
    <div className="mt-6">
      <h2 className="text-white text-lg mb-3">
        🔥 You may also like
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {items.map(p => (
          <div key={p._id} className="bg-white/10 p-3 rounded-lg">
            <img src={p.image} className="h-20 w-full object-cover rounded" />
            <p className="text-white text-sm mt-1">{p.name}</p>
            <p className="text-purple-400">₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import axios from "axios";

export default function Recommendations({ product }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.post("http://localhost:5000/api/recommend", {
      name: product.name,
      category: product.category,
      description: product.description
    })
    .then(res => {
      setItems(res.data);
      setLoading(false);
    });
  }, [product]);

  return (
    <div className="mt-6">
      <h2 className="text-white text-lg mb-3">
        🤖 AI Recommendations
      </h2>

      {loading ? (
        <p className="text-gray-400">Thinking...</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {items.map(p => (
            <div key={p._id} className="bg-white/10 p-3 rounded-lg">
              <img src={p.image} className="h-20 w-full rounded" />
              <p className="text-white text-sm">{p.name}</p>
              <p className="text-purple-400">₹{p.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
    }
