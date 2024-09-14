import axios from "axios";

const api = axios.create({
  baseURL: "http://26.110.70.236:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
