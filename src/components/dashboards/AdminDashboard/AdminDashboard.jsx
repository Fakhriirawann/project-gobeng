"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaSignOutAlt,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaBell,
  FaBars,
  FaTimes,
  FaDesktop,
  FaHeadset,
  FaUserShield,
} from "react-icons/fa";

// Import components
import AdminOverview from "./AdminOverview";
import AccountManagement from "./AccountManagement";
import GlobalReports from "./GlobalReports";
import VerificationModeration from "./VerificationModeration";
import SystemMonitoring from "./SystemMonitoring";
import FeedbackSupport from "./FeedbackSupport";

const AdminDashboard = () => {
  const [currentPage, setCurrentPage] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = { name: "Admin Global" }; // Mock user data

  const sidebarItems = [
    { name: "Dashboard", id: "overview", icon: <FaHome /> },
    { name: "Kelola Akun", id: "accounts", icon: <FaUsers /> },
    { name: "Laporan & Statistik", id: "reports", icon: <FaChartLine /> },
    {
      name: "Verifikasi & Moderasi",
      id: "verification",
      icon: <FaShieldAlt />,
    },
    { name: "Monitoring Sistem", id: "monitoring", icon: <FaDesktop /> },
    { name: "Feedback & Bantuan", id: "feedback", icon: <FaHeadset /> },
  ];

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "overview":
        return <AdminOverview />;
      case "accounts":
        return <AccountManagement />;
      case "reports":
        return <GlobalReports />;
      case "verification":
        return <VerificationModeration />;
      case "monitoring":
        return <SystemMonitoring />;
      case "feedback":
        return <FeedbackSupport />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-gray-800 shadow-2xl transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-gray-200 dark:border-gray-700`}
      >
        {/* Logo Header */}
        <div className="flex items-center justify-between h-20 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-700 dark:to-orange-800 ">
          <Link
            to="/"
            className="flex items-center hover:opacity-90 transition duration-200"
          >
            <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
              <img
                src="/icon.png"
                alt="GoBeng Icon"
                className="w-32 h-32 object-contain"
              />
            </div>
            <div className="">
              <span className="text-white text-2xl font-bold">GoBeng</span>
              <p className="text-orange-100 text-sm">Admin Panel</p>
            </div>
          </Link>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-orange-200 transition-colors"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <FaUserShield className="text-white text-sm" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {user?.name || "Admin"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Super Administrator
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4 flex-1">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentPage(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center px-4 py-3 mb-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-200 rounded-xl group ${
                currentPage === item.id
                  ? "bg-orange-50 dark:bg-gray-700 text-orange-600 dark:text-orange-400 shadow-md"
                  : ""
              }`}
            >
              <span className="mr-4 text-lg group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
              {currentPage === item.id && (
                <div className="ml-auto w-2 h-2 bg-orange-600 rounded-full"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 mx-4 p-4 bg-gradient-to-r from-orange-50 to-indigo-50 dark:from-orange-900/20 dark:to-indigo-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
          <h4 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">
            Status Sistem
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-orange-600 dark:text-orange-400">
                Mitra Aktif
              </span>
              <span className="font-bold text-orange-800 dark:text-orange-300">
                124
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-orange-600 dark:text-orange-400">
                Perlu Verifikasi
              </span>
              <span className="font-bold text-orange-800 dark:text-orange-300">
                7
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-orange-600 dark:text-orange-400">
                Tiket Bantuan
              </span>
              <span className="font-bold text-orange-800 dark:text-orange-300">
                12
              </span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <button className="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-xl transition-all duration-200 group">
            <FaSignOutAlt className="mr-3 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Keluar</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <FaBars className="w-6 h-6" />
              </button>
              <div className="ml-4 lg:ml-0">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Panel Administrasi Global
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <FaBell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  8
                </span>
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
        <main className="p-4 sm:p-6">{renderCurrentPage()}</main>
      </div>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
