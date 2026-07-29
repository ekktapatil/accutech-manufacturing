import Image from "next/image";
import Link from "next/link";

export default function IndustrialFabricationPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Breadcrumb */}
      <section className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-4 text-sm text-slate-500">
          <Link href="/" className="hover:text-orange-600 transition">
            Home
          </Link>
          <span>/</span>

          <Link href="/#projects" className="hover:text-orange-600 transition">
            Projects
          </Link>

          <span>/</span>

          <span className="font-semibold text-slate-900">
            Wooden Flooring
          </span>
        </div>
      </section>

      {/* Hero */}

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
                Wooden Flooring
              </span>

              <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
               Wooden 
                <span className="block text-orange-600">
                  Flooring
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Accutech Manufacturing delivershigh-quality industrial fabrication solutions for factories, warehouses, manufacturing plants, and commercial facilities. With advanced technology, precision engineering, premium-grade materials, and a skilled workforce, we provide durable, customized fabrication services that meet the highest standards of quality, safety, and performance.
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
                  src="/images/i1.jpg"
                  alt="Wooden Flooring"
                  width={900}
                  height={650}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  priority
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

            {/* Left */}

            <div className="lg:col-span-2 rounded-3xl bg-white p-10 shadow-lg">

              <h2 className="text-4xl font-black text-slate-900">
                Project Overview
              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">

                <p>
                  a leading industrial fabrication company providing innovative and reliable solutions for factories, warehouses, commercial buildings, and manufacturing facilities. We combine modern technology, precision engineering, and superior craftsmanship to deliver projects that are durable, efficient, and built to last.
                </p>

                <p>
                  Accutech Manufacturing specializes in delivering high-quality fabrication solutions tailored to the needs of industrial and commercial clients. From structural fabrication to custom engineering projects, we focus on precision, quality, safety, and timely execution to exceed customer expectations.
                </p>

                <p>
                  At Accutech Manufacturing, we transform ideas into durable engineering solutions through advanced fabrication techniques and expert workmanship. Serving industries across India, we deliver customized fabrication services that ensure strength, reliability, and long-term performance for every project.
                </p>

              </div>

            </div>

            {/* Details */}

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
                    Wooden Flooring
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Service
                  </span>

                  <span className="font-bold">
                    Flooring
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Material
                  </span>

                  <span className="font-bold">
                   wooden
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Industry
                  </span>

                  <span className="font-bold">
                    Manufacturing
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
             Enhance your workspace with our premium wooden flooring solutions, designed to deliver timeless beauty, superior durability, and exceptional comfort.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Premium Wooden Flooring",
"Laminate Flooring",
"Engineered Wood Flooring",
"Vinyl Wooden Flooring",
"Hardwood Flooring",
"Parquet Flooring",
"Floor Installation",
"Floor Repair & Maintenance",
"Floor Polishing & Finishing"
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
              Delivering engineering excellence with quality,
              innovation and reliability.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
             {
  title: "Premium Materials",
  desc: "High-quality wood and flooring materials for durability, elegance, and long-lasting performance.",
  icon: "🪵",
},
{
  title: "Skilled Installation",
  desc: "Experienced flooring professionals ensuring precise installation and flawless finishing.",
  icon: "👷",
},
{
  title: "Modern Flooring Solutions",
  desc: "Advanced installation techniques and innovative flooring systems for every space.",
  icon: "🏡",
},
{
  title: "Timely Project Completion",
  desc: "Efficient planning and execution to deliver your flooring project on schedule.",
  icon: "⏱️",
},
            ].map((item) => (
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
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-5">

            {[
              "Site Inspection",
  "Material Selection",
  "Surface Preparation",
  "Floor Installation",
  "Finishing & Handover"
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-slate-200 p-8 text-center shadow-md transition duration-500 hover:-translate-y-2 hover:border-orange-500 hover:shadow-xl"
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

      {/* Project Gallery */}

      <section className="py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">
            <h2 className="text-4xl font-black text-slate-900">
              Project Gallery
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {[
              "/images/i2.jpg",
              "/images/i3.jpg",
              "/images/i4.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[30px] shadow-xl"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
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
              Ready to Build Your Next Project?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
              Partner with Accutech Manufacturing for reliable,
              precision-engineered industrial fabrication solutions
              tailored to your business requirements.
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