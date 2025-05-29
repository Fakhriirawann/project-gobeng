"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const locations = [
    {
      name: "GoBeng Kemang",
      address: "Jl. Kemang Raya No. 123, Jakarta Selatan",
      phone: "(021) 1234-5678",
      hours: "Senin - Minggu: 08:00 - 20:00",
      services: ["Servis Umum", "Home Service", "Darurat 24 Jam"],
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "GoBeng Senayan",
      address: "Jl. Senayan No. 456, Jakarta Pusat",
      phone: "(021) 2345-6789",
      hours: "Senin - Minggu: 08:00 - 20:00",
      services: ["Servis Umum", "Tune Up Specialist", "AC Service"],
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "GoBeng Blok M",
      address: "Jl. Blok M No. 789, Jakarta Selatan",
      phone: "(021) 3456-7890",
      hours: "Senin - Minggu: 08:00 - 20:00",
      services: ["Servis Umum", "Body Repair", "Detailing"],
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const contactMethods = [
    {
      icon: "📍",
      title: "Alamat Kantor Pusat",
      content: [
        "Jl. Raya Bengkel No. 123",
        "Jakarta Selatan, Indonesia",
        "12345",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "📞",
      title: "Telepon & WhatsApp",
      content: ["(021) 1234-5678", "0800-1234-5678", "+62 812-3456-7890"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: "📧",
      title: "Email",
      content: [
        "info@gobeng.com",
        "support@gobeng.com",
        "partnership@gobeng.com",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "🕒",
      title: "Jam Operasional",
      content: [
        "24/7 Customer Service",
        "Emergency Support",
        "Live Chat Available",
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  const faqs = [
    {
      question: "Bagaimana cara booking layanan?",
      answer:
        "Anda dapat booking melalui website, aplikasi mobile, atau menghubungi customer service kami.",
    },
    {
      question: "Apakah ada garansi untuk layanan?",
      answer:
        "Ya, semua layanan kami bergaransi sesuai dengan jenis layanan yang dipilih.",
    },
    {
      question: "Berapa lama waktu pengerjaan?",
      answer:
        "Waktu pengerjaan bervariasi tergantung jenis layanan, mulai dari 30 menit hingga beberapa hari.",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-800/30 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full text-orange-200 dark:text-orange-300 text-sm font-medium mb-6">
            Hubungi Kami
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Kami Siap <span className="text-yellow-400">Membantu</span> Anda
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-orange-100 dark:text-gray-300">
            Kami siap membantu Anda 24/7. Hubungi kami melalui berbagai channel
            yang tersedia atau kunjungi langsung bengkel mitra terdekat untuk
            pengalaman terbaik.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              Informasi Kontak
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Berbagai Cara Menghubungi Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Pilih metode komunikasi yang paling nyaman untuk Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 text-center"
              >
                <div
                  className={`bg-gradient-to-r ${method.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-4xl">{method.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {method.title}
                </h3>
                <div className="space-y-2">
                  {method.content.map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-700 p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-600">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Kirim Pesan
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Isi formulir di bawah ini dan kami akan segera merespons
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subjek *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white"
                      required
                    >
                      <option value="">Pilih subjek</option>
                      <option value="general">Pertanyaan Umum</option>
                      <option value="service">Layanan & Reservasi</option>
                      <option value="complaint">Keluhan</option>
                      <option value="partnership">Kemitraan</option>
                      <option value="other">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 dark:text-white resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-orange text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed btn-hover"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Mengirim...
                    </div>
                  ) : (
                    "Kirim Pesan"
                  )}
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-700 p-10 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-600">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  Lokasi Kami
                </h2>
                <div className="bg-gray-200 dark:bg-gray-600 h-64 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Google Maps Integration
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Interactive map coming soon
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Kantor Pusat
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Jl. Raya Bengkel No. 123, Jakarta Selatan
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🚗</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Akses Transportasi
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Dekat dengan stasiun MRT dan halte TransJakarta
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">🅿️</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        Parkir
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Area parkir luas tersedia gratis untuk pelanggan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick FAQ */}
              <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-600">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                  FAQ Singkat
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-gray-200 dark:border-gray-600 pb-4 last:border-b-0"
                    >
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href="/faq"
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium transition-colors duration-200"
                  >
                    Lihat semua FAQ →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              Bengkel Mitra
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Lokasi Bengkel Mitra Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Temukan bengkel mitra terdekat dengan layanan berkualitas dan
              teknisi profesional
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {location.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                    {location.name}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <span className="text-orange-500 mt-1">📍</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        {location.address}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-orange-500">📞</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        {location.phone}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-orange-500">🕒</span>
                      <p className="text-gray-600 dark:text-gray-300">
                        {location.hours}
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                      Layanan:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-orange text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 btn-hover">
                    Lihat Detail & Booking
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-red-600 dark:from-red-700 dark:via-red-600 dark:to-red-700 text-white transition-colors duration-200 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-red-800/30 backdrop-blur-sm px-6 py-3 rounded-full text-red-200 text-sm font-medium mb-6">
              Layanan Darurat
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Layanan Darurat 24 Jam
            </h2>
            <p className="text-xl mb-12 text-red-100 max-w-3xl mx-auto leading-relaxed">
              Butuh bantuan segera? Hubungi layanan darurat kami yang siap 24/7
              untuk membantu Anda kapan saja dan dimana saja
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="tel:08001234567"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-6 rounded-2xl font-bold hover:bg-white/20 transition-all duration-200 flex items-center justify-center space-x-3 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  📞
                </span>
                <div className="text-left">
                  <div className="text-lg">Telepon Darurat</div>
                  <div className="text-2xl font-bold">0800-1234-567</div>
                </div>
              </a>

              <a
                href="https://wa.me/628001234567"
                className="bg-green-500/90 backdrop-blur-sm border border-green-400/20 text-white px-8 py-6 rounded-2xl font-bold hover:bg-green-400 transition-all duration-200 flex items-center justify-center space-x-3 group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                  💬
                </span>
                <div className="text-left">
                  <div className="text-lg">WhatsApp</div>
                  <div className="text-2xl font-bold">Chat Sekarang</div>
                </div>
              </a>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">🚨</div>
                <h3 className="font-semibold mb-2">Respons Cepat</h3>
                <p className="text-red-200 text-sm">
                  Tim darurat siap dalam 15 menit
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="font-semibold mb-2">Teknisi Berpengalaman</h3>
                <p className="text-red-200 text-sm">
                  Teknisi terlatih untuk situasi darurat
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">📍</div>
                <h3 className="font-semibold mb-2">Jangkauan Luas</h3>
                <p className="text-red-200 text-sm">
                  Melayani seluruh area Jabodetabek
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
