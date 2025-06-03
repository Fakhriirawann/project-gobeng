"use client";

import { useState } from "react";
import {
  FaUsers,
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaFilter,
  FaStore,
  FaUserCog,
  FaUser,
  FaUserShield,
  FaEye,
  FaCheck,
  FaLock,
  FaUnlock,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaEyeSlash,
} from "react-icons/fa";

const AccountManagement = () => {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "Bengkel Jaya Motor",
      email: "jaya@bengkel.com",
      type: "mitra",
      status: "active",
      owner: "Ahmad Jaya",
      phone: "081234567890",
      location: "Jakarta Selatan",
      registeredDate: "2023-12-15",
      lastLogin: "2024-01-15 08:30",
    },
    {
      id: 2,
      name: "Bengkel Maju Sejahtera",
      email: "maju@bengkel.com",
      type: "mitra",
      status: "pending",
      owner: "Budi Santoso",
      phone: "081234567891",
      location: "Jakarta Timur",
      registeredDate: "2024-01-10",
      lastLogin: "-",
    },
    {
      id: 3,
      name: "Siti Rahayu",
      email: "siti@gobeng.com",
      type: "admin",
      status: "active",
      role: "Super Admin",
      phone: "081234567892",
      registeredDate: "2023-10-05",
      lastLogin: "2024-01-15 09:15",
    },
    {
      id: 4,
      name: "Dewi Anggraini",
      email: "dewi@gobeng.com",
      type: "admin",
      status: "active",
      role: "Support Admin",
      phone: "081234567893",
      registeredDate: "2023-11-20",
      lastLogin: "2024-01-14 16:45",
    },
    {
      id: 5,
      name: "Rudi Hermawan",
      email: "rudi@email.com",
      type: "user",
      status: "active",
      phone: "081234567894",
      registeredDate: "2023-09-12",
      lastLogin: "2024-01-13 10:20",
    },
    {
      id: 6,
      name: "Bengkel Cepat Jaya",
      email: "cepat@bengkel.com",
      type: "mitra",
      status: "suspended",
      owner: "Candra Wijaya",
      phone: "081234567895",
      location: "Bandung",
      registeredDate: "2023-08-05",
      lastLogin: "2023-12-20 14:30",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showPassword, setShowPassword] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const [newAccount, setNewAccount] = useState({
    name: "",
    email: "",
    password: "",
    type: "user",
    status: "active",
    phone: "",
    location: "",
    owner: "",
    role: "",
  });

  const handleAddAccount = () => {
    if (!newAccount.name || !newAccount.email || !newAccount.password) {
      alert("Mohon lengkapi semua field yang diperlukan");
      return;
    }

    const id =
      accounts.length > 0
        ? Math.max(...accounts.map((account) => account.id)) + 1
        : 1;
    const now = new Date();
    const registeredDate = now.toISOString().split("T")[0];

    setAccounts([
      ...accounts,
      { ...newAccount, id, registeredDate, lastLogin: "-" },
    ]);
    setNewAccount({
      name: "",
      email: "",
      password: "",
      type: "user",
      status: "active",
      phone: "",
      location: "",
      owner: "",
      role: "",
    });
    setShowAddModal(false);
  };

  const handleEditAccount = () => {
    if (!selectedAccount.name || !selectedAccount.email) {
      alert("Mohon lengkapi semua field yang diperlukan");
      return;
    }

    setAccounts(
      accounts.map((account) =>
        account.id === selectedAccount.id ? selectedAccount : account
      )
    );
    setShowEditModal(false);
  };

  const handleDeleteAccount = () => {
    setAccounts(
      accounts.filter((account) => account.id !== selectedAccount.id)
    );
    setShowDeleteModal(false);
  };

  const handleStatusChange = (id, newStatus) => {
    setAccounts(
      accounts.map((account) =>
        account.id === id ? { ...account, status: newStatus } : account
      )
    );
  };

  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch =
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (account.phone &&
        account.phone.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = typeFilter === "all" || account.type === typeFilter;
    const matchesStatus =
      statusFilter === "all" || account.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  const getTypeBadgeClass = (type) => {
    switch (type) {
      case "mitra":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "admin":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "user":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "suspended":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getTypeText = (type) => {
    switch (type) {
      case "mitra":
        return "Mitra Bengkel";
      case "admin":
        return "Admin";
      case "user":
        return "Pengguna";
      default:
        return type;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Aktif";
      case "pending":
        return "Menunggu Verifikasi";
      case "suspended":
        return "Diblokir";
      default:
        return status;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "mitra":
        return <FaStore className="text-orange-600 dark:text-orange-400" />;
      case "admin":
        return (
          <FaUserShield className="text-purple-600 dark:text-purple-400" />
        );
      case "user":
        return <FaUser className="text-green-600 dark:text-green-400" />;
      default:
        return <FaUser className="text-gray-600 dark:text-gray-400" />;
    }
  };

  const getStatsData = () => {
    return {
      total: accounts.length,
      active: accounts.filter((a) => a.status === "active").length,
      pending: accounts.filter((a) => a.status === "pending").length,
      suspended: accounts.filter((a) => a.status === "suspended").length,
      mitras: accounts.filter((a) => a.type === "mitra").length,
      admins: accounts.filter((a) => a.type === "admin").length,
      users: accounts.filter((a) => a.type === "user").length,
    };
  };

  const stats = getStatsData();

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col space-y-3 sm:space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
              Manajemen Akun
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Kelola semua akun dalam sistem GoBeng
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <FaUserPlus className="text-sm" />
            <span>Tambah Akun</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Total Akun
              </p>
              <p className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                {stats.total}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
              <FaUsers className="text-orange-600 dark:text-orange-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Aktif
              </p>
              <p className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">
                {stats.active}
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
                Menunggu
              </p>
              <p className="text-lg sm:text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {stats.pending}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex-shrink-0">
              <FaUserCog className="text-yellow-600 dark:text-yellow-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Diblokir
              </p>
              <p className="text-lg sm:text-2xl font-bold text-red-600 dark:text-red-400">
                {stats.suspended}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0">
              <FaLock className="text-red-600 dark:text-red-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Mitra
              </p>
              <p className="text-lg sm:text-2xl font-bold text-orange-600 dark:text-orange-400">
                {stats.mitras}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex-shrink-0">
              <FaStore className="text-orange-600 dark:text-orange-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Admin
              </p>
              <p className="text-lg sm:text-2xl font-bold text-purple-600 dark:text-purple-400">
                {stats.admins}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex-shrink-0">
              <FaUserShield className="text-purple-600 dark:text-purple-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
                Pengguna
              </p>
              <p className="text-lg sm:text-2xl font-bold text-green-600 dark:text-green-400">
                {stats.users}
              </p>
            </div>
            <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
              <FaUser className="text-green-600 dark:text-green-400 text-sm sm:text-base" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        <div className="space-y-3 sm:space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
            <input
              type="text"
              placeholder="Cari akun berdasarkan nama, email, atau nomor telepon..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
            />
          </div>

          {/* Filter Toggle Button (Mobile) */}
          <div className="flex items-center justify-between lg:hidden">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Filter
            </span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
            >
              <FaFilter className="text-sm" />
              {showFilters ? (
                <FaChevronUp className="text-sm" />
              ) : (
                <FaChevronDown className="text-sm" />
              )}
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? "block" : "hidden"} lg:block`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <FaFilter className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none text-sm sm:text-base"
                >
                  <option value="all">Semua Tipe</option>
                  <option value="mitra">Mitra Bengkel</option>
                  <option value="admin">Admin</option>
                  <option value="user">Pengguna</option>
                </select>
              </div>
              <div className="relative">
                <FaFilter className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none text-sm sm:text-base"
                >
                  <option value="all">Semua Status</option>
                  <option value="active">Aktif</option>
                  <option value="pending">Menunggu Verifikasi</option>
                  <option value="suspended">Diblokir</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accounts - Desktop Table */}
      <div className="hidden lg:block bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Nama
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Email
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Tipe
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Terdaftar
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Login Terakhir
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredAccounts.map((account) => (
                <tr
                  key={account.id}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    {account.name}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {account.email}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(account.type)}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeBadgeClass(
                          account.type
                        )}`}
                      >
                        {getTypeText(account.type)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        account.status
                      )}`}
                    >
                      {getStatusText(account.status)}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {account.registeredDate}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {account.lastLogin}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedAccount(account);
                          setShowDetailModal(true);
                        }}
                        className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 p-1"
                        title="Lihat Detail"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedAccount(account);
                          setShowEditModal(true);
                        }}
                        className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 p-1"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      {account.status === "active" ? (
                        <button
                          onClick={() =>
                            handleStatusChange(account.id, "suspended")
                          }
                          className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-1"
                          title="Blokir"
                        >
                          <FaLock />
                        </button>
                      ) : account.status === "suspended" ? (
                        <button
                          onClick={() =>
                            handleStatusChange(account.id, "active")
                          }
                          className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-1"
                          title="Aktifkan"
                        >
                          <FaUnlock />
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            handleStatusChange(account.id, "active")
                          }
                          className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-1"
                          title="Verifikasi"
                        >
                          <FaCheck />
                        </button>
                      )}
                      <button
                        onClick={() => {
                          setSelectedAccount(account);
                          setShowDeleteModal(true);
                        }}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-1"
                        title="Hapus"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAccounts.length === 0 && (
          <div className="text-center py-12">
            <FaUsers className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada akun ditemukan.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Coba ubah filter atau tambahkan akun baru
            </p>
          </div>
        )}
      </div>

      {/* Accounts - Mobile Cards */}
      <div className="lg:hidden space-y-3 sm:space-y-4">
        {filteredAccounts.map((account) => (
          <div
            key={account.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeClass(
                    account.type
                  )}`}
                >
                  {getTypeText(account.type)}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                    account.status
                  )}`}
                >
                  {getStatusText(account.status)}
                </span>
              </div>
              <button
                onClick={() =>
                  setExpandedCard(
                    expandedCard === account.id ? null : account.id
                  )
                }
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {expandedCard === account.id ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>
            </div>

            {/* Card Content */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                {getTypeIcon(account.type)}
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-gray-900 dark:text-white text-sm truncate">
                    {account.name}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {account.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                <span>Terdaftar: {account.registeredDate}</span>
                <span>Login: {account.lastLogin}</span>
              </div>

              {/* Expanded Content */}
              {expandedCard === account.id && (
                <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  {account.type === "mitra" && (
                    <>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 dark:text-gray-400">
                          Pemilik:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {account.owner}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600 dark:text-gray-400">
                          Lokasi:
                        </span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {account.location}
                        </span>
                      </div>
                    </>
                  )}

                  {account.type === "admin" && (
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 dark:text-gray-400">
                        Role:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {account.role}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-600 dark:text-gray-400">
                      Telepon:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {account.phone}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <button
                      onClick={() => {
                        setSelectedAccount(account);
                        setShowDetailModal(true);
                      }}
                      className="flex-1 bg-orange-600 text-white py-2 px-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                    >
                      <FaEye />
                      <span>Detail</span>
                    </button>
                    <button
                      onClick={() => {
                        setSelectedAccount(account);
                        setShowEditModal(true);
                      }}
                      className="flex-1 bg-orange-600 text-white py-2 px-3 rounded-lg hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                    >
                      <FaEdit />
                      <span>Edit</span>
                    </button>
                    {account.status === "active" ? (
                      <button
                        onClick={() =>
                          handleStatusChange(account.id, "suspended")
                        }
                        className="flex-1 bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                      >
                        <FaLock />
                        <span>Blokir</span>
                      </button>
                    ) : account.status === "suspended" ? (
                      <button
                        onClick={() => handleStatusChange(account.id, "active")}
                        className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                      >
                        <FaUnlock />
                        <span>Aktifkan</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleStatusChange(account.id, "active")}
                        className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                      >
                        <FaCheck />
                        <span>Verifikasi</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredAccounts.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 text-center">
            <FaUsers className="text-3xl text-gray-300 dark:text-gray-600 mx-auto mb-3" />
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Tidak ada akun ditemukan.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Coba ubah filter atau tambahkan akun baru
            </p>
          </div>
        )}
      </div>

      {/* Add Account Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl max-w-md w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Tambah Akun Baru
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  value={newAccount.name}
                  onChange={(e) =>
                    setNewAccount({ ...newAccount, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={newAccount.email}
                  onChange={(e) =>
                    setNewAccount({ ...newAccount, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="email@gobeng.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newAccount.password}
                    onChange={(e) =>
                      setNewAccount({ ...newAccount, password: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="Masukkan password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Tipe Akun
                </label>
                <select
                  value={newAccount.type}
                  onChange={(e) =>
                    setNewAccount({ ...newAccount, type: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="user">Pengguna</option>
                  <option value="mitra">Mitra Bengkel</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  value={newAccount.phone}
                  onChange={(e) =>
                    setNewAccount({ ...newAccount, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  placeholder="081234567890"
                />
              </div>

              {newAccount.type === "mitra" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nama Pemilik
                    </label>
                    <input
                      type="text"
                      value={newAccount.owner}
                      onChange={(e) =>
                        setNewAccount({ ...newAccount, owner: e.target.value })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Nama pemilik bengkel"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Lokasi
                    </label>
                    <input
                      type="text"
                      value={newAccount.location}
                      onChange={(e) =>
                        setNewAccount({
                          ...newAccount,
                          location: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Alamat bengkel"
                    />
                  </div>
                </>
              )}

              {newAccount.type === "admin" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Role Admin
                  </label>
                  <select
                    value={newAccount.role}
                    onChange={(e) =>
                      setNewAccount({ ...newAccount, role: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Pilih Role</option>
                    <option value="Super Admin">Super Admin</option>
                    <option value="Support Admin">Support Admin</option>
                    <option value="Content Admin">Content Admin</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  value={newAccount.status}
                  onChange={(e) =>
                    setNewAccount({ ...newAccount, status: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="active">Aktif</option>
                  <option value="pending">Menunggu Verifikasi</option>
                  <option value="suspended">Diblokir</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Batal
              </button>
              <button
                onClick={handleAddAccount}
                className="px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700"
              >
                Tambah Akun
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Account Modal */}
      {showEditModal && selectedAccount && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl max-w-md w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Edit Akun
              </h3>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  value={selectedAccount.name}
                  onChange={(e) =>
                    setSelectedAccount({
                      ...selectedAccount,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={selectedAccount.email}
                  onChange={(e) =>
                    setSelectedAccount({
                      ...selectedAccount,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  value={selectedAccount.phone}
                  onChange={(e) =>
                    setSelectedAccount({
                      ...selectedAccount,
                      phone: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>

              {selectedAccount.type === "mitra" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nama Pemilik
                    </label>
                    <input
                      type="text"
                      value={selectedAccount.owner}
                      onChange={(e) =>
                        setSelectedAccount({
                          ...selectedAccount,
                          owner: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Lokasi
                    </label>
                    <input
                      type="text"
                      value={selectedAccount.location}
                      onChange={(e) =>
                        setSelectedAccount({
                          ...selectedAccount,
                          location: e.target.value,
                        })
                      }
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </>
              )}

              {selectedAccount.type === "admin" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Role Admin
                  </label>
                  <select
                    value={selectedAccount.role}
                    onChange={(e) =>
                      setSelectedAccount({
                        ...selectedAccount,
                        role: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="Super Admin">Super Admin</option>
                    <option value="Support Admin">Support Admin</option>
                    <option value="Content Admin">Content Admin</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  value={selectedAccount.status}
                  onChange={(e) =>
                    setSelectedAccount({
                      ...selectedAccount,
                      status: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="active">Aktif</option>
                  <option value="pending">Menunggu Verifikasi</option>
                  <option value="suspended">Diblokir</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Batal
              </button>
              <button
                onClick={handleEditAccount}
                className="px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Account Modal */}
      {showDeleteModal && selectedAccount && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl max-w-md w-full p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Hapus Akun
              </h3>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Apakah Anda yakin ingin menghapus akun{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {selectedAccount.name}
              </span>
              ? Tindakan ini tidak dapat dibatalkan.
            </p>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Batal
              </button>
              <button
                onClick={handleDeleteAccount}
                className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Account Detail Modal */}
      {showDetailModal && selectedAccount && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl max-w-lg w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Detail Akun
              </h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-full bg-orange-100 dark:bg-orange-900/30">
                  {getTypeIcon(selectedAccount.type)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                    {selectedAccount.name}
                  </h4>
                  <div className="flex items-center space-x-2 mt-1">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeClass(
                        selectedAccount.type
                      )}`}
                    >
                      {getTypeText(selectedAccount.type)}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        selectedAccount.status
                      )}`}
                    >
                      {getStatusText(selectedAccount.status)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Email:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {selectedAccount.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Telepon:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {selectedAccount.phone}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Terdaftar:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {selectedAccount.registeredDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Login Terakhir:
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {selectedAccount.lastLogin}
                  </span>
                </div>
              </div>

              {selectedAccount.type === "mitra" && (
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                    Informasi Bengkel
                  </h5>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Pemilik:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {selectedAccount.owner}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Lokasi:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {selectedAccount.location}
                    </span>
                  </div>
                </div>
              )}

              {selectedAccount.type === "admin" && (
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3">
                  <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                    Informasi Admin
                  </h5>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Role:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {selectedAccount.role}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex space-x-3 pt-2">
                <button
                  onClick={() => {
                    setShowDetailModal(false);
                    setSelectedAccount(selectedAccount);
                    setShowEditModal(true);
                  }}
                  className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <FaEdit />
                  <span>Edit</span>
                </button>
                {selectedAccount.status === "active" ? (
                  <button
                    onClick={() => {
                      handleStatusChange(selectedAccount.id, "suspended");
                      setShowDetailModal(false);
                    }}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <FaLock />
                    <span>Blokir</span>
                  </button>
                ) : selectedAccount.status === "suspended" ? (
                  <button
                    onClick={() => {
                      handleStatusChange(selectedAccount.id, "active");
                      setShowDetailModal(false);
                    }}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <FaUnlock />
                    <span>Aktifkan</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleStatusChange(selectedAccount.id, "active");
                      setShowDetailModal(false);
                    }}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <FaCheck />
                    <span>Verifikasi</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountManagement;
