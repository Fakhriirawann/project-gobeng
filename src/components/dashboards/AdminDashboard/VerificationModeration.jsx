"use client";

import { useState } from "react";
import {
  FaShieldAlt,
  FaCheck,
  FaTimes,
  FaEye,
  FaSearch,
  FaFilter,
  FaStore,
  FaUser,
  FaExclamationTriangle,
  FaChevronDown,
  FaChevronUp,
  FaFileAlt,
} from "react-icons/fa";

const VerificationModeration = () => {
  const [verificationRequests, setVerificationRequests] = useState([
    {
      id: 1,
      type: "mitra",
      name: "Bengkel Jaya Abadi",
      owner: "Ahmad Jaya",
      email: "jaya@bengkel.com",
      phone: "081234567890",
      location: "Jakarta Selatan",
      submittedDate: "2024-01-15",
      status: "pending",
      documents: ["KTP", "SIUP", "Foto Bengkel"],
      notes: "Dokumen lengkap, menunggu verifikasi lapangan",
    },
    {
      id: 2,
      type: "mitra",
      name: "Bengkel Maju Motor",
      owner: "Budi Santoso",
      email: "budi@bengkel.com",
      phone: "081234567891",
      location: "Bandung",
      submittedDate: "2024-01-14",
      status: "pending",
      documents: ["KTP", "SIUP"],
      notes: "Dokumen foto bengkel belum dilengkapi",
    },
    {
      id: 3,
      type: "user",
      name: "Siti Rahayu",
      email: "siti@email.com",
      phone: "081234567892",
      submittedDate: "2024-01-13",
      status: "pending",
      documents: ["KTP"],
      notes: "Verifikasi identitas pengguna",
    },
    {
      id: 4,
      type: "mitra",
      name: "Bengkel Cepat Jaya",
      owner: "Candra Wijaya",
      email: "candra@bengkel.com",
      phone: "081234567893",
      location: "Surabaya",
      submittedDate: "2024-01-12",
      status: "approved",
      documents: ["KTP", "SIUP", "Foto Bengkel"],
      notes: "Verifikasi berhasil, akun telah diaktifkan",
    },
    {
      id: 5,
      type: "mitra",
      name: "Bengkel Prima Motor",
      owner: "Dewi Lestari",
      email: "dewi@bengkel.com",
      phone: "081234567894",
      location: "Medan",
      submittedDate: "2024-01-11",
      status: "rejected",
      documents: ["KTP"],
      notes: "Dokumen tidak lengkap, SIUP tidak valid",
    },
  ]);

  const [contentReports, setContentReports] = useState([
    {
      id: 1,
      type: "inappropriate_content",
      reportedBy: "User123",
      targetUser: "Bengkel ABC",
      content: "Foto profil tidak sesuai",
      submittedDate: "2024-01-15",
      status: "pending",
      severity: "medium",
    },
    {
      id: 2,
      type: "spam",
      reportedBy: "User456",
      targetUser: "Bengkel XYZ",
      content: "Spam di komentar",
      submittedDate: "2024-01-14",
      status: "pending",
      severity: "low",
    },
    {
      id: 3,
      type: "fraud",
      reportedBy: "User789",
      targetUser: "Bengkel DEF",
      content: "Transaksi mencurigakan",
      submittedDate: "2024-01-13",
      status: "resolved",
      severity: "high",
    },
  ]);

  const [activeTab, setActiveTab] = useState("verification");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const handleVerificationAction = (id, action, notes = "") => {
    setVerificationRequests(
      verificationRequests.map((request) =>
        request.id === id
          ? {
              ...request,
              status: action,
              notes: notes || request.notes,
            }
          : request
      )
    );
  };

  const handleContentAction = (id, action) => {
    setContentReports(
      contentReports.map((report) =>
        report.id === id
          ? {
              ...report,
              status: action,
            }
          : report
      )
    );
  };

  const filteredVerificationRequests = verificationRequests.filter(
    (request) => {
      const matchesSearch =
        request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        request.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || request.status === statusFilter;
      const matchesType = typeFilter === "all" || request.type === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    }
  );

  const filteredContentReports = contentReports.filter((report) => {
    const matchesSearch =
      report.targetUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reportedBy.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || report.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "approved":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "resolved":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getSeverityBadgeClass = (severity) => {
    switch (severity) {
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

  const getStatusText = (status) => {
    switch (status) {
      case "pending":
        return "Menunggu";
      case "approved":
        return "Disetujui";
      case "rejected":
        return "Ditolak";
      case "resolved":
        return "Diselesaikan";
      default:
        return status;
    }
  };

  const getSeverityText = (severity) => {
    switch (severity) {
      case "high":
        return "Tinggi";
      case "medium":
        return "Sedang";
      case "low":
        return "Rendah";
      default:
        return severity;
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        <div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
            Verifikasi & Moderasi
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Kelola verifikasi akun dan moderasi konten
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        <div className="flex border-b border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setActiveTab("verification")}
            className={`flex-1 px-4 py-3 text-sm sm:text-base font-medium transition-colors duration-200 ${
              activeTab === "verification"
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Verifikasi Akun
          </button>
          <button
            onClick={() => setActiveTab("moderation")}
            className={`flex-1 px-4 py-3 text-sm sm:text-base font-medium transition-colors duration-200 ${
              activeTab === "moderation"
                ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Moderasi Konten
          </button>
        </div>

        <div className="p-3 sm:p-4 lg:p-6">
          {/* Search and Filters */}
          <div className="mb-6 space-y-3 sm:space-y-4">
            <div className="relative">
              <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder={
                  activeTab === "verification"
                    ? "Cari berdasarkan nama atau email..."
                    : "Cari berdasarkan pengguna atau pelapor..."
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm sm:text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="relative">
                <FaFilter className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 sm:pl-12 pr-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none text-sm sm:text-base"
                >
                  <option value="all">Semua Status</option>
                  <option value="pending">Menunggu</option>
                  {activeTab === "verification" ? (
                    <>
                      <option value="approved">Disetujui</option>
                      <option value="rejected">Ditolak</option>
                    </>
                  ) : (
                    <option value="resolved">Diselesaikan</option>
                  )}
                </select>
              </div>
              {activeTab === "verification" && (
                <div className="relative">
                  <FaFilter className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="w-full pl-10 sm:pl-12 pr-8 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none text-sm sm:text-base"
                  >
                    <option value="all">Semua Tipe</option>
                    <option value="mitra">Mitra</option>
                    <option value="user">Pengguna</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* Verification Tab Content */}
          {activeTab === "verification" && (
            <>
              {/* Desktop Table */}
              <div className="hidden lg:block">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700/50">
                      <tr>
                        <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                          Nama
                        </th>
                        <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                          Tipe
                        </th>
                        <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                          Email
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
                      {filteredVerificationRequests.map((request) => (
                        <tr
                          key={request.id}
                          className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        >
                          <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                            {request.name}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-2">
                              {request.type === "mitra" ? (
                                <FaStore className="text-blue-600 dark:text-blue-400" />
                              ) : (
                                <FaUser className="text-green-600 dark:text-green-400" />
                              )}
                              <span className="text-gray-600 dark:text-gray-400">
                                {request.type === "mitra"
                                  ? "Mitra"
                                  : "Pengguna"}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                            {request.email}
                          </td>
                          <td className="py-4 px-6">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                                request.status
                              )}`}
                            >
                              {getStatusText(request.status)}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                            {request.submittedDate}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => {
                                  setSelectedItem(request);
                                  setShowDetailModal(true);
                                }}
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-1"
                                title="Lihat Detail"
                              >
                                <FaEye />
                              </button>
                              {request.status === "pending" && (
                                <>
                                  <button
                                    onClick={() =>
                                      handleVerificationAction(
                                        request.id,
                                        "approved"
                                      )
                                    }
                                    className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-1"
                                    title="Setujui"
                                  >
                                    <FaCheck />
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleVerificationAction(
                                        request.id,
                                        "rejected"
                                      )
                                    }
                                    className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-1"
                                    title="Tolak"
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
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-3 sm:space-y-4">
                {filteredVerificationRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {request.type === "mitra" ? (
                          <FaStore className="text-blue-600 dark:text-blue-400" />
                        ) : (
                          <FaUser className="text-green-600 dark:text-green-400" />
                        )}
                        <span className="font-medium text-gray-900 dark:text-white">
                          {request.name}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          setExpandedCard(
                            expandedCard === request.id ? null : request.id
                          )
                        }
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {expandedCard === request.id ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Email:
                        </span>
                        <span className="text-gray-900 dark:text-white">
                          {request.email}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Status:
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                            request.status
                          )}`}
                        >
                          {getStatusText(request.status)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Tanggal:
                        </span>
                        <span className="text-gray-900 dark:text-white">
                          {request.submittedDate}
                        </span>
                      </div>

                      {expandedCard === request.id && (
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600 space-y-2">
                          {request.type === "mitra" && (
                            <>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">
                                  Pemilik:
                                </span>
                                <span className="text-gray-900 dark:text-white">
                                  {request.owner}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">
                                  Lokasi:
                                </span>
                                <span className="text-gray-900 dark:text-white">
                                  {request.location}
                                </span>
                              </div>
                            </>
                          )}
                          <div className="text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Dokumen:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {request.documents.map((doc, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded text-xs"
                                >
                                  {doc}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Catatan:
                            </span>
                            <p className="text-gray-900 dark:text-white mt-1">
                              {request.notes}
                            </p>
                          </div>

                          {request.status === "pending" && (
                            <div className="flex space-x-2 pt-2">
                              <button
                                onClick={() => {
                                  setSelectedItem(request);
                                  setShowDetailModal(true);
                                }}
                                className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                              >
                                <FaEye />
                                <span>Detail</span>
                              </button>
                              <button
                                onClick={() =>
                                  handleVerificationAction(
                                    request.id,
                                    "approved"
                                  )
                                }
                                className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                              >
                                <FaCheck />
                                <span>Setujui</span>
                              </button>
                              <button
                                onClick={() =>
                                  handleVerificationAction(
                                    request.id,
                                    "rejected"
                                  )
                                }
                                className="flex-1 bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                              >
                                <FaTimes />
                                <span>Tolak</span>
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Moderation Tab Content */}
          {activeTab === "moderation" && (
            <>
              {/* Desktop Table */}
              <div className="hidden lg:block">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-700/50">
                      <tr>
                        <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                          Pengguna Dilaporkan
                        </th>
                        <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                          Pelapor
                        </th>
                        <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                          Konten
                        </th>
                        <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                          Tingkat
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
                      {filteredContentReports.map((report) => (
                        <tr
                          key={report.id}
                          className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                        >
                          <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                            {report.targetUser}
                          </td>
                          <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                            {report.reportedBy}
                          </td>
                          <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                            {report.content}
                          </td>
                          <td className="py-4 px-6">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityBadgeClass(
                                report.severity
                              )}`}
                            >
                              {getSeverityText(report.severity)}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                                report.status
                              )}`}
                            >
                              {getStatusText(report.status)}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                            {report.submittedDate}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex space-x-2">
                              <button
                                onClick={() => {
                                  setSelectedItem(report);
                                  setShowDetailModal(true);
                                }}
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-1"
                                title="Lihat Detail"
                              >
                                <FaEye />
                              </button>
                              {report.status === "pending" && (
                                <button
                                  onClick={() =>
                                    handleContentAction(report.id, "resolved")
                                  }
                                  className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 p-1"
                                  title="Selesaikan"
                                >
                                  <FaCheck />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-3 sm:space-y-4">
                {filteredContentReports.map((report) => (
                  <div
                    key={report.id}
                    className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <FaExclamationTriangle className="text-red-600 dark:text-red-400" />
                        <span className="font-medium text-gray-900 dark:text-white">
                          {report.targetUser}
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          setExpandedCard(
                            expandedCard === report.id ? null : report.id
                          )
                        }
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        {expandedCard === report.id ? (
                          <FaChevronUp />
                        ) : (
                          <FaChevronDown />
                        )}
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Pelapor:
                        </span>
                        <span className="text-gray-900 dark:text-white">
                          {report.reportedBy}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Tingkat:
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityBadgeClass(
                            report.severity
                          )}`}
                        >
                          {getSeverityText(report.severity)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">
                          Status:
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                            report.status
                          )}`}
                        >
                          {getStatusText(report.status)}
                        </span>
                      </div>

                      {expandedCard === report.id && (
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600 space-y-2">
                          <div className="text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Konten:
                            </span>
                            <p className="text-gray-900 dark:text-white mt-1">
                              {report.content}
                            </p>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-400">
                              Tanggal:
                            </span>
                            <span className="text-gray-900 dark:text-white">
                              {report.submittedDate}
                            </span>
                          </div>

                          {report.status === "pending" && (
                            <div className="flex space-x-2 pt-2">
                              <button
                                onClick={() => {
                                  setSelectedItem(report);
                                  setShowDetailModal(true);
                                }}
                                className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                              >
                                <FaEye />
                                <span>Detail</span>
                              </button>
                              <button
                                onClick={() =>
                                  handleContentAction(report.id, "resolved")
                                }
                                className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-xs"
                              >
                                <FaCheck />
                                <span>Selesaikan</span>
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Empty State */}
          {((activeTab === "verification" &&
            filteredVerificationRequests.length === 0) ||
            (activeTab === "moderation" &&
              filteredContentReports.length === 0)) && (
            <div className="text-center py-12">
              <FaShieldAlt className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">
                {activeTab === "verification"
                  ? "Tidak ada permintaan verifikasi."
                  : "Tidak ada laporan konten."}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                {activeTab === "verification"
                  ? "Semua permintaan verifikasi telah diproses"
                  : "Tidak ada konten yang dilaporkan"}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {showDetailModal && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl max-w-lg w-full p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                {activeTab === "verification"
                  ? "Detail Verifikasi"
                  : "Detail Laporan"}
              </h3>
              <button
                onClick={() => setShowDetailModal(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              {activeTab === "verification" ? (
                <>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Nama:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedItem.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Email:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedItem.email}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Telepon:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedItem.phone}
                      </span>
                    </div>
                    {selectedItem.type === "mitra" && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Pemilik:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {selectedItem.owner}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">
                            Lokasi:
                          </span>
                          <span className="font-medium text-gray-900 dark:text-white">
                            {selectedItem.location}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Dokumen
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.documents.map((doc, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 px-3 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-lg text-sm"
                        >
                          <FaFileAlt />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Catatan
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-sm">
                      {selectedItem.notes}
                    </p>
                  </div>

                  {selectedItem.status === "pending" && (
                    <div className="flex space-x-3 pt-2">
                      <button
                        onClick={() => {
                          handleVerificationAction(selectedItem.id, "approved");
                          setShowDetailModal(false);
                        }}
                        className="flex-1 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <FaCheck />
                        <span>Setujui</span>
                      </button>
                      <button
                        onClick={() => {
                          handleVerificationAction(selectedItem.id, "rejected");
                          setShowDetailModal(false);
                        }}
                        className="flex-1 bg-red-600 text-white py-2 px-4 rounded-xl hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <FaTimes />
                        <span>Tolak</span>
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <>
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Pengguna Dilaporkan:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedItem.targetUser}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Pelapor:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedItem.reportedBy}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Tipe Laporan:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {selectedItem.type}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Tingkat:
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityBadgeClass(
                          selectedItem.severity
                        )}`}
                      >
                        {getSeverityText(selectedItem.severity)}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Konten Dilaporkan
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg text-sm">
                      {selectedItem.content}
                    </p>
                  </div>

                  {selectedItem.status === "pending" && (
                    <div className="flex space-x-3 pt-2">
                      <button
                        onClick={() => {
                          handleContentAction(selectedItem.id, "resolved");
                          setShowDetailModal(false);
                        }}
                        className="flex-1 bg-green-600 text-white py-2 px-4 rounded-xl hover:bg-green-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <FaCheck />
                        <span>Selesaikan</span>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerificationModeration;
