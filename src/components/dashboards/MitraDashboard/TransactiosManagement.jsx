"use client";

import { useState } from "react";
import {
  FaPlus,
  FaEye,
  FaEdit,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUser,
  FaCar,
  FaCheck,
  FaClock,
  FaTimes,
  FaDownload,
  FaPrint,
  FaTools,
  FaShoppingBag,
} from "react-icons/fa";

const TransactionsManagement = () => {
  const [transactions, setTransactions] = useState([
    {
      id: "TRX001",
      customerName: "Budi Santoso",
      customerPhone: "081234567890",
      vehicleInfo: "Honda Civic 2020 - B 1234 ABC",
      services: ["Ganti Oli Mesin", "Tune Up"],
      products: ["Oli Mesin 5W-30"],
      totalAmount: 525000,
      status: "completed",
      paymentMethod: "cash",
      date: "2024-01-15",
      time: "09:30",
      mechanic: "Ahmad",
      notes: "Pelanggan reguler, servis rutin",
    },
    {
      id: "TRX002",
      customerName: "Siti Rahayu",
      customerPhone: "081234567891",
      vehicleInfo: "Toyota Avanza 2019 - B 5678 DEF",
      services: ["Servis AC Mobil"],
      products: ["Filter AC"],
      totalAmount: 250000,
      status: "in_progress",
      paymentMethod: "transfer",
      date: "2024-01-15",
      time: "11:00",
      mechanic: "Budi",
      notes: "AC tidak dingin, perlu pembersihan evaporator",
    },
    {
      id: "TRX003",
      customerName: "Andi Wijaya",
      customerPhone: "081234567892",
      vehicleInfo: "Suzuki Ertiga 2021 - B 9012 GHI",
      services: ["Ganti Ban"],
      products: ["Ban Michelin 185/65R15"],
      totalAmount: 3200000,
      status: "pending",
      paymentMethod: "credit_card",
      date: "2024-01-15",
      time: "14:30",
      mechanic: "Citra",
      notes: "Ganti 4 ban sekaligus",
    },
    {
      id: "TRX004",
      customerName: "Dewi Lestari",
      customerPhone: "081234567893",
      vehicleInfo: "Mitsubishi Xpander 2022 - B 3456 JKL",
      services: ["Servis Rem"],
      products: ["Kampas Rem", "Minyak Rem"],
      totalAmount: 450000,
      status: "cancelled",
      paymentMethod: "cash",
      date: "2024-01-14",
      time: "16:00",
      mechanic: "Ahmad",
      notes: "Dibatalkan karena spare part tidak tersedia",
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [paymentFilter, setPaymentFilter] = useState("all");

  const [newTransaction, setNewTransaction] = useState({
    customerName: "",
    customerPhone: "",
    vehicleInfo: "",
    services: [],
    products: [],
    totalAmount: 0,
    status: "pending",
    paymentMethod: "cash",
    mechanic: "",
    notes: "",
  });

  const handleAddTransaction = () => {
    const id = `TRX${String(transactions.length + 1).padStart(3, "0")}`;
    const now = new Date();
    setTransactions([
      ...transactions,
      {
        ...newTransaction,
        id,
        date: now.toISOString().split("T")[0],
        time: now.toTimeString().slice(0, 5),
      },
    ]);
    setNewTransaction({
      customerName: "",
      customerPhone: "",
      vehicleInfo: "",
      services: [],
      products: [],
      totalAmount: 0,
      status: "pending",
      paymentMethod: "cash",
      mechanic: "",
      notes: "",
    });
    setShowAddModal(false);
  };

  const updateTransactionStatus = (id, newStatus) => {
    setTransactions(
      transactions.map((transaction) =>
        transaction.id === id
          ? { ...transaction, status: newStatus }
          : transaction
      )
    );
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.customerName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.vehicleInfo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || transaction.status === statusFilter;
    const matchesPayment =
      paymentFilter === "all" || transaction.paymentMethod === paymentFilter;

    let matchesDate = true;
    if (dateFilter !== "all") {
      const transactionDate = new Date(transaction.date);
      const today = new Date();

      switch (dateFilter) {
        case "today":
          matchesDate = transactionDate.toDateString() === today.toDateString();
          break;
        case "week":
          const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          matchesDate = transactionDate >= weekAgo;
          break;
        case "month":
          matchesDate =
            transactionDate.getMonth() === today.getMonth() &&
            transactionDate.getFullYear() === today.getFullYear();
          break;
      }
    }

    return matchesSearch && matchesStatus && matchesPayment && matchesDate;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "in_progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Selesai";
      case "in_progress":
        return "Sedang Dikerjakan";
      case "pending":
        return "Menunggu";
      case "cancelled":
        return "Dibatalkan";
      default:
        return status;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <FaCheck className="text-green-600" />;
      case "in_progress":
        return <FaClock className="text-blue-600" />;
      case "pending":
        return <FaClock className="text-yellow-600" />;
      case "cancelled":
        return <FaTimes className="text-red-600" />;
      default:
        return <FaClock className="text-gray-600" />;
    }
  };

  const getTotalRevenue = () => {
    return filteredTransactions
      .filter((t) => t.status === "completed")
      .reduce((sum, t) => sum + t.totalAmount, 0);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Manajemen Transaksi
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Kelola semua transaksi bengkel Anda
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
              <FaDownload />
              <span>Export</span>
            </button>
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
            >
              <FaPlus />
              <span>Transaksi Baru</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Transaksi
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {filteredTransactions.length}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FaMoneyBillWave className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Selesai
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {
                  filteredTransactions.filter((t) => t.status === "completed")
                    .length
                }
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <FaCheck className="text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Sedang Dikerjakan
              </p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {
                  filteredTransactions.filter((t) => t.status === "in_progress")
                    .length
                }
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FaClock className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Pendapatan
              </p>
              <p className="text-lg font-bold text-orange-600 dark:text-orange-400">
                Rp {getTotalRevenue().toLocaleString("id-ID")}
              </p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <FaMoneyBillWave className="text-orange-600 dark:text-orange-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari transaksi, pelanggan, atau kendaraan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[140px]"
              >
                <option value="all">Semua Status</option>
                <option value="pending">Menunggu</option>
                <option value="in_progress">Dikerjakan</option>
                <option value="completed">Selesai</option>
                <option value="cancelled">Dibatalkan</option>
              </select>
            </div>
            <div className="relative">
              <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[140px]"
              >
                <option value="all">Semua Tanggal</option>
                <option value="today">Hari Ini</option>
                <option value="week">Minggu Ini</option>
                <option value="month">Bulan Ini</option>
              </select>
            </div>
            <div className="relative">
              <FaMoneyBillWave className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={paymentFilter}
                onChange={(e) => setPaymentFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[140px]"
              >
                <option value="all">Semua Pembayaran</option>
                <option value="cash">Tunai</option>
                <option value="transfer">Transfer</option>
                <option value="credit_card">Kartu Kredit</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  ID Transaksi
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Pelanggan
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Kendaraan
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Total
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
              {filteredTransactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    {transaction.id}
                  </td>
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {transaction.customerName}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {transaction.customerPhone}
                      </p>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {transaction.vehicleInfo}
                  </td>
                  <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                    Rp {transaction.totalAmount.toLocaleString("id-ID")}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(transaction.status)}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                          transaction.status
                        )}`}
                      >
                        {getStatusText(transaction.status)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    <div>
                      <p>{transaction.date}</p>
                      <p className="text-sm">{transaction.time}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedTransaction(transaction);
                          setShowDetailModal(true);
                        }}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-1"
                        title="Lihat Detail"
                      >
                        <FaEye />
                      </button>
                      {transaction.status !== "completed" &&
                        transaction.status !== "cancelled" && (
                          <button
                            onClick={() => {
                              setSelectedTransaction(transaction);
                              setShowEditModal(true);
                            }}
                            className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 p-1"
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                        )}
                      <button
                        className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-1"
                        title="Print"
                      >
                        <FaPrint />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <FaMoneyBillWave className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada transaksi ditemukan.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Coba ubah filter atau tambahkan transaksi baru
            </p>
          </div>
        )}
      </div>

      {/* Transaction Detail Modal */}
      {showDetailModal && selectedTransaction && (
        <TransactionDetailModal
          transaction={selectedTransaction}
          onClose={() => setShowDetailModal(false)}
          onUpdateStatus={updateTransactionStatus}
        />
      )}

      {/* Add Transaction Modal */}
      {showAddModal && (
        <AddTransactionModal
          transaction={newTransaction}
          setTransaction={setNewTransaction}
          onClose={() => setShowAddModal(false)}
          onSave={handleAddTransaction}
        />
      )}
    </div>
  );
};

// Transaction Detail Modal Component
const TransactionDetailModal = ({ transaction, onClose, onUpdateStatus }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Detail Transaksi {transaction.id}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Customer Info */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Informasi Pelanggan
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <FaUser className="text-orange-600 dark:text-orange-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nama
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {transaction.customerName}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaCar className="text-orange-600 dark:text-orange-400" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kendaraan
                  </p>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {transaction.vehicleInfo}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services & Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Layanan
              </h4>
              <div className="space-y-2">
                {transaction.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
                  >
                    <FaTools className="text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-900 dark:text-white">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Produk
              </h4>
              <div className="space-y-2">
                {transaction.products.map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg"
                  >
                    <FaShoppingBag className="text-green-600 dark:text-green-400" />
                    <span className="text-gray-900 dark:text-white">
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
              Detail Transaksi
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Amount
                </p>
                <p className="text-xl font-bold text-orange-600 dark:text-orange-400">
                  Rp {transaction.totalAmount.toLocaleString("id-ID")}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Metode Pembayaran
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {transaction.paymentMethod === "cash" && "Tunai"}
                  {transaction.paymentMethod === "transfer" && "Transfer"}
                  {transaction.paymentMethod === "credit_card" &&
                    "Kartu Kredit"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mekanik
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {transaction.mechanic}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tanggal & Waktu
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {transaction.date} - {transaction.time}
                </p>
              </div>
            </div>
          </div>

          {/* Notes */}
          {transaction.notes && (
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Catatan
              </h4>
              <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                {transaction.notes}
              </p>
            </div>
          )}

          {/* Status Update Buttons */}
          {transaction.status !== "completed" &&
            transaction.status !== "cancelled" && (
              <div className="flex flex-wrap gap-3">
                {transaction.status === "pending" && (
                  <button
                    onClick={() => {
                      onUpdateStatus(transaction.id, "in_progress");
                      onClose();
                    }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Mulai Pengerjaan
                  </button>
                )}
                {transaction.status === "in_progress" && (
                  <button
                    onClick={() => {
                      onUpdateStatus(transaction.id, "completed");
                      onClose();
                    }}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Selesaikan
                  </button>
                )}
                <button
                  onClick={() => {
                    onUpdateStatus(transaction.id, "cancelled");
                    onClose();
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Batalkan
                </button>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

// Add Transaction Modal Component
const AddTransactionModal = ({
  transaction,
  setTransaction,
  onClose,
  onSave,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Tambah Transaksi Baru
        </h3>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nama Pelanggan
              </label>
              <input
                type="text"
                value={transaction.customerName}
                onChange={(e) =>
                  setTransaction({
                    ...transaction,
                    customerName: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Masukkan nama pelanggan"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nomor Telepon
              </label>
              <input
                type="text"
                value={transaction.customerPhone}
                onChange={(e) =>
                  setTransaction({
                    ...transaction,
                    customerPhone: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="081234567890"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Informasi Kendaraan
            </label>
            <input
              type="text"
              value={transaction.vehicleInfo}
              onChange={(e) =>
                setTransaction({ ...transaction, vehicleInfo: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Honda Civic 2020 - B 1234 ABC"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Total Amount (Rp)
              </label>
              <input
                type="number"
                value={transaction.totalAmount}
                onChange={(e) =>
                  setTransaction({
                    ...transaction,
                    totalAmount: Number.parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Metode Pembayaran
              </label>
              <select
                value={transaction.paymentMethod}
                onChange={(e) =>
                  setTransaction({
                    ...transaction,
                    paymentMethod: e.target.value,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="cash">Tunai</option>
                <option value="transfer">Transfer</option>
                <option value="credit_card">Kartu Kredit</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Mekanik
            </label>
            <input
              type="text"
              value={transaction.mechanic}
              onChange={(e) =>
                setTransaction({ ...transaction, mechanic: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Nama mekanik"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Catatan
            </label>
            <textarea
              value={transaction.notes}
              onChange={(e) =>
                setTransaction({ ...transaction, notes: e.target.value })
              }
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Catatan tambahan..."
            ></textarea>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Batal
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-orange-600 text-white rounded-xl hover:bg-orange-700"
          >
            Tambah Transaksi
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsManagement;
