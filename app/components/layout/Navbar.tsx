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
      setScrolled(window.scrollY > 40);
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
      ? "bg-white shadow-lg"
      : "bg-white border-b border-gray-200"
  }`}
>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex h-24 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex items-center gap-3">

           <Image
  src="/images/logo.png"
  alt="Accutech"
  width={70}
  height={70}
  className="object-contain"
/>

           <div className="leading-tight">
  <h2 className="text-3xl font-extrabold text-slate-900">
    ACCUTECH
  </h2>

  <p className="text-sm uppercase tracking-[4px] text-orange-600">
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
                className="font-medium text-slate-700 hover:text-orange-600 transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Quote Button */}

          <Link
  href="/catalog.pdf"
  target="_blank"
  className="hidden lg:inline-flex rounded-xl bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700 transition"
>
  View Catalog
</Link>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>
                  {/* Mobile Menu */}

          {menuOpen && (
            <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-xl border-t">

              <nav className="flex flex-col py-6">

                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-6 py-4 font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition"
                  >
                    {item.name}
                  </Link>
                ))}

                <div className="px-6 pt-4">

                  <Link
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full rounded-xl bg-orange-600 py-3 text-center font-semibold text-white hover:bg-orange-700 transition"
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