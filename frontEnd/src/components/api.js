import axios from "axios";
const API = axios.create({ baseURL: "https://69e5d6c44a15e408fe4a0628-api-capstone.myanatomy.ai" });


API.interceptors.request.use((req) => {
  const user = localStorage.getItem("user");
  if (user) {
    req.headers.Authorization = `Bearer ${JSON.parse(user).token}`;
  }
  return req;
});
export const register = (formData) => API.post("/api/auth/register", formData);
