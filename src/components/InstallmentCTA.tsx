"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCalculator, FaChartLine, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

export default function InstallmentCTA() {
  return (
    <section
      id="simulate-installment"
      className="w-full bg-white mb-10 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row w-full min-h-[500px]">
        {/* Left side: Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex items-center justify-start p-8 md:p-16 lg:px-24 bg-white order-2 md:order-1"
        >
          <div className="max-w-xl text-left w-full">
            <h2 className="text-3xl md:text-4xl text-[#1a1a1a] font-normal mb-6 tracking-wide">
              Hitung Cicilan BYD Anda
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Rencanakan pembelian BYD Anda dengan simulasi cicilan yang mudah
              dan transparan. Dapatkan estimasi pembayaran bulanan Anda dalam
              hitungan detik.
            </p>

            {/* Features Outline */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <FaCalculator className="text-2xl text-gray-800 shrink-0 mt-1" />
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">
                    Perhitungan Akurat
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Hitung cicilan dengan suku bunga terkini
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaChartLine className="text-2xl text-gray-800 shrink-0 mt-1" />
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">
                    Berbagai Pilihan Tenor
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Pilih tenor dari 12 hingga 60 bulan
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaCheckCircle className="text-2xl text-gray-800 shrink-0 mt-1" />
                <div>
                  <h3 className="text-gray-900 font-semibold mb-1">
                    Tanpa Komitmen
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Simulasi gratis tanpa kewajiban
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/simulasi-cicilan"
              className="w-full md:w-auto inline-block text-center bg-white border border-gray-800 text-gray-800 px-10 py-3 uppercase text-sm font-medium tracking-wide hover:bg-gray-800 hover:text-white transition-colors duration-300"
            >
              MULAI SIMULASI SEKARANG
            </Link>
          </div>
        </motion.div>

        {/* Right side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] order-1 md:order-2"
        >
          <Image
            src="/calculate-installment.jpg"
            alt="Calculate Installment"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
