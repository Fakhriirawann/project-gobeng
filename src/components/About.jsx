"use client";

import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: "Ahmad Wijaya",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Berpengalaman 15 tahun di industri otomotif dengan visi menghadirkan revolusi digital",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ahmad@gobeng.com",
      },
    },
    {
      name: "Sari Indah",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Expert dalam teknologi dan sistem informasi, lulusan terbaik ITB",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sari@gobeng.com",
      },
    },
    {
      name: "Budi Santoso",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      description:
        "Mengawasi operasional seluruh bengkel mitra dengan pengalaman 12 tahun",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "budi@gobeng.com",
      },
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Profesional",
      description:
        "Layanan berkualitas tinggi dengan standar internasional dan sertifikasi resmi",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "⚡",
      title: "Cepat & Efisien",
      description:
        "Proses servis yang cepat tanpa mengurangi kualitas dengan teknologi terdepan",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "💎",
      title: "Terpercaya",
      description:
        "Kepercayaan pelanggan adalah prioritas utama dengan track record terbaik",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: "🔧",
      title: "Teknologi Modern",
      description:
        "Menggunakan peralatan dan teknologi terdepan untuk hasil maksimal",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Pendirian GoBeng",
      description: "Memulai perjalanan dengan visi revolusi bengkel digital",
    },
    {
      year: "2021",
      title: "10 Bengkel Mitra",
      description: "Ekspansi pertama dengan 10 bengkel mitra terpercaya",
    },
    {
      year: "2022",
      title: "1000+ Pelanggan",
      description: "Mencapai milestone 1000 pelanggan aktif",
    },
    {
      year: "2023",
      title: "25 Kota",
      description: "Melayani 25 kota besar di Indonesia",
    },
    {
      year: "2024",
      title: "50+ Bengkel",
      description: "Network bengkel terbesar dengan 50+ mitra",
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
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-block bg-orange-800/30 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full text-orange-200 dark:text-orange-300 text-sm font-medium mb-6">
              Tentang Kami
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Revolusi <span className="text-yellow-400">Bengkel</span> Digital
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-orange-100 dark:text-gray-300">
              Kami adalah platform bengkel digital yang menghubungkan pelanggan
              dengan bengkel terpercaya di seluruh Indonesia. Dengan teknologi
              modern dan layanan profesional, kami berkomitmen memberikan
              pengalaman terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                    Visi Kami
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Menjadi platform bengkel digital terdepan di Indonesia yang
                  memberikan solusi perawatan kendaraan yang mudah, cepat, dan
                  terpercaya bagi seluruh masyarakat Indonesia dengan teknologi
                  terdepan.
                </p>
              </div>

              <div className="group">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🚀</span>
                  </div>
                  <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                    Misi Kami
                  </h2>
                </div>
                <ul className="text-gray-600 dark:text-gray-300 text-lg space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    Menyediakan layanan bengkel berkualitas tinggi dengan
                    standar internasional
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    Mengintegrasikan teknologi dalam industri otomotif Indonesia
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    Membangun jaringan bengkel mitra terpercaya di seluruh
                    nusantara
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1">✓</span>
                    Memberikan kemudahan akses layanan 24/7 untuk semua kalangan
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 dark:from-orange-900/30 dark:to-orange-800/20 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="GoBeng Vision"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                      4.8/5
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
                      Rating Kepuasan
                    </div>
                    <div className="flex justify-center mt-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              Nilai-Nilai Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Prinsip yang Kami Junjung
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Nilai-nilai fundamental yang menjadi landasan setiap keputusan dan
              tindakan kami dalam melayani pelanggan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500"
              >
                <div
                  className={`bg-gradient-to-r ${value.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              Perjalanan Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Milestone Penting
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Setiap langkah perjalanan kami menuju visi menjadi platform
              bengkel digital terdepan di Indonesia
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 card-hover">
                      <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-orange-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              Tim Profesional
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Orang-Orang Hebat di Balik GoBeng
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Tim berpengalaman yang berdedikasi untuk memberikan layanan
              terbaik dan inovasi berkelanjutan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover border border-gray-100 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-orange-600 dark:text-orange-400 font-medium mb-4 text-lg">
                    {member.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {member.description}
                  </p>

                  <div className="flex space-x-4">
                    <a
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-10 h-10 bg-blue-400 rounded-xl flex items-center justify-center text-white hover:bg-blue-500 transition-colors duration-200 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-10 h-10 bg-gray-600 rounded-xl flex items-center justify-center text-white hover:bg-gray-700 transition-colors duration-200 hover:scale-110"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white transition-colors duration-200 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-800/30 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full text-orange-200 dark:text-orange-300 text-sm font-medium mb-6">
              Pencapaian Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Angka Berbicara Lebih Keras
            </h2>
            <p className="text-orange-200 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Prestasi yang telah kami raih berkat kepercayaan dan dukungan
              pelanggan setia
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Bengkel Mitra", icon: "🏪" },
              { number: "10,000+", label: "Pelanggan Puas", icon: "😊" },
              { number: "25,000+", label: "Layanan Selesai", icon: "✅" },
              { number: "4.8/5", label: "Rating Kepuasan", icon: "⭐" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-orange-800/20 dark:bg-gray-700/20 backdrop-blur-sm p-10 rounded-3xl border border-orange-700/30 dark:border-gray-600/30 hover:bg-orange-700/30 dark:hover:bg-gray-600/30 transition-all duration-300 card-hover group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-bold mb-3 text-yellow-400">
                  {stat.number}
                </h3>
                <p className="text-orange-200 dark:text-gray-300 text-xl font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-6">
              Bergabung dengan Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-8">
              Siap Menjadi Bagian dari Revolusi?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan ribuan pelanggan yang telah merasakan
              kemudahan dan kualitas layanan GoBeng. Mari bersama-sama membangun
              masa depan industri otomotif Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="/login"
                className="bg-gradient-orange text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:shadow-2xl transition-all duration-300 btn-hover"
              >
                Mulai Sekarang
              </a>
              <a
                href="/contact"
                className="border-2 border-orange-600 dark:border-orange-400 text-orange-600 dark:text-orange-400 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
