import axios from "axios";

const api = axios.create({
  baseURL: "https://notepilot-backend.onrender.com/api"
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Handle access token expiry (401)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL || 'https://notepilot-backend.onrender.com/api'}/refresh`,
          {},
          { withCredentials: true }
        );

        const newToken = res.data.token;
        localStorage.setItem('token', newToken);
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest); // retry original request
      } catch (err) {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
