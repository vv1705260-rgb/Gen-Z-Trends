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
