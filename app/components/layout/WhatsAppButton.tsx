"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917385851083"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 z-50 group"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600">
        <FaWhatsapp size={26} />
      </div>
    </a>
  );
}