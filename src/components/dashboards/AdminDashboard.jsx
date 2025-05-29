"use client";

import { useState } from "react";

const AdminDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock data
  const stats = {
    totalRevenue: 15000000,
    totalTransactions: 150,
    totalCustomers: 85,
    totalInventory: 120,
  };

  const recentTransactions = [
    {
      id: 1,
      customer: "Budi Santoso",
      service: "Ganti Oli",
      amount: 150000,
      date: "2024-01-15",
      kasir: "Kasir 1",
    },
    {
      id: 2,
      customer: "Sari Dewi",
      service: "Tune Up",
      amount: 300000,
      date: "2024-01-15",
      kasir: "Kasir 2",
    },
    {
      id: 3,
      customer: "Ahmad Rahman",
      service: "Servis AC",
      amount: 200000,
      date: "2024-01-14",
      kasir: "Kasir 1",
    },
  ];

  const customers = [
    {
      id: 1,
      name: "Budi Santoso",
      email: "budi@email.com",
      phone: "081234567890",
      totalVisits: 5,
    },
    {
      id: 2,
      name: "Sari Dewi",
      email: "sari@email.com",
      phone: "081234567891",
      totalVisits: 3,
    },
    {
      id: 3,
      name: "Ahmad Rahman",
      email: "ahmad@email.com",
      phone: "081234567892",
      totalVisits: 7,
    },
  ];

  const inventory = [
    { id: 1, name: "Oli Mesin 5W-30", stock: 25, minStock: 10, price: 75000 },
    { id: 2, name: "Filter Udara", stock: 15, minStock: 5, price: 50000 },
    { id: 3, name: "Busi NGK", stock: 30, minStock: 15, price: 25000 },
    { id: 4, name: "Kampas Rem", stock: 8, minStock: 10, price: 150000 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">
              Dashboard Admin
            </h1>
            <p className="text-gray-600">Selamat datang, {user.name}</p>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Keluar
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="flex border-b overflow-x-auto">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-6 py-3 font-medium whitespace-nowrap ${
                activeTab === "dashboard"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("inventory")}
              className={`px-6 py-3 font-medium whitespace-nowrap ${
                activeTab === "inventory"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              Inventori
            </button>
            <button
              onClick={() => setActiveTab("transactions")}
              className={`px-6 py-3 font-medium whitespace-nowrap ${
                activeTab === "transactions"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              Laporan Transaksi
            </button>
            <button
              onClick={() => setActiveTab("customers")}
              className={`px-6 py-3 font-medium whitespace-nowrap ${
                activeTab === "customers"
                  ? "text-blue-900 border-b-2 border-blue-900"
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              Data Pelanggan
            </button>
          </div>
        </div>

        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <div>
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Total Pendapatan
                </h3>
                <p className="text-3xl font-bold text-green-600">
                  Rp {stats.totalRevenue.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Total Transaksi
                </h3>
                <p className="text-3xl font-bold text-blue-900">
                  {stats.totalTransactions}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Total Pelanggan
                </h3>
                <p className="text-3xl font-bold text-purple-600">
                  {stats.totalCustomers}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Item Inventori
                </h3>
                <p className="text-3xl font-bold text-orange-600">
                  {stats.totalInventory}
                </p>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  Transaksi Terbaru
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3">Pelanggan</th>
                        <th className="text-left py-3">Layanan</th>
                        <th className="text-left py-3">Jumlah</th>
                        <th className="text-left py-3">Tanggal</th>
                        <th className="text-left py-3">Kasir</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id} className="border-b">
                          <td className="py-3">{transaction.customer}</td>
                          <td className="py-3">{transaction.service}</td>
                          <td className="py-3">
                            Rp {transaction.amount.toLocaleString("id-ID")}
                          </td>
                          <td className="py-3">{transaction.date}</td>
                          <td className="py-3">{transaction.kasir}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inventory Tab */}
        {activeTab === "inventory" && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Manajemen Inventori</h3>
                <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                  Tambah Barang
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Nama Barang</th>
                      <th className="text-left py-3">Stok</th>
                      <th className="text-left py-3">Min. Stok</th>
                      <th className="text-left py-3">Harga</th>
                      <th className="text-left py-3">Status</th>
                      <th className="text-left py-3">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inventory.map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="py-3">{item.name}</td>
                        <td className="py-3">{item.stock}</td>
                        <td className="py-3">{item.minStock}</td>
                        <td className="py-3">
                          Rp {item.price.toLocaleString("id-ID")}
                        </td>
                        <td className="py-3">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.stock > item.minStock
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {item.stock > item.minStock
                              ? "Normal"
                              : "Stok Rendah"}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              Edit
                            </button>
                            <button className="text-red-600 hover:text-red-800">
                              Hapus
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Transactions Tab */}
        {activeTab === "transactions" && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Laporan Transaksi</h3>
                <div className="flex space-x-2">
                  <select className="border rounded-lg px-3 py-2">
                    <option>Hari Ini</option>
                    <option>Minggu Ini</option>
                    <option>Bulan Ini</option>
                  </select>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                    Export Excel
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">ID</th>
                      <th className="text-left py-3">Pelanggan</th>
                      <th className="text-left py-3">Layanan</th>
                      <th className="text-left py-3">Jumlah</th>
                      <th className="text-left py-3">Tanggal</th>
                      <th className="text-left py-3">Kasir</th>
                      <th className="text-left py-3">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b">
                        <td className="py-3">#{transaction.id}</td>
                        <td className="py-3">{transaction.customer}</td>
                        <td className="py-3">{transaction.service}</td>
                        <td className="py-3">
                          Rp {transaction.amount.toLocaleString("id-ID")}
                        </td>
                        <td className="py-3">{transaction.date}</td>
                        <td className="py-3">{transaction.kasir}</td>
                        <td className="py-3">
                          <button className="text-blue-600 hover:text-blue-800">
                            Detail
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Data Pelanggan</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Nama</th>
                      <th className="text-left py-3">Email</th>
                      <th className="text-left py-3">Telepon</th>
                      <th className="text-left py-3">Total Kunjungan</th>
                      <th className="text-left py-3">Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer) => (
                      <tr key={customer.id} className="border-b">
                        <td className="py-3">{customer.name}</td>
                        <td className="py-3">{customer.email}</td>
                        <td className="py-3">{customer.phone}</td>
                        <td className="py-3">{customer.totalVisits}</td>
                        <td className="py-3">
                          <div className="flex space-x-2">
                            <button className="text-blue-600 hover:text-blue-800">
                              Detail
                            </button>
                            <button className="text-green-600 hover:text-green-800">
                              Riwayat
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
