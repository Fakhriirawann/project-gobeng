"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCounterVisible, setIsCounterVisible] = useState(false);

  const heroSlides = [
    {
      title: "Solusi Bengkel Cerdas",
      subtitle: "Dimanapun Anda Berada",
      description:
        "Nikmati layanan bengkel terpercaya dengan teknologi modern. Reservasi mudah, pelayanan profesional, kepuasan terjamin.",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Reservasi Sekarang",
      ctaLink: "/login",
    },
    {
      title: "Home Service Premium",
      subtitle: "Bengkel Datang ke Rumah Anda",
      description:
        "Tidak perlu repot ke bengkel, teknisi profesional kami siap datang ke lokasi Anda dengan peralatan lengkap.",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Pesan Home Service",
      ctaLink: "/login",
    },
    {
      title: "Layanan Darurat 24/7",
      subtitle: "Bantuan Kapanpun Anda Butuhkan",
      description:
        "Mobil mogok? Ban bocor? Jangan khawatir, layanan darurat kami siap membantu 24 jam sehari, 7 hari seminggu.",
      image: "/placeholder.svg?height=600&width=1200",
      cta: "Hubungi Darurat",
      ctaLink: "/contact",
    },
  ];

  const features = [
    {
      icon: "📅",
      title: "Reservasi Layanan",
      description:
        "Booking servis mudah dan cepat melalui aplikasi atau website",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: "🏠",
      title: "Home Service",
      description:
        "Layanan servis langsung di rumah Anda tanpa perlu ke bengkel",
      color: "from-green-500 to-green-600",
    },
    {
      icon: "🚨",
      title: "Darurat 24 Jam",
      description:
        "Bantuan darurat kapan saja dan dimana saja Anda membutuhkan",
      color: "from-red-500 to-red-600",
    },
  ];

  const services = [
    { name: "Ganti Oli", icon: "🔧", price: "Mulai Rp 150.000", popular: true },
    { name: "Tune Up", icon: "⚙️", price: "Mulai Rp 300.000", popular: false },
    { name: "Servis AC", icon: "❄️", price: "Mulai Rp 200.000", popular: true },
    { name: "Ganti Ban", icon: "🛞", price: "Mulai Rp 500.000", popular: false },
    {
      name: "Balancing",
      icon: "⚖️",
      price: "Mulai Rp 250.000",
      popular: false,
    },
    { name: "Spooring", icon: "🔄", price: "Mulai Rp 350.000", popular: false },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      text: "Pelayanan sangat memuaskan, teknisi profesional dan harga terjangkau. Saya tidak perlu khawatir lagi tentang perawatan mobil saya.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Sari Dewi",
      role: "Ibu Rumah Tangga",
      text: "Home service nya sangat membantu, tidak perlu repot ke bengkel. Teknisi datang tepat waktu dan sangat ramah.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Ahmad Rahman",
      role: "Karyawan Swasta",
      text: "Aplikasi mudah digunakan, booking servis jadi lebih praktis. Notifikasi pengingat servis berkala juga sangat membantu.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const stats = [
    { value: 50, label: "Bengkel Mitra", suffix: "+", icon: "🏪" },
    { value: 10000, label: "Pelanggan Puas", suffix: "+", icon: "😊" },
    { value: 25000, label: "Layanan Selesai", suffix: "+", icon: "✅" },
    { value: 4.8, label: "Rating Kepuasan", suffix: "/5", icon: "⭐" },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Counter animation
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsCounterVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
  };

  const AnimatedCounter = ({ value, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isCounterVisible) {
        const timer = setInterval(() => {
          setCount((prev) => {
            const increment = value > 100 ? Math.ceil(value / 50) : 1;
            if (prev < value) {
              return Math.min(prev + increment, value);
            }
            return value;
          });
        }, 50);
        return () => clearInterval(timer);
      }
    }, [isCounterVisible, value]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section with Slider */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center"></div>
        </div>

        <div className="relative h-[700px] md:h-[800px]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <div className="relative container mx-auto px-4 h-full flex items-center z-10">
                <div className="max-w-4xl animate-fade-in">
                  <div className="inline-block bg-orange-800/30 dark:bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full text-orange-200 dark:text-orange-300 text-sm font-medium mb-4">
                    {slide.subtitle}
                  </div>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 text-gray-200 dark:text-gray-300 leading-relaxed max-w-3xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={slide.ctaLink}
                      className="inline-block bg-gradient-gold text-orange-900 px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 btn-hover"
                    >
                      {slide.cta}
                    </Link>
                    <Link
                      to="/about"
                      className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                    >
                      Pelajari Lebih Lanjut
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110 group"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 z-20 hover:scale-110 group"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-yellow-400 scale-125"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Info Cards */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-6 -mt-24">
            {[
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Lokasi Strategis",
                description: "50+ bengkel mitra di seluruh Indonesia",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Teknisi Profesional",
                description: "Teknisi berpengalaman & bersertifikat",
                color: "from-green-500 to-green-600",
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                title: "Dukungan 24/7",
                description: "Customer service siap membantu kapanpun",
                color: "from-purple-500 to-purple-600",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 flex items-center card-hover transition-all duration-300 animate-slide-up border border-white/20 dark:border-gray-700/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`bg-gradient-to-r ${card.color} p-4 rounded-2xl mr-6 shadow-lg`}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={card.icon}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 text-xl mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              Layanan Unggulan
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Mengapa Memilih GoBeng?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              GoBeng menyediakan berbagai layanan bengkel terbaik untuk
              memastikan kendaraan Anda selalu dalam kondisi prima dengan
              teknologi terdepan
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-10 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-600 hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`bg-gradient-to-r ${feature.color} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  <span className="text-5xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              Layanan Profesional
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Layanan Bengkel Terlengkap
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Berbagai layanan bengkel berkualitas dengan harga terjangkau untuk
              semua jenis kendaraan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500 relative ${
                  service.popular
                    ? "ring-2 ring-orange-400 ring-opacity-50"
                    : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-gold text-orange-900 px-3 py-1 rounded-full text-xs font-bold">
                      POPULER
                    </span>
                  </div>
                )}
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-lg">
                  {service.name}
                </h3>
                <p className="text-orange-600 dark:text-orange-400 text-sm font-medium bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-full">
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/promo"
              className="inline-flex items-center text-orange-600 dark:text-orange-400 font-semibold hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200 text-xl group"
            >
              Lihat semua layanan & promo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2 group-hover:translate-x-2 transition-transform duration-200"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              Proses Mudah
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Cara Kerja GoBeng
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Proses mudah dan cepat untuk mendapatkan layanan bengkel terbaik
              hanya dalam 4 langkah sederhana
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Pilih Layanan",
                description:
                  "Pilih layanan bengkel yang Anda butuhkan dari berbagai pilihan tersedia",
                icon: "📱",
                color: "from-blue-500 to-blue-600",
              },
              {
                step: 2,
                title: "Tentukan Jadwal",
                description:
                  "Pilih waktu yang sesuai dengan jadwal Anda, tersedia 24/7",
                icon: "🗓️",
                color: "from-green-500 to-green-600",
              },
              {
                step: 3,
                title: "Konfirmasi Pesanan",
                description:
                  "Konfirmasi pesanan dan tunggu teknisi profesional datang",
                icon: "✅",
                color: "from-purple-500 to-purple-600",
              },
              {
                step: 4,
                title: "Layanan Selesai",
                description:
                  "Nikmati kendaraan Anda yang sudah terawat dengan sempurna",
                icon: "🚗",
                color: "from-orange-500 to-orange-600",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative group">
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/4 right-0 w-full h-1 bg-gradient-to-r from-orange-200 to-orange-300 dark:from-orange-800 dark:to-orange-700 z-0">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 border-t-2 border-r-2 border-orange-300 dark:border-orange-600"></div>
                  </div>
                )}
                <div
                  className={`bg-gradient-to-r ${item.color} w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                >
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-12 h-12 rounded-full flex items-center justify-center mx-auto absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 font-bold text-lg shadow-lg border-4 border-white dark:border-gray-900">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 mt-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="stats-section"
        className="py-24 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white transition-colors duration-200 relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-800/30 dark:bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full text-orange-200 dark:text-orange-300 text-sm font-medium mb-4">
              Pencapaian Kami
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dipercaya Ribuan Pelanggan
            </h2>
            <p className="text-orange-200 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Angka-angka yang membuktikan kualitas dan kepercayaan pelanggan
              terhadap layanan GoBeng
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-orange-800/20 dark:bg-gray-700/20 backdrop-blur-sm p-10 rounded-3xl border border-orange-700/30 dark:border-gray-600/30 hover:bg-orange-700/30 dark:hover:bg-gray-600/30 transition-all duration-300 card-hover group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-5xl md:text-6xl font-bold mb-4 text-yellow-400">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-orange-200 dark:text-gray-300 text-xl font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-4 py-2 rounded-full text-orange-600 dark:text-orange-400 text-sm font-medium mb-4">
              Testimoni Pelanggan
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
              Pengalaman nyata dari pelanggan yang telah menggunakan layanan
              GoBeng dan merasakan kepuasan maksimal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-10 rounded-3xl shadow-lg card-hover transition-all duration-300 border border-gray-100 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-500 group"
              >
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-8 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover border-4 border-orange-200 dark:border-orange-700 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-xl">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white transition-colors duration-200 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange-800/30 dark:bg-gray-800/30 backdrop-blur-sm px-4 py-2 rounded-full text-orange-200 dark:text-orange-300 text-sm font-medium mb-6">
              Bergabung Sekarang
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Siap Merasakan Layanan Terbaik?
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-orange-200 dark:text-gray-300 leading-relaxed">
              Bergabunglah dengan ribuan pelanggan yang telah merasakan
              kemudahan dan kualitas layanan GoBeng. Dapatkan pengalaman bengkel
              yang tak terlupakan!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/login"
                className="bg-gradient-gold text-orange-900 px-10 py-5 rounded-2xl text-xl font-semibold hover:shadow-2xl transition-all duration-300 btn-hover"
              >
                Mulai Sekarang
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="text-orange-200 dark:text-gray-300">
                <div className="text-3xl mb-2">🔒</div>
                <p className="text-sm">Aman & Terpercaya</p>
              </div>
              <div className="text-orange-200 dark:text-gray-300">
                <div className="text-3xl mb-2">⚡</div>
                <p className="text-sm">Layanan Cepat</p>
              </div>
              <div className="text-orange-200 dark:text-gray-300">
                <div className="text-3xl mb-2">💎</div>
                <p className="text-sm">Kualitas Premium</p>
              </div>
              <div className="text-orange-200 dark:text-gray-300">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-sm">Hasil Memuaskan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
