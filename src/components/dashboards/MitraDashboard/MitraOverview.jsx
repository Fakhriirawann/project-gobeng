"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Pendapatan Bulan Ini"
          value={`${(stats.monthlyRevenue / 1000000).toFixed(0)}M`}
          change="+15% dari bulan lalu"
          icon={<FaMoneyBillWave className="text-2xl" />}
          color="orange"
          delay={0}
        />

        <StatsCard
          title="Total Transaksi"
          value={stats.totalTransactions}
          change="+8% dari bulan lalu"
          icon={<FaShoppingCart className="text-2xl" />}
          color="blue"
          delay={0.1}
        />

        <StatsCard
          title="Total Pelanggan"
          value={stats.totalCustomers}
          change="+12% dari bulan lalu"
          icon={<FaUsers className="text-2xl" />}
          color="green"
          delay={0.2}
        />

        <StatsCard
          title="Staff Aktif"
          value={stats.activeStaff}
          change="Semua online"
          icon={<FaUserCog className="text-2xl" />}
          color="orange"
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
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
            Aksi Cepat
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <QuickActionButton
              to="/mitra-dashboard/services"
              icon={<FaTools />}
              label="Kelola Layanan"
              color="orange"
            />
            <QuickActionButton
              to="/mitra-dashboard/users"
              icon={<FaUserPlus />}
              label="Tambah Staff"
              color="blue"
            />
            <QuickActionButton
              to="/mitra-dashboard/reports"
              icon={<FaChartLine />}
              label="Lihat Laporan"
              color="green"
            />
            <QuickActionButton
              to="/mitra-dashboard/business"
              icon={<FaStore />}
              label="Edit Profil"
              color="orange"
            />
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
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
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Performa Penjualan
          </h3>
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
            <option>7 Hari Terakhir</option>
            <option>30 Hari Terakhir</option>
            <option>3 Bulan Terakhir</option>
          </select>
        </div>
        <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center">
          <div className="text-center">
            <FaChartBar className="text-4xl text-gray-400 dark:text-gray-500 mx-auto mb-2" />
            <p className="text-gray-500 dark:text-gray-400">
              Grafik Performa Penjualan
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
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
    orange: "from-orange-500 to-orange-600",
  };

  const bgIcon = {
    orange: "bg-orange-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    orange: "bg-orange-400",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className={`bg-gradient-to-r ${bgGradient[color]} p-6 rounded-2xl shadow-lg text-white`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className={`text-${color}-100 text-sm font-medium mb-2`}>
            {title}
          </h3>
          <p className="text-3xl font-bold">{value}</p>
          <p className={`text-${color}-100 text-sm mt-1`}>{change}</p>
        </div>
        <div className={`${bgIcon[color]} bg-opacity-30 p-3 rounded-xl`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

// Quick Action Button Component
const QuickActionButton = ({ to, icon, label, color }) => {
  const bgColor = {
    orange:
      "bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30",
    blue: "bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30",
    green:
      "bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30",
    orange:
      "bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30",
  };

  const textColor = {
    orange: "text-orange-600 dark:text-orange-400",
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    orange: "text-orange-600 dark:text-orange-400",
  };

  return (
    <Link
      to={to}
      className={`p-4 ${bgColor[color]} rounded-xl transition-colors duration-200 text-center`}
    >
      <div className={`text-2xl ${textColor[color]} mx-auto mb-2`}>{icon}</div>
      <p className="text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </p>
    </Link>
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
        className={`w-2 h-2 rounded-full mt-2 ${dotColor[activity.type]}`}
      ></div>
      <div className="flex-1">
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
