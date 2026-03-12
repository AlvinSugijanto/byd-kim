"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RequestDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const phoneNumber = "6285117576041"; // Ganti dengan nomor WA yang sesuai
    let message = "Halo, saya ingin request test drive BYD.%0A%0A";

    if (formData.name) {
      message += `Nama: ${formData.name}%0A`;
    }
    if (formData.email) {
      message += `Email: ${formData.email}%0A`;
    }
    if (formData.phone) {
      message += `No. HP: ${formData.phone}%0A`;
    }

    message +=
      "%0AMohon informasi lebih lanjut mengenai:%0A- Jadwal test drive yang tersedia%0A- Lokasi test drive%0A- Promo dan penawaran terbaru%0A%0ATerima kasih!";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="request-demo" className="w-full bg-white mb-10 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full min-h-[500px]">
        {/* Left side: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="xs:block hidden w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px]"
        >
          <Image
            src="/test-drive.png"
            alt="BYD Fleet"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex items-center justify-start p-8 md:p-16 lg:px-24 bg-white"
        >
          <div className="max-w-xl text-left w-full">
            <h2 className="text-3xl md:text-4xl text-[#1a1a1a] font-normal mb-6 tracking-wide">
              Jelajahi Penawaran BYD
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-[15px]">
              Pilih antara kendaraan 100% listrik atau hibrida plug-in. Bersama BYD, 
              teknologi canggih, keselamatan, dan kepercayaan berkendara berpadu
              untuk membantu Anda mewujudkan mobil impian.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 transition-colors text-gray-800 placeholder-gray-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Alamat Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 transition-colors text-gray-800 placeholder-gray-400"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Nomor Telepon"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 transition-colors text-gray-800 placeholder-gray-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto inline-block bg-white border border-gray-800 text-gray-800 px-10 py-3 mt-4 uppercase text-sm font-medium tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
              >
                PESAN TEST DRIVE
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
