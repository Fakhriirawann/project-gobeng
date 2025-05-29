"use client";

import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Promo", href: "/promo" },
    { name: "Kontak", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];

  const getDashboardLink = () => {
    if (!user) return "/login";
    return `/${user.role}-dashboard`;
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-blue-900 dark:bg-blue-700 rounded-xl flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">GB</span>
            </motion.div>
            <span className="text-2xl font-bold text-blue-900 dark:text-blue-400">
              GoBeng
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 transition duration-200 font-medium ${
                  location.pathname === item.href
                    ? "text-blue-900 dark:text-blue-400 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop User Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200"
            >
              {darkMode ? (
                <FaSun className="w-5 h-5" />
              ) : (
                <FaMoon className="w-5 h-5" />
              )}
            </button>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={getDashboardLink()}
                  className="text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Dashboard
                </Link>
                <span className="text-gray-400">|</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Halo, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
                >
                  Keluar
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-blue-900 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  Masuk
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-900 dark:bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition duration-200"
                >
                  Daftar
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4 border-t border-gray-200 dark:border-gray-700"
            >
              <nav className="space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-400 font-medium ${
                      location.pathname === item.href
                        ? "text-blue-900 dark:text-blue-400 font-semibold"
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Mode Gelap
                  </span>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  >
                    {darkMode ? (
                      <FaSun className="w-5 h-5" />
                    ) : (
                      <FaMoon className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {user ? (
                  <div className="space-y-3">
                    <Link
                      to={getDashboardLink()}
                      className="block py-2 text-blue-900 dark:text-blue-400 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <p className="text-gray-600 dark:text-gray-400">
                      Halo, {user.name}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left py-2 text-red-600 dark:text-red-400 font-medium"
                    >
                      Keluar
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      className="block py-2 text-blue-900 dark:text-blue-400 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Masuk
                    </Link>
                    <Link
                      to="/register"
                      className="block py-2 text-blue-900 dark:text-blue-400 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Daftar
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
