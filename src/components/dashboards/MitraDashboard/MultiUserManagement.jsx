"use client";

import { useState } from "react";
import {
  FaUserPlus,
  FaEdit,
  FaTrash,
  FaKey,
  FaEye,
  FaEyeSlash,
  FaSearch,
  FaFilter,
  FaUsers,
  FaTimes,
} from "react-icons/fa";

const MultiUserManagement = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ahmad Kasir",
      email: "ahmad@bengkel.com",
      role: "cashier",
      status: "active",
      lastLogin: "2024-01-15 08:30",
      permissions: ["transactions", "inventory_view"],
    },
    {
      id: 2,
      name: "Budi Admin",
      email: "budi@bengkel.com",
      role: "admin",
      status: "active",
      lastLogin: "2024-01-15 09:15",
      permissions: [
        "transactions",
        "inventory_manage",
        "reports_view",
        "users_view",
      ],
    },
    {
      id: 3,
      name: "Citra Kasir",
      email: "citra@bengkel.com",
      role: "cashier",
      status: "inactive",
      lastLogin: "2024-01-10 14:22",
      permissions: ["transactions", "inventory_view"],
    },
    {
      id: 4,
      name: "Dewi Mekanik",
      email: "dewi@bengkel.com",
      role: "mechanic",
      status: "active",
      lastLogin: "2024-01-15 07:45",
      permissions: ["inventory_view", "services_manage"],
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showPassword, setShowPassword] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "cashier",
    status: "active",
    permissions: ["transactions"],
  });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      alert("Mohon lengkapi semua field yang diperlukan");
      return;
    }

    const id =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
    setUsers([...users, { ...newUser, id, lastLogin: "-" }]);
    setNewUser({
      name: "",
      email: "",
      password: "",
      role: "cashier",
      status: "active",
      permissions: ["transactions"],
    });
    setShowAddModal(false);
  };

  const handleEditUser = () => {
    if (!selectedUser.name || !selectedUser.email) {
      alert("Mohon lengkapi semua field yang diperlukan");
      return;
    }

    setUsers(
      users.map((user) => (user.id === selectedUser.id ? selectedUser : user))
    );
    setShowEditModal(false);
  };

  const handleDeleteUser = () => {
    setUsers(users.filter((user) => user.id !== selectedUser.id));
    setShowDeleteModal(false);
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === "all" || user.role === roleFilter;
    const matchesStatus =
      statusFilter === "all" || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleBadgeClass = (role) => {
    switch (role) {
      case "owner":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "admin":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "cashier":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "mechanic":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "inactive":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getRoleText = (role) => {
    switch (role) {
      case "owner":
        return "Pemilik";
      case "admin":
        return "Admin";
      case "cashier":
        return "Kasir";
      case "mechanic":
        return "Mekanik";
      default:
        return role;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Aktif";
      case "inactive":
        return "Nonaktif";
      default:
        return status;
    }
  };

  const getPermissionText = (permission) => {
    switch (permission) {
      case "transactions":
        return "Transaksi";
      case "inventory_view":
        return "Lihat Inventori";
      case "inventory_manage":
        return "Kelola Inventori";
      case "services_manage":
        return "Kelola Layanan";
      case "reports_view":
        return "Lihat Laporan";
      case "reports_manage":
        return "Kelola Laporan";
      case "users_view":
        return "Lihat Pengguna";
      case "users_manage":
        return "Kelola Pengguna";
      default:
        return permission;
    }
  };

  const getStatsData = () => {
    return {
      total: users.length,
      active: users.filter((u) => u.status === "active").length,
      admins: users.filter((u) => u.role === "admin").length,
      cashiers: users.filter((u) => u.role === "cashier").length,
    };
  };

  const stats = getStatsData();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Manajemen Multi-User
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Kelola akun staff dan kasir
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <FaUserPlus />
            <span>Tambah User</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total User
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.total}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FaUsers className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                User Aktif
              </p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {stats.active}
              </p>
            </div>
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <FaUsers className="text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Admin</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stats.admins}
              </p>
            </div>
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <FaUsers className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Kasir</p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {stats.cashiers}
              </p>
            </div>
            <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <FaUsers className="text-orange-600 dark:text-orange-400" />
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
              placeholder="Cari pengguna..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[140px]"
              >
                <option value="all">Semua Peran</option>
                <option value="owner">Pemilik</option>
                <option value="admin">Admin</option>
                <option value="cashier">Kasir</option>
                <option value="mechanic">Mekanik</option>
              </select>
            </div>
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[140px]"
              >
                <option value="all">Semua Status</option>
                <option value="active">Aktif</option>
                <option value="inactive">Nonaktif</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
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
                  Peran
                </th>
                <th className="text-left py-4 px-6 text-gray-700 dark:text-gray-300 font-semibold">
                  Status
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
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                >
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                    {user.name}
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {user.email}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleBadgeClass(
                        user.role
                      )}`}
                    >
                      {getRoleText(user.role)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(
                        user.status
                      )}`}
                    >
                      {getStatusText(user.status)}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-600 dark:text-gray-400">
                    {user.lastLogin}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowEditModal(true);
                        }}
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 p-1"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedUser(user);
                          setShowDeleteModal(true);
                        }}
                        className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 p-1"
                        title="Hapus"
                      >
                        <FaTrash />
                      </button>
                      <button
                        className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 p-1"
                        title="Reset Password"
                      >
                        <FaKey />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12">
            <FaUserPlus className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400">
              Tidak ada pengguna ditemukan.
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Coba ubah filter atau tambahkan pengguna baru
            </p>
          </div>
        )}
      </div>

      {/* Add User Modal */}
      {showAddModal && (
        <AddUserModal
          newUser={newUser}
          setNewUser={setNewUser}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onClose={() => setShowAddModal(false)}
          onSave={handleAddUser}
        />
      )}

      {/* Edit User Modal */}
      {showEditModal && selectedUser && (
        <EditUserModal
          user={selectedUser}
          setUser={setSelectedUser}
          onClose={() => setShowEditModal(false)}
          onSave={handleEditUser}
        />
      )}

      {/* Delete User Modal */}
      {showDeleteModal && selectedUser && (
        <DeleteUserModal
          user={selectedUser}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteUser}
        />
      )}
    </div>
  );
};

