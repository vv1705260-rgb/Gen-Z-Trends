import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

export const fetchTrends = async () => {
  const res = await API.get("/trends");
  return res.data;
};
