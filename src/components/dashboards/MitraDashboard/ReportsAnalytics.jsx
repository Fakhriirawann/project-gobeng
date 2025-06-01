"use client";

import { useState } from "react";
import {
  FaChartLine,
  FaChartBar,
  FaChartPie,
  FaDownload,
  FaCalendarAlt,
  FaFilter,
} from "react-icons/fa";

const ReportsAnalytics = () => {
  const [selectedReport, setSelectedReport] = useState("sales");
  const [dateRange, setDateRange] = useState("month");
  const [filterCategory, setFilterCategory] = useState("all");

  const reportTypes = [
    { id: "sales", name: "Laporan Penjualan", icon: <FaChartLine /> },
    { id: "services", name: "Layanan Populer", icon: <FaChartBar /> },
    { id: "inventory", name: "Performa Inventori", icon: <FaChartPie /> },
  ];

  // Sample data for reports
  const salesData = {
    daily: [
      { date: "Senin", revenue: 1200000 },
      { date: "Selasa", revenue: 1500000 },
      { date: "Rabu", revenue: 1350000 },
      { date: "Kamis", revenue: 1800000 },
      { date: "Jumat", revenue: 2100000 },
      { date: "Sabtu", revenue: 2500000 },
      { date: "Minggu", revenue: 1000000 },
    ],
    summary: {
      totalRevenue: 11450000,
      totalTransactions: 87,
      averageTransaction: 131609,
      comparedToPrevious: 15,
    },
  };

  const servicesData = [
    { name: "Ganti Oli", count: 35, revenue: 5250000 },
    { name: "Tune Up", count: 22, revenue: 6600000 },
    { name: "Servis AC", count: 18, revenue: 3600000 },
    { name: "Ganti Ban", count: 12, revenue: 6000000 },
    { name: "Servis Rem", count: 15, revenue: 3750000 },
  ];

  const inventoryData = [
    { name: "Oli Mesin", sold: 42, revenue: 3150000, profit: 1260000 },
    { name: "Filter Udara", sold: 28, revenue: 1400000, profit: 560000 },
    { name: "Busi", sold: 35, revenue: 875000, profit: 350000 },
    { name: "Kampas Rem", sold: 18, revenue: 2700000, profit: 1080000 },
    { name: "Ban", sold: 12, revenue: 9600000, profit: 2400000 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Laporan & Analitik
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Analisis performa bisnis Anda
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reportTypes.map((report) => (
          <button
            key={report.id}
            onClick={() => setSelectedReport(report.id)}
            className={`p-4 rounded-xl flex items-center space-x-3 transition-colors duration-200 ${
              selectedReport === report.id
                ? "bg-orange-600 text-white"
                : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-orange-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700"
            }`}
          >
            <div
              className={`p-3 rounded-lg ${
                selectedReport === report.id
                  ? "bg-orange-500"
                  : "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
              }`}
            >
              {report.icon}
            </div>
            <span className="font-medium text-sm sm:text-base">
              {report.name}
            </span>
          </button>
        ))}
      </div>

      {/* Report Content */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
        {selectedReport === "sales" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Laporan Penjualan
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <span>Dibandingkan dengan periode sebelumnya:</span>
                <span
                  className={`font-semibold ${
                    salesData.summary.comparedToPrevious > 0
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {salesData.summary.comparedToPrevious > 0 ? "+" : ""}
                  {salesData.summary.comparedToPrevious}%
                </span>
              </div>
            </div>

            {/* Sales Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Pendapatan
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Rp {salesData.summary.totalRevenue.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Transaksi
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {salesData.summary.totalTransactions}
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-xl">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Rata-rata Transaksi
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  Rp{" "}
                  {salesData.summary.averageTransaction.toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            {/* Sales Chart */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Grafik Penjualan
              </h4>
              <div className="h-48 sm:h-64 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <div className="h-full flex items-end justify-between">
                  {salesData.daily.map((day, index) => {
                    const height = (day.revenue / 2500000) * 100;
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

        {selectedReport === "services" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Layanan Populer
              </h3>
              <div className="relative">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[160px]"
                >
                  <option value="all">Semua Kategori</option>
                  <option value="maintenance">Perawatan</option>
                  <option value="repair">Perbaikan</option>
                </select>
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            {/* Services Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Layanan
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Jumlah
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Pendapatan
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Persentase
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {servicesData.map((service, index) => {
                    const totalServices = servicesData.reduce(
                      (sum, item) => sum + item.count,
                      0
                    );
                    const percentage = (service.count / totalServices) * 100;

                    return (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700"
                      >
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                          {service.name}
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                          {service.count}
                        </td>
                        <td className="py-3 px-4 font-semibold text-gray-900 dark:text-white">
                          Rp {service.revenue.toLocaleString("id-ID")}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                              <div
                                className="bg-orange-600 h-2.5 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400 min-w-[45px]">
                              {percentage.toFixed(1)}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedReport === "inventory" && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                Performa Inventori
              </h3>
              <div className="relative">
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[160px]"
                >
                  <option value="all">Semua Kategori</option>
                  <option value="oil">Oli</option>
                  <option value="parts">Sparepart</option>
                </select>
                <FaFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
              </div>
            </div>

            {/* Inventory Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Produk
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Terjual
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Pendapatan
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Profit
                    </th>
                    <th className="text-left py-3 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                      Margin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((item, index) => {
                    const margin = (item.profit / item.revenue) * 100;

                    return (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700"
                      >
                        <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                          {item.sold}
                        </td>
                        <td className="py-3 px-4 text-gray-900 dark:text-white">
                          Rp {item.revenue.toLocaleString("id-ID")}
                        </td>
                        <td className="py-3 px-4 font-semibold text-green-600 dark:text-green-400">
                          Rp {item.profit.toLocaleString("id-ID")}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg text-xs font-medium">
                            {margin.toFixed(1)}%
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsAnalytics;
