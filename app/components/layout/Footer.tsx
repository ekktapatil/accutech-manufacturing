import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <h2 className="text-3xl font-bold text-orange-500">
              ACCUTECH
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Delivering innovative fabrication, turnkey infrastructure,
              industrial engineering and interior solutions with quality,
              safety and commitment.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Industrial Fabrication</li>
              <li>Office Interiors</li>
              <li>Portable Cabins</li>
              <li>Glass Partitions</li>
              <li>Structural Engineering</li>
              <li>Turnkey Projects</li>
            </ul>
          </div>

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <FaPhoneAlt className="mt-1 text-orange-500"/>
                <span>Your Phone Number</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="mt-1 text-orange-500"/>
                <span>Your Email</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 text-orange-500"/>
                <span>Pune, Maharashtra</span>
              </div>

            </div>

            <div className="mt-8 flex gap-4 text-2xl">

              <FaFacebook className="cursor-pointer hover:text-orange-500"/>

              <FaInstagram className="cursor-pointer hover:text-orange-500"/>

              <FaLinkedin className="cursor-pointer hover:text-orange-500"/>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-slate-700 pt-6 text-center text-gray-500">

          © {new Date().getFullYear()} Accutech Manufacturing. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}