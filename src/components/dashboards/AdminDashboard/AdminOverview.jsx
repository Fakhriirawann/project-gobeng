"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaShoppingCart,
  FaUsers,
  FaUserPlus,
  FaStore,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";

const AdminOverview = () => {
  const [stats, setStats] = useState({
    totalRevenue: 1250000000,
    totalTransactions: 8750,
    totalUsers: 5280,
    activeMitras: 124,
    pendingVerifications: 7,
    supportTickets: 12,
  });

  const [recentActivities] = useState([
    {
      id: 1,
      type: "verification",
      message: "Bengkel Jaya Abadi menunggu verifikasi",
      time: "5 menit lalu",
    },
    {
      id: 2,
      type: "transaction",
      message: "Transaksi besar (Rp 5.000.000) di Bengkel Maju Motor",
      time: "1 jam lalu",
    },
    {
      id: 3,
      type: "user",
      message: "Mitra baru terdaftar: Bengkel Sejahtera",
      time: "2 jam lalu",
    },
    {
      id: 4,
      type: "support",
      message: "Tiket bantuan #1234 memerlukan tindakan",
      time: "3 jam lalu",
    },
    {
      id: 5,
      type: "alert",
      message: "Percobaan login gagal berulang dari IP 192.168.1.45",
      time: "5 jam lalu",
    },
  ]);

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <StatsCard
          title="Total Pendapatan"
          value={`${(stats.totalRevenue / 1000000000).toFixed(2)}M`}
          change="+12% dari bulan lalu"
          icon={<FaMoneyBillWave className="text-xl sm:text-2xl" />}
          color="orange"
          delay={0}
        />

        <StatsCard
          title="Total Transaksi"
          value={stats.totalTransactions.toLocaleString()}
          change="+8% dari bulan lalu"
          icon={<FaShoppingCart className="text-xl sm:text-2xl" />}
          color="green"
          delay={0.1}
        />

        <StatsCard
          title="Total Pengguna"
          value={stats.totalUsers.toLocaleString()}
          change="+15% dari bulan lalu"
          icon={<FaUsers className="text-xl sm:text-2xl" />}
          color="purple"
          delay={0.2}
        />
      </div>

      {/* System Status & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Status */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6"
        >
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Status Sistem
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatusCard
              title="Mitra Aktif"
              value={stats.activeMitras}
              icon={<FaStore />}
              color="orange"
              trend="up"
              trendValue="3"
            />
            <StatusCard
              title="Perlu Verifikasi"
              value={stats.pendingVerifications}
              icon={<FaShieldAlt />}
              color="yellow"
              trend="up"
              trendValue="2"
            />
            <StatusCard
              title="Tiket Bantuan"
              value={stats.supportTickets}
              icon={<FaHeadset />}
              color="red"
              trend="down"
              trendValue="5"
            />
          </div>

          <div className="mt-6 space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Performa Sistem
            </h4>
            <div className="space-y-3">
              <PerformanceBar label="CPU Usage" value={32} color="orange" />
              <PerformanceBar label="Memory Usage" value={64} color="green" />
              <PerformanceBar label="Disk Space" value={47} color="purple" />
              <PerformanceBar label="Bandwidth" value={28} color="orange" />
            </div>
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
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
          <div className="mt-4 text-center">
            <button className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 text-sm font-medium">
              Lihat Semua Aktivitas
            </button>
          </div>
        </motion.div>
      </div>

      {/* User Growth Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            Pertumbuhan Pengguna
          </h3>
          <select className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm">
            <option>7 Hari Terakhir</option>
            <option>30 Hari Terakhir</option>
            <option>3 Bulan Terakhir</option>
            <option>12 Bulan Terakhir</option>
          </select>
        </div>
        <div className="h-64 sm:h-80 bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
          <div className="h-full flex items-end justify-between">
            {[35, 48, 42, 55, 59, 65, 75, 88, 95, 110, 132, 145].map(
              (value, index) => {
                const height = (value / 145) * 100;
                const month = [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "Mei",
                  "Jun",
                  "Jul",
                  "Agu",
                  "Sep",
                  "Okt",
                  "Nov",
                  "Des",
                ][index];
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
                      {month}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <div>
            <span className="font-medium">Total Pengguna: </span>
            <span>{stats.totalUsers.toLocaleString()}</span>
          </div>
          <div>
            <span className="font-medium">Pertumbuhan Tahunan: </span>
            <span className="text-green-600 dark:text-green-400">+314%</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Aksi Cepat
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <QuickActionButton
              onClick={() => {}}
              icon={<FaShieldAlt />}
              label="Verifikasi Mitra"
              color="orange"
              badge={stats.pendingVerifications}
            />
            <QuickActionButton
              onClick={() => {}}
              icon={<FaHeadset />}
              label="Tiket Bantuan"
              color="green"
              badge={stats.supportTickets}
            />
            <QuickActionButton
              onClick={() => {}}
              icon={<FaUserPlus />}
              label="Tambah Admin"
              color="purple"
            />
            <QuickActionButton
              onClick={() => {}}
              icon={<FaChartLine />}
              label="Laporan Harian"
              color="orange"
            />
          </div>
        </motion.div>

        {/* System Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6 lg:col-span-2"
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Peringatan Sistem
          </h3>
          <div className="space-y-3">
            <AlertItem
              type="warning"
              message="3 mitra belum melakukan transaksi dalam 7 hari terakhir"
              time="2 jam lalu"
            />
            <AlertItem
              type="danger"
              message="Percobaan login gagal berulang dari IP 192.168.1.45"
              time="5 jam lalu"
            />
            <AlertItem
              type="info"
              message="Pembaruan sistem dijadwalkan pada 15 Januari 2024, 02:00 WIB"
              time="1 hari lalu"
            />
            <AlertItem
              type="success"
              message="Backup database otomatis berhasil dilakukan"
              time="1 hari lalu"
            />
          </div>
          <div className="mt-4 text-center">
            <button className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 text-sm font-medium">
              Lihat Semua Peringatan
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, change, icon, color, delay }) => {
  const bgGradient = {
    orange: "from-orange-500 to-orange-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
  };

  const bgIcon = {
    orange: "bg-orange-400",
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

// Status Card Component
const StatusCard = ({ title, value, icon, color, trend, trendValue }) => {
  const bgColor = {
    orange: "bg-orange-50 dark:bg-orange-900/20",
    green: "bg-green-50 dark:bg-green-900/20",
    yellow: "bg-yellow-50 dark:bg-yellow-900/20",
    red: "bg-red-50 dark:bg-red-900/20",
  };

  const textColor = {
    orange: "text-orange-600 dark:text-orange-400",
    green: "text-green-600 dark:text-green-400",
    yellow: "text-yellow-600 dark:text-yellow-400",
    red: "text-red-600 dark:text-red-400",
  };

  const trendColor =
    trend === "up"
      ? "text-green-600 dark:text-green-400"
      : "text-red-600 dark:text-red-400";
  const trendIcon = trend === "up" ? "↑" : "↓";

  return (
    <div className={`${bgColor[color]} p-4 rounded-xl`}>
      <div className="flex items-center justify-between mb-2">
        <div className={`p-2 rounded-lg ${bgColor[color]} ${textColor[color]}`}>
          {icon}
        </div>
        <div className={`text-xs font-medium ${trendColor}`}>
          {trendIcon} {trendValue}%
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">{title}</p>
      <p className="text-xl font-bold text-gray-900 dark:text-white">{value}</p>
    </div>
  );
};

// Performance Bar Component
const PerformanceBar = ({ label, value, color }) => {
  const barColor = {
    orange: "bg-orange-600",
    green: "bg-green-600",
    purple: "bg-purple-600",
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600 dark:text-gray-400">{label}</span>
        <span className="font-medium text-gray-900 dark:text-white">
          {value}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`${barColor[color]} h-2 rounded-full`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
};

// Activity Item Component
const ActivityItem = ({ activity }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case "verification":
        return <FaShieldAlt className="text-orange-600 dark:text-orange-400" />;
      case "transaction":
        return (
          <FaMoneyBillWave className="text-green-600 dark:text-green-400" />
        );
      case "user":
        return <FaUserPlus className="text-purple-600 dark:text-purple-400" />;
      case "support":
        return <FaHeadset className="text-yellow-600 dark:text-yellow-400" />;
      case "alert":
        return (
          <FaExclamationTriangle className="text-red-600 dark:text-red-400" />
        );
      default:
        return <FaChartLine className="text-gray-600 dark:text-gray-400" />;
    }
  };

  return (
    <div className="flex items-start space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
        {getActivityIcon(activity.type)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 dark:text-white">
          {activity.message}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {activity.time}
        </p>
      </div>
    </div>
  );
};

// Quick Action Button Component
const QuickActionButton = ({ onClick, icon, label, color, badge }) => {
  const bgColor = {
    orange:
      "bg-orange-50 dark:bg-orange-900/20 hover:bg-orange-100 dark:hover:bg-orange-900/30",
    green:
      "bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/30",
    purple:
      "bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30",
  };

  const textColor = {
    orange: "text-orange-600 dark:text-orange-400",
    green: "text-green-600 dark:text-green-400",
    purple: "text-purple-600 dark:text-purple-400",
  };

  return (
    <button
      onClick={onClick}
      className={`p-3 sm:p-4 ${bgColor[color]} rounded-xl transition-colors duration-200 text-center w-full relative`}
    >
      <div className={`text-xl sm:text-2xl ${textColor[color]} mx-auto mb-2`}>
        {icon}
      </div>
      <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </p>
      {badge && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {badge}
        </span>
      )}
    </button>
  );
};

// Alert Item Component
const AlertItem = ({ type, message, time }) => {
  const getAlertStyles = (type) => {
    switch (type) {
      case "warning":
        return {
          bg: "bg-yellow-50 dark:bg-yellow-900/20",
          border: "border-yellow-200 dark:border-yellow-800",
          icon: (
            <FaExclamationTriangle className="text-yellow-600 dark:text-yellow-400" />
          ),
        };
      case "danger":
        return {
          bg: "bg-red-50 dark:bg-red-900/20",
          border: "border-red-200 dark:border-red-800",
          icon: (
            <FaExclamationTriangle className="text-red-600 dark:text-red-400" />
          ),
        };
      case "success":
        return {
          bg: "bg-green-50 dark:bg-green-900/20",
          border: "border-green-200 dark:border-green-800",
          icon: (
            <FaCheckCircle className="text-green-600 dark:text-green-400" />
          ),
        };
      case "info":
      default:
        return {
          bg: "bg-orange-50 dark:bg-orange-900/20",
          border: "border-orange-200 dark:border-orange-800",
          icon: (
            <FaShieldAlt className="text-orange-600 dark:text-orange-400" />
          ),
        };
    }
  };

  const styles = getAlertStyles(type);

  return (
    <div
      className={`flex items-start space-x-3 p-3 ${styles.bg} border ${styles.border} rounded-xl`}
    >
      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
        {styles.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 dark:text-white">{message}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </div>
  );
};

export default AdminOverview;
