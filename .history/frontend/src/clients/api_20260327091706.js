import axios from "axios";

// ✅ Vite requires VITE_ prefix
const BASE_URL = import.meta.env.VITE_BASE_URL;

// get token
export const token = () => localStorage.getItem("token");

// user client
export const userClient = axios.create({
  baseURL: `${BASE_URL}/api/users`,
});

// post client
export const postClient = axios.create({
  baseURL: `${BASE_URL}/api/posts`,
});

// attach token dynamically
[userClient, postClient].forEach((client) => {
  client.interceptors.request.use((req) => {
    const t = token();
    if (t) {
      req.headers.Authorization = `Bearer ${t}`;
    }
    return req;
  });
});
