"use client";

import { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-center h-16 bg-blue-900 dark:bg-blue-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg">GB</span>
            </div>
            <span className="text-white text-xl font-bold">GoBeng</span>
          </div>
        </div>

        <nav className="mt-8">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-900 dark:hover:text-blue-400 transition-colors duration-200 ${
                location.pathname === item.path
                  ? "bg-blue-50 dark:bg-gray-700 text-blue-900 dark:text-blue-400 border-r-4 border-blue-900 dark:border-blue-400"
                  : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 rounded-lg transition-colors duration-200"
          >
            <FaSignOutAlt className="mr-3" />
            Keluar
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
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
              <h1 className="ml-4 lg:ml-0 text-2xl font-bold text-gray-900 dark:text-white">
                Dashboard Kasir
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-300">
                Selamat datang, {user?.name}
              </span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<KasirDashboardHome />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
          </Routes>
        </main>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

// Kasir Dashboard Home Component
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
      // Simulate API call
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Transaksi Hari Ini
          </h3>
          <p className="text-3xl font-bold text-blue-900 dark:text-blue-400">
            {todayStats.transactions}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Pendapatan Hari Ini
          </h3>
          <p className="text-3xl font-bold text-green-600">
            Rp {todayStats.revenue.toLocaleString("id-ID")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Pelanggan Hari Ini
          </h3>
          <p className="text-3xl font-bold text-purple-600">
            {todayStats.customers}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Rata-rata Transaksi
          </h3>
          <p className="text-3xl font-bold text-orange-600">
            Rp {todayStats.avgTransaction.toLocaleString("id-ID")}
          </p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
        >
          <FaShoppingCart className="text-4xl text-blue-900 dark:text-blue-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Transaksi Baru</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Mulai transaksi penjualan baru
          </p>
          <Link
            to="/kasir-dashboard/transaction"
            className="bg-blue-900 dark:bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 dark:hover:bg-blue-600 transition duration-200"
          >
            Mulai Transaksi
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
        >
          <FaBoxes className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Cek Inventori</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Lihat stok barang real-time
          </p>
          <Link
            to="/kasir-dashboard/inventory"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Lihat Inventori
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
        >
          <FaPrint className="text-4xl text-purple-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">Laporan Harian</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Cetak laporan penjualan hari ini
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-200">
            Cetak Laporan
          </button>
        </motion.div>
      </div>

      {/* Recent Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Transaksi Terbaru</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Waktu
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Pelanggan
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Layanan
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Total
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  time: "14:30",
                  customer: "Budi Santoso",
                  service: "Ganti Oli",
                  total: 150000,
                  status: "Selesai",
                },
                {
                  time: "13:15",
                  customer: "Sari Dewi",
                  service: "Tune Up",
                  total: 300000,
                  status: "Selesai",
                },
                {
                  time: "12:00",
                  customer: "Ahmad Rahman",
                  service: "Servis AC",
                  total: 200000,
                  status: "Proses",
                },
              ].map((transaction, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="py-3 text-gray-600 dark:text-gray-400">
                    {transaction.time}
                  </td>
                  <td className="py-3 text-gray-900 dark:text-white">
                    {transaction.customer}
                  </td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">
                    {transaction.service}
                  </td>
                  <td className="py-3 text-gray-900 dark:text-white">
                    Rp {transaction.total.toLocaleString("id-ID")}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        transaction.status === "Selesai"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
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

// Transaction Page Component
const TransactionPage = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [customerName, setCustomerName] = useState("");
  const [loading, setLoading] = useState(false);

  const services = [
    { id: 1, name: "Ganti Oli", price: 150000, category: "service" },
    { id: 2, name: "Tune Up", price: 300000, category: "service" },
    { id: 3, name: "Servis AC", price: 200000, category: "service" },
    { id: 4, name: "Ganti Ban", price: 500000, category: "service" },
  ];

  const products = [
    {
      id: 5,
      name: "Oli Mesin 5W-30",
      price: 75000,
      category: "product",
      stock: 25,
    },
    {
      id: 6,
      name: "Filter Udara",
      price: 50000,
      category: "product",
      stock: 15,
    },
    { id: 7, name: "Busi NGK", price: 25000, category: "product", stock: 30 },
    { id: 8, name: "Kampas Rem", price: 150000, category: "product", stock: 8 },
  ];

  const allItems = [...services, ...products];

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const calculateTotal = () => {
    const newTotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
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
    setCart(cart.filter((item) => item.id !== id));
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
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const invoiceNumber = `INV-${Date.now()}`;
      toast.success(`Transaksi berhasil! Invoice: ${invoiceNumber}`);

      // Reset form
      setCart([]);
      setCustomerName("");
      setTotal(0);
    } catch (error) {
      toast.error("Gagal memproses transaksi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Items Selection */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Layanan & Produk</h3>

        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari layanan atau produk..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
              Layanan:
            </h4>
            {services.map((service) => (
              <div
                key={service.id}
                className="flex justify-between items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg mb-2"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {service.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Rp {service.price.toLocaleString("id-ID")}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(service)}
                  className="bg-blue-900 dark:bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 dark:hover:bg-blue-600 transition duration-200"
                >
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>

          <div>
            <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-3">
              Produk:
            </h4>
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg mb-2"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stok: {product.stock}
                  </p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                  className="bg-blue-900 dark:bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-800 dark:hover:bg-blue-600 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPlus />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cart & Checkout */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Keranjang Belanja</h3>

        {/* Customer Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Nama Pelanggan
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Masukkan nama pelanggan"
          />
        </div>

        {cart.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            Keranjang kosong
          </p>
        ) : (
          <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="flex-1">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Rp {item.price.toLocaleString("id-ID")} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
                  >
                    <FaMinus />
                  </button>
                  <span className="w-8 text-center text-gray-900 dark:text-white">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 ml-2"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span className="text-gray-900 dark:text-white">Total:</span>
              <span className="text-gray-900 dark:text-white">
                Rp {total.toLocaleString("id-ID")}
              </span>
            </div>
            <button
              onClick={processTransaction}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Memproses...
                </div>
              ) : (
                "Proses Transaksi"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Inventory Page Component
const InventoryPage = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        setInventory([
          {
            id: 1,
            name: "Oli Mesin 5W-30",
            stock: 25,
            minStock: 10,
            price: 75000,
            category: "Oli",
          },
          {
            id: 2,
            name: "Filter Udara",
            stock: 15,
            minStock: 5,
            price: 50000,
            category: "Filter",
          },
          {
            id: 3,
            name: "Busi NGK",
            stock: 30,
            minStock: 15,
            price: 25000,
            category: "Busi",
          },
          {
            id: 4,
            name: "Kampas Rem",
            stock: 8,
            minStock: 10,
            price: 150000,
            category: "Rem",
          },
          {
            id: 5,
            name: "Ban Michelin",
            stock: 12,
            minStock: 8,
            price: 800000,
            category: "Ban",
          },
          {
            id: 6,
            name: "Aki GS",
            stock: 6,
            minStock: 5,
            price: 450000,
            category: "Aki",
          },
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching inventory:", error);
      setLoading(false);
    }
  };

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStockStatus = (stock, minStock) => {
    if (stock <= 0)
      return {
        status: "Habis",
        color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      };
    if (stock <= minStock)
      return {
        status: "Stok Rendah",
        color:
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      };
    return {
      status: "Tersedia",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Inventori Barang</h2>
        <div className="flex space-x-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari barang..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                Nama Barang
              </th>
              <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                Kategori
              </th>
              <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                Stok
              </th>
              <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                Min. Stok
              </th>
              <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                Harga
              </th>
              <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => {
              const stockStatus = getStockStatus(item.stock, item.minStock);
              return (
                <tr
                  key={item.id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="py-3 text-gray-900 dark:text-white">
                    {item.name}
                  </td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">
                    {item.category}
                  </td>
                  <td className="py-3 text-gray-900 dark:text-white">
                    {item.stock}
                  </td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">
                    {item.minStock}
                  </td>
                  <td className="py-3 text-gray-900 dark:text-white">
                    Rp {item.price.toLocaleString("id-ID")}
                  </td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${stockStatus.color}`}
                    >
                      {stockStatus.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredInventory.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 dark:text-gray-400">
            Tidak ada barang ditemukan.
          </p>
        </div>
      )}
    </div>
  );
};

export default KasirDashboard;
