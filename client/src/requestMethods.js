import axios from "axios";
// "http://localhost:5000/api"
const BASE_URL = "https://ec-togeoki-6tzb.vercel.app/api";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accesstoken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
