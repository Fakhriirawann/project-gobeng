"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaShoppingCart,
  FaUsers,
  FaUserCog,
  FaTools,
  FaUserPlus,
  FaStore,
  FaChartBar,
} from "react-icons/fa";

const MitraOverview = () => {
  const [stats, setStats] = useState({
    monthlyRevenue: 45000000,
    totalTransactions: 234,
    totalCustomers: 189,
    activeStaff: 5,
    pendingOrders: 12,
    completedToday: 8,
  });

  const [recentActivities] = useState([
    {
      id: 1,
      type: "transaction",
      message: "Transaksi baru dari Budi Santoso",
      time: "5 menit lalu",
      amount: 150000,
    },
    {
      id: 2,
      type: "staff",
      message: "Kasir baru 'Sari' telah ditambahkan",
      time: "1 jam lalu",
    },
    {
      id: 3,
      type: "inventory",
      message: "Stok Oli Mesin menipis (5 tersisa)",
      time: "2 jam lalu",
    },
    {
      id: 4,
      type: "transaction",
      message: "Pembayaran Rp 300.000 diterima",
      time: "3 jam lalu",
      amount: 300000,
    },
  ]);

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatsCard
          title="Pendapatan Bulan Ini"
          value={`${(stats.monthlyRevenue / 1000000).toFixed(0)}M`}
          change="+15% dari bulan lalu"
          icon={<FaMoneyBillWave className="text-xl sm:text-2xl" />}
          color="orange"
          delay={0}
        />

        <StatsCard
          title="Total Transaksi"
          value={stats.totalTransactions}
          change="+8% dari bulan lalu"
          icon={<FaShoppingCart className="text-xl sm:text-2xl" />}
          color="blue"
          delay={0.1}
        />

        <StatsCard
          title="Total Pelanggan"
          value={stats.totalCustomers}
          change="+12% dari bulan lalu"
          icon={<FaUsers className="text-xl sm:text-2xl" />}
          color="green"
          delay={0.2}
        />

        <StatsCard
          title="Staff Aktif"
          value={stats.activeStaff}
          change="Semua online"
          icon={<FaUserCog className="text-xl sm:text-2xl" />}
          color="purple"
          delay={0.3}
        />
      </div>

      {/* Quick Actions & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Aksi Cepat
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <QuickActionButton
              onClick={() => {}}
              icon={<FaTools />}
              label="Kelola Layanan"
              color="orange"
            />
            <QuickActionButton
              onClick={() => {}}
              icon={<FaUserPlus />}
              label="Tambah Staff"
              color="blue"
            />
            <QuickActionButton
              onClick={() => {}}
              icon={<FaChartLine />}
              label="Lihat Laporan"
              color="green"
            />
            <QuickActionButton
              onClick={() => {}}
              icon={<FaStore />}
              label="Edit Profil"
              color="purple"
            />
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Aktivitas Terbaru
          </h3>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Performance Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Performa Penjualan
          </h3>
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
            <option>7 Hari Terakhir</option>
            <option>30 Hari Terakhir</option>
            <option>3 Bulan Terakhir</option>
          </select>
        </div>
        <div className="h-48 sm:h-64 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <FaChartBar className="text-3xl sm:text-4xl text-gray-400 dark:text-gray-500 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
              Grafik Performa Penjualan
            </p>
            <p className="text-xs sm:text-sm text-gray-400 dark:text-gray-500">
              Chart akan ditampilkan di sini
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, change, icon, color, delay }) => {
  const bgGradient = {
    orange: "from-orange-500 to-orange-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
  };

  const bgIcon = {
    orange: "bg-orange-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    purple: "bg-purple-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-gradient-to-r ${bgGradient[color]} p-4 sm:p-6 rounded-2xl shadow-lg text-white`}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h3
            className={`text-${color}-100 text-xs sm:text-sm font-medium mb-2`}
          >
            {title}
          </h3>
          <p className="text-2xl sm:text-3xl font-bold truncate">{value}</p>
          <p className={`text-${color}-100 text-xs sm:text-sm mt-1`}>
            {change}
          </p>
        </div>
        <div
          className={`${bgIcon[color]} bg-opacity-30 p-2 sm:p-3 rounded-xl flex-shrink-0 ml-2`}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

// Quick Action Button Component
const QuickActionButton = ({ onClick, icon, label, color }) => {
  const bgColor = {
    orange:
      "bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30",
    blue: "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30",
    green:
      "bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30",
    purple:
      "bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30",
  };

  const textColor = {
    orange: "text-orange-600 dark:text-orange-400",
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    purple: "text-purple-600 dark:text-purple-400",
  };

  return (
    <button
      onClick={onClick}
      className={`p-3 sm:p-4 ${bgColor[color]} rounded-xl transition-colors duration-200 text-center w-full`}
    >
      <div className={`text-xl sm:text-2xl ${textColor[color]} mx-auto mb-2`}>
        {icon}
      </div>
      <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </p>
    </button>
  );
};

// Activity Item Component
const ActivityItem = ({ activity }) => {
  const dotColor = {
    transaction: "bg-green-500",
    staff: "bg-blue-500",
    inventory: "bg-orange-500",
  };

  return (
    <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
      <div
        className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
          dotColor[activity.type]
        }`}
      ></div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 dark:text-white">
          {activity.message}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {activity.time}
        </p>
        {activity.amount && (
          <p className="text-sm font-semibold text-green-600 dark:text-green-400">
            +Rp {activity.amount.toLocaleString("id-ID")}
          </p>
        )}
      </div>
    </div>
  );
};

export default MitraOverview;
