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
      image: "/assets/bengrkt ceradas.jpg",
      cta: "Reservasi Sekarang",
      ctaLink: "/login",
    },
    {
      title: "Home Service Premium",
      subtitle: "Bengkel Datang ke Rumah Anda",
      description:
        "Tidak perlu repot ke bengkel, teknisi profesional kami siap datang ke lokasi Anda dengan peralatan lengkap.",
      image: "/assets/Home.jpg",
      cta: "Pesan Home Service",
      ctaLink: "/login",
    },
    {
      title: "Layanan Darurat 24/7",
      subtitle: "Bantuan Kapanpun Anda Butuhkan",
      description:
        "Mobil mogok? Ban bocor? Jangan khawatir, layanan darurat kami siap membantu 24 jam sehari, 7 hari seminggu.",
      image: "/assets/24.jpg",
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
    },
    {
      icon: "🏠",
      title: "Home Service",
      description:
        "Layanan servis langsung di rumah Anda tanpa perlu ke bengkel",
    },
    {
      icon: "🚨",
      title: "Darurat 24 Jam",
      description:
        "Bantuan darurat kapan saja dan dimana saja Anda membutuhkan",
    },
  ];

  const services = [
    { name: "Ganti Oli", icon: "🔧", price: "Mulai Rp 150.000" },
    { name: "Tune Up", icon: "⚙️", price: "Mulai Rp 300.000" },
    { name: "Servis AC", icon: "❄️", price: "Mulai Rp 200.000" },
    { name: "Ganti Ban", icon: "🛞", price: "Mulai Rp 500.000" },
    { name: "Balancing", icon: "⚖️", price: "Mulai Rp 250.000" },
    { name: "Spooring", icon: "🔄", price: "Mulai Rp 350.000" },
  ];

  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pengusaha",
      text: "Pelayanan sangat memuaskan, teknisi profesional dan harga terjangkau. Saya tidak perlu khawatir lagi tentang perawatan mobil saya.",
      rating: 5,
      image: "/assets/budi.jpeg",
    },
    {
      name: "Sari Dewi",
      role: "Ibu Rumah Tangga",
      text: "Home service nya sangat membantu, tidak perlu repot ke bengkel. Teknisi datang tepat waktu dan sangat ramah.",
      rating: 5,
      image: "/assets/sari.jpeg",
    },
    {
      name: "Ahmad Rahman",
      role: "Karyawan Swasta",
      text: "Aplikasi mudah digunakan, booking servis jadi lebih praktis. Notifikasi pengingat servis berkala juga sangat membantu.",
      rating: 4,
      image: "/assets/ahmad.jpeg",
    },
  ];

  const stats = [
    { value: 50, label: "Bengkel Mitra", suffix: "+" },
    { value: 10000, label: "Pelanggan Puas", suffix: "+" },
    { value: 25000, label: "Layanan Selesai", suffix: "+" },
    { value: 4.8, label: "Rating Kepuasan", suffix: "/5" },
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
    <div>
      {/* Hero Section with Slider */}
      <section className="relative bg-orange-400 text-white overflow-hidden">
        <div className="relative h-[600px] md:h-[700px]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-90"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-900/80 to-transparent"></div>
              <div className="relative container mx-auto px-4 h-full flex items-center z-10 -mt-20">
                <div className="max-w-2xl">
                  <h2 className="text-xl md:text-2xl font-medium mb-2 text-orange-300 animate-fade-in">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200 animate-fade-in">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.ctaLink}
                    className="bg-orange-400 text-orange-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-300 transition duration-300 inline-block animate-fade-in btn-hover"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Info Cards */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-6 -mt-48 pb-6">
            <div className="bg-white rounded-lg shadow-xl p-6 flex items-center card-hover">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg
                  className="w-8 h-8 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Lokasi Strategis
                </h3>
                <p className="text-gray-600 text-sm">
                  50+ bengkel mitra di seluruh Indonesia
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6 flex items-center card-hover">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg
                  className="w-8 h-8 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Teknisi Profesional
                </h3>
                <p className="text-gray-600 text-sm">
                  Teknisi berpengalaman & bersertifikat
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6 flex items-center card-hover">
              <div className="bg-orange-100 p-3 rounded-full mr-4">
                <svg
                  className="w-8 h-8 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Dukungan 24/7</h3>
                <p className="text-gray-600 text-sm">
                  Customer service siap membantu kapanpun
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              GoBeng menyediakan berbagai layanan bengkel terbaik untuk
              memastikan kendaraan Anda selalu dalam kondisi prima
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl border border-gray-200 hover:shadow-xl transition duration-300 bg-white card-hover"
              >
                <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-orange-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
              Layanan Bengkel
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai layanan bengkel berkualitas dengan harga terjangkau untuk
              semua jenis kendaraan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300 card-hover"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-orange-400 text-sm font-medium">
                  {service.price}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/promo"
              className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-700 transition duration-200"
            >
              Lihat semua layanan
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
              Cara Kerja GoBeng
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Proses mudah dan cepat untuk mendapatkan layanan bengkel terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Pilih Layanan",
                description: "Pilih layanan bengkel yang Anda butuhkan",
                icon: "📱",
              },
              {
                step: 2,
                title: "Tentukan Jadwal",
                description: "Pilih waktu yang sesuai dengan jadwal Anda",
                icon: "🗓️",
              },
              {
                step: 3,
                title: "Konfirmasi Pesanan",
                description: "Konfirmasi pesanan dan tunggu teknisi datang",
                icon: "✅",
              },
              {
                step: 4,
                title: "Layanan Selesai",
                description: "Nikmati kendaraan Anda yang sudah terawat",
                icon: "🚗",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/4 right-0 w-full h-1 bg-orange-200 z-0">
                    <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 border-t-2 border-r-2 border-orange-200"></div>
                  </div>
                )}
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <div className="bg-orange-400 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-orange-400 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dipercaya Ribuan Pelanggan
            </h2>
            <p className="text-orange-200 max-w-2xl mx-auto">
              Angka-angka yang membuktikan kualitas dan kepercayaan pelanggan
              terhadap layanan GoBeng
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-orange-800/50 p-6 rounded-lg">
                <h3 className="text-4xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-orange-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pengalaman nyata dari pelanggan yang telah menggunakan layanan
              GoBeng
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-xl ${
                        i < testimonial.rating
                          ? "text-orange-400"
                          : "text-gray-300"
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-400 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Merasakan Layanan Terbaik?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-200">
            Bergabunglah dengan ribuan pelanggan yang telah merasakan kemudahan
            dan kualitas layanan GoBeng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-orange-300 text-orange-00 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-300 transition duration-300 btn-hover"
            >
              Mulai Sekarang
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-orange-400 transition duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
