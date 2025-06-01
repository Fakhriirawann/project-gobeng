"use client";

import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaSave,
  FaCamera,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaGlobe,
  FaEdit,
} from "react-icons/fa";

const BusinessProfile = () => {
  const [businessData, setBusinessData] = useState({
    name: "Bengkel Sejahtera",
    address: "Jl. Raya Utama No. 123, Jakarta",
    phone: "021-12345678",
    email: "info@bengkelsejahtera.com",
    website: "www.bengkelsejahtera.com",
    description:
      "Bengkel terpercaya dengan layanan lengkap untuk semua jenis kendaraan. Kami menyediakan servis berkualitas dengan teknisi berpengalaman.",
    operationalHours: "Senin - Sabtu: 08:00 - 17:00, Minggu: Tutup",
    logo: "/placeholder.svg?height=200&width=200",
    location: {
      lat: -6.2088,
      lng: 106.8456,
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempBusinessData, setTempBusinessData] = useState({ ...businessData });
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  // Load Google Maps API
  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      window.document.body.appendChild(googleMapScript);

      googleMapScript.addEventListener("load", () => {
        setMapLoaded(true);
      });
    };

    loadGoogleMapsAPI();
  }, []);

  // Initialize map when API is loaded
  useEffect(() => {
    if (mapLoaded && !map) {
      initializeMap();
    }
  }, [mapLoaded, map]);

  const initializeMap = () => {
    const mapOptions = {
      center: {
        lat: businessData.location.lat,
        lng: businessData.location.lng,
      },
      zoom: 15,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    };

    const newMap = new window.google.maps.Map(
      document.getElementById("google-map"),
      mapOptions
    );
    setMap(newMap);

    const newMarker = new window.google.maps.Marker({
      position: {
        lat: businessData.location.lat,
        lng: businessData.location.lng,
      },
      map: newMap,
      draggable: isEditing,
      animation: window.google.maps.Animation.DROP,
      title: businessData.name,
    });
    setMarker(newMarker);

    // Add listener for marker drag end
    newMarker.addListener("dragend", () => {
      const position = newMarker.getPosition();
      setTempBusinessData((prev) => ({
        ...prev,
        location: {
          lat: position.lat(),
          lng: position.lng(),
        },
      }));
    });
  };

  // Update marker when editing mode changes
  useEffect(() => {
    if (marker) {
      marker.setDraggable(isEditing);
    }
  }, [isEditing, marker]);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setBusinessData(tempBusinessData);

      // Update marker position on map
      if (marker && map) {
        marker.setPosition({
          lat: tempBusinessData.location.lat,
          lng: tempBusinessData.location.lng,
        });
        map.panTo({
          lat: tempBusinessData.location.lat,
          lng: tempBusinessData.location.lng,
        });
      }
    } else {
      // Start editing
      setTempBusinessData({ ...businessData });
    }

    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempBusinessData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setTempBusinessData((prev) => ({
          ...prev,
          logo: e.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Profil Bisnis
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Kelola informasi bengkel Anda
            </p>
          </div>
          <button
            onClick={handleEditToggle}
            className={`${
              isEditing
                ? "bg-green-600 hover:bg-green-700"
                : "bg-orange-600 hover:bg-orange-700"
            } text-white px-6 py-3 rounded-xl transition-colors duration-200 flex items-center space-x-2`}
          >
            {isEditing ? (
              <>
                <FaSave />
                <span>Simpan Perubahan</span>
              </>
            ) : (
              <>
                <FaEdit />
                <span>Edit Profil</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Business Profile Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Logo and Basic Info */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex flex-col items-center">
            <div className="relative mb-6">
              <img
                src={isEditing ? tempBusinessData.logo : businessData.logo}
                alt="Logo Bengkel"
                className="w-32 h-32 rounded-full object-cover border-4 border-orange-100 dark:border-orange-900"
              />
              {isEditing && (
                <label
                  htmlFor="logo-upload"
                  className="absolute bottom-0 right-0 bg-orange-600 text-white p-2 rounded-full cursor-pointer hover:bg-orange-700 transition-colors duration-200"
                >
                  <FaCamera />
                  <input
                    type="file"
                    id="logo-upload"
                    accept="image/*"
                    className="hidden"
                    onChange={handleLogoChange}
                  />
                </label>
              )}
            </div>

            <div className="w-full space-y-4">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nama Bengkel
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={tempBusinessData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Nomor Telepon
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={tempBusinessData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={tempBusinessData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={tempBusinessData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-center text-gray-900 dark:text-white">
                    {businessData.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <FaPhone className="text-orange-600 dark:text-orange-400" />
                    <span>{businessData.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <FaEnvelope className="text-orange-600 dark:text-orange-400" />
                    <span>{businessData.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <FaGlobe className="text-orange-600 dark:text-orange-400" />
                    <span>{businessData.website}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Middle Column - Address and Description */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Informasi Bengkel
          </h3>

          <div className="space-y-4">
            {isEditing ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Alamat
                  </label>
                  <textarea
                    name="address"
                    value={tempBusinessData.address}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Jam Operasional
                  </label>
                  <textarea
                    name="operationalHours"
                    value={tempBusinessData.operationalHours}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Deskripsi
                  </label>
                  <textarea
                    name="description"
                    value={tempBusinessData.description}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start space-x-2">
                  <FaMapMarkerAlt className="text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {businessData.address}
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <FaClock className="text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {businessData.operationalHours}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Tentang Bengkel
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {businessData.description}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Lokasi Bengkel
            </h3>
            {isEditing && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="italic">
                  Drag marker untuk mengubah lokasi
                </span>
              </div>
            )}
          </div>

          <div
            id="google-map"
            className="w-full h-64 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            {!mapLoaded && (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
              </div>
            )}
          </div>

          {isEditing && (
            <div className="mt-4 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Latitude
                  </label>
                  <input
                    type="text"
                    name="lat"
                    value={tempBusinessData.location.lat}
                    onChange={(e) =>
                      setTempBusinessData((prev) => ({
                        ...prev,
                        location: {
                          ...prev.location,
                          lat: Number.parseFloat(e.target.value),
                        },
                      }))
                    }
                    className="w-full px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Longitude
                  </label>
                  <input
                    type="text"
                    name="lng"
                    value={tempBusinessData.location.lng}
                    onChange={(e) =>
                      setTempBusinessData((prev) => ({
                        ...prev,
                        location: {
                          ...prev.location,
                          lng: Number.parseFloat(e.target.value),
                        },
                      }))
                    }
                    className="w-full px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                      const currentLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                      };

                      setTempBusinessData((prev) => ({
                        ...prev,
                        location: currentLocation,
                      }));

                      if (marker && map) {
                        marker.setPosition(currentLocation);
                        map.panTo(currentLocation);
                      }
                    });
                  }
                }}
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm flex items-center justify-center space-x-2"
              >
                <FaMapMarkerAlt />
                <span>Gunakan Lokasi Saat Ini</span>
              </button>
            </div>
          )}

          {!isEditing && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Koordinat:</span>
                <span className="font-mono">
                  {businessData.location.lat.toFixed(6)},{" "}
                  {businessData.location.lng.toFixed(6)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
