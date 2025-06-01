"use client";

import { useState, useContext } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../../context/AuthContext";
import {
  FaHome,
  FaSignOutAlt,
  FaUser,
  FaChartLine,
  FaUsers,
  FaStore,
  FaShoppingCart,
  FaTools,
  FaBell,
} from "react-icons/fa";

// Import components
import MitraOverview from "./MitraOverview";
// import ServicesManagement from "./";
// import TransactionsManagement from "./";
import BusinessProfile from "./BusinessProfile";
import ReportsAnalytics from "./ReportsAnalytics";
import MultiUserManagement from "./MultiUserManagement";

const MitraDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { name: "Overview", path: "/mitra-dashboard", icon: <FaHome /> },
    {
      name: "Layanan & Produk",
      path: "/mitra-dashboard/services",
      icon: <FaTools />,
    },
    {
      name: "Transaksi",
      path: "/mitra-dashboard/transactions",
      icon: <FaShoppingCart />,
    },
    {
      name: "Profil Bisnis",
      path: "/mitra-dashboard/business",
      icon: <FaStore />,
    },
    {
      name: "Laporan",
      path: "/mitra-dashboard/reports",
      icon: <FaChartLine />,
    },
    { name: "Multi-User", path: "/mitra-dashboard/users", icon: <FaUsers /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-800 shadow-2xl transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-gray-200 dark:border-gray-700`}
      >
        {/* Logo Header */}
        <div className="flex items-center justify-center h-20 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-orange-600 font-bold text-xl">GB</span>
            </div>
            <div>
              <span className="text-white text-2xl font-bold">GoBeng</span>
              <p className="text-orange-100 text-sm">Mitra Panel</p>
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <FaUser className="text-white text-sm" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {user?.name || "Mitra"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pemilik Bengkel
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center px-4 py-3 mb-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 rounded-xl group ${
                location.pathname === item.path
                  ? "bg-orange-50 dark:bg-gray-700 text-orange-600 dark:text-orange-400 shadow-md"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="mr-4 text-lg group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
              {location.pathname === item.path && (
                <div className="ml-auto w-2 h-2 bg-orange-600 rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 mx-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">
            Bulan Ini
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-green-600 dark:text-green-400">
                Pendapatan
              </span>
              <span className="font-bold text-green-800 dark:text-green-300">
                45M
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-600 dark:text-green-400">
                Transaksi
              </span>
              <span className="font-bold text-green-800 dark:text-green-300">
                234
              </span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-xl transition-all duration-200 group"
          >
            <FaSignOutAlt className="mr-3 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Keluar</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <div className="ml-4 lg:ml-0">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Dashboard Mitra
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Panel Manajemen Bengkel
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <FaBell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Online
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<MitraOverview />} />
            {/* <Route path="/services" element={<ServicesManagement />} /> */}
            {/* <Route path="/transactions" element={<TransactionsManagement />} /> */}
            <Route path="/business" element={<BusinessProfile />} />
            <Route path="/reports" element={<ReportsAnalytics />} />
            <Route path="/users" element={<MultiUserManagement />} />
          </Routes>
        </main>
      </div>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MitraDashboard;
