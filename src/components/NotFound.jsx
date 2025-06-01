"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-bold text-white mb-4">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-orange-200 mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
            telah dipindahkan atau dihapus.
          </p>
          <div className="space-x-4">
            <Link
              to="/"
              className="bg-orange-400 text-orange-400 px-6 py-3 rounded-lg font-semibold hover:bg-orange-300 transition duration-300 inline-block"
            >
              Kembali ke Beranda
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-400 transition duration-300 inline-block"
            >
              Hubungi Kami
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
