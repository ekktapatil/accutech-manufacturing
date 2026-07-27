"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-orange-50">

      {/* Background Decoration */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-tight text-slate-900">
              Engineering
              <br />
              Solutions That
              <br />
              <span className="text-orange-600">
                Build Industries
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">
              Delivering Industrial Fabrication, Structural Steel,
              Office Interiors, Portable Cabins, PUF Panels and
              Complete Turnkey Engineering Solutions across India.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

  <Link
    href="/catalog.pdf"
    target="_blank"
    className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white hover:bg-orange-700 transition"
  >
    View Catalog
  </Link>

  <Link
  href="https://wa.me/917385851083?text=Hello%20Accutech%20Manufacturing,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-6 w-6 fill-current"
  >
    <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2.1 7.8L0 32l8.4-2.2c2.3 1.2 4.9 1.8 7.6 1.8 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.3 0-4.5-.6-6.5-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5A12.8 12.8 0 1 1 16 28.8zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.6-.2-.9.2-.2.4-1 1.2-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3 0 1.8 1.3 3.5 1.5 3.7.2.2 2.5 3.8 6.1 5.3.8.4 1.5.6 2 .8.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z"/>
  </svg>

  Contact on WhatsApp
</Link>

</div>

            {/* Feature List */}

            <div className="mt-14 grid grid-cols-2 gap-5">

              <div className="flex items-center gap-3">
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
    ✓
  </div>

  <span className="text-slate-700 font-semibold">
    Industrial Fabrication
  </span>
</div>

              <div className="flex items-center gap-3">
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
    ✓
  </div>

  <span className="text-slate-700 font-semibold">
                  Structural Steel
                </span>
              </div>

              <div className="flex items-center gap-3">
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
    ✓
  </div>

  <span className="text-slate-700 font-semibold">
                  Office Interior
                </span>
              </div>

              <div className="flex items-center gap-3">
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold">
    ✓
  </div>

  <span className="text-slate-700 font-semibold">
                  Turnkey Projects
                </span>
              </div>

            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-3 gap-6">

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <h2 className="text-4xl font-black text-orange-600">
                  100+
                </h2>

                <p className="mt-2 text-gray-600">
                  Projects
                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <h2 className="text-4xl font-black text-orange-600">
                  10+
                </h2>

                <p className="mt-2 text-gray-600">
                  Services
                </p>

              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">

                <h2 className="text-4xl font-black text-orange-600">
                  100%
                </h2>

                <p className="mt-2 text-gray-600">
                  Engineering Solutions
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE SECTION */}

          <div className="relative h-[720px] hidden lg:block">

            {/* Main Hero Image */}

            <div className="absolute right-0 top-0 w-[78%] h-[520px] rounded-[30px] overflow-hidden shadow-2xl">

              <Image
                src="/images/main.jpg"
                alt="Accutech Manufacturing"
                fill
                priority
                className="object-cover hover:scale-105 transition duration-700"
              />

            </div>
                        {/* Floating Office Image */}

            <div className="absolute left-0 bottom-14 h-[230px] w-[42%] overflow-hidden rounded-3xl border-[8px] border-white shadow-2xl bg-white">

              <Image
                src="/images/office-interior.jpg"
                alt="Office Interior"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </div>

            {/* Floating Assembly Image */}

            <div className="absolute right-8 bottom-0 h-[190px] w-[34%] overflow-hidden rounded-3xl border-[8px] border-white shadow-2xl bg-white">

              <Image
                src="/images/assembly-line.jpg"
                alt="Assembly Line"
                fill
                className="object-cover hover:scale-110 transition duration-700"
              />

            </div>

            {/* Glass Card */}

            <div className="absolute left-10 top-10 rounded-3xl bg-white/90 backdrop-blur-md px-6 py-5 shadow-xl border border-white">

              <p className="text-sm uppercase tracking-[3px] text-orange-600 font-semibold">
                Since
              </p>

              <h3 className="text-4xl font-black text-slate-900 mt-2">
                100+
              </h3>

              <p className="text-slate-600 mt-1">
                Successful Projects
              </p>

            </div>

            {/* Experience Card */}

            <div className="absolute right-0 top-[340px] rounded-2xl bg-orange-600 px-7 py-6 text-white shadow-2xl">

              <p className="uppercase tracking-[3px] text-xs">
                Experience
              </p>

              <h2 className="text-4xl font-black mt-2">
                10+
              </h2>

              <p className="text-sm opacity-90">
                Engineering Services
              </p>

            </div>

            {/* Decorative Shapes */}

            <div className="absolute -right-10 top-24 h-28 w-28 rounded-full border-[18px] border-orange-200"></div>

            <div className="absolute left-16 bottom-[310px] h-5 w-5 rounded-full bg-orange-500"></div>

            <div className="absolute right-44 top-20 h-4 w-4 rounded-full bg-orange-400"></div>

            <div className="absolute right-24 bottom-56 h-10 w-10 rounded-full border-4 border-orange-300"></div>

          </div>

        </div>

      </div>

      {/* Bottom Information Strip */}

     <div className="border-t border-slate-200 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-orange-600 mb-3">
          Customer Service
        </h3>
        <p className="text-slate-600 text-sm leading-6">
          We ensure every customer receives the right product at the right time,
          at the right place and at the right price.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-orange-600 mb-3">
          Technical Support
        </h3>
        <p className="text-slate-600 text-sm leading-6">
          Our experts help customers select the right products and provide
          guidance on applications and best practices.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-orange-600 mb-3">
          Superior Quality
        </h3>
        <p className="text-slate-600 text-sm leading-6">
          We use premium raw materials and follow strict quality standards to
          deliver reliable and durable products.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-bold text-orange-600 mb-3">
          On-Time Delivery
        </h3>
        <p className="text-slate-600 text-sm leading-6">
          Efficient planning and logistics ensure timely delivery of every
          project and order.
        </p>
      </div>

    
          </div>

        </div>

      </div>

    </section>
  );
}