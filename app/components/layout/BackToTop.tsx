"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse */}
      <span className="absolute inset-0 rounded-full bg-orange-500 opacity-20 animate-ping"></span>

      {/* Button */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-orange-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-orange-700">
        <FaArrowUp size={22} />
      </div>

      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-xl group-hover:block">
        Back to Top
      </div>
    </button>
  );
}