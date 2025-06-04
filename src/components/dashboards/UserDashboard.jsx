"use client";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuthContext } from "../../context/AuthContext";
import {
  FaHome,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
  FaUser,
  FaCar,
  FaBell,
  FaClock,
  FaTools,
  FaPhone,
  FaSearch,
  FaEdit,
  FaPlus,
  FaHeart,
  FaComments,
  FaSignOutAlt,
  FaCog,
  FaWrench,
  FaAmbulance,
  FaThumbsUp,
  FaEye,
  FaChevronRight,
  FaLocationArrow,
  FaStarHalfAlt,
  FaTrash,
} from "react-icons/fa";

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
 const { user} = useContext(AuthContext);

  const sidebarItems = [
    { name: "Dashboard", key: "dashboard", icon: <FaHome /> },
    { name: "Booking & Riwayat", key: "booking", icon: <FaCalendarAlt /> },
    { name: "Bengkel Terdekat", key: "workshops", icon: <FaMapMarkerAlt /> },
    { name: "Ulasan & Feedback", key: "reviews", icon: <FaStar /> },
    { name: "Profil & Kendaraan", key: "profile", icon: <FaUser /> },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardHome />;
      case "booking":
        return <BookingPage />;
      case "workshops":
        return <WorkshopsPage />;
      case "reviews":
        return <ReviewsPage />;
      case "profile":
        return <ProfilePage />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 border-r border-gray-200`}
      >
        {/* Logo Header */}
        <div className="flex items-center h-20 bg-gradient-to-r from-orange-400 to-orange-500">
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
              <span className="text-white text-2xl pr-12 font-bold">
                GoBeng
              </span>
              <p className="text-orange-100 text-sm">User Panel</p>
            </div>
          </Link>
        </div>

        {/* User Info */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <FaUser className="text-white text-sm" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{user.name}</p>
              <p className="text-sm text-gray-500">Pelanggan</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          {sidebarItems.map((item, index) => (
            <Link
              key={index}
              onClick={() => {
                setCurrentPage(item.key);
                setSidebarOpen(false);
              }}
              className={`flex items-center w-full px-4 py-3 mb-2 text-gray-700 hover:bg-orange-50 hover:text-orange-400 transition-all duration-200 rounded-xl group ${
                currentPage === item.key
                  ? "bg-orange-50 text-orange-400 shadow-md"
                  : ""
              }`}
            >
              <span className="mr-4 text-lg group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
              {currentPage === item.key && (
                <div className="ml-auto w-2 h-2 bg-orange-400 rounded-full"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Stats */}
        <div className="mt-8 mx-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
          <h4 className="font-semibold text-green-800 mb-2">Status Booking</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Aktif</span>
              <span className="font-bold text-green-800">2</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Selesai</span>
              <span className="font-bold text-green-800">15</span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4 mt-auto">
          <Link to="/login">
            <button className="flex items-center w-full px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 group">
              <FaSignOutAlt className="mr-3 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Keluar</span>
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors duration-200"
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
                <h1 className="text-2xl font-bold text-gray-900">
                  Dashboard Pelanggan
                </h1>
                <p className="text-sm text-gray-500">
                  Kelola booking dan layanan bengkel Anda
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors duration-200 relative">
                  <FaBell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
              </div>
              <button className="p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors duration-200">
                <FaCog className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">{renderPage()}</main>
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

// Dashboard Home Component
const DashboardHome = () => {
  const [notifications] = useState([
    {
      id: 1,
      type: "booking",
      title: "Booking Dikonfirmasi",
      message:
        "Booking servis AC Anda telah dikonfirmasi untuk besok pukul 10:00",
      time: "2 jam lalu",
      read: false,
    },
    {
      id: 2,
      type: "promo",
      title: "Promo Spesial",
      message: "Dapatkan diskon 20% untuk servis tune up bulan ini",
      time: "1 hari lalu",
      read: false,
    },
    {
      id: 3,
      type: "reminder",
      title: "Reminder Servis",
      message: "Saatnya servis berkala untuk Honda Civic Anda",
      time: "3 hari lalu",
      read: true,
    },
  ]);

  const [recentBookings] = useState([
    {
      id: 1,
      service: "Servis AC Mobil",
      workshop: "Bengkel Jaya Motor",
      date: "2024-01-20",
      time: "10:00",
      status: "confirmed",
      type: "reservasi",
    },
    {
      id: 2,
      service: "Ganti Oli Mesin",
      workshop: "Auto Service Pro",
      date: "2024-01-15",
      time: "14:00",
      status: "completed",
      type: "homeservice",
    },
    {
      id: 3,
      service: "Tune Up Lengkap",
      workshop: "Bengkel Mandiri",
      date: "2024-01-10",
      time: "09:00",
      status: "completed",
      type: "reservasi",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-orange-100 text-orange-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "confirmed":
        return "Dikonfirmasi";
      case "completed":
        return "Selesai";
      case "cancelled":
        return "Dibatalkan";
      default:
        return "Pending";
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "reservasi":
        return <FaCalendarAlt className="text-orange-400" />;
      case "homeservice":
        return <FaTools className="text-blue-400" />;
      case "darurat":
        return <FaAmbulance className="text-red-400" />;
      default:
        return <FaWrench className="text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-orange-400 to-orange-500 p-8 rounded-2xl shadow-lg text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Selamat Datang Kembali!</h2>
            <p className="text-orange-100 text-lg">
              Kelola semua kebutuhan servis kendaraan Anda dengan mudah
            </p>
          </div>
          <div className="hidden md:block">
            <div className="bg-orange-300 bg-opacity-30 p-4 rounded-2xl">
              <FaCar className="text-4xl" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
        >
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
              <FaCalendarAlt className="text-2xl text-orange-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Booking Reservasi
            </h3>
            <p className="text-gray-600 mb-4">
              Jadwalkan servis di bengkel mitra terdekat
            </p>
            <div className="bg-orange-400 text-white px-4 py-2 rounded-xl font-medium inline-flex items-center space-x-2 group-hover:bg-orange-500 transition-colors duration-300">
              <span>Booking Sekarang</span>
              <FaChevronRight className="text-sm" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
        >
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
              <FaTools className="text-2xl text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Home Service
            </h3>
            <p className="text-gray-600 mb-4">Panggil teknisi ke lokasi Anda</p>
            <div className="bg-blue-500 text-white px-4 py-2 rounded-xl font-medium inline-flex items-center space-x-2 group-hover:bg-blue-600 transition-colors duration-300">
              <span>Panggil Teknisi</span>
              <FaChevronRight className="text-sm" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group"
        >
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
              <FaAmbulance className="text-2xl text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Darurat 24/7
            </h3>
            <p className="text-gray-600 mb-4">Bantuan darurat kapan saja</p>
            <div className="bg-red-500 text-white px-4 py-2 rounded-xl font-medium inline-flex items-center space-x-2 group-hover:bg-red-600 transition-colors duration-300">
              <span>Panggil Darurat</span>
              <FaPhone className="text-sm" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Booking</p>
              <p className="text-2xl font-bold text-gray-900">17</p>
              <p className="text-green-600 text-sm">+2 bulan ini</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <FaCalendarAlt className="text-orange-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Booking Aktif</p>
              <p className="text-2xl font-bold text-gray-900">2</p>
              <p className="text-orange-400 text-sm">Menunggu konfirmasi</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-xl">
              <FaClock className="text-orange-400" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Bengkel Favorit</p>
              <p className="text-2xl font-bold text-gray-900">5</p>
              <p className="text-blue-500 text-sm">Tersimpan</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-xl">
              <FaHeart className="text-blue-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Rating Rata-rata</p>
              <p className="text-2xl font-bold text-gray-900">4.8</p>
              <p className="text-yellow-500 text-sm">Dari ulasan Anda</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-xl">
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Bookings and Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Bookings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                Booking Terbaru
              </h3>
              <button className="text-orange-400 hover:text-orange-500 font-medium text-sm">
                Lihat Semua
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                      {getTypeIcon(booking.type)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {booking.service}
                      </p>
                      <p className="text-sm text-gray-600">
                        {booking.workshop}
                      </p>
                      <p className="text-xs text-gray-500">
                        {booking.date} • {booking.time}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {getStatusText(booking.status)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Notifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Notifikasi</h3>
              <button className="text-orange-400 hover:text-orange-500 font-medium text-sm">
                Tandai Semua Dibaca
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-xl border transition-colors duration-200 ${
                    notification.read
                      ? "bg-gray-50 border-gray-200"
                      : "bg-orange-50 border-orange-200"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-semibold text-gray-900">
                          {notification.title}
                        </p>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Booking Page Component
const BookingPage = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [selectedService, setSelectedService] = useState("");
  const [selectedWorkshop, setSelectedWorkshop] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [serviceType, setServiceType] = useState("reservasi");

  const services = [
    { id: 1, name: "Ganti Oli Mesin", price: "150.000", duration: "30 menit" },
    { id: 2, name: "Tune Up Lengkap", price: "300.000", duration: "2 jam" },
    { id: 3, name: "Servis AC Mobil", price: "200.000", duration: "1 jam" },
    { id: 4, name: "Ganti Ban", price: "500.000", duration: "45 menit" },
    { id: 5, name: "Servis Rem", price: "250.000", duration: "1.5 jam" },
  ];

  const workshops = [
    {
      id: 1,
      name: "Bengkel Jaya Motor",
      rating: 4.8,
      distance: "2.5 km",
      address: "Jl. Sudirman No. 123",
    },
    {
      id: 2,
      name: "Auto Service Pro",
      rating: 4.6,
      distance: "3.2 km",
      address: "Jl. Gatot Subroto No. 456",
    },
    {
      id: 3,
      name: "Bengkel Mandiri",
      rating: 4.7,
      distance: "1.8 km",
      address: "Jl. Ahmad Yani No. 789",
    },
  ];

  const bookingHistory = [
    {
      id: 1,
      service: "Servis AC Mobil",
      workshop: "Bengkel Jaya Motor",
      date: "2024-01-20",
      time: "10:00",
      status: "confirmed",
      type: "reservasi",
      price: "200.000",
    },
    {
      id: 2,
      service: "Ganti Oli Mesin",
      workshop: "Auto Service Pro",
      date: "2024-01-15",
      time: "14:00",
      status: "completed",
      type: "homeservice",
      price: "150.000",
    },
    {
      id: 3,
      service: "Tune Up Lengkap",
      workshop: "Bengkel Mandiri",
      date: "2024-01-10",
      time: "09:00",
      status: "completed",
      type: "reservasi",
      price: "300.000",
    },
  ];

  const handleBooking = () => {
    if (!selectedService || !bookingDate || !bookingTime) {
      alert("Mohon lengkapi semua data booking");
      return;
    }

    if (serviceType === "reservasi" && !selectedWorkshop) {
      alert("Mohon pilih bengkel untuk reservasi");
      return;
    }

    alert("Booking berhasil dibuat! Anda akan menerima konfirmasi segera.");

    // Reset form
    setSelectedService("");
    setSelectedWorkshop("");
    setBookingDate("");
    setBookingTime("");
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("new")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "new"
                ? "bg-white text-orange-400 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Booking Baru
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "history"
                ? "bg-white text-orange-400 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Riwayat Booking
          </button>
        </div>
      </div>

      {activeTab === "new" ? (
        <div className="space-y-6">
          {/* Service Type Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Pilih Jenis Layanan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => setServiceType("reservasi")}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  serviceType === "reservasi"
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaCalendarAlt className="text-2xl text-orange-400" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Reservasi</h4>
                  <p className="text-sm text-gray-600">
                    Jadwalkan servis di bengkel mitra
                  </p>
                </div>
              </button>

              <button
                onClick={() => setServiceType("homeservice")}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  serviceType === "homeservice"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaTools className="text-2xl text-blue-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Home Service</h4>
                  <p className="text-sm text-gray-600">
                    Teknisi datang ke lokasi Anda
                  </p>
                </div>
              </button>

              <button
                onClick={() => setServiceType("darurat")}
                className={`p-6 rounded-xl border-2 transition-all duration-200 ${
                  serviceType === "darurat"
                    ? "border-red-500 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="text-center">
                  <div className="bg-red-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaAmbulance className="text-2xl text-red-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Darurat 24/7</h4>
                  <p className="text-sm text-gray-600">
                    Bantuan darurat kapan saja
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Service Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Pilih Layanan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.name)}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                    selectedService === service.name
                      ? "border-orange-400 bg-orange-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <span className="text-orange-400 font-bold">
                      Rp {service.price}
                    </span>
                    <span className="text-sm text-gray-500">
                      {service.duration}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Workshop Selection (only for reservasi) */}
          {serviceType === "reservasi" && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Pilih Bengkel Mitra
              </h3>
              <div className="space-y-4">
                {workshops.map((workshop) => (
                  <button
                    key={workshop.id}
                    onClick={() => setSelectedWorkshop(workshop.name)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      selectedWorkshop === workshop.name
                        ? "border-orange-400 bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {workshop.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {workshop.address}
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <FaStar className="text-yellow-500 text-sm" />
                            <span className="text-sm font-medium">
                              {workshop.rating}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <FaLocationArrow className="text-gray-400 text-sm" />
                            <span className="text-sm text-gray-600">
                              {workshop.distance}
                            </span>
                          </div>
                        </div>
                      </div>
                      <FaChevronRight className="text-gray-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Date and Time Selection */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Pilih Tanggal & Waktu
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tanggal
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Waktu
                </label>
                <select
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Pilih Waktu</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                </select>
              </div>
            </div>
          </div>

          {/* Booking Summary */}
          {selectedService && bookingDate && bookingTime && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Ringkasan Booking
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Jenis Layanan:</span>
                  <span className="font-semibold text-gray-900 capitalize">
                    {serviceType}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Layanan:</span>
                  <span className="font-semibold text-gray-900">
                    {selectedService}
                  </span>
                </div>
                {serviceType === "reservasi" && selectedWorkshop && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bengkel:</span>
                    <span className="font-semibold text-gray-900">
                      {selectedWorkshop}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Tanggal:</span>
                  <span className="font-semibold text-gray-900">
                    {bookingDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Waktu:</span>
                  <span className="font-semibold text-gray-900">
                    {bookingTime}
                  </span>
                </div>
              </div>
              <button
                onClick={handleBooking}
                className="w-full mt-6 bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-200 font-semibold text-lg"
              >
                Konfirmasi Booking
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Booking History */
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900">Riwayat Booking</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {bookingHistory.map((booking) => (
                <div
                  key={booking.id}
                  className="p-4 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        {booking.type === "reservasi" && (
                          <FaCalendarAlt className="text-orange-400" />
                        )}
                        {booking.type === "homeservice" && (
                          <FaTools className="text-blue-500" />
                        )}
                        {booking.type === "darurat" && (
                          <FaAmbulance className="text-red-500" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {booking.service}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {booking.workshop}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === "confirmed"
                          ? "bg-orange-100 text-orange-800"
                          : booking.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {booking.status === "confirmed"
                        ? "Dikonfirmasi"
                        : booking.status === "completed"
                        ? "Selesai"
                        : "Pending"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Tanggal:</span>
                      <p className="font-medium">{booking.date}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Waktu:</span>
                      <p className="font-medium">{booking.time}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Harga:</span>
                      <p className="font-medium text-orange-400">
                        Rp {booking.price}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Jenis:</span>
                      <p className="font-medium capitalize">{booking.type}</p>
                    </div>
                  </div>
                  {booking.status === "completed" && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <button className="text-orange-400 hover:text-orange-500 font-medium text-sm">
                        Beri Ulasan
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Workshops Page Component
const WorkshopsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("distance");

  const workshops = [
    {
      id: 1,
      name: "Bengkel Jaya Motor",
      rating: 4.8,
      reviews: 156,
      distance: "2.5 km",
      address: "Jl. Sudirman No. 123, Jakarta Pusat",
      phone: "021-12345678",
      services: ["Ganti Oli", "Tune Up", "Servis AC", "Ganti Ban"],
      openHours: "08:00 - 17:00",
      image: "/placeholder.svg?height=200&width=300",
      specialties: ["Mobil Sedan", "SUV"],
      priceRange: "Rp 100.000 - 500.000",
      isFavorite: true,
    },
    {
      id: 2,
      name: "Auto Service Pro",
      rating: 4.6,
      reviews: 89,
      distance: "3.2 km",
      address: "Jl. Gatot Subroto No. 456, Jakarta Selatan",
      phone: "021-87654321",
      services: ["Servis Mesin", "Ganti Oli", "Servis Rem", "Tune Up"],
      openHours: "07:00 - 18:00",
      image: "/placeholder.svg?height=200&width=300",
      specialties: ["Mobil Sport", "Sedan"],
      priceRange: "Rp 150.000 - 600.000",
      isFavorite: false,
    },
    {
      id: 3,
      name: "Bengkel Mandiri",
      rating: 4.7,
      reviews: 203,
      distance: "1.8 km",
      address: "Jl. Ahmad Yani No. 789, Jakarta Timur",
      phone: "021-11223344",
      services: ["Ganti Ban", "Servis AC", "Tune Up", "Servis Transmisi"],
      openHours: "08:00 - 16:00",
      image: "/placeholder.svg?height=200&width=300",
      specialties: ["Mobil Keluarga", "MPV"],
      priceRange: "Rp 80.000 - 400.000",
      isFavorite: true,
    },
    {
      id: 4,
      name: "Speed Auto Care",
      rating: 4.5,
      reviews: 67,
      distance: "4.1 km",
      address: "Jl. Thamrin No. 321, Jakarta Pusat",
      phone: "021-55667788",
      services: ["Servis Mesin", "Ganti Oli", "Servis Rem", "Body Repair"],
      openHours: "09:00 - 17:00",
      image: "/placeholder.svg?height=200&width=300",
      specialties: ["Mobil Mewah", "Sport Car"],
      priceRange: "Rp 200.000 - 800.000",
      isFavorite: false,
    },
  ];

  const filteredWorkshops = workshops
    .filter((workshop) => {
      const matchesSearch = workshop.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesFilter =
        selectedFilter === "all" ||
        (selectedFilter === "favorites" && workshop.isFavorite) ||
        (selectedFilter === "nearby" &&
          Number.parseFloat(workshop.distance) <= 3);
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "distance":
          return Number.parseFloat(a.distance) - Number.parseFloat(b.distance);
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviews - a.reviews;
        default:
          return 0;
      }
    });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter Header */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Bengkel Terdekat
            </h2>
            <p className="text-gray-600">
              Temukan bengkel mitra terpercaya di sekitar Anda
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari bengkel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
            >
              <option value="all">Semua Bengkel</option>
              <option value="favorites">Favorit</option>
              <option value="nearby">Terdekat (≤3km)</option>
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
            >
              <option value="distance">Urutkan: Jarak</option>
              <option value="rating">Urutkan: Rating</option>
              <option value="reviews">Urutkan: Ulasan</option>
            </select>
          </div>
        </div>
      </div>

      {/* Workshops Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredWorkshops.map((workshop) => (
          <motion.div
            key={workshop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {/* Workshop Image */}
            <div className="relative h-48 bg-gray-200">
              <img
                src={workshop.image || "/placeholder.svg"}
                alt={workshop.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200">
                <FaHeart
                  className={`${
                    workshop.isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                />
              </button>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-lg">
                <div className="flex items-center space-x-1">
                  <FaLocationArrow className="text-orange-400 text-sm" />
                  <span className="text-sm font-medium">
                    {workshop.distance}
                  </span>
                </div>
              </div>
            </div>

            {/* Workshop Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {workshop.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center space-x-1">
                      {renderStars(workshop.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      {workshop.rating}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({workshop.reviews} ulasan)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-orange-400" />
                  <span>{workshop.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaPhone className="text-orange-400" />
                  <span>{workshop.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaClock className="text-orange-400" />
                  <span>{workshop.openHours}</span>
                </div>
              </div>

              {/* Services */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Layanan:
                </p>
                <div className="flex flex-wrap gap-2">
                  {workshop.services.slice(0, 3).map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {workshop.services.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      +{workshop.services.length - 3} lainnya
                    </span>
                  )}
                </div>
              </div>

              {/* Specialties and Price Range */}
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Spesialisasi:</p>
                  <p className="font-medium text-gray-900">
                    {workshop.specialties.join(", ")}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Kisaran Harga:</p>
                  <p className="font-medium text-gray-900">
                    {workshop.priceRange}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 bg-orange-400 text-white py-3 rounded-xl hover:bg-orange-500 transition-colors duration-200 font-medium">
                  Booking Sekarang
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  <FaEye className="text-gray-600" />
                </button>
                <button className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                  <FaPhone className="text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredWorkshops.length === 0 && (
        <div className="text-center py-12">
          <FaMapMarkerAlt className="text-4xl text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Tidak ada bengkel ditemukan.</p>
          <p className="text-sm text-gray-400">
            Coba ubah kata kunci pencarian atau filter
          </p>
        </div>
      )}
    </div>
  );
};

// Reviews Page Component
const ReviewsPage = () => {
  const [activeTab, setActiveTab] = useState("my-reviews");
  const [newReview, setNewReview] = useState({
    workshop: "",
    rating: 0,
    comment: "",
  });

  const myReviews = [
    {
      id: 1,
      workshop: "Bengkel Jaya Motor",
      service: "Ganti Oli Mesin",
      rating: 5,
      comment:
        "Pelayanan sangat memuaskan, teknisi profesional dan harga terjangkau.",
      date: "2024-01-15",
      helpful: 12,
    },
    {
      id: 2,
      workshop: "Auto Service Pro",
      service: "Tune Up Lengkap",
      rating: 4,
      comment:
        "Hasil kerja bagus, tapi waktu pengerjaan agak lama dari estimasi.",
      date: "2024-01-10",
      helpful: 8,
    },
  ];

  const allReviews = [
    {
      id: 1,
      user: "Budi Santoso",
      workshop: "Bengkel Mandiri",
      service: "Servis AC Mobil",
      rating: 5,
      comment: "AC mobil jadi dingin lagi, teknisi ramah dan berpengalaman.",
      date: "2024-01-18",
      helpful: 15,
    },
    {
      id: 2,
      user: "Sari Dewi",
      workshop: "Speed Auto Care",
      service: "Ganti Ban",
      rating: 4,
      comment:
        "Kualitas ban bagus, proses cepat. Hanya saja harga sedikit mahal.",
      date: "2024-01-16",
      helpful: 9,
    },
    {
      id: 3,
      user: "Ahmad Rahman",
      workshop: "Bengkel Jaya Motor",
      service: "Servis Rem",
      rating: 5,
      comment: "Rem mobil jadi responsif, pelayanan ramah dan profesional.",
      date: "2024-01-14",
      helpful: 11,
    },
  ];

  const workshops = [
    "Bengkel Jaya Motor",
    "Auto Service Pro",
    "Bengkel Mandiri",
    "Speed Auto Care",
  ];

  const handleSubmitReview = () => {
    if (!newReview.workshop || !newReview.rating || !newReview.comment.trim()) {
      alert("Mohon lengkapi semua data ulasan");
      return;
    }

    alert("Ulasan berhasil dikirim! Terima kasih atas feedback Anda.");

    // Reset form
    setNewReview({
      workshop: "",
      rating: 0,
      comment: "",
    });
  };

  const renderStars = (rating, interactive = false, onRatingChange = null) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          onClick={() => interactive && onRatingChange && onRatingChange(i)}
          className={`${
            interactive ? "cursor-pointer hover:scale-110" : "cursor-default"
          } transition-transform duration-200`}
          disabled={!interactive}
        >
          <FaStar
            className={`${i <= rating ? "text-yellow-500" : "text-gray-300"} ${
              interactive ? "text-lg" : "text-sm"
            }`}
          />
        </button>
      );
    }
    return stars;
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("my-reviews")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "my-reviews"
                ? "bg-white text-orange-400 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Ulasan Saya
          </button>
          <button
            onClick={() => setActiveTab("write-review")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "write-review"
                ? "bg-white text-orange-400 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Tulis Ulasan
          </button>
          <button
            onClick={() => setActiveTab("all-reviews")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "all-reviews"
                ? "bg-white text-orange-400 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Semua Ulasan
          </button>
        </div>
      </div>

      {activeTab === "my-reviews" && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Ulasan Saya
            </h3>
            {myReviews.length === 0 ? (
              <div className="text-center py-12">
                <FaComments className="text-4xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">Belum ada ulasan.</p>
                <p className="text-sm text-gray-400">
                  Tulis ulasan pertama Anda untuk bengkel yang pernah dikunjungi
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {myReviews.map((review) => (
                  <div
                    key={review.id}
                    className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {review.workshop}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {review.service}
                        </p>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                      <button className="text-orange-400 hover:text-orange-500">
                        <FaEdit />
                      </button>
                    </div>
                    <p className="text-gray-700 mb-4">{review.comment}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FaThumbsUp className="text-green-500" />
                        <span>{review.helpful} orang terbantu</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "write-review" && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Tulis Ulasan</h3>
          <div className="space-y-6">
            {/* Workshop Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pilih Bengkel
              </label>
              <select
                value={newReview.workshop}
                onChange={(e) =>
                  setNewReview({ ...newReview, workshop: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              >
                <option value="">Pilih bengkel yang ingin diulas</option>
                {workshops.map((workshop) => (
                  <option key={workshop} value={workshop}>
                    {workshop}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {renderStars(newReview.rating, true, (rating) =>
                    setNewReview({ ...newReview, rating })
                  )}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  {newReview.rating > 0 && `${newReview.rating} dari 5 bintang`}
                </span>
              </div>
            </div>

            {/* Comment */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ulasan
              </label>
              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                rows={5}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Ceritakan pengalaman Anda dengan bengkel ini..."
              />
              <p className="text-xs text-gray-500 mt-1">
                Minimal 10 karakter ({newReview.comment.length}/10)
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmitReview}
              disabled={
                !newReview.workshop ||
                !newReview.rating ||
                newReview.comment.length < 10
              }
              className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-200 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Kirim Ulasan
            </button>
          </div>
        </div>
      )}

      {activeTab === "all-reviews" && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Semua Ulasan</h3>
          <div className="space-y-6">
            {allReviews.map((review) => (
              <div
                key={review.id}
                className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {review.user.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {review.user}
                        </p>
                        <p className="text-sm text-gray-600">{review.date}</p>
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900">
                      {review.workshop}
                    </h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {review.service}
                    </p>
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{review.comment}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <FaThumbsUp className="text-green-500" />
                    <span>{review.helpful} orang terbantu</span>
                  </div>
                  <button className="text-orange-400 hover:text-orange-500 text-sm font-medium">
                    Tandai Membantu
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Profile Page Component
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [profile, setProfile] = useState({
    name: "Ahmad Rizki",
    email: "ahmad.rizki@email.com",
    phone: "081234567890",
    address: "Jl. Sudirman No. 123, Jakarta Pusat",
    birthDate: "1990-05-15",
  });

  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      brand: "Honda",
      model: "Civic",
      year: "2020",
      plateNumber: "B 1234 ABC",
      color: "Putih",
      engineType: "1.5L Turbo",
      lastService: "2024-01-15",
      nextService: "2024-04-15",
      isDefault: true,
    },
    {
      id: 2,
      brand: "Toyota",
      model: "Avanza",
      year: "2018",
      plateNumber: "B 5678 DEF",
      color: "Silver",
      engineType: "1.3L",
      lastService: "2023-12-20",
      nextService: "2024-03-20",
      isDefault: false,
    },
  ]);

  const [newVehicle, setNewVehicle] = useState({
    brand: "",
    model: "",
    year: "",
    plateNumber: "",
    color: "",
    engineType: "",
  });

  const [showAddVehicle, setShowAddVehicle] = useState(false);

  const handleUpdateProfile = () => {
    alert("Profil berhasil diperbarui!");
  };

  const handleAddVehicle = () => {
    if (
      !newVehicle.brand ||
      !newVehicle.model ||
      !newVehicle.year ||
      !newVehicle.plateNumber
    ) {
      alert("Mohon lengkapi data kendaraan");
      return;
    }

    const vehicle = {
      id: vehicles.length + 1,
      ...newVehicle,
      lastService: "-",
      nextService: "-",
      isDefault: vehicles.length === 0,
    };

    setVehicles([...vehicles, vehicle]);
    setNewVehicle({
      brand: "",
      model: "",
      year: "",
      plateNumber: "",
      color: "",
      engineType: "",
    });
    setShowAddVehicle(false);
    alert("Kendaraan berhasil ditambahkan!");
  };

  const handleDeleteVehicle = (id) => {
    if (window.confirm("Yakin ingin menghapus kendaraan ini?")) {
      setVehicles(vehicles.filter((vehicle) => vehicle.id !== id));
    }
  };

  const handleSetDefaultVehicle = (id) => {
    setVehicles(
      vehicles.map((vehicle) => ({
        ...vehicle,
        isDefault: vehicle.id === id,
      }))
    );
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex space-x-1 bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setActiveTab("profile")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "profile"
                ? "bg-white text-orange-400 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Profil Saya
          </button>
          <button
            onClick={() => setActiveTab("vehicles")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "vehicles"
                ? "bg-white text-orange-400 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Data Kendaraan
          </button>
        </div>
      </div>

      {activeTab === "profile" && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Informasi Profil
          </h3>

          {/* Profile Photo */}
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">
                {profile.name.charAt(0)}
              </span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                {profile.name}
              </h4>
              <p className="text-gray-600">Pelanggan Premium</p>
              <button className="mt-2 text-orange-400 hover:text-orange-500 font-medium text-sm">
                Ubah Foto Profil
              </button>
            </div>
          </div>

          {/* Profile Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                No. Telepon
              </label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tanggal Lahir
              </label>
              <input
                type="date"
                value={profile.birthDate}
                onChange={(e) =>
                  setProfile({ ...profile, birthDate: e.target.value })
                }
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Alamat
              </label>
              <textarea
                value={profile.address}
                onChange={(e) =>
                  setProfile({ ...profile, address: e.target.value })
                }
                rows={3}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 resize-none"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleUpdateProfile}
              className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-8 py-3 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-200 font-semibold"
            >
              Simpan Perubahan
            </button>
          </div>
        </div>
      )}

      {activeTab === "vehicles" && (
        <div className="space-y-6">
          {/* Add Vehicle Button */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Data Kendaraan
                </h3>
                <p className="text-gray-600">Kelola informasi kendaraan Anda</p>
              </div>
              <button
                onClick={() => setShowAddVehicle(true)}
                className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-200 font-semibold flex items-center space-x-2"
              >
                <FaPlus />
                <span>Tambah Kendaraan</span>
              </button>
            </div>
          </div>

          {/* Add Vehicle Form */}
          {showAddVehicle && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-6">
                Tambah Kendaraan Baru
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Merek
                  </label>
                  <input
                    type="text"
                    value={newVehicle.brand}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, brand: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="Honda, Toyota, dll"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Model
                  </label>
                  <input
                    type="text"
                    value={newVehicle.model}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, model: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="Civic, Avanza, dll"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tahun
                  </label>
                  <input
                    type="number"
                    value={newVehicle.year}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, year: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="2020"
                    min="1990"
                    max="2024"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Plat
                  </label>
                  <input
                    type="text"
                    value={newVehicle.plateNumber}
                    onChange={(e) =>
                      setNewVehicle({
                        ...newVehicle,
                        plateNumber: e.target.value.toUpperCase(),
                      })
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="B 1234 ABC"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Warna
                  </label>
                  <input
                    type="text"
                    value={newVehicle.color}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, color: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="Putih, Hitam, dll"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipe Mesin
                  </label>
                  <input
                    type="text"
                    value={newVehicle.engineType}
                    onChange={(e) =>
                      setNewVehicle({
                        ...newVehicle,
                        engineType: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    placeholder="1.5L Turbo, 1.3L, dll"
                  />
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleAddVehicle}
                  className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-200 font-semibold"
                >
                  Simpan Kendaraan
                </button>
                <button
                  onClick={() => setShowAddVehicle(false)}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold"
                >
                  Batal
                </button>
              </div>
            </div>
          )}

          {/* Vehicles List */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 relative"
              >
                {vehicle.isDefault && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      Utama
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <FaCar className="text-2xl text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {vehicle.brand} {vehicle.model}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {vehicle.year} • {vehicle.color}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Plat Nomor:</span>
                        <span className="font-medium">
                          {vehicle.plateNumber}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Tipe Mesin:</span>
                        <span className="font-medium">
                          {vehicle.engineType}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Servis Terakhir:</span>
                        <span className="font-medium">
                          {vehicle.lastService}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">
                          Servis Berikutnya:
                        </span>
                        <span className="font-medium text-orange-400">
                          {vehicle.nextService}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-2 mt-6">
                  {!vehicle.isDefault && (
                    <button
                      onClick={() => handleSetDefaultVehicle(vehicle.id)}
                      className="flex-1 border border-orange-400 text-orange-400 py-2 rounded-lg hover:bg-orange-50 transition-colors duration-200 font-medium text-sm"
                    >
                      Jadikan Utama
                    </button>
                  )}
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <FaEdit className="text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDeleteVehicle(vehicle.id)}
                    className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {vehicles.length === 0 && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-12 text-center">
              <FaCar className="text-4xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-2">
                Belum ada kendaraan terdaftar.
              </p>
              <p className="text-sm text-gray-400">
                Tambahkan kendaraan pertama Anda untuk memulai
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
