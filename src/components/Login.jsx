"use client";

import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash, FaLock, FaEnvelope } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from location state or default to dashboard
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const user = await login(email, password);

      // Redirect based on user role
      if (user.role === "kasir") {
        navigate("/kasir-dashboard");
      } else if (user.role === "mitra") {
        navigate("/mitra-dashboard");
      } else if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (error) {
      console.error("Login error:", error);
      // Error is already handled in AuthContext with toast
    } finally {
      setIsLoading(false);
    }
  };

  // For demo purposes - quick login buttons
  const handleDemoLogin = (role) => {
    let demoCredentials = {};

    switch (role) {
      case "mitra":
        demoCredentials = { email: "bmp@gobeng.com", password: "bmp123" };
        break;
      case "kasir":
        demoCredentials = { email: "ridho@gobeng.com", password: "kasir123" };
        break;
      case "admin":
        demoCredentials = { email: "fakhri@gobeng.com", password: "fakhri123" };
        break;
      case "user":
        demoCredentials = { email: "rio@gobeng.com", password: "rio123" };
        break;
      default:
        return;
    }

    setEmail(demoCredentials.email);
    setPassword(demoCredentials.password);

    // Optional: auto-submit the form
    // login(demoCredentials.email, demoCredentials.password)
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-orange-400 to-orange-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-orange-400 opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md w-full"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">GB</span>
              </div>
            </motion.div>
            <h1 className="text-3xl font-bold text-orange-400 dark:text-orange-400 mb-2">
              GoBeng
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Solusi Bengkel Cerdas, Dimanapun Anda Berada
            </p>
          </div>

          {/* Demo Accounts Info */}
          <div className="bg-orange-50 dark:bg-orange-400/30 rounded-lg p-4 mb-6 text-sm">
            <h3 className="font-semibold text-orange-400 dark:text-orange-300 mb-2">
              Demo Accounts:
            </h3>
            <div className="space-y-2 text-orange-800 dark:text-orange-200">
              <button
                onClick={() => handleDemoLogin("mitra")}
                className="w-full text-left px-3 py-1.5 rounded-md hover:bg-orange-100 dark:hover:bg-orange-800/50 transition-colors"
              >
                Mitra: bmp@gobeng.com / bmp123
              </button>
              <button
                onClick={() => handleDemoLogin("kasir")}
                className="w-full text-left px-3 py-1.5 rounded-md hover:bg-orange-100 dark:hover:bg-orange-800/50 transition-colors"
              >
                Kasir: ridho@gobeng.com / kasir123
              </button>
              <button
                onClick={() => handleDemoLogin("admin")}
                className="w-full text-left px-3 py-1.5 rounded-md hover:bg-orange-100 dark:hover:bg-orange-800/50 transition-colors"
              >
                Admin: fakhri@gobeng.com / fakhri123
              </button>
              <button
                onClick={() => handleDemoLogin("user")}
                className="w-full text-left px-3 py-1.5 rounded-md hover:bg-orange-100 dark:hover:bg-orange-800/50 transition-colors"
              >
                User: rio@gobeng.com / rio123
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-gray-400" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 bg-white dark:bg-gray-700 dark:text-white"
                  placeholder="Masukkan email Anda"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 bg-white dark:bg-gray-700 dark:text-white"
                  placeholder="Masukkan password Anda"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                  ) : (
                    <FaEye className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                  )}
                </button>
              </div>
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-orange-400 dark:bg-orange-700 text-white py-3 px-4 rounded-lg hover:bg-orange-800 dark:hover:bg-orange-600 transition duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Masuk...
                </div>
              ) : (
                "Masuk"
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/forgot-password"
              className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 text-sm"
            >
              Lupa password?
            </Link>
          </div>

          <div className="mt-4 text-center border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-gray-600 dark:text-gray-300">
              Belum punya akun?{" "}
              <Link
                to="/register"
                className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium"
              >
                Daftar Sekarang
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
