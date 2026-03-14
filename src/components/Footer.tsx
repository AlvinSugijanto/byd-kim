"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "./Logo";
import Link from "next/link";
import { LocationEdit, Mail, Phone } from "lucide-react";
import contactInfo from "@/lib/contactInfo";

export default function Footer() {
  const modelList = ["ATTO SERIES", "DOLPHIN SERIS", "SEAL SERIES", "M6"];

  return (
    <section className="text-white sm:pt-16 md:pt-20 pt-8 pb-10 bg-gray-900">
      <div className="container mx-auto px-8 sm:px-4">
        <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo width={50} height={50} />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Rasakan pengalaman berkendara yang luar biasa bersama BYD
              Indonesia. Temukan rangkaian kendaraan mewah kami yang dirancang
              untuk performa dan keanggunan.
            </p>
            {/* <div className="flex gap-4">
              {[
                {
                  Icon: FaFacebookF,
                  href: "https://facebook.com/bmwindonesia",
                },
                { Icon: FaTwitter, href: "https://twitter.com/bmwindonesia" },
                {
                  Icon: FaInstagram,
                  href: "https://instagram.com/bmwindonesia",
                },
                {
                  Icon: FaLinkedinIn,
                  href: "https://linkedin.com/company/bmw",
                },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Models */}
          <div>
            <h4 className="font-bold text-lg mb-6">Model Kami</h4>
            <ul className="space-y-3 text-gray-300">
              {modelList.map((model) => (
                <li key={model}>
                  <Link
                    href={`/model?type=${model}`}
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {model}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3 text-gray-300">
              {[
                { name: "Tentang BYD", href: "/#about" },
                { name: "Test Drive", href: "/#contact-us" },
                { name: "Hubungi Kami", href: "/#contact-us" },
                { name: "Cari Dealer", href: "/#contact-us" },
                { name: "Layanan Pelanggan", href: "/#contact-us" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-blue-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Info Kontak</h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <LocationEdit className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-400 transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0 text-blue-400" />
                <a
                  href={`${contactInfo.waLink}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© 2026 BYD Indonesia. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </section>
  );
}
