import Image from "next/image";
import Link from "next/link";

export default function OfficeInteriorPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Breadcrumb */}

      <section className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-sm text-slate-500">

          <Link href="/" className="transition hover:text-orange-600">
            Home
          </Link>

          <span>/</span>

          <Link
            href="/#projects"
            className="transition hover:text-orange-600"
          >
            Projects
          </Link>

          <span>/</span>

          <span className="font-semibold text-slate-900">
            Portable Cabin
          </span>

        </div>
      </section>

      {/* Hero */}

      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
                  High-quality portable cabins
              </span>

              <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
                Portable
                <span className="block text-orange-600">
                  Cabin
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                 Accutech Manufacturing specializes in the design, fabrication, and
                 installation of high-quality portable cabins engineered for durability,
                 functionality, and mobility. Our cabins are manufactured using premium
                 materials and modern construction techniques to provide reliable
                 space solutions for industrial, commercial, and residential
                 applications.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <a
                  href="https://wa.me/917385851083"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-700"
                >
                  💬 WhatsApp Now
                </a>

                <a
                  href="tel:+917385851083"
                  className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-800 transition hover:border-orange-600 hover:text-orange-600"
                >
                  📞 Call Now
                </a>

              </div>

            </div>

            <div>

              <div className="overflow-hidden rounded-[35px] shadow-2xl">

                <Image
                  src="/images/g1.jpg"
                  alt="Office Interior"
                  width={900}
                  height={650}
                  priority
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Overview */}

      <section className="pb-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 lg:grid-cols-3">

            <div className="rounded-3xl bg-white p-10 shadow-lg lg:col-span-2">

              <h2 className="text-4xl font-black text-slate-900">
                Project Overview
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                 High-quality portable cabins designed for offices,
                 security cabins, site accommodation, and modular
                 infrastructure with durable construction.
                </p>

                <p>
                  Our portable cabins feature robust steel structures, insulated wall
                  panels, weather-resistant roofing, quality flooring, electrical
                  wiring, lighting, ventilation, doors, windows, and optional air
                  conditioning. The modular design allows easy transportation,
                  quick installation, relocation, and future expansion with minimal
                  site preparation.
                </p>

                <p>
                 We offer customized portable cabins for site offices, security cabins,
                 labour accommodation, portable homes, office cabins, classrooms,
                 canteens, medical units, control rooms, and storage facilities.
                 Every cabin is designed according to the client's space requirements,
                 layout preferences, and operational needs.
                </p>

              </div>

            </div>

            {/* Project Details */}

            <div className="rounded-3xl bg-white p-10 shadow-lg">

              <h3 className="text-3xl font-black text-slate-900">
                Project Details
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Category
                  </span>

                  <span className="font-bold">
                    Portable Cabin
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Service
                  </span>

                  <span className="font-bold">
                    Portable Cabin
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Material
                  </span>

                  <span className="font-bold">
                      MS Steel•PUF Panel•Aluminium
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Industry
                  </span>

                  <span className="font-bold">
                    Corporate
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="font-semibold text-slate-500">
                    Support
                  </span>

                  <span className="font-bold text-green-600">
                    Available
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Services */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-[35px] bg-white p-12 shadow-lg">

            <h2 className="text-center text-4xl font-black text-slate-900">
              Services Included
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-slate-600">
              Complete portable cabin solutions designed for
              functionality, aesthetics and productivity.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                  "Site Office Cabins",
  "Security Guard Cabins",
  "Portable Office Cabins",
  "Labour Accommodation Cabins",
  "Portable Toilets & Washrooms",
  "Modular Container Cabins",
  "Portable Storage Cabins",
  "Customized Turnkey Cabin Solutions",
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-600 text-xl text-white">
                    ✓
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {service}
                  </h3>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>
            {/* Why Choose Us */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-black text-slate-900">
              Why Choose Accutech Manufacturing?
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Delivering premium portable cabins with quality,
              creativity and precision.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
             
  {
    title: "Custom Design",
    desc: "Portable cabins designed to meet your space, layout, and functional requirements.",
    icon: "🏠",
  },
  {
    title: "Robust Construction",
    desc: "Built with premium MS steel frames and insulated panels for strength and durability.",
    icon: "🛠️",
  },
  {
    title: "Easy Installation",
    desc: "Quick fabrication, transportation, and on-site installation with minimal downtime.",
    icon: "🚚",
  },
  {
    title: "Weather Resistant",
    desc: "Designed to withstand harsh weather conditions while providing comfort and long service life.",
    icon: "🌦️",
  },
]
            .map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-600 text-3xl text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Working Process */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-black text-slate-900">
              Our Working Process
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              From planning to completion, every project follows
              a structured workflow.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-5">

            {[
              "Consultation",
              "Planning",
              "Design",
              "Execution",
              "Handover",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-md transition duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl font-bold text-white">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Gallery */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-black text-slate-900">
              Project Gallery
            </h2>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {[
              "/images/g2.jpg",
              "/images/g3.jpg",
              "/images/g4.jpg",
            ].map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-[30px] shadow-xl"
              >

                <Image
                  src={image}
                  alt={`Office Interior ${index + 1}`}
                  width={600}
                  height={450}
                  className="h-80 w-full object-cover transition duration-700 hover:scale-110"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="rounded-[40px] bg-gradient-to-r from-orange-600 to-orange-500 p-16 text-center shadow-2xl">

            <h2 className="text-5xl font-black text-white">
              Transform Your Workspace Today
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
             A complete modular infrastructure solution, Accutech
             Manufacturing delivers cost-effective, high-performance portable
             cabins with timely execution and reliable after-sales support.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <a
                href="https://wa.me/917385851083"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:scale-105"
              >
                💬 WhatsApp Us
              </a>

              <a
                href="tel:+917385851083"
                className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
              >
                📞 Call Now
              </a>

              <Link
                href="/#projects"
                className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
              >
                ← Back to Projects
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}