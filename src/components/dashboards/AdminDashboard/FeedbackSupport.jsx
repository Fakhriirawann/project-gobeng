"use client";

import { useState } from "react";
import {
  FaHeadset,
  FaTicketAlt,
  FaReply,
  FaCheck,
  FaTimes,
  FaSearch,
  FaFilter,
  FaUser,
  FaStore,
  FaChevronDown,
  FaChevronUp,
  FaExclamationTriangle,
  FaInfoCircle,
  FaQuestionCircle,
  FaBug,
  FaStar,
  FaStarHalf,
  FaComment,
  FaPaperPlane,
} from "react-icons/fa";

const FeedbackSupport = () => {
  const [supportTickets, setSupportTickets] = useState([
    {
      id: "TKT001",
      title: "Tidak bisa login ke akun",
      description: "Saya tidak bisa login ke akun mitra saya sejak kemarin",
      user: "Ahmad Jaya",
      userType: "mitra",
      email: "ahmad@bengkel.com",
      priority: "high",
      category: "technical",
      status: "open",
      createdDate: "2024-01-15",
      lastUpdate: "2024-01-15 10:30",
      assignedTo: "Support Team",
      messages: [
        {
          sender: "Ahmad Jaya",
          senderType: "user",
          message: "Saya tidak bisa login ke akun mitra saya sejak kemarin",
          timestamp: "2024-01-15 09:30",
        },
        {
          sender: "Support Team",
          senderType: "admin",
          message:
            "Terima kasih atas laporannya. Bisa dijelaskan lebih detail error yang muncul?",
          timestamp: "2024-01-15 10:30",
        },
      ],
    },
    {
      id: "TKT002",
      title: "Pertanyaan tentang komisi",
      description: "Bagaimana cara menghitung komisi untuk setiap transaksi?",
      user: "Budi Santoso",
      userType: "mitra",
      email: "budi@bengkel.com",
      priority: "medium",
      category: "billing",
      status: "in_progress",
      createdDate: "2024-01-14",
      lastUpdate: "2024-01-15 09:15",
      assignedTo: "Finance Team",
      messages: [
        {
          sender: "Budi Santoso",
          senderType: "user",
          message: "Bagaimana cara menghitung komisi untuk setiap transaksi?",
          timestamp: "2024-01-14 14:20",
        },
        {
          sender: "Finance Team",
          senderType: "admin",
          message:
            "Komisi dihitung berdasarkan persentase dari total transaksi. Untuk bengkel, persentasenya adalah 10%.",
          timestamp: "2024-01-15 09:15",
        },
      ],
    },
    {
      id: "TKT003",
      title: "Bug pada halaman transaksi",
      description: "Halaman transaksi tidak loading dengan benar di mobile",
      user: "Siti Rahayu",
      userType: "user",
      email: "siti@email.com",
      priority: "medium",
      category: "bug",
      status: "resolved",
      createdDate: "2024-01-13",
      lastUpdate: "2024-01-14 16:45",
      assignedTo: "Tech Team",
      messages: [
        {
          sender: "Siti Rahayu",
          senderType: "user",
          message: "Halaman transaksi tidak loading dengan benar di mobile",
          timestamp: "2024-01-13 11:20",
        },
        {
          sender: "Tech Team",
          senderType: "admin",
          message:
            "Terima kasih atas laporannya. Bisa dijelaskan jenis handphone dan browser yang digunakan?",
          timestamp: "2024-01-13 13:45",
        },
        {
          sender: "Siti Rahayu",
          senderType: "user",
          message: "Saya menggunakan iPhone 12 dengan Safari browser",
          timestamp: "2024-01-13 14:30",
        },
        {
          sender: "Tech Team",
          senderType: "admin",
          message:
            "Terima kasih informasinya. Kami telah memperbaiki masalah tersebut. Silakan coba kembali.",
          timestamp: "2024-01-14 16:45",
        },
      ],
    },
    {
      id: "TKT004",
      title: "Request fitur baru",
      description:
        "Bisa tidak ditambahkan fitur notifikasi push untuk transaksi baru?",
      user: "Candra Wijaya",
      userType: "mitra",
      email: "candra@bengkel.com",
      priority: "low",
      category: "feature",
      status: "open",
      createdDate: "2024-01-12",
      lastUpdate: "2024-01-12 14:20",
      assignedTo: "Product Team",
      messages: [
        {
          sender: "Candra Wijaya",
          senderType: "user",
          message:
            "Bisa tidak ditambahkan fitur notifikasi push untuk transaksi baru?",
          timestamp: "2024-01-12 14:20",
        },
      ],
    },
    {
      id: "TKT005",
      title: "Masalah pembayaran",
      description: "Pembayaran saya sudah berhasil tapi status masih pending",
      user: "Dewi Lestari",
      userType: "user",
      email: "dewi@email.com",
      priority: "high",
      category: "billing",
      status: "closed",
      createdDate: "2024-01-11",
      lastUpdate: "2024-01-12 11:30",
      assignedTo: "Finance Team",
      messages: [
        {
          sender: "Dewi Lestari",
          senderType: "user",
          message: "Pembayaran saya sudah berhasil tapi status masih pending",
          timestamp: "2024-01-11 10:15",
        },
        {
          sender: "Finance Team",
          senderType: "admin",
          message:
            "Terima kasih atas laporannya. Bisa tolong berikan nomor transaksi dan bukti pembayaran?",
          timestamp: "2024-01-11 11:30",
        },
        {
          sender: "Dewi Lestari",
          senderType: "user",
          message:
            "Nomor transaksi: TRX12345, bukti pembayaran sudah saya kirim via email",
          timestamp: "2024-01-11 13:45",
        },
        {
          sender: "Finance Team",
          senderType: "admin",
          message:
            "Terima kasih. Kami telah memverifikasi pembayaran Anda dan status sudah diubah menjadi sukses.",
          timestamp: "2024-01-12 11:30",
        },
      ],
    },
  ]);

  const [feedbackData, setFeedbackData] = useState([
    {
      id: 1,
      user: "Ahmad Jaya",
      userType: "mitra",
      rating: 5,
      comment: "Platform sangat membantu untuk mengelola bengkel saya",
      category: "general",
      date: "2024-01-15",
    },
    {
      id: 2,
      user: "Budi Santoso",
      userType: "mitra",
      rating: 4,
      comment: "Bagus, tapi perlu ditambahkan fitur laporan yang lebih detail",
      category: "feature",
      date: "2024-01-14",
    },
    {
      id: 3,
      user: "Siti Rahayu",
      userType: "user",
      rating: 3,
      comment: "Aplikasi kadang lambat saat loading",
      category: "performance",
      date: "2024-01-13",
    },
    {
      id: 4,
      user: "Candra Wijaya",
      userType: "mitra",
      rating: 5,
      comment: "Sangat puas dengan layanan yang diberikan",
      category: "service",
      date: "2024-01-12",
    },
    {
      id: 5,
      user: "Dewi Lestari",
      userType: "user",
      rating: 2,
      comment:
        "Sulit menemukan bengkel terdekat, perlu perbaikan pada fitur pencarian",
      category: "usability",
      date: "2024-01-11",
    },
  ]);

  const [activeTab, setActiveTab] = useState("tickets");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [replyMessage, setReplyMessage] = useState("");
  const [ratingFilter, setRatingFilter] = useState("all");

  const handleTicketAction = (id, action) => {
    setSupportTickets(
      supportTickets.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status: action,
              lastUpdate: new Date().toLocaleString("id-ID"),
            }
          : ticket
      )
    );
  };

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (!replyMessage.trim() || !selectedTicket) return;

    const updatedTickets = supportTickets.map((ticket) => {
      if (ticket.id === selectedTicket.id) {
        const newMessage = {
          sender: "Admin",
          senderType: "admin",
          message: replyMessage,
          timestamp: new Date().toLocaleString("id-ID"),
        };

        return {
          ...ticket,
          messages: [...ticket.messages, newMessage],
          status: ticket.status === "open" ? "in_progress" : ticket.status,
          lastUpdate: new Date().toLocaleString("id-ID"),
        };
      }
      return ticket;
    });

    setSupportTickets(updatedTickets);
    setReplyMessage("");

    // Update the selected ticket to show the new message
    const updatedTicket = updatedTickets.find(
      (ticket) => ticket.id === selectedTicket.id
    );
    setSelectedTicket(updatedTicket);
  };

  const filteredTickets = supportTickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    const matchesPriority =
      priorityFilter === "all" || ticket.priority === priorityFilter;
    const matchesCategory =
      categoryFilter === "all" || ticket.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesPriority && matchesCategory;
  });

  const filteredFeedback = feedbackData.filter((feedback) => {
    const matchesSearch =
      feedback.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      feedback.comment.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating =
      ratingFilter === "all" ||
      feedback.rating === Number.parseInt(ratingFilter);

    return matchesSearch && matchesRating;
  });

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "open":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "in_progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "resolved":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "technical":
        return <FaBug className="text-red-600 dark:text-red-400" />;
      case "billing":
        return <FaTicketAlt className="text-green-600 dark:text-green-400" />;
      case "feature":
        return (
          <FaInfoCircle className="text-orange-600 dark:text-orange-400" />
        );
      case "bug":
        return (
          <FaExclamationTriangle className="text-yellow-600 dark:text-yellow-400" />
        );
      default:
        return (
          <FaQuestionCircle className="text-gray-600 dark:text-gray-400" />
        );
    }
  };

  const getPriorityText = (priority) => {
    switch (priority) {
      case "high":
        return "Tinggi";
      case "medium":
        return "Sedang";
      case "low":
        return "Rendah";
      default:
        return priority;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "open":
        return "Terbuka";
      case "in_progress":
        return "Sedang Diproses";
      case "resolved":
        return "Selesai";
      case "closed":
        return "Ditutup";
      default:
        return status;
    }
  };

  const getCategoryText = (category) => {
    switch (category) {
      case "technical":
        return "Teknis";
      case "billing":
        return "Billing";
      case "feature":
        return "Fitur";
      case "bug":
        return "Bug";
      default:
        return category;
    }
  };

  const getStatsData = () => {
    return {
      total: supportTickets.length,
      open: supportTickets.filter((t) => t.status === "open").length,
      inProgress: supportTickets.filter((t) => t.status === "in_progress")
        .length,
      resolved: supportTickets.filter((t) => t.status === "resolved").length,
      high: supportTickets.filter((t) => t.priority === "high").length,
    };
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalf key={i} className="text-yellow-500" />);
      } else {
        stars.push(
          <FaStar key={i} className="text-gray-300 dark:text-gray-600" />
        );
      }
    }
    return stars;
  };

  const stats = getStatsData();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Feedback & Bantuan
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Kelola tiket bantuan dan feedback pengguna
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Total Tiket
              </p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                {stats.total}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
              <FaTicketAlt className="text-orange-600 dark:text-orange-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Terbuka
              </p>
              <p className="text-lg sm:text-2xl font-bold text-orange-600 dark:text-orange-400">
                {stats.open}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
              <FaTicketAlt className="text-orange-600 dark:text-orange-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Diproses
              </p>
              <p className="text-lg sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {stats.inProgress}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex-shrink-0">
              <FaHeadset className="text-yellow-600 dark:text-yellow-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Selesai
              </p>
              <p className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">
                {stats.resolved}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
              <FaCheck className="text-green-600 dark:text-green-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Prioritas Tinggi
              </p>
              <p className="text-lg sm:text-2xl font-bold text-red-600 dark:text-red-400">
                {stats.high}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0">
              <FaExclamationTriangle className="text-red-600 dark:text-red-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab("tickets")}
            className={`flex-1 px-4 py-3 text-sm sm:text-base font-medium transition-colors duration-200 ${
              activeTab === "tickets"
                ? "text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Tiket Bantuan
          </button>
          <button
            onClick={() => setActiveTab("feedback")}
            className={`flex-1 px-4 py-3 text-sm sm:text-base font-medium transition-colors duration-200 ${
              activeTab === "feedback"
                ? "text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Feedback Pengguna
          </button>
        </div>

        <div className="p-3 sm:p-4 lg:p-6">
          {activeTab === "tickets" && (
            <>
              {/* Search and Filters */}
              <div className="mb-6 space-y-3 sm:space-y-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Cari tiket berdasarkan ID, judul, atau pengguna..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  <div className="relative">
                    <FaFilter className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <select
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full pl-10 sm:pl-12 pr-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none text-sm sm:text-base"
                    >
                      <option value="all">Semua Status</option>
                      <option value="open">Terbuka</option>
                      <option value="in_progress">Sedang Diproses</option>
                      <option value="resolved">Selesai</option>
                      <option value="closed">Ditutup</option>
                    </select>
                  </div>
                  <div className="relative">
                    <FaFilter className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <select
                      value={priorityFilter}
                      onChange={(e) => setPriorityFilter(e.target.value)}
                      className="w-full pl-10 sm:pl-12 pr-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none text-sm sm:text-base"
                    >
                      <option value="all">Semua Prioritas</option>
                      <option value="high">Tinggi</option>
                      <option value="medium">Sedang</option>
                      <option value="low">Rendah</option>
                    </select>
                  </div>
                  <div className="relative">
                    <FaFilter className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                    <select
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="w-full pl-10 sm:pl-12 pr-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none text-sm sm:text-base"
                    >
                      <option value="all">Semua Kategori</option>
                      <option value="technical">Teknis</option>
                      <option value="billing">Billing</option>
                      <option value="feature">Fitur</option>
                      <option value="bug">Bug</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Desktop Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700/50">
                    <tr>
                      <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                        ID Tiket
                      </th>
                      <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                        Judul
                      </th>
                      <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                        Pengguna
                      </th>
                      <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                        Prioritas
                      </th>
                      <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                        Status
                      </th>
                      <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                        Tanggal
                      </th>
                      <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTickets.map((ticket) => (
                      <tr
                        key={ticket.id}
                        className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                      >
                        <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                          {ticket.id}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            {getCategoryIcon(ticket.category)}
                            <span className="font-medium text-gray-900 dark:text-white">
                              {ticket.title}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center space-x-2">
                            {ticket.userType === "mitra" ? (
                              <FaStore className="text-orange-600 dark:text-orange-400" />
                            ) : (
                              <FaUser className="text-green-600 dark:text-green-400" />
                            )}
                            <span className="text-gray-600 dark:text-gray-400">
                              {ticket.user}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityBadgeClass(
                              ticket.priority
                            )}`}
                          >
                            {getPriorityText(ticket.priority)}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                              ticket.status
                            )}`}
                          >
                            {getStatusText(ticket.status)}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                          {ticket.createdDate}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => {
                                setSelectedTicket(ticket);
                                setShowDetailModal(true);
                              }}
                              className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 p-1"
                              title="Lihat Detail"
                            >
                              <FaReply />
                            </button>
                            {ticket.status !== "closed" &&
                              ticket.status !== "resolved" && (
                                <>
                                  <button
                                    onClick={() =>
                                      handleTicketAction(ticket.id, "resolved")
                                    }
                                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-1"
                                    title="Selesaikan"
                                  >
                                    <FaCheck />
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleTicketAction(ticket.id, "closed")
                                    }
                                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-1"
                                    title="Tutup"
                                  >
                                    <FaTimes />
                                  </button>
                                </>
                              )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-3 sm:space-y-4">
                {filteredTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-gray-900 dark:text-white text-sm">
                          {ticket.id}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityBadgeClass(
                            ticket.priority
                          )}`}
                        >
                          {getPriorityText(ticket.priority)}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                            ticket.status
                          )}`}
                        >
                          {getStatusText(ticket.status)}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          setExpandedCard(
                            expandedCard === ticket.id ? null : ticket.id
                          )
                        }
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {expandedCard === ticket.id ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(ticket.category)}
                        <span className="font-medium text-gray-900 dark:text-white text-sm">
                          {ticket.title}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        {ticket.userType === "mitra" ? (
                          <FaStore className="text-orange-600 dark:text-orange-400" />
                        ) : (
                          <FaUser className="text-green-600 dark:text-green-400" />
                        )}
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {ticket.user}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                        <span>Dibuat: {ticket.createdDate}</span>
                        <span>Update: {ticket.lastUpdate}</span>
                      </div>

                      {expandedCard === ticket.id && (
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600 space-y-2">
                          <div className="text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Deskripsi:
                            </span>
                            <p className="text-gray-900 dark:text-white mt-1">
                              {ticket.description}
                            </p>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Kategori:
                            </span>
                            <span className="text-gray-900 dark:text-white">
                              {getCategoryText(ticket.category)}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Ditangani oleh:
                            </span>
                            <span className="text-gray-900 dark:text-white">
                              {ticket.assignedTo}
                            </span>
                          </div>

                          <div className="flex space-x-2 pt-2">
                            <button
                              onClick={() => {
                                setSelectedTicket(ticket);
                                setShowDetailModal(true);
                              }}
                              className="flex-1 bg-orange-600 text-white py-2 px-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                            >
                              <FaReply />
                              <span>Balas</span>
                            </button>
                            {ticket.status !== "closed" &&
                              ticket.status !== "resolved" && (
                                <>
                                  <button
                                    onClick={() =>
                                      handleTicketAction(ticket.id, "resolved")
                                    }
                                    className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                                  >
                                    <FaCheck />
                                    <span>Selesaikan</span>
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleTicketAction(ticket.id, "closed")
                                    }
                                    className="flex-1 bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                                  >
                                    <FaTimes />
                                    <span>Tutup</span>
                                  </button>
                                </>
                              )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "feedback" && (
            <>
              {/* Search and Filters */}
              <div className="mb-6 space-y-3 sm:space-y-4">
                <div className="relative">
                  <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <input
                    type="text"
                    placeholder="Cari feedback berdasarkan pengguna atau komentar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
                  />
                </div>

                <div className="relative">
                  <FaFilter className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <select
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none text-sm sm:text-base"
                  >
                    <option value="all">Semua Rating</option>
                    <option value="5">5 Bintang</option>
                    <option value="4">4 Bintang</option>
                    <option value="3">3 Bintang</option>
                    <option value="2">2 Bintang</option>
                    <option value="1">1 Bintang</option>
                  </select>
                </div>
              </div>

              {/* Feedback Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredFeedback.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {feedback.userType === "mitra" ? (
                          <FaStore className="text-orange-600 dark:text-orange-400" />
                        ) : (
                          <FaUser className="text-green-600 dark:text-green-400" />
                        )}
                        <span className="font-medium text-gray-900 dark:text-white">
                          {feedback.user}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {feedback.date}
                      </span>
                    </div>

                    <div className="flex items-center mb-3">
                      <div className="flex space-x-1">
                        {renderStars(feedback.rating)}
                      </div>
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                        {feedback.rating}/5
                      </span>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3">
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {feedback.comment}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center justify-between">
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 rounded text-xs">
                        {feedback.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty State */}
              {filteredFeedback.length === 0 && (
                <div className="text-center py-12">
                  <FaComment className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Tidak ada feedback yang ditemukan.
                  </p>
                </div>
              )}
            </>
          )}

          {/* Empty State for Tickets */}
          {activeTab === "tickets" && filteredTickets.length === 0 && (
            <div className="text-center py-12">
              <FaTicketAlt className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                Tidak ada tiket yang ditemukan.
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Coba ubah filter atau cari dengan kata kunci yang berbeda
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedTicket && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl max-w-3xl w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Tiket #{selectedTicket.id}
              </h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Ticket Info */}
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(selectedTicket.category)}
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {selectedTicket.title}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {selectedTicket.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityBadgeClass(
                      selectedTicket.priority
                    )}`}
                  >
                    {getPriorityText(selectedTicket.priority)}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                      selectedTicket.status
                    )}`}
                  >
                    {getStatusText(selectedTicket.status)}
                  </span>
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400 rounded-full text-xs font-medium">
                    {getCategoryText(selectedTicket.category)}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Pengguna:
                    </span>
                    <div className="flex items-center space-x-2 mt-1">
                      {selectedTicket.userType === "mitra" ? (
                        <FaStore className="text-orange-600 dark:text-orange-400" />
                      ) : (
                        <FaUser className="text-green-600 dark:text-green-400" />
                      )}
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedTicket.user}
                      </span>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Email:
                    </span>
                    <p className="font-medium text-gray-900 dark:text-white mt-1">
                      {selectedTicket.email}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Dibuat:
                    </span>
                    <p className="font-medium text-gray-900 dark:text-white mt-1">
                      {selectedTicket.createdDate}
                    </p>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">
                      Ditangani oleh:
                    </span>
                    <p className="font-medium text-gray-900 dark:text-white mt-1">
                      {selectedTicket.assignedTo}
                    </p>
                  </div>
                </div>
              </div>

              {/* Conversation */}
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                  Percakapan
                </h4>
                <div className="space-y-3 mb-4">
                  {selectedTicket.messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.senderType === "admin"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl p-3 ${
                          message.senderType === "admin"
                            ? "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-400"
                            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                        }`}
                      >
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-medium text-sm">
                            {message.sender}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {message.timestamp}
                          </span>
                        </div>
                        <p className="text-sm">{message.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                {selectedTicket.status !== "closed" && (
                  <form onSubmit={handleReplySubmit} className="mt-4">
                    <div className="relative">
                      <textarea
                        value={replyMessage}
                        onChange={(e) => setReplyMessage(e.target.value)}
                        placeholder="Ketik balasan..."
                        className="w-full p-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm min-h-[100px]"
                      ></textarea>
                      <button
                        type="submit"
                        className="absolute bottom-3 right-3 p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200"
                        disabled={!replyMessage.trim()}
                      >
                        <FaPaperPlane />
                      </button>
                    </div>
                  </form>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3 mt-4">
                  {selectedTicket.status !== "closed" &&
                    selectedTicket.status !== "resolved" && (
                      <>
                        <button
                          onClick={() => {
                            handleTicketAction(selectedTicket.id, "resolved");
                            setShowDetailModal(false);
                          }}
                          className="flex-1 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <FaCheck />
                          <span>Selesaikan</span>
                        </button>
                        <button
                          onClick={() => {
                            handleTicketAction(selectedTicket.id, "closed");
                            setShowDetailModal(false);
                          }}
                          className="flex-1 bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                          <FaTimes />
                          <span>Tutup</span>
                        </button>
                      </>
                    )}
                  {(selectedTicket.status === "closed" ||
                    selectedTicket.status === "resolved") && (
                    <button
                      onClick={() => {
                        handleTicketAction(selectedTicket.id, "open");
                        setShowDetailModal(false);
                      }}
                      className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <FaReply />
                      <span>Buka Kembali</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackSupport;
