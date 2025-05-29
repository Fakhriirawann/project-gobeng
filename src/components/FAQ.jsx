"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      category: "Umum",
      questions: [
        {
          question: "Apa itu GoBeng?",
          answer:
            "GoBeng adalah platform digital yang menghubungkan pelanggan dengan bengkel terpercaya di seluruh Indonesia. Kami menyediakan layanan reservasi online, home service, dan layanan darurat 24 jam dengan teknologi terdepan untuk memberikan pengalaman terbaik.",
          tags: ["platform", "digital", "bengkel", "reservasi"],
        },
        {
          question: "Bagaimana cara mendaftar di GoBeng?",
          answer:
            'Anda dapat mendaftar melalui website kami dengan mengklik tombol "Daftar" dan mengisi formulir pendaftaran. Proses pendaftaran gratis dan mudah, hanya membutuhkan waktu kurang dari 5 menit.',
          tags: ["daftar", "registrasi", "akun"],
        },
        {
          question: "Apakah layanan GoBeng tersedia di seluruh Indonesia?",
          answer:
            "Saat ini kami melayani area Jabodetabek dan beberapa kota besar lainnya seperti Bandung, Surabaya, Medan, dan Makassar. Kami terus memperluas jangkauan layanan ke seluruh Indonesia secara bertahap.",
          tags: ["area", "jangkauan", "lokasi"],
        },
        {
          question: "Apakah GoBeng aman dan terpercaya?",
          answer:
            "Ya, GoBeng sangat aman dan terpercaya. Semua bengkel mitra telah melalui proses verifikasi ketat, teknisi bersertifikat, dan kami memberikan garansi untuk setiap layanan yang diberikan.",
          tags: ["keamanan", "terpercaya", "verifikasi"],
        },
      ],
    },
    {
      category: "Layanan",
      questions: [
        {
          question: "Apa saja layanan yang tersedia di GoBeng?",
          answer:
            "Kami menyediakan berbagai layanan seperti ganti oli, tune up, servis AC, perbaikan mesin, ganti ban, balancing, spooring, home service, dan layanan darurat 24 jam. Semua layanan dilakukan oleh teknisi profesional bersertifikat.",
          tags: ["layanan", "servis", "ganti oli", "tune up"],
        },
        {
          question: "Bagaimana cara memesan layanan home service?",
          answer:
            "Anda dapat memesan home service melalui dashboard pelanggan, pilih layanan yang diinginkan, tentukan waktu dan lokasi, lalu konfirmasi pesanan. Tim teknisi akan datang ke lokasi Anda sesuai jadwal yang dipilih.",
          tags: ["home service", "booking", "teknisi"],
        },
        {
          question: "Berapa lama waktu pengerjaan servis?",
          answer:
            "Waktu pengerjaan bervariasi tergantung jenis layanan. Ganti oli sekitar 30-45 menit, tune up 2-3 jam, servis AC 1-2 jam, dan servis besar bisa 1-2 hari. Kami akan memberikan estimasi waktu yang akurat saat booking.",
          tags: ["waktu", "durasi", "estimasi"],
        },
        {
          question: "Apakah tersedia layanan darurat?",
          answer:
            "Ya, kami menyediakan layanan darurat 24/7 untuk situasi seperti mobil mogok, ban bocor, atau masalah mendesak lainnya. Tim darurat kami siap membantu dalam waktu 15-30 menit setelah panggilan.",
          tags: ["darurat", "24 jam", "emergency"],
        },
      ],
    },
    {
      category: "Pembayaran",
      questions: [
        {
          question: "Metode pembayaran apa saja yang diterima?",
          answer:
            "Kami menerima pembayaran tunai, transfer bank (BCA, Mandiri, BNI, BRI), kartu kredit/debit (Visa, Mastercard), e-wallet (OVO, GoPay, DANA, ShopeePay), dan QRIS untuk kemudahan transaksi.",
          tags: ["pembayaran", "metode", "transfer", "e-wallet"],
        },
        {
          question: "Apakah ada biaya tambahan untuk home service?",
          answer:
            "Biaya home service bervariasi tergantung jarak dan jenis layanan. Untuk area dalam radius 5km dari bengkel mitra, biaya mulai dari Rp 25.000. Untuk jarak lebih jauh, akan ada biaya tambahan sesuai dengan tarif yang berlaku.",
          tags: ["biaya", "home service", "tarif"],
        },
        {
          question: "Bagaimana sistem pembayaran untuk layanan darurat?",
          answer:
            "Untuk layanan darurat, pembayaran dapat dilakukan setelah layanan selesai. Kami menerima semua metode pembayaran yang tersedia. Untuk kemudahan, Anda juga bisa melakukan pembayaran melalui aplikasi.",
          tags: ["darurat", "pembayaran", "emergency"],
        },
        {
          question: "Apakah ada program loyalitas atau diskon?",
          answer:
            "Ya, kami memiliki program loyalitas GoBeng Points dimana setiap transaksi akan mendapatkan poin yang bisa ditukar dengan diskon. Kami juga rutin memberikan promo dan diskon khusus untuk member setia.",
          tags: ["loyalitas", "diskon", "promo", "poin"],
        },
      ],
    },
    {
      category: "Garansi",
      questions: [
        {
          question: "Apakah ada garansi untuk layanan yang diberikan?",
          answer:
            "Ya, semua layanan kami bergaransi. Garansi bervariasi dari 1 bulan hingga 1 tahun tergantung jenis layanan dan spare part yang digunakan. Garansi mencakup kualitas pekerjaan dan spare part original.",
          tags: ["garansi", "kualitas", "spare part"],
        },
        {
          question: "Bagaimana cara klaim garansi?",
          answer:
            "Untuk klaim garansi, hubungi customer service kami dengan menyertakan nomor invoice dan foto kondisi kendaraan. Tim kami akan memproses klaim dalam 24 jam dan memberikan solusi terbaik.",
          tags: ["klaim", "garansi", "customer service"],
        },
        {
          question: "Apakah garansi berlaku untuk semua bengkel mitra?",
          answer:
            "Ya, garansi berlaku di semua bengkel mitra GoBeng di seluruh Indonesia. Anda dapat melakukan klaim garansi di bengkel mitra manapun dengan menunjukkan bukti transaksi dari aplikasi atau website.",
          tags: ["garansi", "bengkel mitra", "nasional"],
        },
        {
          question: "Apa yang tidak termasuk dalam garansi?",
          answer:
            "Garansi tidak berlaku untuk kerusakan akibat kelalaian pengguna, kecelakaan, bencana alam, atau penggunaan spare part non-original. Detail lengkap syarat dan ketentuan garansi dapat dilihat di aplikasi.",
          tags: ["garansi", "syarat", "ketentuan"],
        },
      ],
    },
  ];

  // Filter FAQs based on search term and category
  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter((faq) => {
        const matchesSearch =
          searchTerm === "" ||
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          );

        const matchesCategory =
          activeCategory === "all" ||
          category.category.toLowerCase() === activeCategory.toLowerCase();

        return matchesSearch && matchesCategory;
      }),
    }))
    .filter((category) => category.questions.length > 0);

  const categories = ["all", ...faqs.map((cat) => cat.category.toLowerCase())];

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
            Pusat Bantuan
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Frequently Asked <span className="text-yellow-400">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-orange-100 dark:text-gray-300">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang
            layanan GoBeng. Jika tidak menemukan jawaban yang Anda cari, jangan
            ragu untuk menghubungi kami.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Cari pertanyaan atau kata kunci..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-orange-600 text-white shadow-lg"
                      : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 border border-gray-200 dark:border-gray-600"
                  }`}
                >
                  {category === "all"
                    ? "Semua"
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Tidak ada hasil ditemukan
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Coba gunakan kata kunci yang berbeda atau hubungi customer
                  service kami
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-orange text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 btn-hover"
                >
                  Hubungi Kami
                </a>
              </div>
            ) : (
              filteredFAQs.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-12 h-12 bg-gradient-orange rounded-2xl flex items-center justify-center mr-4">
                      <span className="text-white text-xl font-bold">
                        {category.category.charAt(0)}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                      {category.category}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      return (
                        <div
                          key={faqIndex}
                          className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                          >
                            <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg pr-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                              {faq.question}
                            </span>
                            <div className="flex-shrink-0">
                              <div
                                className={`w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center transform transition-all duration-300 ${
                                  openIndex === globalIndex
                                    ? "rotate-180 bg-orange-600"
                                    : "group-hover:bg-orange-200 dark:group-hover:bg-orange-800/50"
                                }`}
                              >
                                <svg
                                  className={`w-5 h-5 transition-colors duration-200 ${
                                    openIndex === globalIndex
                                      ? "text-white"
                                      : "text-orange-600 dark:text-orange-400"
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </button>

                          {openIndex === globalIndex && (
                            <div className="px-8 pb-6 animate-fade-in">
                              <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                                  {faq.answer}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {faq.tags.map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                      #{tag}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              Butuh Bantuan Lebih?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-8">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tim customer support kami siap membantu Anda 24/7. Jangan ragu
              untuk menghubungi kami melalui berbagai channel yang tersedia
              untuk mendapatkan bantuan personal.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="/contact"
                className="group bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">📧</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Email Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Kirim email untuk pertanyaan detail
                </p>
                <span className="text-orange-600 dark:text-orange-400 font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors duration-200">
                  support@gobeng.com →
                </span>
              </a>

              <a
                href="https://wa.me/628001234567"
                className="group bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  WhatsApp Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Chat langsung untuk respon cepat
                </p>
                <span className="text-orange-600 dark:text-orange-400 font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors duration-200">
                  Chat Sekarang →
                </span>
              </a>

              <a
                href="tel:+622112345678"
                className="group bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl text-white">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Phone Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Hubungi langsung tim support
                </p>
                <span className="text-orange-600 dark:text-orange-400 font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors duration-200">
                  (021) 1234-5678 →
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              Tips Berguna
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Tips untuk Pengalaman Terbaik
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Beberapa tips untuk memaksimalkan penggunaan layanan GoBeng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-3xl hover:shadow-lg transition-all duration-300 card-hover">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl text-white">💡</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Perawatan Rutin
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Lakukan servis berkala setiap 5.000-10.000 km untuk menjaga
                performa kendaraan optimal dan mencegah kerusakan besar.
              </p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-3xl hover:shadow-lg transition-all duration-300 card-hover">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl text-white">⏰</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Booking Advance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Reservasi layanan H-1 untuk mendapatkan slot waktu yang
                diinginkan dan menghindari antrian panjang.
              </p>
            </div>

            <div className="group text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-3xl hover:shadow-lg transition-all duration-300 card-hover">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl text-white">📱</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Gunakan Aplikasi
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Download aplikasi GoBeng untuk kemudahan booking, tracking
                real-time, dan mendapatkan promo eksklusif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
