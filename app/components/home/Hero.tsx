"use client";

import Image from "next/image";
import Link from "next/link";
import EngineeringBackground from "../ui/EngineeringBackground";

export default function Hero() {
  return (
   <section id="home" className="relative overflow-hidden py-28"  style={{
    backgroundImage: "url('/images/backgrounds/section-blueprint.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    {/* <EngineeringBackground /> */}
  
  {/* Engineering Background */}
  <div className="absolute inset-0 -z-10">

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(244, 246, 250, 0.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(15,23,42,.18) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />

    {/* Orange Glow */}
    <div className="absolute -left-52 -top-52 h-[550px] w-[550px] rounded-full bg-orange-500/10 blur-[150px]" />

    <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-300/10 blur-[120px]" />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT CONTENT */}

      <div>

        <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-orange-600">
          Engineering Excellence
        </span>

        <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] text-slate-900">

          Engineering

          <br />

          Solutions That

          <br />

          <span className="text-orange-600">
            Build Industries
          </span>

        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

          Delivering Industrial Fabrication, Structural Steel,
          Office Interiors, Portable Cabins, PUF Panels and
          complete turnkey engineering solutions with precision,
          quality and on-time execution.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-5">

          <Link
            href="/catalog.pdf"
            target="_blank"
            className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 hover:shadow-2xl"
          >
            View Catalogue
          </Link>

          <Link
            href="https://wa.me/917385851083?text=Hello%20Accutech%20Manufacturing,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-xl border border-green-600 bg-white px-8 py-4 font-semibold text-green-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:text-white hover:shadow-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-6 w-6 fill-current"
            >
              <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2.1 7.8L0 32l8.4-2.2c2.3 1.2 4.9 1.8 7.6 1.8 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.3 0-4.5-.6-6.5-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5A12.8 12.8 0 1 1 16 28.8zm7.2-9.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.6-.2-.9.2-.2.4-1 1.2-1.2 1.5-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.8c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 3 0 1.8 1.3 3.5 1.5 3.7.2.2 2.5 3.8 6.1 5.3.8.4 1.5.6 2 .8.9.3 1.7.2 2.4.1.7-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5z"/>
            </svg>

            WhatsApp
          </Link>

        </div>

        {/* Feature List */}

        <div className="mt-14 grid grid-cols-2 gap-6">

          {[
            "Industrial Fabrication",
            "Structural Steel",
            "Office Interiors",
            "Turnkey Projects",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200 p-4 shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 text-white font-bold">
                ✓
              </div>

              <span className="font-semibold text-slate-700">
                {item}
              </span>
            </div>
          ))}

        </div>

        {/* Statistics */}

        <div className="mt-14 grid grid-cols-3 gap-5">

          {[
            ["100+", "Projects"],
            ["10+", "Services"],
            ["100%", "Engineering"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md p-6 shadow-xl"
            >
              <h2 className="text-4xl font-black text-orange-600">
                {value}
              </h2>

              <p className="mt-2 text-slate-600">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>

          {/* RIGHT IMAGE SECTION */}

<div className="relative hidden lg:block h-[760px]">

  {/* Main Hero Image */}

  <div className="absolute right-0 top-0 h-[540px] w-[78%] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,0.18)]">

    <Image
      src="/images/main.jpg"
      alt="Accutech Manufacturing"
      fill
      priority
      className="object-cover transition duration-700 hover:scale-105"
    />

  </div>

  {/* Office Interior */}
  <div className="absolute left-0 bottom-16 h-[240px] w-[42%] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

    <Image
      src="/images/office-interior1.jpg"
      alt="Office Interior"
      fill
      className="object-cover transition duration-700 hover:scale-110"
    />

  </div>

  {/* Assembly */}

  <div className="absolute right-6 bottom-0 h-[200px] w-[35%] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

    <Image
      src="/images/glass-partition1.jpg"
      alt="Assembly Line"
      fill
      className="object-cover transition duration-700 hover:scale-110"
    />

  </div>

  {/* Projects Card */}

  <div className="absolute left-8 top-8 rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl px-7 py-6 shadow-2xl">

    <p className="text-xs uppercase tracking-[4px] font-semibold text-orange-600">
      Completed
    </p>

    <h2 className="mt-2 text-5xl font-black text-slate-900">
      100+
    </h2>

    <p className="mt-1 text-slate-600">
      Successful Projects
    </p>

  </div>

  {/* Experience */}

  <div className="absolute right-0 top-[340px] rounded-3xl bg-gradient-to-r from-orange-600 to-orange-500 px-8 py-7 text-white shadow-[0_20px_50px_rgba(234,88,12,.45)]">

    <p className="text-xs uppercase tracking-[4px]">
      Experience
    </p>

    <h2 className="mt-2 text-5xl font-black">
      10+
    </h2>

    <p className="mt-1 text-sm opacity-90">
      Engineering Services
    </p>

  </div>

  {/* Decorative Engineering Elements */}

  <div className="absolute -right-4 top-16 h-40 w-40 rounded-full border border-orange-300/40"></div>

  <div className="absolute -right-12 top-10 h-56 w-56 rounded-full border border-orange-200/30"></div>

  <div className="absolute left-20 bottom-[300px] h-3 w-3 rounded-full bg-orange-500"></div>

  <div className="absolute right-44 top-24 h-4 w-4 rounded-full bg-orange-400"></div>

  <div className="absolute left-[120px] top-[260px] h-[2px] w-28 bg-orange-200"></div>

  <div className="absolute left-[248px] top-[259px] h-2 w-2 rounded-full bg-orange-500"></div>

  <div className="absolute right-[140px] bottom-[250px] h-[2px] w-24 bg-orange-200"></div>

  <div className="absolute right-[115px] bottom-[249px] h-2 w-2 rounded-full bg-orange-500"></div>

</div>

      </div>

    </div>
           {/* Bottom Information Strip */}
           

     <div
  className="relative mt-24 overflow-hidden border-t border-slate-200"
  style={{
    backgroundImage: "url('/images/backgrounds/section-blueprint.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Customer Service",
                desc: "We ensure every customer receives the right product at the right time with complete support.",
              },
              {
                title: "Technical Support",
                desc: "Experienced engineers help customers select the best engineering solution for every project.",
              },
              {
                title: "Superior Quality",
                desc: "Premium materials, skilled workmanship and strict quality standards in every project.",
              },
              {
                title: "On-Time Delivery",
                desc: "Efficient planning and execution ensure projects are delivered on schedule.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                  ⚙️
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}