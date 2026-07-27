"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="relative">

            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">

              <Image
                src="/images/structural-fabrication.jpg"
                alt="Structural Fabrication"
                fill
                className="object-cover hover:scale-105 transition duration-700"
              />

            </div>

            {/* Floating Image */}

            <div className="absolute -bottom-12 -right-10 w-64 h-44 rounded-3xl overflow-hidden border-[8px] border-white shadow-xl">

              <Image
                src="/images/office-interior.jpg"
                alt="Office Interior"
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold tracking-[3px] uppercase">
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

            <div className="mt-10 grid grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-slate-50 p-6">

                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                  🏭
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Industrial Expertise
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  Specialized in fabrication, industrial structures,
                  office interiors and complete turnkey execution.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center text-2xl">
                  ⚙️
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Quality Engineering
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  Every project is executed using quality materials,
                  skilled workmanship and modern manufacturing.
                </p>

              </div>

            </div>

            {/* Statistics */}

            <div className="space-y-5">

  <div className="flex items-start gap-3">
    <span className="text-orange-600 text-xl">✔</span>
    <p className="text-slate-700">
      All Types of Fabrication Work
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-orange-600 text-xl">✔</span>
    <p className="text-slate-700">
      Modular Furniture & Workspace Solutions
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-orange-600 text-xl">✔</span>
    <p className="text-slate-700">
      Interior Design & Complete Fit-Out Execution
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-orange-600 text-xl">✔</span>
    <p className="text-slate-700">
      Wooden Packaging & Export Pallet Manufacturing
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-orange-600 text-xl">✔</span>
    <p className="text-slate-700">
      Custom Fabrication & Structural Engineering Works
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-orange-600 text-xl">✔</span>
    <p className="text-slate-700">
      Turnkey Commercial & Industrial Infrastructure Solutions
    </p>
  </div>

  <div className="flex items-start gap-3">
    <span className="text-orange-600 text-xl">✔</span>
    <p className="text-slate-700">
      Portable Cabins, PUF Panels, Glass Partitions & Gypsum Partition Systems
    </p>
  </div>

</div>

           

        </div>

        </div>

      </div>

    </section>
  );
}