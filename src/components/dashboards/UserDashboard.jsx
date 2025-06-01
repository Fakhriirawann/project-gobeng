"use client";

import { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaUser,
  FaBell,
  FaSignOutAlt,
  FaCar,
  FaStar,
  FaDownload,
  FaEye,
} from "react-icons/fa";

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { name: "Dashboard", path: "/user-dashboard", icon: <FaHome /> },
    {
      name: "Reservasi",
      path: "/user-dashboard/reservation",
      icon: <FaCalendarAlt />,
    },
    { name: "Riwayat", path: "/user-dashboard/history", icon: <FaHistory /> },
    { name: "Profil", path: "/user-dashboard/profile", icon: <FaUser /> },
    {
      name: "Notifikasi",
      path: "/user-dashboard/notifications",
      icon: <FaBell />,
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
        <div className="flex items-center justify-center h-16 bg-orange-400 dark:bg-orange-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center">
              <span className="text-orange-400 font-bold text-lg">GB</span>
            </div>
            <span className="text-white text-xl font-bold">GoBeng</span>
          </div>
        </div>

        <nav className="mt-8">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-400 dark:hover:text-orange-400 transition-colors duration-200 ${
                location.pathname === item.path
                  ? "bg-orange-50 dark:bg-gray-700 text-orange-400 dark:text-orange-400 border-r-4 border-orange-400 dark:border-orange-400"
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
                Dashboard Pelanggan
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
            <Route path="/" element={<DashboardHome />} />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
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

// Dashboard Home Component
const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalServices: 0,
    loyaltyPoints: 0,
    nextService: null,
    upcomingReservations: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Simulate API call with mock data
      setTimeout(() => {
        setStats({
          totalServices: 12,
          loyaltyPoints: 250,
          nextService: "2024-02-15",
          upcomingReservations: 1,
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setLoading(false);
    }
  };

  const quickActions = [
    {
      title: "Reservasi Layanan",
      description: "Booking servis mudah dan cepat",
      icon: <FaCalendarAlt className="text-3xl text-orange-400" />,
      link: "/user-dashboard/reservation",
      color: "bg-orange-50 hover:bg-orange-100",
    },
    {
      title: "Home Service",
      description: "Layanan servis di rumah Anda",
      icon: <FaHome className="text-3xl text-green-600" />,
      link: "/user-dashboard/reservation",
      color: "bg-green-50 hover:bg-green-100",
    },
    {
      title: "Darurat 24 Jam",
      description: "Bantuan darurat kapan saja",
      icon: <FaCar className="text-3xl text-red-600" />,
      link: "/contact",
      color: "bg-red-50 hover:bg-red-100",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>
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
            Total Layanan
          </h3>
          <p className="text-3xl font-bold text-orange-400 dark:text-orange-400">
            {stats.totalServices}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Poin Loyalitas
          </h3>
          <p className="text-3xl font-bold text-orange-600">
            {stats.loyaltyPoints}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Servis Berikutnya
          </h3>
          <p className="text-lg font-bold text-green-600">
            {stats.nextService || "Belum ada"}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Reservasi Aktif
          </h3>
          <p className="text-3xl font-bold text-orange-600">
            {stats.upcomingReservations}
          </p>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            className={`${action.color} p-6 rounded-lg shadow-md text-center transition-colors duration-200 cursor-pointer`}
          >
            <Link to={action.link} className="block">
              <div className="mb-4">{action.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {action.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
      >
        <h3 className="text-lg font-semibold mb-4">Aktivitas Terbaru</h3>
        <div className="space-y-4">
          {[
            {
              date: "2024-01-15",
              activity: "Servis berkala selesai",
              status: "Selesai",
            },
            {
              date: "2024-01-10",
              activity: "Reservasi home service",
              status: "Terjadwal",
            },
            {
              date: "2024-01-05",
              activity: "Pembayaran invoice #INV-001",
              status: "Lunas",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {item.activity}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.date}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "Selesai"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : item.status === "Terjadwal"
                    ? "bg-orange-100 text-orange-800 dark:bg-orange-400 dark:text-orange-200"
                    : "bg-orange-100 text-orange-800 dark:bg-orange-400 dark:text-orange-200"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Reservation Page Component
const ReservationPage = () => {
  const [formData, setFormData] = useState({
    service: "",
    workshop: "",
    date: "",
    time: "",
    notes: "",
    serviceType: "workshop", // workshop or home
  });
  const [workshops, setWorkshops] = useState([]);
  const [loading, setLoading] = useState(false);

  const services = [
    { id: "oil-change", name: "Ganti Oli", price: 150000 },
    { id: "tune-up", name: "Tune Up", price: 300000 },
    { id: "ac-service", name: "Servis AC", price: 200000 },
    { id: "tire-change", name: "Ganti Ban", price: 500000 },
  ];

  const mockWorkshops = [
    {
      id: 1,
      name: "GoBeng Kemang",
      distance: "2.5 km",
      rating: 4.8,
      address: "Jl. Kemang Raya No. 123",
    },
    {
      id: 2,
      name: "GoBeng Senayan",
      distance: "3.2 km",
      rating: 4.7,
      address: "Jl. Senayan No. 456",
    },
    {
      id: 3,
      name: "GoBeng Blok M",
      distance: "4.1 km",
      rating: 4.9,
      address: "Jl. Blok M No. 789",
    },
  ];

  useEffect(() => {
    setWorkshops(mockWorkshops);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Reservasi berhasil dibuat!");
      setFormData({
        service: "",
        workshop: "",
        date: "",
        time: "",
        notes: "",
        serviceType: "workshop",
      });
    } catch (error) {
      toast.error("Gagal membuat reservasi. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Buat Reservasi Baru</h2>

        {/* Service Type Toggle */}
        <div className="mb-6">
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() =>
                setFormData({ ...formData, serviceType: "workshop" })
              }
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                formData.serviceType === "workshop"
                  ? "bg-orange-400 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Datang ke Bengkel
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, serviceType: "home" })}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                formData.serviceType === "home"
                  ? "bg-orange-400 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Home Service
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Jenis Layanan
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">Pilih layanan</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} - Rp {service.price.toLocaleString("id-ID")}
                  </option>
                ))}
              </select>
            </div>

            {formData.serviceType === "workshop" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bengkel
                </label>
                <select
                  name="workshop"
                  value={formData.workshop}
                  onChange={handleChange}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                >
                  <option value="">Pilih bengkel</option>
                  {workshops.map((workshop) => (
                    <option key={workshop.id} value={workshop.id}>
                      {workshop.name} - {workshop.distance}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tanggal
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Waktu
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              >
                <option value="">Pilih waktu</option>
                <option value="08:00">08:00 - 10:00</option>
                <option value="10:00">10:00 - 12:00</option>
                <option value="13:00">13:00 - 15:00</option>
                <option value="15:00">15:00 - 17:00</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Catatan Tambahan
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Catatan khusus untuk teknisi..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-400 dark:bg-orange-700 text-white py-3 rounded-lg hover:bg-orange-800 dark:hover:bg-orange-600 transition duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Membuat Reservasi...
              </div>
            ) : (
              "Buat Reservasi"
            )}
          </button>
        </form>
      </div>

      {/* Nearby Workshops */}
      {formData.serviceType === "workshop" && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Bengkel Terdekat</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {workshops.map((workshop) => (
              <div
                key={workshop.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {workshop.name}
                  </h4>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {workshop.distance}
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(workshop.rating)
                            ? "text-orange-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                    {workshop.rating}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  {workshop.address}
                </p>
                <button
                  onClick={() =>
                    setFormData({
                      ...formData,
                      workshop: workshop.id.toString(),
                    })
                  }
                  className="w-full bg-orange-400 dark:bg-orange-700 text-white py-2 rounded text-sm hover:bg-orange-800 dark:hover:bg-orange-600 transition duration-200"
                >
                  Pilih Bengkel
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// History Page Component
const HistoryPage = () => {
  const [serviceHistory, setServiceHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchServiceHistory();
  }, []);

  const fetchServiceHistory = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        setServiceHistory([
          {
            id: 1,
            service: "Ganti Oli",
            date: "2024-01-10",
            workshop: "GoBeng Kemang",
            amount: 150000,
            status: "Selesai",
            rating: 5,
            invoice: "INV-001",
          },
          {
            id: 2,
            service: "Tune Up",
            date: "2024-01-05",
            workshop: "GoBeng Senayan",
            amount: 300000,
            status: "Selesai",
            rating: 4,
            invoice: "INV-002",
          },
          {
            id: 3,
            service: "Servis AC",
            date: "2023-12-20",
            workshop: "GoBeng Kemang",
            amount: 200000,
            status: "Selesai",
            rating: 5,
            invoice: "INV-003",
          },
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching service history:", error);
      setLoading(false);
    }
  };

  const filteredHistory = serviceHistory.filter((service) => {
    if (filter === "all") return true;
    return service.status.toLowerCase() === filter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Riwayat Layanan</h2>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="all">Semua Status</option>
            <option value="selesai">Selesai</option>
            <option value="proses">Dalam Proses</option>
            <option value="dibatalkan">Dibatalkan</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Layanan
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Tanggal
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Bengkel
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Jumlah
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Status
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Rating
                </th>
                <th className="text-left py-3 text-gray-700 dark:text-gray-300">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((service) => (
                <tr
                  key={service.id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="py-3 text-gray-900 dark:text-white">
                    {service.service}
                  </td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">
                    {service.date}
                  </td>
                  <td className="py-3 text-gray-600 dark:text-gray-400">
                    {service.workshop}
                  </td>
                  <td className="py-3 text-gray-900 dark:text-white">
                    Rp {service.amount.toLocaleString("id-ID")}
                  </td>
                  <td className="py-3">
                    <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {service.status}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-sm ${
                            i < service.rating
                              ? "text-orange-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="py-3">
                    <div className="flex space-x-2">
                      <button className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 text-sm">
                        <FaEye className="inline mr-1" />
                        Detail
                      </button>
                      <button className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm">
                        <FaDownload className="inline mr-1" />
                        Invoice
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredHistory.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada riwayat layanan ditemukan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Profile Page Component
const ProfilePage = () => {
  const { user, updateProfile } = useContext(AuthContext);
  const [personalData, setPersonalData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
  });
  const [vehicleData, setVehicleData] = useState({
    brand: "",
    model: "",
    year: "",
    plateNumber: "",
  });
  const [loading, setLoading] = useState(false);

  const handlePersonalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateProfile(personalData);
    } catch (error) {
      console.error("Error updating profile:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVehicleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Data kendaraan berhasil disimpan!");
    } catch (error) {
      toast.error("Gagal menyimpan data kendaraan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Personal Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Informasi Pribadi</h2>
        <form onSubmit={handlePersonalSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={personalData.name}
                onChange={(e) =>
                  setPersonalData({ ...personalData, name: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={personalData.email}
                onChange={(e) =>
                  setPersonalData({ ...personalData, email: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nomor Telepon
              </label>
              <input
                type="tel"
                value={personalData.phone}
                onChange={(e) =>
                  setPersonalData({ ...personalData, phone: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="081234567890"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Alamat
              </label>
              <textarea
                value={personalData.address}
                onChange={(e) =>
                  setPersonalData({ ...personalData, address: e.target.value })
                }
                rows="3"
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Alamat lengkap..."
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-orange-400 dark:bg-orange-700 text-white py-2 px-6 rounded-lg hover:bg-orange-800 dark:hover:bg-orange-600 transition duration-200 disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>
        </form>
      </div>

      {/* Vehicle Information */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Informasi Kendaraan</h2>
        <form onSubmit={handleVehicleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Merk Kendaraan
              </label>
              <select
                value={vehicleData.brand}
                onChange={(e) =>
                  setVehicleData({ ...vehicleData, brand: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="">Pilih merk</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Daihatsu">Daihatsu</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Model
              </label>
              <input
                type="text"
                value={vehicleData.model}
                onChange={(e) =>
                  setVehicleData({ ...vehicleData, model: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Contoh: Avanza"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tahun
              </label>
              <input
                type="number"
                value={vehicleData.year}
                onChange={(e) =>
                  setVehicleData({ ...vehicleData, year: e.target.value })
                }
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="2020"
                min="1990"
                max={new Date().getFullYear()}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nomor Polisi
              </label>
              <input
                type="text"
                value={vehicleData.plateNumber}
                onChange={(e) =>
                  setVehicleData({
                    ...vehicleData,
                    plateNumber: e.target.value,
                  })
                }
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="B 1234 ABC"
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 text-white py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200 disabled:opacity-50"
          >
            {loading ? "Menyimpan..." : "Simpan Kendaraan"}
          </button>
        </form>
      </div>
    </div>
  );
};

// Notifications Page Component
const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      // Simulate API call
      setTimeout(() => {
        setNotifications([
          {
            id: 1,
            type: "reminder",
            title: "Pengingat Servis Berkala",
            message:
              "Waktunya servis berkala kendaraan Anda. Jangan lupa untuk menjaga performa optimal.",
            date: "2024-01-15",
            read: false,
          },
          {
            id: 2,
            type: "promo",
            title: "Promo Spesial Bulan Ini",
            message:
              "Dapatkan diskon 20% untuk servis AC. Promo terbatas hingga akhir bulan!",
            date: "2024-01-14",
            read: false,
          },
          {
            id: 3,
            type: "info",
            title: "Terima Kasih",
            message:
              "Terima kasih telah menggunakan layanan GoBeng. Rating Anda sangat berarti bagi kami.",
            date: "2024-01-10",
            read: true,
          },
          {
            id: 4,
            type: "booking",
            title: "Konfirmasi Reservasi",
            message:
              "Reservasi Anda untuk tanggal 20 Januari 2024 telah dikonfirmasi.",
            date: "2024-01-09",
            read: true,
          },
        ]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      setLoading(false);
    }
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case "reminder":
        return "🔔";
      case "promo":
        return "🎉";
      case "info":
        return "ℹ️";
      case "booking":
        return "📅";
      default:
        return "📢";
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case "reminder":
        return "border-l-orange-500 bg-orange-50 dark:bg-orange-400/20";
      case "promo":
        return "border-l-green-500 bg-green-50 dark:bg-green-900/20";
      case "info":
        return "border-l-orange-500 bg-orange-50 dark:bg-orange-400/20";
      case "booking":
        return "border-l-orange-500 bg-orange-50 dark:bg-orange-900/20";
      default:
        return "border-l-gray-500 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-400"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Notifikasi</h2>
          <button
            onClick={markAllAsRead}
            className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium"
          >
            Tandai Semua Dibaca
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`border-l-4 p-4 rounded-lg cursor-pointer transition-all duration-200 ${getNotificationColor(
                notification.type
              )} ${!notification.read ? "shadow-md" : "opacity-75"}`}
              onClick={() => markAsRead(notification.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">
                      {getNotificationIcon(notification.type)}
                    </span>
                    <h3
                      className={`font-semibold ${
                        !notification.read
                          ? "text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {notification.title}
                    </h3>
                    {!notification.read && (
                      <span className="ml-2 w-2 h-2 bg-orange-500 rounded-full"></span>
                    )}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {notification.message}
                  </p>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {notification.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada notifikasi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
