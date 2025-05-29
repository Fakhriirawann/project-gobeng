"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Promo", href: "/promo" },
    { name: "FAQ", href: "/faq" },
  ];

  const services = [
    "Servis Berkala",
    "Perbaikan Mesin",
    "Home Service",
    "Darurat 24 Jam",
    "Ganti Oli",
    "Tune Up",
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", name: "Facebook" },
    { icon: <FaTwitter />, href: "#", name: "Twitter" },
    { icon: <FaInstagram />, href: "#", name: "Instagram" },
    { icon: <FaLinkedin />, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-blue-900 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">GB</span>
              </div>
              <span className="text-2xl font-bold">GoBeng</span>
            </div>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Solusi bengkel cerdas dengan teknologi modern untuk kepuasan
              pelanggan terbaik. Kami berkomitmen memberikan layanan terpercaya
              dan berkualitas tinggi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-blue-200 hover:text-white transition duration-200 text-xl"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-blue-200 hover:text-white transition duration-200 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Layanan</h3>
            <ul className="space-y-3 text-blue-200">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Kontak</h3>
            <div className="space-y-4 text-blue-200">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Alamat</p>
                  <p>
                    Jl. Raya Bengkel No. 123, Jakarta Selatan, Indonesia 12345
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Telepon</p>
                  <p>(021) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p>info@gobeng.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-yellow-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p>+62 812-3456-7890</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-blue-800 mt-12 pt-8"
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">
              Berlangganan Newsletter
            </h3>
            <p className="text-blue-200 mb-6">
              Dapatkan update terbaru tentang promo dan layanan kami
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-r-lg font-semibold hover:bg-yellow-300 transition duration-200">
                Berlangganan
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-center md:text-left">
              &copy; {currentYear} GoBeng. Semua hak cipta dilindungi.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className="text-blue-200 hover:text-white text-sm transition duration-200"
              >
                Kebijakan Privasi
              </Link>
              <Link
                to="/terms"
                className="text-blue-200 hover:text-white text-sm transition duration-200"
              >
                Syarat & Ketentuan
              </Link>
              <Link
                to="/sitemap"
                className="text-blue-200 hover:text-white text-sm transition duration-200"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
