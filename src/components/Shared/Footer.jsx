import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Twitter",
      icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
      href: "#",
    },
    {
      name: "Facebook",
      icon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
      href: "#",
    },
    {
      name: "Instagram",
      icon: "M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z",
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      href: "#",
    },
  ];

  const quickLinks = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Promo", href: "/promo" },
    { name: "FAQ", href: "/faq" },
  ];

  const services = [
    "Servis Berkala",
    "Perbaikan Mesin",
    "Home Service",
    "Darurat 24 Jam",
    "Tune Up",
    "Ganti Oli",
  ];

  const contactInfo = [
    { icon: "📍", text: "Jl. Raya Bengkel No. 123, Jakarta" },
    { icon: "📞", text: "(021) 1234-5678" },
    { icon: "📧", text: "info@gobeng.com" },
    { icon: "🕒", text: "24/7 Service" },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white transition-colors duration-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-repeat opacity-20"></div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-gradient-gold rounded-2xl flex items-center justify-center shadow-xl">
                <span className="text-orange-900 font-bold text-2xl">GB</span>
              </div>
              <div>
                <span className="text-2xl font-bold">GoBeng</span>
                <div className="text-orange-200 text-sm">Bengkel Cerdas</div>
              </div>
            </div>
            <p className="text-orange-200 dark:text-gray-300 leading-relaxed">
              Solusi bengkel cerdas dengan teknologi modern untuk kepuasan
              pelanggan terbaik. Kami berkomitmen memberikan layanan berkualitas
              tinggi.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-orange-800/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl flex items-center justify-center text-orange-200 dark:text-gray-300 hover:text-white hover:bg-orange-700/50 dark:hover:bg-gray-600/50 transition-all duration-200 hover:scale-110 group"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="mr-2">🔗</span>
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-orange-200 dark:text-gray-300 hover:text-white transition-all duration-200 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-yellow-400 transition-colors duration-200">
                      →
                    </span>{" "}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="mr-2">🔧</span>
              Layanan
            </h3>
            <ul className="space-y-3 text-orange-200 dark:text-gray-300">
              {services.map((service, index) => (
                <li key={service} className="flex items-center space-x-3 group">
                  <span className="w-2 h-2 bg-orange-400 rounded-full group-hover:bg-yellow-400 transition-colors duration-200"></span>
                  <span className="group-hover:text-white transition-colors duration-200">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <span className="mr-2">📞</span>
              Kontak
            </h3>
            <div className="space-y-4 text-orange-200 dark:text-gray-300">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                    {contact.icon}
                  </span>
                  <span className="text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 p-4 bg-orange-800/30 dark:bg-gray-700/30 backdrop-blur-sm rounded-xl border border-orange-700/50 dark:border-gray-600/50">
              <h4 className="font-semibold mb-3 text-white">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-gradient-gold text-orange-900 px-4 py-2 rounded-r-lg font-semibold hover:shadow-lg transition-all duration-200 btn-hover">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-800/50 dark:border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-orange-200 dark:text-gray-300 text-center md:text-left">
              <p>&copy; {currentYear} GoBeng. Semua hak cipta dilindungi.</p>
              <p className="text-sm mt-1">Dibuat dengan ❤️ untuk Indonesia</p>
            </div>
            <div className="flex space-x-6 text-sm text-orange-200 dark:text-gray-300">
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-200"
              >
                Bantuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
