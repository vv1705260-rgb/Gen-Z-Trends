import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // Fetch products
  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, []);

  // Filter + Search
  useEffect(() => {
    let data = products;

    if (category !== "All") {
      data = data.filter(p => p.category === category);
    }

    if (search) {
      data = data.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(data);
  }, [search, category, products]);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🛒 Nexus Store</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 rounded-lg bg-white/10 border border-white/20 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        {["All", "Electronics", "Clothing", "Accessories"].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg ${
              category === cat
                ? "bg-purple-600"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center text-gray-400 mt-20">
          Loading products...
        </div>
      ) : (
        <>
          {/* No Results */}
          {filtered.length === 0 ? (
            <div className="text-center text-gray-400 mt-20">
              No products found
            </div>
          ) : (
            /* Product Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filtered.map(product => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
    }
const addToCart = (product) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};
import { useEffect, useState } from "react";
import { fetchTrends } from "../services/api";

const Home = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTrends();
      setTrends(data);
    };

    loadData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-purple-500">
        Live Gen-Z Trends ⚡
      </h1>

      <div className="mt-6 grid gap-4">
        {trends.map((item) => (
          <div
            key={item.id}
            className="p-4 bg-[#111827] rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-400">{item.type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
