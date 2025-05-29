import axios from "axios";

// Use Vite-compatible env variable
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("gobeng_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("gobeng_token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// API Services
const authService = {
  login: (credentials) => api.post("/auth/login", credentials),
  register: (userData) => api.post("/auth/register", userData),
  me: () => api.get("/auth/me"),
};

const userService = {
  updateProfile: (userData) => api.put("/users/profile", userData),
  updateVehicle: (vehicleData) => api.put("/users/vehicle", vehicleData),
  getNotifications: () => api.get("/users/notifications"),
};

const reservationService = {
  create: (data) => api.post("/reservations", data),
  getAll: () => api.get("/reservations"),
  getById: (id) => api.get(`/reservations/${id}`),
  cancel: (id) => api.put(`/reservations/${id}/cancel`),
};

const workshopService = {
  getAll: () => api.get("/workshops"),
  getNearby: (lat, lng) => api.get(`/workshops/nearby?lat=${lat}&lng=${lng}`),
  getById: (id) => api.get(`/workshops/${id}`),
};

const transactionService = {
  getAll: () => api.get("/transactions"),
  getById: (id) => api.get(`/transactions/${id}`),
  create: (data) => api.post("/transactions", data),
};

const inventoryService = {
  getAll: () => api.get("/inventory"),
  getById: (id) => api.get(`/inventory/${id}`),
  create: (data) => api.post("/inventory", data),
  update: (id, data) => api.put(`/inventory/${id}`, data),
  delete: (id) => api.delete(`/inventory/${id}`),
};

export default {
  ...api,
  auth: authService,
  user: userService,
  reservation: reservationService,
  workshop: workshopService,
  transaction: transactionService,
  inventory: inventoryService,
};
