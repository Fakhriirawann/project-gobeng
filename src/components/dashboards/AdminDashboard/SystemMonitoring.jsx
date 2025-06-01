"use client";

import { useState } from "react";
import {
  FaServer,
  FaShieldAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaTimesCircle,
  FaChartLine,
  FaNetworkWired,
} from "react-icons/fa";

const SystemMonitoring = () => {
  const [systemStatus, setSystemStatus] = useState({
    overall: "healthy",
    lastUpdated: "2024-01-15 10:30:00",
  });

  const [serverMetrics, setServerMetrics] = useState([
    {
      id: 1,
      name: "Web Server 1",
      status: "online",
      cpu: 45,
      memory: 68,
      disk: 32,
      uptime: "15 hari 8 jam",
      location: "Jakarta",
    },
    {
      id: 2,
      name: "Web Server 2",
      status: "online",
      cpu: 38,
      memory: 72,
      disk: 28,
      uptime: "15 hari 8 jam",
      location: "Jakarta",
    },
    {
      id: 3,
      name: "Database Server",
      status: "warning",
      cpu: 78,
      memory: 85,
      disk: 45,
      uptime: "12 hari 3 jam",
      location: "Jakarta",
    },
    {
      id: 4,
      name: "API Server",
      status: "online",
      cpu: 52,
      memory: 64,
      disk: 38,
      uptime: "15 hari 8 jam",
      location: "Bandung",
    },
  ]);

  const [systemAlerts, setSystemAlerts] = useState([
    {
      id: 1,
      type: "warning",
      title: "High Memory Usage",
      message: "Database server memory usage mencapai 85%",
      timestamp: "2024-01-15 10:25:00",
      status: "active",
    },
    {
      id: 2,
      type: "info",
      title: "Scheduled Maintenance",
      message: "Maintenance terjadwal pada 16 Januari 2024, 02:00 WIB",
      timestamp: "2024-01-15 09:00:00",
      status: "active",
    },
    {
      id: 3,
      type: "success",
      title: "Backup Completed",
      message: "Database backup berhasil dilakukan",
      timestamp: "2024-01-15 03:00:00",
      status: "resolved",
    },
    {
      id: 4,
      type: "error",
      title: "API Rate Limit",
      message: "Rate limit terlampaui pada endpoint /api/transactions",
      timestamp: "2024-01-14 22:15:00",
      status: "resolved",
    },
  ]);

  const [networkStats, setNetworkStats] = useState({
    bandwidth: 75,
    latency: 12,
    requests: 1250,
    errors: 3,
  });

  const [securityMetrics, setSecurityMetrics] = useState({
    threats: 0,
    blockedIPs: 15,
    failedLogins: 8,
    lastScan: "2024-01-15 08:00:00",
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "online":
        return "text-green-600 dark:text-green-400";
      case "warning":
        return "text-yellow-600 dark:text-yellow-400";
      case "offline":
        return "text-red-600 dark:text-red-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "online":
        return <FaCheckCircle className="text-green-600 dark:text-green-400" />;
      case "warning":
        return (
          <FaExclamationTriangle className="text-yellow-600 dark:text-yellow-400" />
        );
      case "offline":
        return <FaTimesCircle className="text-red-600 dark:text-red-400" />;
      default:
        return <FaCheckCircle className="text-gray-600 dark:text-gray-400" />;
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case "error":
        return <FaTimesCircle className="text-red-600 dark:text-red-400" />;
      case "warning":
        return (
          <FaExclamationTriangle className="text-yellow-600 dark:text-yellow-400" />
        );
      case "success":
        return <FaCheckCircle className="text-green-600 dark:text-green-400" />;
      case "info":
        return (
          <FaCheckCircle className="text-orange-600 dark:text-orange-400" />
        );
      default:
        return <FaCheckCircle className="text-gray-600 dark:text-gray-400" />;
    }
  };

  const getMetricColor = (value, type = "normal") => {
    if (type === "reverse") {
      // For metrics where lower is better (like latency, errors)
      if (value <= 30) return "text-green-600 dark:text-green-400";
      if (value <= 60) return "text-yellow-600 dark:text-yellow-400";
      return "text-red-600 dark:text-red-400";
    } else {
      // For normal metrics where higher might be concerning
      if (value <= 50) return "text-green-600 dark:text-green-400";
      if (value <= 80) return "text-yellow-600 dark:text-yellow-400";
      return "text-red-600 dark:text-red-400";
    }
  };

  const refreshData = () => {
    setSystemStatus({
      ...systemStatus,
      lastUpdated: new Date().toLocaleString("id-ID"),
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        <div className="flex flex-col space-y-3 sm:space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
          <div>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
              Monitoring Sistem
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Pantau performa dan status sistem secara real-time
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Update terakhir: {systemStatus.lastUpdated}
            </span>
            <button
              onClick={refreshData}
              className="bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
            >
              ⟲<span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* System Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Status Sistem
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                Sehat
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <FaCheckCircle className="text-green-600 dark:text-green-400 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Bandwidth
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {networkStats.bandwidth}%
              </p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <FaNetworkWired className="text-orange-600 dark:text-orange-400 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Requests/min
              </p>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {networkStats.requests}
              </p>
            </div>
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <FaChartLine className="text-purple-600 dark:text-purple-400 text-xl" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Ancaman Keamanan
              </p>
              <p className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-400">
                {securityMetrics.threats}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <FaShieldAlt className="text-green-600 dark:text-green-400 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Server Status */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Status Server
        </h3>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700/50">
              <tr>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Server
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Status
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  CPU
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Memory
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Disk
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Uptime
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Lokasi
                </th>
              </tr>
            </thead>
            <tbody>
              {serverMetrics.map((server) => (
                <tr
                  key={server.id}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <FaServer className="text-orange-600 dark:text-orange-400" />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {server.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(server.status)}
                      <span
                        className={`font-medium ${getStatusColor(
                          server.status
                        )}`}
                      >
                        {server.status === "online"
                          ? "Online"
                          : server.status === "warning"
                          ? "Warning"
                          : "Offline"}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            server.cpu <= 50
                              ? "bg-green-600"
                              : server.cpu <= 80
                              ? "bg-yellow-600"
                              : "bg-red-600"
                          }`}
                          style={{ width: `${server.cpu}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-sm font-medium ${getMetricColor(
                          server.cpu
                        )}`}
                      >
                        {server.cpu}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            server.memory <= 50
                              ? "bg-green-600"
                              : server.memory <= 80
                              ? "bg-yellow-600"
                              : "bg-red-600"
                          }`}
                          style={{ width: `${server.memory}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-sm font-medium ${getMetricColor(
                          server.memory
                        )}`}
                      >
                        {server.memory}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            server.disk <= 50
                              ? "bg-green-600"
                              : server.disk <= 80
                              ? "bg-yellow-600"
                              : "bg-red-600"
                          }`}
                          style={{ width: `${server.disk}%` }}
                        ></div>
                      </div>
                      <span
                        className={`text-sm font-medium ${getMetricColor(
                          server.disk
                        )}`}
                      >
                        {server.disk}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {server.uptime}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {server.location}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {serverMetrics.map((server) => (
            <div
              key={server.id}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <FaServer className="text-orange-600 dark:text-orange-400" />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {server.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(server.status)}
                  <span
                    className={`text-sm font-medium ${getStatusColor(
                      server.status
                    )}`}
                  >
                    {server.status === "online"
                      ? "Online"
                      : server.status === "warning"
                      ? "Warning"
                      : "Offline"}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">
                      CPU
                    </span>
                    <span
                      className={`font-medium ${getMetricColor(server.cpu)}`}
                    >
                      {server.cpu}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        server.cpu <= 50
                          ? "bg-green-600"
                          : server.cpu <= 80
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                      style={{ width: `${server.cpu}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">
                      Memory
                    </span>
                    <span
                      className={`font-medium ${getMetricColor(server.memory)}`}
                    >
                      {server.memory}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        server.memory <= 50
                          ? "bg-green-600"
                          : server.memory <= 80
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                      style={{ width: `${server.memory}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">
                      Disk
                    </span>
                    <span
                      className={`font-medium ${getMetricColor(server.disk)}`}
                    >
                      {server.disk}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        server.disk <= 50
                          ? "bg-green-600"
                          : server.disk <= 80
                          ? "bg-yellow-600"
                          : "bg-red-600"
                      }`}
                      style={{ width: `${server.disk}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between text-sm pt-2 border-t border-gray-200 dark:border-gray-600">
                  <span className="text-gray-600 dark:text-gray-400">
                    Uptime: {server.uptime}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    Lokasi: {server.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Alerts */}
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-3 sm:p-4 lg:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
          Alert Sistem
        </h3>

        <div className="space-y-3 sm:space-y-4">
          {systemAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`p-4 rounded-xl border ${
                alert.type === "error"
                  ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                  : alert.type === "warning"
                  ? "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800"
                  : alert.type === "success"
                  ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                  : "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  {getAlertIcon(alert.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {alert.title}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.status === "active"
                          ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                      }`}
                    >
                      {alert.status === "active" ? "Aktif" : "Selesai"}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {alert.message}
                  </p>
                  <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                    {alert.timestamp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network & Security Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Network Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Metrik Jaringan
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaNetworkWired className="text-orange-600 dark:text-orange-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Bandwidth Usage
                </span>
              </div>
              <span
                className={`font-bold ${getMetricColor(
                  networkStats.bandwidth
                )}`}
              >
                {networkStats.bandwidth}%
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaChartLine className="text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Latency
                </span>
              </div>
              <span
                className={`font-bold ${getMetricColor(
                  networkStats.latency,
                  "reverse"
                )}`}
              >
                {networkStats.latency}ms
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaServer className="text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Requests/min
                </span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white">
                {networkStats.requests}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaExclamationTriangle className="text-red-600 dark:text-red-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Errors/min
                </span>
              </div>
              <span
                className={`font-bold ${getMetricColor(
                  networkStats.errors,
                  "reverse"
                )}`}
              >
                {networkStats.errors}
              </span>
            </div>
          </div>
        </div>

        {/* Security Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Metrik Keamanan
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaShieldAlt className="text-green-600 dark:text-green-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Ancaman Terdeteksi
                </span>
              </div>
              <span className="font-bold text-green-600 dark:text-green-400">
                {securityMetrics.threats}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaTimesCircle className="text-red-600 dark:text-red-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  IP Diblokir
                </span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white">
                {securityMetrics.blockedIPs}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaExclamationTriangle className="text-yellow-600 dark:text-yellow-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Login Gagal
                </span>
              </div>
              <span className="font-bold text-yellow-600 dark:text-yellow-400">
                {securityMetrics.failedLogins}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaCheckCircle className="text-orange-600 dark:text-orange-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  Scan Terakhir
                </span>
              </div>
              <span className="font-bold text-gray-900 dark:text-white text-sm">
                {securityMetrics.lastScan}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitoring;
