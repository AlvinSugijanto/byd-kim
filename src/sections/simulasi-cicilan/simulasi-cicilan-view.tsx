"use client";

import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaMoneyBillWave, FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/Logo";
import contactInfo from "@/lib/contactInfo";
import { NumericFormat } from "react-number-format";
import { formatCurrency } from "@/utils/formatRupiah";

const SimulasiCicilanView = () => {
  const [selectedSeries, setSelectedSeries] = useState("");
  const [tenor, setTenor] = useState(36); // Default: 36 months
  const [downPayment, setDownPayment] = useState("");
  const [dpError, setDpError] = useState("");

  // Hardcoded series options based on request
  const seriesOptions = [
    { name: "Atto 1 Dynamic", minDp: 43297000 },
    { name: "Atto 1 Premium", minDp: 50857000 },
    { name: "Atto 3 Standard", minDp: 79703000 },
    { name: "Atto 3 Superior", minDp: 107903000 },
    { name: "Dolphin Dynamic", minDp: 75503000 },
    { name: "Dolphin Premium", minDp: 88303000 },
    { name: "M6 Standard", minDp: 79103000 },
    { name: "M6 Superior 7 Seat", minDp: 87103000 },
    { name: "M6 Superior Captain", minDp: 89103000 },
    { name: "Sealion Premium", minDp: 129103000 },
    { name: "Sealion Performance", minDp: 147103000 },
    { name: "Seal Premium", minDp: 131903000 },
    { name: "Seal Performance", minDp: 154103000 },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedOption = seriesOptions.find(
      (opt) => opt.name === selectedSeries,
    );
    const numericDp = Number(downPayment);
    if (selectedOption && numericDp < selectedOption.minDp) {
      setDpError(
        `Minimal DP untuk BYD ${selectedSeries.toUpperCase()} adalah Rp ${formatCurrency(selectedOption.minDp.toString())}`,
      );
      alert(
        `Minimal DP untuk BYD ${selectedSeries.toUpperCase()} adalah Rp ${formatCurrency(selectedOption.minDp.toString())}`,
      );
      return;
    }

    // Create WhatsApp message
    const message = `Halo, saya ingin simulasi cicilan BYD dengan detail berikut:
    
Series: ${selectedSeries.toUpperCase()}
Tenor: ${tenor} bulan (${Math.floor(tenor / 12)} tahun)
Down Payment: Rp ${formatCurrency(downPayment)}

Mohon informasi lebih lanjut. Terima kasih!`;

    const whatsappUrl = `${contactInfo.waLink}?text=${encodeURIComponent(
      message,
    )}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-[65px] font-sans">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              Simulasi Cicilan BYD
            </h1>
            <p className="text-gray-600 text-lg">
              Isi form di bawah ini dan tim kami akan segera menghubungi Anda
              melalui WhatsApp.
            </p>
          </div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Series Dropdown */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Seri BYD <span className="text-red-500">*</span>
                </label>
                <select
                  value={selectedSeries}
                  onChange={(e) => {
                    const newSeries = e.target.value;
                    setSelectedSeries(newSeries);
                    const selectedOption = seriesOptions.find(
                      (opt) => opt.name === newSeries,
                    );
                    if (selectedOption) {
                      setDownPayment(selectedOption.minDp.toString());
                    }
                  }}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="" disabled>
                    ---- Pilih Seri ----
                  </option>
                  {seriesOptions.map((opt) => (
                    <option key={opt.name} value={opt.name}>
                      BYD {opt.name.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tenor Dropdown */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Tenor (Tahun) <span className="text-red-500">*</span>
                </label>
                <select
                  value={tenor}
                  onChange={(e) => setTenor(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all"
                  required
                >
                  <option value={12}>1 Tahun</option>
                  <option value={24}>2 Tahun</option>
                  <option value={36}>3 Tahun</option>
                  <option value={48}>4 Tahun</option>
                  <option value={60}>5 Tahun</option>
                </select>
              </div>

              {/* Down Payment Input */}
              <div>
                <label className="block text-gray-700 font-semibold mb-3">
                  Down Payment (DP) <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium z-10">
                    Rp
                  </span>
                  <NumericFormat
                    value={downPayment}
                    onValueChange={(values) => {
                      setDownPayment(values.floatValue?.toString() || "");
                      setDpError(""); // clear error when user types
                    }}
                    thousandSeparator="."
                    decimalSeparator=","
                    className={`w-full pl-12 pr-4 py-3 bg-white border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                      dpError
                        ? "border-red-600 focus:ring-red-500"
                        : "border-gray-300 focus:ring-gray-500"
                    }`}
                    placeholder="0"
                    required
                  />
                </div>
                {dpError ? (
                  <p className="text-red-600 text-sm mt-2">{dpError}</p>
                ) : (
                  <p className="text-gray-500 text-sm mt-2">
                    {selectedSeries ? (
                      <>
                        Minimal DP :{" "}
                        <span className="font-semibold text-gray-700 ml-2">
                          Rp{" "}
                          {formatCurrency(
                            seriesOptions
                              .find((opt) => opt.name === selectedSeries)
                              ?.minDp.toString() || "0",
                          )}
                        </span>
                      </>
                    ) : (
                      "Masukkan jumlah DP Anda dalam Rupiah"
                    )}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full hover:cursor-pointer bg-transparent border-2 border-gray-600 hover:bg-gray-800 text-gray-600 hover:text-white px-6  transition-colors duration-300 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-lg"
              >
                <FaWhatsapp className="text-2xl" />
                Ajukan Cicilan
              </button>
            </form>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600 text-sm">
              *Simulasi ini hanya merupakan perkiraan. Cicilan sebenarnya dapat
              berbeda tergantung pada kebijakan dealer dan lembaga pembiayaan.*
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimulasiCicilanView;
