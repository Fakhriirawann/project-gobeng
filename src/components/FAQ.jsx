"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
            "GoBeng adalah platform digital yang menghubungkan pelanggan dengan bengkel terpercaya di seluruh Indonesia. Kami menyediakan layanan reservasi online, home service, dan layanan darurat 24 jam.",
        },
        {
          question: "Bagaimana cara mendaftar di GoBeng?",
          answer:
            'Anda dapat mendaftar melalui website kami dengan mengklik tombol "Daftar" dan mengisi formulir pendaftaran. Proses pendaftaran gratis dan mudah.',
        },
        {
          question: "Apakah layanan GoBeng tersedia di seluruh Indonesia?",
          answer:
            "Saat ini kami melayani area Jabodetabek dan beberapa kota besar lainnya. Kami terus memperluas jangkauan layanan ke seluruh Indonesia.",
        },
      ],
    },
    {
      category: "Layanan",
      questions: [
        {
          question: "Apa saja layanan yang tersedia di GoBeng?",
          answer:
            "Kami menyediakan berbagai layanan seperti ganti oli, tune up, servis AC, perbaikan mesin, home service, dan layanan darurat 24 jam.",
        },
        {
          question: "Bagaimana cara memesan layanan home service?",
          answer:
            "Anda dapat memesan home service melalui dashboard pelanggan, pilih layanan yang diinginkan, tentukan waktu dan lokasi, lalu konfirmasi pesanan.",
        },
        {
          question: "Berapa lama waktu pengerjaan servis?",
          answer:
            "Waktu pengerjaan bervariasi tergantung jenis layanan. Ganti oli sekitar 30 menit, tune up 2-3 jam, dan servis besar bisa 1-2 hari.",
        },
      ],
    },
    {
      category: "Pembayaran",
      questions: [
        {
          question: "Metode pembayaran apa saja yang diterima?",
          answer:
            "Kami menerima pembayaran tunai, transfer bank, kartu kredit/debit, e-wallet (OVO, GoPay, DANA), dan QRIS.",
        },
        {
          question: "Apakah ada biaya tambahan untuk home service?",
          answer:
            "Biaya home service bervariasi tergantung jarak dan jenis layanan. Untuk area dalam radius 5km dari bengkel mitra, biaya mulai dari Rp 25.000.",
        },
        {
          question: "Bagaimana sistem pembayaran untuk layanan darurat?",
          answer:
            "Untuk layanan darurat, pembayaran dapat dilakukan setelah layanan selesai. Kami menerima semua metode pembayaran yang tersedia.",
        },
      ],
    },
    {
      category: "Garansi",
      questions: [
        {
          question: "Apakah ada garansi untuk layanan yang diberikan?",
          answer:
            "Ya, semua layanan kami bergaransi. Garansi bervariasi dari 1 bulan hingga 1 tahun tergantung jenis layanan dan spare part yang digunakan.",
        },
        {
          question: "Bagaimana cara klaim garansi?",
          answer:
            "Untuk klaim garansi, hubungi customer service kami dengan menyertakan nomor invoice dan foto kondisi kendaraan. Tim kami akan memproses klaim dalam 24 jam.",
        },
        {
          question: "Apakah garansi berlaku untuk semua bengkel mitra?",
          answer:
            "Ya, garansi berlaku di semua bengkel mitra GoBeng. Anda dapat melakukan klaim garansi di bengkel mitra manapun.",
        },
      ],
    },
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Temukan jawaban untuk pertanyaan yang sering diajukan tentang
            layanan GoBeng. Jika tidak menemukan jawaban yang Anda cari, jangan
            ragu untuk menghubungi kami.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari pertanyaan..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-blue-900 mb-6 border-b-2 border-blue-900 pb-2">
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    return (
                      <div
                        key={faqIndex}
                        className="border border-gray-200 rounded-lg"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition duration-200"
                        >
                          <span className="font-medium text-gray-800">
                            {faq.question}
                          </span>
                          <span
                            className={`transform transition-transform duration-200 ${
                              openIndex === globalIndex ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </span>
                        </button>
                        {openIndex === globalIndex && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Masih Ada Pertanyaan?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tim customer support kami siap membantu Anda 24/7. Jangan ragu untuk
            menghubungi kami melalui berbagai channel yang tersedia.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition duration-200 font-medium"
            >
              Hubungi Kami
            </a>
            <a
              href="https://wa.me/628001234567"
              className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition duration-200 font-medium"
            >
              WhatsApp Support
            </a>
            <a
              href="mailto:support@gobeng.com"
              className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-900 hover:text-white transition duration-200 font-medium"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
            Tips Berguna
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Perawatan Rutin
              </h3>
              <p className="text-gray-600">
                Lakukan servis berkala setiap 5.000-10.000 km untuk menjaga
                performa kendaraan optimal.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Booking Advance
              </h3>
              <p className="text-gray-600">
                Reservasi layanan H-1 untuk mendapatkan slot waktu yang
                diinginkan dan menghindari antrian.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">
                Gunakan Aplikasi
              </h3>
              <p className="text-gray-600">
                Download aplikasi GoBeng untuk kemudahan booking, tracking, dan
                mendapatkan promo eksklusif.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
