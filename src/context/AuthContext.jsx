"use client";

import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("gobeng_token");
        if (token) {
          // Set auth header for all requests
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          // Get user data
          const response = await api.get("/auth/me");
          setUser(response.data?.user || response.data);
        }
      } catch (error) {
        console.error("Auth error:", error);
        localStorage.removeItem("gobeng_token");
        api.defaults.headers.common["Authorization"] = "";
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await api.post("/auth/login", { email, password });
      const { token, user } = response.data;

      // Save token to localStorage
      localStorage.setItem("gobeng_token", token);

      // Set auth header for all requests
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(user);
      toast.success(`Selamat datang, ${user.name}!`);
      return user;
    } catch (error) {
      console.error("Login error:", error);
      toast.error(
        error.response?.data?.message || "Login gagal. Silakan coba lagi."
      );
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    try {
      const response = await api.post("/auth/register", userData);
      toast.success("Registrasi berhasil! Silakan login.");
      return response.data;
    } catch (error) {
      console.error("Register error:", error);
      toast.error(
        error.response?.data?.message || "Registrasi gagal. Silakan coba lagi."
      );
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("gobeng_token");
    api.defaults.headers.common["Authorization"] = "";
    setUser(null);
    toast.info("Anda telah keluar dari sistem");
  };

  const updateProfile = async (userData) => {
    setIsLoading(true);
    try {
      const response = await api.put("/users/profile", userData);
      setUser({ ...user, ...response.data });
      toast.success("Profil berhasil diperbarui!");
      return response.data;
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error(
        error.response?.data?.message ||
          "Gagal memperbarui profil. Silakan coba lagi."
      );
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
