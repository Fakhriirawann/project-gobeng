"use client";

import { useState } from "react";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSearch,
  FaFilter,
  FaToggleOn,
  FaToggleOff,
  FaTools,
  FaShoppingBag,
} from "react-icons/fa";

const ServicesManagement = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Ganti Oli Mesin",
      category: "maintenance",
      type: "service",
      price: 150000,
      duration: 30,
      description: "Penggantian oli mesin dengan oli berkualitas tinggi",
      status: "active",
      popularity: 95,
    },
    {
      id: 2,
      name: "Tune Up Mesin",
      category: "maintenance",
      type: "service",
      price: 300000,
      duration: 120,
      description: "Perawatan menyeluruh untuk performa mesin optimal",
      status: "active",
      popularity: 88,
    },
    {
      id: 3,
      name: "Oli Mesin 5W-30",
      category: "oil",
      type: "product",
      price: 75000,
      stock: 25,
      description: "Oli mesin sintetik premium untuk mobil modern",
      status: "active",
      popularity: 92,
    },
    {
      id: 4,
      name: "Servis AC Mobil",
      category: "repair",
      type: "service",
      price: 200000,
      duration: 90,
      description: "Pembersihan dan perbaikan sistem AC mobil",
      status: "active",
      popularity: 75,
    },
    {
      id: 5,
      name: "Ban Michelin 185/65R15",
      category: "parts",
      type: "product",
      price: 800000,
      stock: 8,
      description: "Ban berkualitas tinggi untuk keamanan berkendara",
      status: "inactive",
      popularity: 68,
    },
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const [newItem, setNewItem] = useState({
    name: "",
    category: "maintenance",
    type: "service",
    price: "",
    duration: "",
    stock: "",
    description: "",
    status: "active",
  });

  const handleAddItem = () => {
    const id =
      services.length > 0 ? Math.max(...services.map((s) => s.id)) + 1 : 1;
    setServices([...services, { ...newItem, id, popularity: 0 }]);
    setNewItem({
      name: "",
      category: "maintenance",
      type: "service",
      price: "",
      duration: "",
      stock: "",
      description: "",
      status: "active",
    });
    setShowAddModal(false);
  };

  const handleEditItem = () => {
    setServices(
      services.map((item) =>
        item.id === selectedItem.id ? selectedItem : item
      )
    );
    setShowEditModal(false);
  };

  const handleDeleteItem = () => {
    setServices(services.filter((item) => item.id !== selectedItem.id));
    setShowDeleteModal(false);
  };

  const toggleStatus = (id) => {
    setServices(
      services.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "active" ? "inactive" : "active",
            }
          : item
      )
    );
  };

  const filteredServices = services.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    return matchesSearch && matchesCategory && matchesType;
  });

  const getCategoryBadgeClass = (category) => {
    switch (category) {
      case "maintenance":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "repair":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "oil":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      case "parts":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  const getTypeBadgeClass = (type) => {
    return type === "service"
      ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
      : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Manajemen Layanan & Produk
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Kelola layanan dan produk bengkel Anda
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-orange-600 text-white px-4 sm:px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <FaPlus />
            <span>Tambah Item</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Cari layanan atau produk..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[140px]"
              >
                <option value="all">Semua Tipe</option>
                <option value="service">Layanan</option>
                <option value="product">Produk</option>
              </select>
            </div>
            <div className="relative">
              <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white appearance-none min-w-[160px]"
              >
                <option value="all">Semua Kategori</option>
                <option value="maintenance">Perawatan</option>
                <option value="repair">Perbaikan</option>
                <option value="oil">Oli</option>
                <option value="parts">Sparepart</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Services/Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredServices.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  {item.type === "service" ? (
                    <FaTools className="text-orange-600 dark:text-orange-400" />
                  ) : (
                    <FaShoppingBag className="text-orange-600 dark:text-orange-400" />
                  )}
                </div>
                <div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeBadgeClass(
                      item.type
                    )}`}
                  >
                    {item.type === "service" ? "Layanan" : "Produk"}
                  </span>
                </div>
              </div>
              <button
                onClick={() => toggleStatus(item.id)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {item.status === "active" ? (
                  <FaToggleOn className="text-green-500 text-xl" />
                ) : (
                  <FaToggleOff className="text-gray-400 text-xl" />
                )}
              </button>
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {item.name}
            </h3>

            <div className="flex items-center space-x-2 mb-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryBadgeClass(
                  item.category
                )}`}
              >
                {item.category === "maintenance" && "Perawatan"}
                {item.category === "repair" && "Perbaikan"}
                {item.category === "oil" && "Oli"}
                {item.category === "parts" && "Sparepart"}
              </span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  item.status === "active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                }`}
              >
                {item.status === "active" ? "Aktif" : "Nonaktif"}
              </span>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Harga:</span>
                <span className="font-semibold text-gray-900 dark:text-white">
                  Rp {item.price.toLocaleString("id-ID")}
                </span>
              </div>
              {item.type === "service" && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Durasi:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {item.duration} menit
                  </span>
                </div>
              )}
              {item.type === "product" && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Stok:
                  </span>
                  <span
                    className={`font-semibold ${
                      item.stock < 10
                        ? "text-red-600 dark:text-red-400"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {item.stock} unit
                  </span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">
                  Popularitas:
                </span>
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: `${item.popularity}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-900 dark:text-white text-xs">
                    {item.popularity}%
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setSelectedItem(item);
                  setShowEditModal(true);
                }}
                className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-sm"
              >
                <FaEdit />
                <span>Edit</span>
              </button>
              <button
                onClick={() => {
                  setSelectedItem(item);
                  setShowDeleteModal(true);
                }}
                className="flex-1 bg-red-600 text-white py-2 px-3 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-1 text-sm"
              >
                <FaTrash />
                <span>Hapus</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-12 text-center">
          <FaTools className="text-4xl text-gray-300 dark:text-gray-600 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            Tidak ada layanan atau produk ditemukan.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Coba ubah filter atau tambahkan item baru
          </p>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddModal && (
        <ItemModal
          title="Tambah Item Baru"
          item={newItem}
          setItem={setNewItem}
          onClose={() => setShowAddModal(false)}
          onSave={handleAddItem}
          isEdit={false}
        />
      )}

      {/* Edit Item Modal */}
      {showEditModal && selectedItem && (
        <ItemModal
          title="Edit Item"
          item={selectedItem}
          setItem={setSelectedItem}
          onClose={() => setShowEditModal(false)}
          onSave={handleEditItem}
          isEdit={true}
        />
      )}

      {/* Delete Item Modal */}
      {showDeleteModal && selectedItem && (
        <DeleteModal
          item={selectedItem}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDeleteItem}
        />
      )}
    </div>
  );
};

