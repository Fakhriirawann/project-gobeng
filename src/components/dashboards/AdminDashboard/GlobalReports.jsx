"use client";

import { useState } from "react";
import {
  FaStore,
  FaUsers,
  FaMoneyBillWave,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaDownload,
  FaCalendarAlt,
} from "react-icons/fa";

const GlobalReports = () => {
  const [selectedReport, setSelectedReport] = useState("revenue");
  const [dateRange, setDateRange] = useState("month");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterRegion, setFilterRegion] = useState("all");

  const reportTypes = [
    { id: "revenue", name: "Pendapatan Global", icon: <FaMoneyBillWave /> },
    { id: "transactions", name: "Transaksi", icon: <FaShoppingCart /> },
    { id: "users", name: "Pertumbuhan Pengguna", icon: <FaUsers /> },
    { id: "mitra", name: "Performa Mitra", icon: <FaStore /> },
    { id: "regional", name: "Analisis Regional", icon: <FaMapMarkerAlt /> },
  ];

  // Sample data for reports
  const revenueData = {
    daily: [
      { date: "Senin", revenue: 12000000 },
      { date: "Selasa", revenue: 15000000 },
      { date: "Rabu", revenue: 13500000 },
      { date: "Kamis", revenue: 18000000 },
      { date: "Jumat", revenue: 21000000 },
      { date: "Sabtu", revenue: 25000000 },
      { date: "Minggu", revenue: 10000000 },
    ],
    summary: {
      totalRevenue: 114500000,
      totalTransactions: 870,
      averageTransaction: 131609,
      comparedToPrevious: 15,
    },
  };

  const transactionsData = [
    { date: "Jan", count: 350, growth: 5 },
    { date: "Feb", count: 420, growth: 20 },
    { date: "Mar", count: 480, growth: 14 },
    { date: "Apr", count: 520, growth: 8 },
    { date: "Mei", count: 580, growth: 12 },
    { date: "Jun", count: 650, growth: 12 },
  ];

  const usersData = [
    { month: "Jan", newUsers: 245, totalUsers: 2450 },
    { month: "Feb", newUsers: 320, totalUsers: 2770 },
    { month: "Mar", newUsers: 280, totalUsers: 3050 },
    { month: "Apr", newUsers: 410, totalUsers: 3460 },
    { month: "Mei", newUsers: 380, totalUsers: 3840 },
    { month: "Jun", newUsers: 450, totalUsers: 4290 },
  ];

  const mitraData = [
    {
      name: "Bengkel Jaya Motor",
      revenue: 15000000,
      transactions: 85,
      rating: 4.8,
      location: "Jakarta",
    },
    {
      name: "Bengkel Maju Sejahtera",
      revenue: 12500000,
      transactions: 72,
      rating: 4.6,
      location: "Bandung",
    },
    {
      name: "Bengkel Cepat Jaya",
      revenue: 11000000,
      transactions: 68,
      rating: 4.5,
      location: "Surabaya",
    },
    {
      name: "Bengkel Sejahtera",
      revenue: 9800000,
      transactions: 55,
      rating: 4.7,
      location: "Medan",
    },
    {
      name: "Bengkel Prima Motor",
      revenue: 8500000,
      transactions: 48,
      rating: 4.4,
      location: "Yogyakarta",
    },
  ];

  const regionalData = [
    { region: "Jakarta", mitras: 45, revenue: 180000000, growth: 15 },
    { region: "Bandung", mitras: 32, revenue: 125000000, growth: 12 },
    { region: "Surabaya", mitras: 28, revenue: 110000000, growth: 18 },
    { region: "Medan", mitras: 22, revenue: 95000000, growth: 10 },
    { region: "Yogyakarta", mitras: 18, revenue: 75000000, growth: 8 },
  ];

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col space-y-3 sm:space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
              Laporan & Statistik Global
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Analisis performa dan statistik seluruh platform
            </p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
            <div className="relative">
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[160px]"
              >
                <option value="today">Hari Ini</option>
                <option value="week">Minggu Ini</option>
                <option value="month">Bulan Ini</option>
                <option value="quarter">3 Bulan Terakhir</option>
                <option value="year">Tahun Ini</option>
              </select>
              <FaCalendarAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            </div>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center justify-center space-x-2">
              <FaDownload />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Report Types */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
        {reportTypes.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`p-3 sm:p-4 rounded-xl flex flex-col items-center space-y-2 transition-colors duration-200 ${
              selectedReport === report.id
                ? "bg-orange-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-orange-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700"
            }`}
          >
            <div
              className={`p-2 sm:p-3 rounded-lg ${
                selectedReport === report.id
                  ? "bg-orange-500"
                  : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
              }`}
            >
              {report.icon}
            </div>
            <span className="font-medium text-xs sm:text-sm text-center">
              {report.name}
            </span>
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        {selectedReport === "revenue" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Laporan Pendapatan Global
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Dibandingkan dengan periode sebelumnya:</span>
                <span
                  className={`font-semibold ${
                    revenueData.summary.comparedToPrevious > 0
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {revenueData.summary.comparedToPrevious > 0 ? "+" : ""}
                  {revenueData.summary.comparedToPrevious}%
                </span>
              </div>
            </div>

            {/* Revenue Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Pendapatan
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Rp {revenueData.summary.totalRevenue.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Transaksi
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {revenueData.summary.totalTransactions}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rata-rata Transaksi
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Rp{" "}
                  {revenueData.summary.averageTransaction.toLocaleString(
                    "id-ID"
                  )}
                </p>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Grafik Pendapatan Harian
              </h4>
              <div className="h-48 sm:h-64 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <div className="h-full flex items-end justify-between">
                  {revenueData.daily.map((day, index) => {
                    const height = (day.revenue / 25000000) * 100;
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-end h-full flex-1 mx-1"
                      >
                        <div
                          className="w-full max-w-12 bg-orange-600 dark:bg-orange-500 rounded-t-md transition-all duration-500"
                          style={{ height: `${height}%` }}
                        ></div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
                          {day.date}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedReport === "transactions" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Laporan Transaksi
              </h3>
            </div>

            {/* Transactions Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Bulan
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Jumlah Transaksi
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Pertumbuhan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactionsData.map((data, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 dark:border-gray-700"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                        {data.date}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {data.count}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`font-semibold ${
                            data.growth > 0
                              ? "text-green-600 dark:text-green-400"
                              : "text-red-600 dark:text-red-400"
                          }`}
                        >
                          {data.growth > 0 ? "+" : ""}
                          {data.growth}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedReport === "users" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Pertumbuhan Pengguna
              </h3>
            </div>

            {/* Users Chart */}
            <div className="h-48 sm:h-64 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 mb-6">
              <div className="h-full flex items-end justify-between">
                {usersData.map((data, index) => {
                  const height = (data.newUsers / 450) * 100;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-end h-full flex-1 mx-1"
                    >
                      <div
                        className="w-full max-w-12 bg-green-600 dark:bg-green-500 rounded-t-md transition-all duration-500"
                        style={{ height: `${height}%` }}
                      ></div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 text-center">
                        {data.month}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Bulan
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Pengguna Baru
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Total Pengguna
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {usersData.map((data, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 dark:border-gray-700"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                        {data.month}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {data.newUsers}
                      </td>
                      <td className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        {data.totalUsers}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedReport === "mitra" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Performa Mitra Terbaik
              </h3>
            </div>

            {/* Mitra Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Nama Bengkel
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Lokasi
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Pendapatan
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Transaksi
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mitraData.map((mitra, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 dark:border-gray-700"
                    >
                      <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                        {mitra.name}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {mitra.location}
                      </td>
                      <td className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
                        Rp {mitra.revenue.toLocaleString("id-ID")}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                        {mitra.transactions}
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-lg text-xs font-medium">
                          ⭐ {mitra.rating}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedReport === "regional" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Analisis Regional
              </h3>
            </div>

            {/* Regional Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {regionalData.map((region, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {region.region}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-lg text-xs font-medium ${
                        region.growth > 10
                          ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400"
                      }`}
                    >
                      +{region.growth}%
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Mitra:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {region.mitras}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 dark:text-gray-400">
                        Pendapatan:
                      </span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Rp {(region.revenue / 1000000).toFixed(0)}M
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobalReports;
