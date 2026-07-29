"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
   const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-xl border-b border-slate-200"
          : "bg-white/70 backdrop-blur-lg border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/images/Logo.png"
              alt="Accutech"
              width={65}
              height={65}
              className="object-contain"
            />

            <div className="leading-tight">

              <h2 className="text-3xl font-black tracking-wide text-slate-900">
                ACCUTECH
              </h2>

              <p className="text-xs uppercase tracking-[5px] text-orange-600 font-semibold">
                MANUFACTURING
              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-semibold text-slate-700 transition duration-300 hover:text-orange-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Catalog Button */}

          <Link
            href="/catalog.pdf"
            target="_blank"
            className="hidden lg:inline-flex items-center rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-2xl"
          >
            View Catalog
          </Link>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden rounded-lg p-2 hover:bg-slate-100 transition"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="lg:hidden rounded-b-2xl bg-white/95 backdrop-blur-xl shadow-2xl border-t border-slate-200">

            <nav className="flex flex-col py-6">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-6 py-4 font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-6 pt-4">

                <Link
                  href="/catalog.pdf"
                  target="_blank"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-xl bg-orange-600 py-3 text-center font-semibold text-white transition hover:bg-orange-700"
                >
                  View Catalog
                </Link>

              </div>

            </nav>

          </div>
        )}

      </div>
    </header>
  );
}