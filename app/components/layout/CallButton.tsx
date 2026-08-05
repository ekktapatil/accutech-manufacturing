"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function CallButton() {
  return (
    <a
      href="tel:+917385851083"
      className="fixed left-6 bottom-24 z-50 group"
      aria-label="Call Now"
    >
      {/* Pulse */}
      <span className="absolute inset-0 rounded-full bg-orange-500 opacity-20 animate-ping"></span>

      {/* Button */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-700">
        <FaPhoneAlt size={22} />
      </div>

      {/* Tooltip */}
      <div className="absolute left-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-xl group-hover:block">
        Call Now
      </div>
    </a>
  );
}