// Item Modal Component
const ItemModal = ({ title, item, setItem, onClose, onSave, isEdit }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Nama
            </label>
            <input
              type="text"
              value={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Masukkan nama item"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Tipe
              </label>
              <select
                value={item.type}
                onChange={(e) => setItem({ ...item, type: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="service">Layanan</option>
                <option value="product">Produk</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Kategori
              </label>
              <select
                value={item.category}
                onChange={(e) => setItem({ ...item, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                <option value="maintenance">Perawatan</option>
                <option value="repair">Perbaikan</option>
                <option value="oil">Oli</option>
                <option value="parts">Sparepart</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Harga (Rp)
            </label>
            <input
              type="number"
              value={item.price}
              onChange={(e) =>
                setItem({
                  ...item,
                  price: Number.parseInt(e.target.value) || 0,
                })
              }
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="0"
            />
          </div>

          {item.type === "service" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Durasi (menit)
              </label>
              <input
                type="number"
                value={item.duration}
                onChange={(e) =>
                  setItem({
                    ...item,
                    duration: Number.parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="0"
              />
            </div>
          )}

          {item.type === "product" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Stok
              </label>
              <input
                type="number"
                value={item.stock}
                onChange={(e) =>
                  setItem({
                    ...item,
                    stock: Number.parseInt(e.target.value) || 0,
                  })
                }
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="0"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Deskripsi
            </label>
            <textarea
              value={item.description}
              onChange={(e) =>
                setItem({ ...item, description: e.target.value })
              }
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Masukkan deskripsi item"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Status
            </label>
            <select
              value={item.status}
              onChange={(e) => setItem({ ...item, status: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="active">Aktif</option>
              <option value="inactive">Nonaktif</option>
            </select>
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
            {isEdit ? "Simpan Perubahan" : "Tambah Item"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Delete Modal Component
const DeleteModal = ({ item, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          Hapus Item
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Apakah Anda yakin ingin menghapus{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {item.name}
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

export default ServicesManagement;
