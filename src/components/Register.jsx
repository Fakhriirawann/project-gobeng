"use client";

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "user",
    bengkelName: "",
    address: "",
    description: "",
    image: null,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      toast.error("Nama tidak boleh kosong");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email tidak boleh kosong");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Format email tidak valid");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Nomor telepon tidak boleh kosong");
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (!formData.password) {
      toast.error("Password tidak boleh kosong");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password minimal 6 karakter");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password dan konfirmasi password tidak sama");
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep2()) {
      return;
    }

    setIsLoading(true);

    try {
      let dataToSend = formData;

      if (formData.role === "mitra") {
        const fd = new FormData();
        for (let key in formData) {
          if (formData[key] !== null) {
            fd.append(key, formData[key]);
          }
        }
        dataToSend = fd;
      }

      await register(dataToSend);

      // Redirect to login page after successful registration
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      // Error is already handled in AuthContext with toast
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-orange-400 to-orange-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-orange-400 opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md w-full"
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">GB</span>
              </div>
            </motion.div>
            <h1 className="text-3xl font-bold text-orange-400 dark:text-orange-400 mb-2">
              Daftar Akun
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Bergabunglah dengan GoBeng untuk layanan bengkel terbaik
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1
                      ? "bg-orange-400 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  1
                </div>
                <span className="text-xs mt-1">Data Diri</span>
              </div>
              <div
                className={`flex-1 h-1 mx-2 ${
                  step >= 2 ? "bg-orange-400" : "bg-gray-200"
                }`}
              ></div>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2
                      ? "bg-orange-400 text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  2
                </div>
                <span className="text-xs mt-1">Keamanan</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 bg-white dark:bg-gray-700 dark:text-white"
                        placeholder="Masukkan nama lengkap Anda"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 bg-white dark:bg-gray-700 dark:text-white"
                        placeholder="Masukkan email Anda"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nomor Telepon
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 bg-white dark:bg-gray-700 dark:text-white"
                        placeholder="Masukkan nomor telepon Anda"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="my-6 flex items-center">
                  <input
                    type="checkbox"
                    id="isMitra"
                    checked={formData.role === "mitra"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        role: e.target.checked ? "mitra" : "user",
                      })
                    }
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-400"
                  />
                  <label
                    htmlFor="isMitra"
                    className="ml-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    Daftar sebagai Mitra Bengkel
                  </label>
                </div>

                {formData.role === "mitra" && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Nama Bengkel
                      </label>
                      <input
                        type="text"
                        name="bengkelName"
                        value={formData.bengkelName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
                        placeholder="Contoh: Bengkel Maju Jaya"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Alamat Bengkel
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
                        placeholder="Alamat lengkap bengkel"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Deskripsi Bengkel
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
                        placeholder="Ceritakan layanan unggulan bengkel Anda"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Foto Bengkel (opsional)
                      </label>
                      <input
                        type="file"
                        name="image"
                        onChange={(e) =>
                          setFormData({ ...formData, image: e.target.files[0] })
                        }
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"
                      />
                    </div>
                  </div>
                )}

                <motion.button
                  type="button"
                  onClick={nextStep}
                  className="w-full mt-6 bg-orange-400 dark:bg-orange-700 text-white py-3 px-4 rounded-lg hover:bg-orange-800 dark:hover:bg-orange-600 transition duration-200 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Lanjutkan
                </motion.button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 bg-white dark:bg-gray-700 dark:text-white"
                        placeholder="Masukkan password Anda"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FaEyeSlash className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                        ) : (
                          <FaEye className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      Password minimal 6 karakter
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Konfirmasi Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLock className="text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full pl-10 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition duration-200 bg-white dark:bg-gray-700 dark:text-white"
                        placeholder="Konfirmasi password Anda"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <FaEyeSlash className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                        ) : (
                          <FaEye className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    className="w-1/2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-4 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Kembali
                  </motion.button>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-1/2 bg-orange-400 dark:bg-orange-700 text-white py-3 px-4 rounded-lg hover:bg-orange-800 dark:hover:bg-orange-600 transition duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Mendaftar...
                      </div>
                    ) : (
                      "Daftar"
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </form>

          <div className="mt-6 text-center border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-gray-600 dark:text-gray-300">
              Sudah punya akun?{" "}
              <Link
                to="/login"
                className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 font-medium"
              >
                Masuk Sekarang
              </Link>
            </p>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/"
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
