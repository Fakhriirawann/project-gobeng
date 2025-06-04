"use client";

import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../FireBase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cek user dari localStorage
    const savedUser = localStorage.getItem("gobeng_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const q = query(collection(db, "users"), where("email", "==", email));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        toast.error("Email tidak ditemukan");
        throw new Error("Email tidak ditemukan");
      }

      const docRef = snapshot.docs[0];
      const userData = docRef.data();

      if (userData.password !== password) {
        toast.error("Password salah");
        throw new Error("Password salah");
      }

      // ✅ Update lastLogin ke Firestore
      const userDoc = doc(db, "users", docRef.id);
      await updateDoc(userDoc, {
        lastLogin: new Date().toISOString(),
      });

      const finalUser = { id: docRef.id, ...userData };

      localStorage.setItem("gobeng_user", JSON.stringify(finalUser));
      setUser(finalUser);

      toast.success(`Selamat datang, ${userData.name || "pengguna"}!`);
      return finalUser;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData) => {
    setIsLoading(true);
    try {
      // Pastikan email belum dipakai
      const q = query(
        collection(db, "users"),
        where("email", "==", userData.email)
      );
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        toast.error("Email sudah digunakan");
        throw new Error("Email sudah digunakan");
      }

      const newUserRef = await addDoc(collection(db, "users"), userData);
      toast.success("Registrasi berhasil! Silakan login.");
      return { id: newUserRef.id, ...userData };
    } catch (error) {
      console.error("Register error:", error);
      toast.error(error.message || "Registrasi gagal.");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("gobeng_user");
    setUser(null);
    toast.info("Anda telah keluar dari sistem");
  };

  const updateProfile = async (updatedData) => {
    setIsLoading(true);
    try {
      const userId = user?.id;
      if (!userId) throw new Error("User tidak ditemukan");

      const userDoc = doc(db, "users", userId);
      await updateDoc(userDoc, updatedData);

      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      localStorage.setItem("gobeng_user", JSON.stringify(updatedUser));
      toast.success("Profil berhasil diperbarui!");
      return updatedUser;
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error(error.message || "Gagal memperbarui profil");
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
