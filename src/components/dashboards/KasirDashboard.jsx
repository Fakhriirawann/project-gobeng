"use client";

import { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import {
  FaHome,
  FaShoppingCart,
  FaBoxes,
  FaSignOutAlt,
  FaPlus,
  FaMinus,
  FaTrash,
  FaPrint,
  FaSearch,
  FaUser,
  FaCog,
  FaChartLine,
  FaCalculator,
  FaCreditCard,
  FaMoneyBillWave,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimes,
  FaEdit,
  FaEye,
} from "react-icons/fa";

const KasirDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", path: "/kasir-dashboard", icon: <FaHome /> },
    {
      name: "Transaksi",
      path: "/kasir-dashboard/transaction",
      icon: <FaShoppingCart />,
    },
    {
      name: "Inventori",
      path: "/kasir-dashboard/inventory",
      icon: <FaBoxes />,
    },
    {
      name: "Laporan",
      path: "/kasir-dashboard/reports",
      icon: <FaChartLine />,
    },
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
          <div className="pr-32">
            <span className="text-white text-2xl pr-12 font-bold">GoBeng</span>
            <p className="text-orange-100 text-sm">Kasir Panel</p>
          </div>
        </Link>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <FaUser className="text-white text-sm" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">
                {user?.name || "Kasir"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Operator Kasir
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
            Hari Ini
          </h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-green-600 dark:text-green-400">
                Transaksi
              </span>
              <span className="font-bold text-green-800 dark:text-green-300">
                15
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-600 dark:text-green-400">
                Pendapatan
              </span>
              <span className="font-bold text-green-800 dark:text-green-300">
                2.5M
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
                  Dashboard Kasir
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sistem Kasir Bengkel Profesional
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Online
                </span>
              </div>
              <button className="p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
                <FaCog className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<KasirDashboardHome />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/reports" element={<ReportsPage />} />
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

// Enhanced Dashboard Home Component
const KasirDashboardHome = () => {
  const [todayStats, setTodayStats] = useState({
    transactions: 0,
    revenue: 0,
    customers: 0,
    avgTransaction: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodayStats();
  }, []);

  const fetchTodayStats = async () => {
    try {
      setTimeout(() => {
        setTodayStats({
          transactions: 15,
          revenue: 2500000,
          customers: 12,
          avgTransaction: 166667,
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching today stats:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Enhanced Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl shadow-lg text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-orange-100 text-sm font-medium mb-2">
                Transaksi Hari Ini
              </h3>
              <p className="text-3xl font-bold">{todayStats.transactions}</p>
              <p className="text-orange-100 text-sm mt-1">+12% dari kemarin</p>
            </div>
            <div className="bg-orange-400 bg-opacity-30 p-3 rounded-xl">
              <FaShoppingCart className="text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl shadow-lg text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-green-100 text-sm font-medium mb-2">
                Pendapatan Hari Ini
              </h3>
              <p className="text-3xl font-bold">
                {(todayStats.revenue / 1000000).toFixed(1)}M
              </p>
              <p className="text-green-100 text-sm mt-1">+8% dari kemarin</p>
            </div>
            <div className="bg-green-400 bg-opacity-30 p-3 rounded-xl">
              <FaMoneyBillWave className="text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl shadow-lg text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-orange-100 text-sm font-medium mb-2">
                Pelanggan Hari Ini
              </h3>
              <p className="text-3xl font-bold">{todayStats.customers}</p>
              <p className="text-orange-100 text-sm mt-1">+5% dari kemarin</p>
            </div>
            <div className="bg-orange-400 bg-opacity-30 p-3 rounded-xl">
              <FaUser className="text-2xl" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl shadow-lg text-white"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-orange-100 text-sm font-medium mb-2">
                Rata-rata Transaksi
              </h3>
              <p className="text-3xl font-bold">
                {Math.round(todayStats.avgTransaction / 1000)}K
              </p>
              <p className="text-orange-100 text-sm mt-1">+3% dari kemarin</p>
            </div>
            <div className="bg-orange-400 bg-opacity-30 p-3 rounded-xl">
              <FaCalculator className="text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaShoppingCart className="text-2xl text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Transaksi Baru
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Mulai transaksi penjualan baru dengan interface kasir profesional
            </p>
            <Link
              to="/kasir-dashboard/transaction"
              className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all duration-200 font-medium inline-flex items-center space-x-2"
            >
              <FaPlus className="text-sm" />
              <span>Mulai Transaksi</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaBoxes className="text-2xl text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Kelola Inventori
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Pantau stok barang real-time dan kelola inventori bengkel
            </p>
            <Link
              to="/kasir-dashboard/inventory"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium inline-flex items-center space-x-2"
            >
              <FaEye className="text-sm" />
              <span>Lihat Inventori</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        >
          <div className="text-center">
            <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FaChartLine className="text-2xl text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Laporan Penjualan
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Analisis performa penjualan dan laporan keuangan lengkap
            </p>
            <Link
              to="/kasir-dashboard/reports"
              className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all duration-200 font-medium inline-flex items-center space-x-2"
            >
              <FaChartLine className="text-sm" />
              <span>Lihat Laporan</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Transaksi Terbaru
          </h3>
          <Link
            to="/kasir-dashboard/reports"
            className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium text-sm"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Invoice
                </th>
                <th className="text-left py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Waktu
                </th>
                <th className="text-left py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Pelanggan
                </th>
                <th className="text-left py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Layanan
                </th>
                <th className="text-left py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Total
                </th>
                <th className="text-left py-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  invoice: "INV-001",
                  time: "14:30",
                  customer: "Budi Santoso",
                  service: "Ganti Oli + Filter",
                  total: 150000,
                  status: "Selesai",
                },
                {
                  invoice: "INV-002",
                  time: "13:15",
                  customer: "Sari Dewi",
                  service: "Tune Up Lengkap",
                  total: 300000,
                  status: "Selesai",
                },
                {
                  invoice: "INV-003",
                  time: "12:00",
                  customer: "Ahmad Rahman",
                  service: "Servis AC Mobil",
                  total: 200000,
                  status: "Proses",
                },
              ].map((transaction, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <td className="py-4">
                    <span className="font-mono text-sm bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {transaction.invoice}
                    </span>
                  </td>
                  <td className="py-4 text-gray-600 dark:text-gray-400">
                    {transaction.time}
                  </td>
                  <td className="py-4 text-gray-900 dark:text-white font-medium">
                    {transaction.customer}
                  </td>
                  <td className="py-4 text-gray-600 dark:text-gray-400">
                    {transaction.service}
                  </td>
                  <td className="py-4 text-gray-900 dark:text-white font-semibold">
                    Rp {transaction.total.toLocaleString("id-ID")}
                  </td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        transaction.status === "Selesai"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

// Professional Transaction Page Component
const TransactionPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [discount, setDiscount] = useState(0);

  const services = [
    {
      id: 1,
      name: "Ganti Oli Mesin",
      price: 150000,
      category: "service",
      description: "Ganti oli mesin + filter oli",
      duration: "30 menit",
    },
    {
      id: 2,
      name: "Tune Up Lengkap",
      price: 300000,
      category: "service",
      description: "Tune up mesin lengkap",
      duration: "2 jam",
    },
    {
      id: 3,
      name: "Servis AC Mobil",
      price: 200000,
      category: "service",
      description: "Servis AC + isi freon",
      duration: "1 jam",
    },
    {
      id: 4,
      name: "Ganti Ban",
      price: 500000,
      category: "service",
      description: "Ganti ban + balancing",
      duration: "45 menit",
    },
    {
      id: 5,
      name: "Servis Rem",
      price: 250000,
      category: "service",
      description: "Ganti kampas rem + cek sistem",
      duration: "1.5 jam",
    },
  ];

  const products = [
    {
      id: 6,
      name: "Oli Mesin 5W-30",
      price: 75000,
      category: "product",
      stock: 25,
      brand: "Castrol",
      unit: "Liter",
    },
    {
      id: 7,
      name: "Filter Udara",
      price: 50000,
      category: "product",
      stock: 15,
      brand: "Denso",
      unit: "Pcs",
    },
    {
      id: 8,
      name: "Busi NGK",
      price: 25000,
      category: "product",
      stock: 30,
      brand: "NGK",
      unit: "Pcs",
    },
    {
      id: 9,
      name: "Kampas Rem",
      price: 150000,
      category: "product",
      stock: 8,
      brand: "Bendix",
      unit: "Set",
    },
    {
      id: 10,
      name: "Aki Mobil",
      price: 450000,
      category: "product",
      stock: 6,
      brand: "GS Astra",
      unit: "Pcs",
    },
  ];

  const allItems = [...services, ...products];

  const filteredItems = allItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    calculateTotal();
  }, [cart, discount]);

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discountAmount = (subtotal * discount) / 100;
    setTotal(subtotal - discountAmount);
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    toast.success(`${item.name} ditambahkan ke keranjang`);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    const item = cart.find((item) => item.id === id);
    setCart(cart.filter((item) => item.id !== id));
    toast.info(`${item.name} dihapus dari keranjang`);
  };

  const processTransaction = async () => {
    if (cart.length === 0) {
      toast.error("Keranjang kosong!");
      return;
    }

    if (!customerName.trim()) {
      toast.error("Nama pelanggan harus diisi!");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const invoiceNumber = `INV-${Date.now()}`;
      toast.success(`Transaksi berhasil! Invoice: ${invoiceNumber}`, {
        position: "top-center",
        autoClose: 5000,
      });

      // Reset form
      setCart([]);
      setCustomerName("");
      setCustomerPhone("");
      setTotal(0);
      setDiscount(0);
    } catch (error) {
      toast.error("Gagal memproses transaksi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountAmount = (subtotal * discount) / 100;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">
      {/* Items Selection - Left Panel */}
      <div className="xl:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Layanan & Produk
          </h3>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari layanan atau produk..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === "all"
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setSelectedCategory("service")}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === "service"
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Layanan
              </button>
              <button
                onClick={() => setSelectedCategory("product")}
                className={`px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === "product"
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                Produk
              </button>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
                onClick={() => addToCart(item)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.category === "service"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                            : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {item.category === "service" ? "Layanan" : "Produk"}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                    {item.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {item.description}
                      </p>
                    )}
                    {item.duration && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Durasi: {item.duration}
                      </p>
                    )}
                    {item.stock !== undefined && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Stok: {item.stock} {item.unit}
                        {item.brand && ` • ${item.brand}`}
                      </p>
                    )}
                  </div>
                  <button
                    className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded-lg transition-colors duration-200"
                    disabled={item.stock === 0}
                  >
                    <FaPlus className="text-sm" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart & Checkout - Right Panel */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <FaShoppingCart className="mr-3 text-orange-600" />
            Keranjang Belanja
          </h3>
        </div>

        <div className="flex-1 p-6">
          {/* Customer Information */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Nama Pelanggan *
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="Masukkan nama pelanggan"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No. Telepon
              </label>
              <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                placeholder="Masukkan no. telepon"
              />
            </div>
          </div>

          {/* Cart Items */}
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <FaShoppingCart className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Keranjang masih kosong
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Pilih layanan atau produk untuk memulai transaksi
              </p>
            </div>
          ) : (
            <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex justify-between items-center p-4 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700/50"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Rp {item.price.toLocaleString("id-ID")} x {item.quantity}
                    </p>
                    <p className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                      Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-1"
                    >
                      <FaMinus />
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-1"
                    >
                      <FaPlus />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-1 ml-2"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Checkout Section */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50 rounded-b-2xl">
            {/* Discount */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Diskon (%)
              </label>
              <input
                type="number"
                value={discount}
                onChange={(e) =>
                  setDiscount(
                    Math.max(0, Math.min(100, Number(e.target.value)))
                  )
                }
                className="w-full border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="0"
                min="0"
                max="100"
              />
            </div>

            {/* Payment Method */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Metode Pembayaran
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setPaymentMethod("cash")}
                  className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === "cash"
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <FaMoneyBillWave className="mx-auto mb-1" />
                  <span className="text-sm font-medium">Tunai</span>
                </button>
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                    paymentMethod === "card"
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400"
                      : "border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  <FaCreditCard className="mx-auto mb-1" />
                  <span className="text-sm font-medium">Kartu</span>
                </button>
              </div>
            </div>

            {/* Total Calculation */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Subtotal:</span>
                <span>Rp {subtotal.toLocaleString("id-ID")}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-red-600 dark:text-red-400">
                  <span>Diskon ({discount}%):</span>
                  <span>-Rp {discountAmount.toLocaleString("id-ID")}</span>
                </div>
              )}
              <div className="flex justify-between items-center font-bold text-xl border-t border-gray-300 dark:border-gray-600 pt-2">
                <span className="text-gray-900 dark:text-white">Total:</span>
                <span className="text-orange-600 dark:text-orange-400">
                  Rp {total.toLocaleString("id-ID")}
                </span>
              </div>
            </div>

            {/* Process Button */}
            <button
              onClick={processTransaction}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <FaCheckCircle />
                  <span>Proses Transaksi</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced Inventory Page Component
const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      setTimeout(() => {
        setInventory([
          {
            id: 1,
            name: "Oli Mesin 5W-30",
            stock: 25,
            minStock: 10,
            price: 75000,
            category: "Oli",
            brand: "Castrol",
            unit: "Liter",
            lastUpdated: "2024-01-15",
          },
          {
            id: 2,
            name: "Filter Udara",
            stock: 15,
            minStock: 5,
            price: 50000,
            category: "Filter",
            brand: "Denso",
            unit: "Pcs",
            lastUpdated: "2024-01-14",
          },
          {
            id: 3,
            name: "Busi NGK",
            stock: 30,
            minStock: 15,
            price: 25000,
            category: "Busi",
            brand: "NGK",
            unit: "Pcs",
            lastUpdated: "2024-01-13",
          },
          {
            id: 4,
            name: "Kampas Rem",
            stock: 3,
            minStock: 10,
            price: 150000,
            category: "Rem",
            brand: "Bendix",
            unit: "Set",
            lastUpdated: "2024-01-12",
          },
          {
            id: 5,
            name: "Ban Michelin",
            stock: 12,
            minStock: 8,
            price: 800000,
            category: "Ban",
            brand: "Michelin",
            unit: "Pcs",
            lastUpdated: "2024-01-11",
          },
          {
            id: 6,
            name: "Aki GS",
            stock: 0,
            minStock: 5,
            price: 450000,
            category: "Aki",
            brand: "GS Astra",
            unit: "Pcs",
            lastUpdated: "2024-01-10",
          },
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching inventory:", error);
      setLoading(false);
    }
  };

  const categories = [
    "all",
    ...new Set(inventory.map((item) => item.category)),
  ];

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getStockStatus = (stock, minStock) => {
    if (stock <= 0)
      return {
        status: "Habis",
        color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        icon: <FaTimes className="text-xs" />,
      };
    if (stock <= minStock)
      return {
        status: "Stok Rendah",
        color:
          "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
        icon: <FaExclamationTriangle className="text-xs" />,
      };
    return {
      status: "Tersedia",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
      icon: <FaCheckCircle className="text-xs" />,
    };
  };

  const lowStockItems = inventory.filter(
    (item) => item.stock <= item.minStock
  ).length;
  const outOfStockItems = inventory.filter((item) => item.stock === 0).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Inventory Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Total Item
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {inventory.length}
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
              <FaBoxes className="text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Stok Rendah
              </p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {lowStockItems}
              </p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
              <FaExclamationTriangle className="text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Stok Habis
              </p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {outOfStockItems}
              </p>
            </div>
            <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-xl">
              <FaTimes className="text-red-600 dark:text-red-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Nilai Inventori
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {(
                  inventory.reduce(
                    (total, item) => total + item.price * item.stock,
                    0
                  ) / 1000000
                ).toFixed(1)}
                M
              </p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
              <FaMoneyBillWave className="text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Inventori Barang
            </h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari barang..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "Semua Kategori" : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Nama Barang
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Kategori
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Brand
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Stok
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Min. Stok
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Harga
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.map((item, index) => {
                const stockStatus = getStockStatus(item.stock, item.minStock);
                return (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.unit}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                      {item.brand}
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {item.stock}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                      {item.minStock}
                    </td>
                    <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                      Rp {item.price.toLocaleString("id-ID")}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 w-fit ${stockStatus.color}`}
                      >
                        {stockStatus.icon}
                        <span>{stockStatus.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex space-x-2">
                        <button className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 p-1">
                          <FaEdit />
                        </button>
                        <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-1">
                          <FaPlus />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredInventory.length === 0 && (
          <div className="text-center py-12">
            <FaBoxes className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada barang ditemukan.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Coba ubah kata kunci pencarian atau filter kategori
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Reports Page Component
const ReportsPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("today");
  const [reportData, setReportData] = useState({
    totalSales: 2500000,
    totalTransactions: 15,
    totalCustomers: 12,
    topServices: [
      { name: "Ganti Oli", count: 8, revenue: 1200000 },
      { name: "Tune Up", count: 4, revenue: 1200000 },
      { name: "Servis AC", count: 3, revenue: 600000 },
    ],
    topProducts: [
      { name: "Oli Mesin 5W-30", sold: 12, revenue: 900000 },
      { name: "Filter Udara", sold: 8, revenue: 400000 },
      { name: "Busi NGK", sold: 15, revenue: 375000 },
    ],
  });

  return (
    <div className="space-y-6">
      {/* Report Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Laporan Penjualan
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Analisis performa penjualan dan keuangan
            </p>
          </div>
          <div className="flex space-x-2">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            >
              <option value="today">Hari Ini</option>
              <option value="week">Minggu Ini</option>
              <option value="month">Bulan Ini</option>
              <option value="year">Tahun Ini</option>
            </select>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2">
              <FaPrint />
              <span>Cetak</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sales Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl shadow-lg text-white">
          <h3 className="text-green-100 text-sm font-medium mb-2">
            Total Penjualan
          </h3>
          <p className="text-3xl font-bold">
            Rp {reportData.totalSales.toLocaleString("id-ID")}
          </p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl shadow-lg text-white">
          <h3 className="text-orange-100 text-sm font-medium mb-2">
            Total Transaksi
          </h3>
          <p className="text-3xl font-bold">{reportData.totalTransactions}</p>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl shadow-lg text-white">
          <h3 className="text-orange-100 text-sm font-medium mb-2">
            Total Pelanggan
          </h3>
          <p className="text-3xl font-bold">{reportData.totalCustomers}</p>
        </div>
      </div>

      {/* Top Services and Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Layanan Terlaris
          </h3>
          <div className="space-y-4">
            {reportData.topServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {service.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {service.count} transaksi
                  </p>
                </div>
                <p className="font-bold text-green-600 dark:text-green-400">
                  Rp {service.revenue.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Produk Terlaris
          </h3>
          <div className="space-y-4">
            {reportData.topProducts.map((product, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl"
              >
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {product.sold} terjual
                  </p>
                </div>
                <p className="font-bold text-orange-600 dark:text-orange-400">
                  Rp {product.revenue.toLocaleString("id-ID")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KasirDashboard;
