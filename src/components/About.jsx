const About = () => {
  const team = [
    {
      name: "Ahmad Wijaya",
      position: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      description: "Berpengalaman 15 tahun di industri otomotif",
    },
    {
      name: "Sari Indah",
      position: "CTO",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert dalam teknologi dan sistem informasi",
    },
    {
      name: "Budi Santoso",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      description: "Mengawasi operasional seluruh bengkel mitra",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Profesional",
      description: "Layanan berkualitas tinggi dengan standar internasional",
    },
    {
      icon: "⚡",
      title: "Cepat & Efisien",
      description: "Proses servis yang cepat tanpa mengurangi kualitas",
    },
    {
      icon: "💎",
      title: "Terpercaya",
      description: "Kepercayaan pelanggan adalah prioritas utama kami",
    },
    {
      icon: "🔧",
      title: "Teknologi Modern",
      description: "Menggunakan peralatan dan teknologi terdepan",
    },
  ];

  return (
    <div className="py-16">
      {/* Hero Section */}
     {/* Tentang GoBeng */}
<section className="relative bg-orange-400 text-white py-20 overflow-hidden">
  <div className="absolute inset-0 bg-[url('/assets/bg-pattern.svg')] opacity-10 bg-repeat"></div>
  <div className="container mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
      Tentang <span className="underline decoration-white/50">GoBeng</span>
    </h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto text-orange-100 animate-fade-in-up">
      Platform bengkel digital yang menghubungkan Anda dengan bengkel terpercaya di seluruh Indonesia. Kami hadir untuk memberikan pengalaman layanan otomotif yang cepat, mudah, dan terpercaya.
    </p>
  </div>
</section>

{/* Visi & Misi */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-in-left">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
          Visi Kami
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Menjadi platform bengkel digital terdepan di Indonesia yang memberikan solusi perawatan kendaraan yang mudah, cepat, dan terpercaya.
        </p>
      </div>
      <div className="animate-fade-in-right">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-4">
          Misi Kami
        </h2>
        <ul className="text-gray-700 text-lg space-y-4 list-inside list-disc">
          <li>Menyediakan layanan bengkel berkualitas tinggi</li>
          <li>Mengintegrasikan teknologi dalam industri otomotif</li>
          <li>Membangun jaringan bengkel mitra terpercaya</li>
          <li>Memberikan kemudahan akses layanan 24/7</li>
        </ul>
      </div>
    </div>
  </div>
</section>

{/* Nilai-Nilai */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-400 mb-12">
      Nilai-Nilai Kami
    </h2>
    <div className="grid md:grid-cols-4 gap-8 text-center">
      {values.map((value, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center text-3xl text-orange-500">
            {value.icon}
          </div>
          <h3 className="text-xl font-semibold text-orange-400 mb-2">
            {value.title}
          </h3>
          <p className="text-gray-600">{value.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">
            Tim Kami
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-orange-400 mb-2">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-orange-400 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-orange-200">Bengkel Mitra</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-orange-200">Pelanggan Puas</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">25,000+</h3>
              <p className="text-orange-200">Layanan Selesai</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">4.8/5</h3>
              <p className="text-orange-200">Rating Kepuasan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