// Add User Modal Component
const AddUserModal = ({
  newUser,
  setNewUser,
  showPassword,
  setShowPassword,
  onClose,
  onSave,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Tambah User Baru
          </h3>
          <button
            onClick={onClose}
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
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
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
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="email@bengkel.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
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
              Peran
            </label>
            <select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="cashier">Kasir</option>
              <option value="admin">Admin</option>
              <option value="mechanic">Mekanik</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Status
            </label>
            <select
              value={newUser.status}
              onChange={(e) =>
                setNewUser({ ...newUser, status: e.target.value })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="active">Aktif</option>
              <option value="inactive">Nonaktif</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hak Akses
            </label>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              <PermissionCheckbox
                id="perm-transactions"
                label="Transaksi"
                checked={newUser.permissions.includes("transactions")}
                onChange={(checked) => {
                  if (checked) {
                    setNewUser({
                      ...newUser,
                      permissions: [...newUser.permissions, "transactions"],
                    });
                  } else {
                    setNewUser({
                      ...newUser,
                      permissions: newUser.permissions.filter(
                        (p) => p !== "transactions"
                      ),
                    });
                  }
                }}
              />

              <PermissionCheckbox
                id="perm-inventory-view"
                label="Lihat Inventori"
                checked={newUser.permissions.includes("inventory_view")}
                onChange={(checked) => {
                  if (checked) {
                    setNewUser({
                      ...newUser,
                      permissions: [...newUser.permissions, "inventory_view"],
                    });
                  } else {
                    setNewUser({
                      ...newUser,
                      permissions: newUser.permissions.filter(
                        (p) => p !== "inventory_view"
                      ),
                    });
                  }
                }}
              />

              {(newUser.role === "admin" || newUser.role === "mechanic") && (
                <>
                  <PermissionCheckbox
                    id="perm-inventory-manage"
                    label="Kelola Inventori"
                    checked={newUser.permissions.includes("inventory_manage")}
                    onChange={(checked) => {
                      if (checked) {
                        setNewUser({
                          ...newUser,
                          permissions: [
                            ...newUser.permissions,
                            "inventory_manage",
                          ],
                        });
                      } else {
                        setNewUser({
                          ...newUser,
                          permissions: newUser.permissions.filter(
                            (p) => p !== "inventory_manage"
                          ),
                        });
                      }
                    }}
                  />

                  <PermissionCheckbox
                    id="perm-services-manage"
                    label="Kelola Layanan"
                    checked={newUser.permissions.includes("services_manage")}
                    onChange={(checked) => {
                      if (checked) {
                        setNewUser({
                          ...newUser,
                          permissions: [
                            ...newUser.permissions,
                            "services_manage",
                          ],
                        });
                      } else {
                        setNewUser({
                          ...newUser,
                          permissions: newUser.permissions.filter(
                            (p) => p !== "services_manage"
                          ),
                        });
                      }
                    }}
                  />
                </>
              )}

              {newUser.role === "admin" && (
                <PermissionCheckbox
                  id="perm-reports-view"
                  label="Lihat Laporan"
                  checked={newUser.permissions.includes("reports_view")}
                  onChange={(checked) => {
                    if (checked) {
                      setNewUser({
                        ...newUser,
                        permissions: [...newUser.permissions, "reports_view"],
                      });
                    } else {
                      setNewUser({
                        ...newUser,
                        permissions: newUser.permissions.filter(
                          (p) => p !== "reports_view"
                        ),
                      });
                    }
                  }}
                />
              )}
            </div>
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
            Tambah User
          </button>
        </div>
      </div>
    </div>
  );
};

// Edit User Modal Component
const EditUserModal = ({ user, setUser, onClose, onSave }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Edit User
          </h3>
          <button
            onClick={onClose}
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
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Peran
            </label>
            <select
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="cashier">Kasir</option>
              <option value="admin">Admin</option>
              <option value="mechanic">Mekanik</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Status
            </label>
            <select
              value={user.status}
              onChange={(e) => setUser({ ...user, status: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="active">Aktif</option>
              <option value="inactive">Nonaktif</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hak Akses
            </label>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              <PermissionCheckbox
                id="edit-perm-transactions"
                label="Transaksi"
                checked={user.permissions.includes("transactions")}
                onChange={(checked) => {
                  if (checked) {
                    setUser({
                      ...user,
                      permissions: [...user.permissions, "transactions"],
                    });
                  } else {
                    setUser({
                      ...user,
                      permissions: user.permissions.filter(
                        (p) => p !== "transactions"
                      ),
                    });
                  }
                }}
              />

              <PermissionCheckbox
                id="edit-perm-inventory-view"
                label="Lihat Inventori"
                checked={user.permissions.includes("inventory_view")}
                onChange={(checked) => {
                  if (checked) {
                    setUser({
                      ...user,
                      permissions: [...user.permissions, "inventory_view"],
                    });
                  } else {
                    setUser({
                      ...user,
                      permissions: user.permissions.filter(
                        (p) => p !== "inventory_view"
                      ),
                    });
                  }
                }}
              />

              {(user.role === "admin" || user.role === "mechanic") && (
                <>
                  <PermissionCheckbox
                    id="edit-perm-inventory-manage"
                    label="Kelola Inventori"
                    checked={user.permissions.includes("inventory_manage")}
                    onChange={(checked) => {
                      if (checked) {
                        setUser({
                          ...user,
                          permissions: [
                            ...user.permissions,
                            "inventory_manage",
                          ],
                        });
                      } else {
                        setUser({
                          ...user,
                          permissions: user.permissions.filter(
                            (p) => p !== "inventory_manage"
                          ),
                        });
                      }
                    }}
                  />

                  <PermissionCheckbox
                    id="edit-perm-services-manage"
                    label="Kelola Layanan"
                    checked={user.permissions.includes("services_manage")}
                    onChange={(checked) => {
                      if (checked) {
                        setUser({
                          ...user,
                          permissions: [...user.permissions, "services_manage"],
                        });
                      } else {
                        setUser({
                          ...user,
                          permissions: user.permissions.filter(
                            (p) => p !== "services_manage"
                          ),
                        });
                      }
                    }}
                  />
                </>
              )}

              {user.role === "admin" && (
                <PermissionCheckbox
                  id="edit-perm-reports-view"
                  label="Lihat Laporan"
                  checked={user.permissions.includes("reports_view")}
                  onChange={(checked) => {
                    if (checked) {
                      setUser({
                        ...user,
                        permissions: [...user.permissions, "reports_view"],
                      });
                    } else {
                      setUser({
                        ...user,
                        permissions: user.permissions.filter(
                          (p) => p !== "reports_view"
                        ),
                      });
                    }
                  }}
                />
              )}
            </div>
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
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  );
};

// Delete User Modal Component
const DeleteUserModal = ({ user, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Hapus User
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Apakah Anda yakin ingin menghapus user{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {user.name}
          </span>
          ? Tindakan ini tidak dapat dibatalkan.
        </p>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Batal
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

// Permission Checkbox Component
const PermissionCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
      />
      <label
        htmlFor={id}
        className="ml-2 text-sm text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
    </div>
  );
};

export default MultiUserManagement;
