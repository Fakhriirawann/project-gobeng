"use client";

import { useState, useEffect } from "react";

const Promo = () => {
  const [activeTab, setActiveTab] = useState("current");
  const [timeLeft, setTimeLeft] = useState({});

  const promos = [
    {
      id: 1,
      title: "Diskon Ganti Oli 30%",
      description:
        "Hemat hingga 30% untuk layanan ganti oli semua jenis kendaraan dengan oli berkualitas premium",
      discount: "30%",
      validUntil: "31 Januari 2024",
      originalPrice: "Rp 200.000",
      discountedPrice: "Rp 140.000",
      terms: [
        "Berlaku untuk semua jenis oli premium",
        "Minimal pembelian Rp 100.000",
        "Tidak dapat digabung dengan promo lain",
        "Berlaku di semua bengkel mitra",
      ],
      image: "/placeholder.svg?height=200&width=300",
      category: "Service",
      popular: true,
    },
    {
      id: 2,
      title: "Paket Tune Up Hemat",
      description:
        "Paket lengkap tune up dengan harga spesial untuk pelanggan setia, termasuk semua komponen",
      discount: "25%",
      validUntil: "15 Februari 2024",
      originalPrice: "Rp 400.000",
      discountedPrice: "Rp 300.000",
      terms: [
        "Termasuk ganti oli, filter, dan busi",
        "Berlaku untuk mobil dan motor",
        "Garansi 6 bulan",
        "Free konsultasi mekanik",
      ],
      image: "/placeholder.svg?height=200&width=300",
      category: "Package",
      popular: false,
    },
    {
      id: 3,
      title: "Home Service Gratis Ongkir",
      description:
        "Nikmati layanan home service tanpa biaya tambahan ongkos kirim untuk kenyamanan maksimal",
      discount: "FREE",
      validUntil: "28 Februari 2024",
      originalPrice: "Rp 50.000",
      discountedPrice: "GRATIS",
      terms: [
        "Radius maksimal 10 km dari bengkel",
        "Minimal order Rp 200.000",
        "Berlaku untuk area Jabodetabek",
        "Booking H-1 untuk slot terbaik",
      ],
      image: "/placeholder.svg?height=200&width=300",
      category: "Service",
      popular: true,
    },
    {
      id: 4,
      title: "Member Baru Cashback 50%",
      description:
        "Cashback hingga 50% untuk member baru yang mendaftar hari ini, kesempatan terbatas!",
      discount: "50%",
      validUntil: "31 Maret 2024",
      originalPrice: "Rp 300.000",
      discountedPrice: "Rp 150.000",
      terms: [
        "Maksimal cashback Rp 150.000",
        "Berlaku untuk transaksi pertama",
        "Cashback dalam bentuk poin",
        "Poin dapat digunakan untuk transaksi berikutnya",
      ],
      image: "/placeholder.svg?height=200&width=300",
      category: "Membership",
      popular: false,
    },
  ];

  const packages = [
    {
      name: "Paket Basic",
      price: "Rp 299.000",
      originalPrice: "Rp 399.000",
      services: [
        "Ganti Oli Premium",
        "Cek Tekanan Ban",
        "Cek Aki & Kelistrikan",
        "Cek Lampu & Klakson",
      ],
      popular: false,
      savings: "Rp 100.000",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Paket Premium",
      price: "Rp 599.000",
      originalPrice: "Rp 799.000",
      services: [
        "Semua layanan Basic",
        "Tune Up Lengkap",
        "Servis AC",
        "Cek Rem & Kopling",
        "Cuci Mobil Premium",
      ],
      popular: true,
      savings: "Rp 200.000",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Paket Ultimate",
      price: "Rp 899.000",
      originalPrice: "Rp 1.199.000",
      services: [
        "Semua layanan Premium",
        "Ganti Filter Lengkap",
        "Balancing & Spooring",
        "Detailing Interior",
        "Garansi 1 Tahun",
      ],
      popular: false,
      savings: "Rp 300.000",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const flashSales = [
    {
      title: "Flash Sale Ganti Ban",
      originalPrice: "Rp 800.000",
      salePrice: "Rp 600.000",
      discount: "25%",
      timeLeft: "02:30:45",
      stock: 15,
      sold: 8,
    },
    {
      title: "Servis AC Kilat",
      originalPrice: "Rp 250.000",
      salePrice: "Rp 175.000",
      discount: "30%",
      timeLeft: "01:15:20",
      stock: 20,
      sold: 12,
    },
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const newTimeLeft = {};

      flashSales.forEach((sale, index) => {
        const [hours, minutes, seconds] = sale.timeLeft.split(":").map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;

        if (totalSeconds > 0) {
          const h = Math.floor(totalSeconds / 3600);
          const m = Math.floor((totalSeconds % 3600) / 60);
          const s = totalSeconds % 60;
          newTimeLeft[index] = `${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
        } else {
          newTimeLeft[index] = "00:00:00";
        }
      });

      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat"></div>
        </div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="inline-block bg-orange-800/30 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full text-orange-200 dark:text-orange-300 text-sm font-medium mb-6">
            Penawaran Terbatas
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Promo & <span className="text-yellow-400">Penawaran</span> Spesial
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-orange-100 dark:text-gray-300">
            Dapatkan penawaran terbaik untuk layanan perawatan kendaraan Anda.
            Hemat lebih banyak dengan promo eksklusif yang tersedia terbatas!
          </p>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="py-16 bg-red-600 dark:bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
              <span className="mr-3">⚡</span>
              Flash Sale
              <span className="ml-3">⚡</span>
            </h2>
            <p className="text-red-100 text-lg">
              Penawaran kilat dengan diskon fantastis!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {flashSales.map((sale, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{sale.title}</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl font-bold text-yellow-400">
                        {sale.salePrice}
                      </span>
                      <span className="text-lg line-through text-red-200">
                        {sale.originalPrice}
                      </span>
                      <span className="bg-yellow-400 text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                        -{sale.discount}
                      </span>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-mono font-bold">
                      {timeLeft[index] || sale.timeLeft}
                    </div>
                    <div className="text-sm text-red-200">Berakhir dalam</div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Terjual: {sale.sold}</span>
                    <span>Sisa: {sale.stock - sale.sold}</span>
                  </div>
                  <div className="w-full bg-red-800 rounded-full h-3">
                    <div
                      className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(sale.sold / sale.stock) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <button className="w-full bg-yellow-400 text-red-600 py-3 rounded-xl font-bold hover:bg-yellow-300 transition-colors duration-200">
                  Beli Sekarang
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-2 shadow-lg">
              <button
                onClick={() => setActiveTab("current")}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === "current"
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                }`}
              >
                Promo Berlangsung
              </button>
              <button
                onClick={() => setActiveTab("packages")}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === "packages"
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
                }`}
              >
                Paket Hemat
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Promos */}
      {activeTab === "current" && (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
                Promo Berlangsung
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
                Jangan lewatkan kesempatan emas untuk mendapatkan layanan
                berkualitas dengan harga terbaik
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {promos.map((promo) => (
                <div
                  key={promo.id}
                  className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 card-hover"
                >
                  <div className="relative">
                    <img
                      src={promo.image || "/placeholder.svg"}
                      alt={promo.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          promo.category === "Service"
                            ? "bg-blue-500"
                            : promo.category === "Package"
                            ? "bg-green-500"
                            : "bg-purple-500"
                        } text-white`}
                      >
                        {promo.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                        {promo.discount} OFF
                      </span>
                    </div>
                    {promo.popular && (
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-yellow-400 text-orange-900 px-3 py-1 rounded-full text-sm font-bold">
                          🔥 POPULER
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                      {promo.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {promo.description}
                    </p>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <span className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                          {promo.discountedPrice}
                        </span>
                        <span className="text-lg line-through text-gray-500 ml-3">
                          {promo.originalPrice}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Berlaku hingga:
                        </div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">
                          {promo.validUntil}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="font-medium mb-3 text-gray-800 dark:text-gray-200">
                        Syarat & Ketentuan:
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        {promo.terms.map((term, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-orange-500 mr-2 mt-0.5">
                              ✓
                            </span>
                            {term}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="w-full bg-gradient-orange text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 btn-hover">
                      Gunakan Promo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Packages */}
      {activeTab === "packages" && (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-6">
                Paket Layanan Hemat
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed">
                Pilih paket yang sesuai dengan kebutuhan kendaraan Anda dan
                nikmati penghematan maksimal
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 transition-all duration-300 card-hover border-2 ${
                    pkg.popular
                      ? "border-orange-400 scale-105"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-gold text-orange-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        🏆 TERPOPULER
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    >
                      <span className="text-3xl text-white">🔧</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                      {pkg.name}
                    </h3>
                    <div className="mb-3">
                      <span className="text-4xl font-bold text-orange-600 dark:text-orange-400">
                        {pkg.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through ml-3">
                        {pkg.originalPrice}
                      </span>
                    </div>
                    <div className="inline-block bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      Hemat {pkg.savings}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.services.map((service, serviceIndex) => (
                      <li
                        key={serviceIndex}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-orange-500 mr-3 text-lg">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 btn-hover ${
                      pkg.popular
                        ? "bg-gradient-gold text-orange-900 shadow-lg"
                        : "bg-gradient-orange text-white"
                    }`}
                  >
                    Pilih Paket
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white transition-colors duration-200 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-orange-800/30 dark:bg-gray-800/30 backdrop-blur-sm px-6 py-3 rounded-full text-orange-200 dark:text-orange-300 text-sm font-medium mb-6">
              Newsletter Eksklusif
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Jangan Lewatkan Promo Terbaru!
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto text-orange-200 dark:text-gray-300 leading-relaxed">
              Daftarkan email Anda untuk mendapatkan notifikasi promo dan
              penawaran eksklusif langsung di inbox Anda
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 bg-transparent px-4 py-3 text-white placeholder-orange-200 focus:outline-none"
                />
                <button className="bg-gradient-gold text-orange-900 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 btn-hover">
                  Daftar
                </button>
              </div>
              <p className="text-orange-200 dark:text-gray-400 text-sm mt-4">
                * Kami menghargai privasi Anda dan tidak akan spam
              </p>
            </div>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="font-semibold mb-2">Promo Eksklusif</h3>
                <p className="text-orange-200 dark:text-gray-300 text-sm">
                  Dapatkan akses ke promo khusus subscriber
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold mb-2">Update Tercepat</h3>
                <p className="text-orange-200 dark:text-gray-300 text-sm">
                  Jadilah yang pertama tahu promo terbaru
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-semibold mb-2">Hemat Maksimal</h3>
                <p className="text-orange-200 dark:text-gray-300 text-sm">
                  Tips dan trik untuk menghemat biaya servis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;
