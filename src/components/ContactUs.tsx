"use client";

import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const phoneNumber = "6285117576041"; // Ganti dengan nomor WA yang sesuai
    let message = "Halo, saya ingin menghubungi BMW Tunas Hayam Wuruk.%0A%0A";

    if (formData.name) {
      message += `Nama: ${formData.name}%0A`;
    }
    if (formData.email) {
      message += `Email: ${formData.email}%0A`;
    }
    if (formData.phone) {
      message += `No. HP: ${formData.phone}%0A`;
    }
    if (formData.message) {
      message += `%0APesan:%0A${formData.message}%0A`;
    }

    message += "%0ATerima kasih!";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const items = [
    {
      link: `https://wa.me/6285117576041?text=${encodeURIComponent("Halo, saya ingin menghubungi BYD.")}`,
      icon: <FaPhone />,
      title: "Phone",
      content: ["+6285117576041", "Senin - Minggu: 08:30 - 19:00"],
      overlay: "Kirim Pesan Whatsapp",
    },
    {
      link: `mailto:steven.putra@bmw-tunas.co.id`,
      icon: <FaEnvelope />,
      title: "Email",
      content: ["steven.putra@bmw-tunas.co.id", "stevenbmwtunas@gmail.com"],
      overlay: "Kirim Email",
    },
    {
      link: `https://maps.app.goo.gl/3957v11111111111`,
      icon: <FaMapMarkerAlt />,
      title: "Lokasi",
      content: [
        "Jl. Prof. Dr. Soepomo No.17, Menteng Dalam, Kec. Tebet, Jakarta Selatan, DKI Jakarta 12870",
      ],
      overlay: "Kunjungi Showroom Kami",
    },
  ];

  return (
    <section id="contact-us" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our BMW vehicles? We're here to help. Contact
              us today.
            </p>
          </motion.div> */}

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>
              <p className="text-gray-600 mb-8">
                Hubungi kami melalui salah satu saluran ini, dan tim kami akan
                segera membalas pesan Anda.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6 ">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
                >
                  <div className="bg-gray-100 p-3 rounded-lg relative z-10 transition-colors group-hover:bg-gray-200">
                    {item.icon}
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                      {item.title}
                    </h4>
                    {item.content.map((content) => (
                      <p className="text-gray-600">{content}</p>
                    ))}
                    {/* <p className="text-gray-600">Mon - Sun: 8:30 AM - 7:00 PM</p> */}
                  </div>
                  <div className="absolute inset-0 bg-gray-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-[700ms] ease-in-out flex items-center justify-center z-20">
                    <p className="text-white font-semibold text-lg flex items-center gap-2">
                      {item.icon} {item.overlay}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Full Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </motion.div> */}
        </div>
      </div>
    </section>
  );
}

{
  /* <a
                href={`https://wa.me/6285117576041?text=${encodeURIComponent("Halo, saya ingin menghubungi BYD.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-gray-100 p-3 rounded-lg relative z-10 transition-colors group-hover:bg-gray-200">
                  <FaPhone className="text-gray-800 text-xl" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                    Phone
                  </h4>
                  <p className="text-gray-600">+6285117576041</p>
                  <p className="text-gray-600">Mon - Sun: 8:30 AM - 7:00 PM</p>
                </div>
                <div className="absolute inset-0 bg-gray-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-[700ms] ease-in-out flex items-center justify-center z-20">
                  <p className="text-white font-semibold text-lg flex items-center gap-2">
                    <FaPhone /> Send Whatsapp Message
                  </p>
                </div>
              </a>

              <a
                href="mailto:steven.putra@bmw-tunas.co.id"
                className="group relative flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-gray-100 p-3 rounded-lg relative z-10 transition-colors group-hover:bg-gray-200">
                  <FaEnvelope className="text-gray-800 text-xl" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                    Email
                  </h4>
                  <p className="text-gray-600">steven.putra@bmw-tunas.co.id</p>
                  <p className="text-gray-600">stevenbmwtunas@gmail.com</p>
                </div>
                <div className="absolute inset-0 bg-gray-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-[700ms] ease-in-out flex items-center justify-center z-20">
                  <p className="text-white font-semibold text-lg flex items-center gap-2">
                    <FaEnvelope /> Send an Email
                  </p>
                </div>
              </a>

              <a
                href="https://maps.app.goo.gl/YourGoogleMapsLinkHere"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-gray-100 p-3 rounded-lg relative z-10 transition-colors group-hover:bg-gray-200">
                  <FaMapMarkerAlt className="text-gray-800 text-xl" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">
                    Location
                  </h4>
                  <p className="text-gray-600">
                    Jalan Hayam Wuruk No. 51, Maphar, Taman Sari
                    <br />
                    Jakarta Barat
                    <br />
                    DKI Jakarta
                  </p>
                </div>
                <div className="absolute inset-0 bg-gray-900 -translate-x-full group-hover:translate-x-0 transition-transform duration-[700ms] ease-in-out flex items-center justify-center z-20">
                  <p className="text-white font-semibold text-lg flex items-center gap-2">
                    <FaMapMarkerAlt /> View on Google Maps
                  </p>
                </div>
              </a> */
}
