"use client";

import Image from "next/image";
import EngineeringBackground from "../ui/EngineeringBackground";

export default function About() {
  return (
    <section
      id="about"
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

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/5 blur-[140px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="relative">

            <div className="relative h-[620px] overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,.18)]">

              <Image
                src="/images/B1.jpg"
                alt="Structural Fabrication"
                fill
                className="object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Floating Image */}

            <div className="absolute -bottom-10 -right-8 h-48 w-72 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

              <Image
                src="/images/B2.jpg"
                alt="Office Interior"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 font-semibold uppercase tracking-[3px] text-orange-600">
              About Us
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">

              Building Strong

              <br />

              Industrial

              <br />

              Infrastructure

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Accutech Manufacturing delivers reliable engineering,
              fabrication and turnkey infrastructure solutions for
              industrial, commercial and institutional projects.

            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              We combine modern manufacturing techniques,
              experienced engineers and quality workmanship to
              deliver projects safely, efficiently and on time.

            </p>

            {/* Feature Cards */}

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-2xl">
                  🏭
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Industrial Expertise
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Specialized in fabrication, industrial structures,
                  office interiors and complete turnkey execution.
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-md shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-2xl">
                  ⚙️
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Quality Engineering
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Every project is executed using quality materials,
                  skilled workmanship and modern manufacturing.
                </p>

              </div>

            </div>

            
                        {/* Statistics */}

            <div className="mt-12 rounded-3xl border border-slate-200 bg-white/80 p-8 backdrop-blur-md shadow-xl">

              <div className="space-y-5">

                {[
                  "All Types of Fabrication Work",
                  "Modular Furniture & Workspace Solutions",
                  "Interior Design & Complete Fit-Out Execution",
                  "Wooden Packaging & Export Pallet Manufacturing",
                  "Custom Fabrication & Structural Engineering Works",
                  "Turnkey Commercial & Industrial Infrastructure Solutions",
                  "Portable Cabins, PUF Panels, Glass Partitions & Gypsum Partition Systems",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-600 text-sm font-bold text-white">
                      ✓
                    </div>

                    <p className="leading-7 text-slate-700">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}