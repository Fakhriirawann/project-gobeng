const Promo = () => {
  const promos = [
    {
      id: 1,
      title: "Diskon Ganti Oli 30%",
      description:
        "Hemat hingga 30% untuk layanan ganti oli semua jenis kendaraan",
      discount: "30%",
      validUntil: "31 Januari 2024",
      terms: [
        "Berlaku untuk semua jenis oli",
        "Minimal pembelian Rp 100.000",
        "Tidak dapat digabung dengan promo lain",
      ],
      image: "/assets/oli.jpg",
    },
    {
      id: 2,
      title: "Paket Tune Up Hemat",
      description:
        "Paket lengkap tune up dengan harga spesial untuk pelanggan setia",
      discount: "25%",
      validUntil: "15 Februari 2024",
      terms: [
        "Termasuk ganti oli, filter, dan busi",
        "Berlaku untuk mobil dan motor",
        "Garansi 6 bulan",
      ],
      image: "/assets/TuneUp.jpg",
    },
    {
      id: 3,
      title: "Home Service Gratis Ongkir",
      description:
        "Nikmati layanan home service tanpa biaya tambahan ongkos kirim",
      discount: "FREE",
      validUntil: "28 Februari 2024",
      terms: [
        "Radius maksimal 10 km",
        "Minimal order Rp 200.000",
        "Berlaku untuk area Jabodetabek",
      ],
      image: "/assets/HomeService.jpg",
    },
    {
      id: 4,
      title: "Member Baru Cashback 50%",
      description:
        "Cashback hingga 50% untuk member baru yang mendaftar hari ini",
      discount: "50%",
      validUntil: "31 Maret 2024",
      terms: [
        "Maksimal cashback Rp 150.000",
        "Berlaku untuk transaksi pertama",
        "Cashback dalam bentuk poin",
      ],
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  const packages = [
    {
      name: "Paket Basic",
      price: "Rp 299.000",
      originalPrice: "Rp 399.000",
      services: [
        "Ganti Oli",
        "Cek Tekanan Ban",
        "Cek Aki",
        "Cek Lampu",
        "Cek Rem",
      ],
      popular: false,
    },
    {
      name: "Paket Premium",
      price: "Rp 599.000",
      originalPrice: "Rp 799.000",
      services: ["Ganti Oli", "Tune Up", "Servis AC", "Cek Rem", "Cuci Mobil"],
      popular: true,
    },
    {
      name: "Paket Ultimate",
      price: "Rp 899.000",
      originalPrice: "Rp 1.199.000",
      services: [
        "Semua layanan Premium",
        "Ganti Filter",
        "Balancing Ban",
        "Spooring",
        "Detailing",
      ],
      popular: false,
    },
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Promo & Penawaran Spesial</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Dapatkan penawaran terbaik untuk layanan perawatan kendaraan Anda.
            Hemat lebih banyak dengan promo eksklusif kami!
          </p>
        </div>
      </section>

      {/* Current Promos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">
            Promo Berlangsung
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {promos.map((promo) => (
              <div
                key={promo.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border"
              >
                <img
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-orange-400">
                      {promo.title}
                    </h3>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {promo.discount} OFF
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">
                      Berlaku hingga: {promo.validUntil}
                    </p>
                    <div className="text-sm text-gray-600">
                      <p className="font-medium mb-1">Syarat & Ketentuan:</p>
                      <ul className="list-disc list-inside space-y-1">
                        {promo.terms.map((term, index) => (
                          <li key={index}>{term}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button className="w-full bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-800 transition duration-200">
                    Gunakan Promo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">
            Paket Layanan Hemat
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 relative ${
                  pkg.popular ? "border-2 border-orange-400" : "border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                      TERPOPULER
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-green-600">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {pkg.originalPrice}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      {service}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-lg transition duration-200 ${
                    pkg.popular
                      ? "bg-orange-400 text-white hover:bg-orange-800"
                      : "bg-orange-400 text-white hover:bg-orange-800"
                  }`}
                >
                  Pilih Paket
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-orange-400 text-white -mb-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Jangan Lewatkan Promo Terbaru!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Daftarkan email Anda untuk mendapatkan notifikasi promo dan
            penawaran eksklusif
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 ring-2 ring-white focus:ring-orange-600"
            />
            <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-orange-300 transition duration-200">
              Daftar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promo;
