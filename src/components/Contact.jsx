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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const locations = [
    {
      name: "Bengkel Mobil Pemuda (BMP)",
      image:"/assets/BMP.jpeg",
      address: "Lrg. jambu No.669, Pipa Jaya, Kec. Kemuning, Kota Palembang, Sumatera Selatan 30961",
      phone: "0813-6712-2511",
      hours: "Senin - Minggu: 08:00 - 20:00",
      services: ["Servis Umum", "AC Service", "Darurat 24 Jam"],
    },
    {
      name: "Cemerlang Racing Motor",
      image:"/assets/cemerlang-racing.jpeg",
      address: " Jl. R.A. Abusamah, Suka Bangun, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961",
      phone: " 0812-8265-4110",
      hours: "Senin - Minggu: 08:00 - 20:00",
      services: ["Servis Umum", "Tune Up Specialist", "Home Service"],
    },
    {
      name: "Jaya Abadi Motor Sport",
      image:"/assets/jaya-abadi.jpeg",
      address: " Jl. H. Abdul Rozak, Bukit Sangkal, Kec. Kalidoni, Kota Palembang, Sumatera Selatan 30163",
      phone: "(021) 3456-7890",
      hours: "Senin - Minggu: 08:00 - 20:00",
      services: ["Servis Umum", "Body Repair", "Detailing"],
    },
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
      <section className="bg-orange-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Kami siap membantu Anda 24/7. Hubungi kami melalui berbagai channel
            yang tersedia atau kunjungi langsung bengkel mitra terdekat.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Alamat
              </h3>
              <p className="text-gray-600">
                Jl. Raya Bengkel No. 123
                <br />
                Jakarta, Indonesia
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Telepon
              </h3>
              <p className="text-gray-600">
                (021) 1234-5678
                <br />
                0800-1234-5678
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Email
              </h3>
              <p className="text-gray-600">
                info@gobeng.com
                <br />
                support@gobeng.com
              </p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Jam Operasional
              </h3>
              <p className="text-gray-600">
                24/7 Service
                <br />
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">
                Kirim Pesan
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tulis pesan Anda di sini..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-400 text-white py-3 px-4 rounded-lg hover:bg-orange-800 transition duration-200 font-medium"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-orange-400 mb-6">
                Lokasi Kami
              </h2>
              <div className="bg-gray-200 h-64 rounded-lg mb-6 flex items-center justify-center">
                <p className="text-gray-600">Google Maps Integration</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">📍</span>
                  <div>
                    <p className="font-medium">Kantor Pusat</p>
                    <p className="text-gray-600">
                      Jl. Raya Bengkel No. 123, Jakarta
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">🚗</span>
                  <div>
                    <p className="font-medium">Akses Transportasi</p>
                    <p className="text-gray-600">
                      Dekat dengan stasiun MRT dan halte TransJakarta
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-orange-400 mt-1">🅿️</span>
                  <div>
                    <p className="font-medium">Parkir</p>
                    <p className="text-gray-600">
                      Area parkir luas tersedia gratis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
  <section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold text-gray-800 mb-3">
        Bengkel Mitra Kami
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto">
        Temukan bengkel terpercaya dengan layanan profesional di dekat Anda
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {locations.map((location, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out overflow-hidden"
        >
          <div className="h-56 w-full">
            <img
              src={location.image}
              alt={`Foto ${location.name}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {location.name}
            </h3>
            <div className="text-sm text-gray-500 space-y-2 mb-4">
              <div className="flex gap-2">
                <span>📍</span>
                <p>{location.address}</p>
              </div>
              <div className="flex gap-2">
                <span>📞</span>
                <p>{location.phone}</p>
              </div>
              <div className="flex gap-2">
                <span>🕒</span>
                <p>{location.hours}</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Layanan:</p>
              <div className="flex flex-wrap gap-2">
                {location.services.map((service, serviceIndex) => (
                  <span
                    key={serviceIndex}
                    className="bg-orange-50 text-orange-600 text-xs px-3 py-1 rounded-full border border-orange-100"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition font-medium text-sm">
              Reservasi
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Layanan Darurat 24 Jam</h2>
          <p className="text-xl mb-8">
            Butuh bantuan segera? Hubungi layanan darurat kami yang siap 24/7
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="tel:08001234567"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-200"
            >
              📞 0800-1234-567
            </a>
            <a
              href="https://wa.me/628001234567"
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition duration-200"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
