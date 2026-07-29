"use client";

import Image from "next/image";
import EngineeringBackground from "../ui/EngineeringBackground";

const services = [
  {
    title: "Structural Fabrication",
    image: "/images/C1.jpg",
    desc: "Heavy steel fabrication and industrial structural solutions.",
  },
  {
    title: "Office Interiors",
    image: "/images/C2.jpg",
    desc: "Modern office spaces designed with functionality and aesthetics.",
  },
  {
    title: "Industrial Assembly",
    image: "/images/C3.jpg",
    desc: "High-quality manufacturing and industrial assembly services.",
  },
  {
    title: "Turnkey Projects",
    image: "/images/C4.jpg",
    desc: "Complete design, fabrication and installation under one roof.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-28"
       style={{
    backgroundImage: "url('/images/backgrounds/section-blueprint.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
    >
      <EngineeringBackground />
      {/* Engineering Background */}

      <div className="absolute inset-0 -z-10">

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15,23,42,.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15,23,42,.18) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/5 blur-[140px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center">

          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 font-semibold uppercase tracking-[3px] text-orange-600">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">
            Engineering Services
            <br />
            We Provide
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            From industrial fabrication to turnkey infrastructure,
            Accutech Manufacturing provides complete engineering
            solutions tailored to your business requirements.
          </p>

        </div>

       
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/20 px-4 py-2 backdrop-blur-md">
                  <span className="text-xs font-semibold uppercase tracking-[3px] text-white">
                    Engineering
                  </span>
                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-orange-600">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.desc}
                </p>

              

                </div>

              </div>

           
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 overflow-hidden rounded-[36px] border border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 lg:p-16 shadow-[0_25px_60px_rgba(15,23,42,.45)]">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 font-semibold uppercase tracking-[3px] text-orange-300">
              Let's Build Together
            </span>

            <h3 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">
              Need a Custom Engineering Solution?
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Whether you need industrial fabrication, structural steel,
              modular office interiors, portable cabins, PUF panels,
              glass partitions or complete turnkey execution,
              Accutech Manufacturing delivers reliable engineering
              solutions with precision, quality and on-time execution.
            </p>

            <a
              href="https://wa.me/917385851083?text=Hello%20Accutech%20Manufacturing,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20engineering%20and%20fabrication%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl"
            >
              💬 WhatsApp Now
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}