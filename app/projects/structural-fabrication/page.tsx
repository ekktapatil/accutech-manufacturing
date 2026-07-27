import Image from "next/image";
import Link from "next/link";

export default function StructuralFabricationPage() {
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
            Structural Fabrication
          </span>

        </div>
      </section>

      {/* Hero */}

      <section className="py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-orange-600">
                Structural Engineering
              </span>

              <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">
                Structural
                <span className="block text-orange-600">
                  Fabrication
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-slate-600">
                Accutech Manufacturing provides reliable structural
                fabrication solutions for industrial buildings,
                warehouses, factories and commercial projects using
                precision engineering and high-quality steel.
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
                  src="/images/structural-fabrication.jpg"
                  alt="Structural Fabrication"
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
                  Our Structural Fabrication division delivers
                  engineered steel structures for industrial,
                  commercial and infrastructure projects.
                </p>

                <p>
                  We fabricate columns, beams, trusses, platforms,
                  staircases, pipe racks and heavy structural
                  components with precision and durability.
                </p>

                <p>
                  Every structure is manufactured under strict
                  quality standards to ensure strength, safety
                  and long service life.
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
                    Structural
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Service
                  </span>
                  <span className="font-bold">
                    Steel Fabrication
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Material
                  </span>
                  <span className="font-bold">
                    Mild Steel
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="font-semibold text-slate-500">
                    Industry
                  </span>
                  <span className="font-bold">
                    Industrial
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
              Complete structural fabrication services for industrial
              and commercial projects.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

              {[
                "Steel Columns",
                "Roof Trusses",
                "Industrial Platforms",
                "Steel Beams",
                "Pipe Racks",
                "Staircases",
                "Walkways",
                "Site Installation",
                "Quality Inspection",
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
              Strong engineering, precision fabrication and dependable
              execution for every structural project.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Precision Engineering",
                desc: "Designed with accuracy to ensure structural integrity and safety.",
                icon: "📐",
              },
              {
                title: "High Strength Steel",
                desc: "Premium-grade steel fabricated for long-lasting performance.",
                icon: "🏗️",
              },
              {
                title: "Skilled Fabrication",
                desc: "Experienced professionals delivering quality workmanship.",
                icon: "👷",
              },
              {
                title: "Reliable Delivery",
                desc: "Projects completed on schedule with uncompromised quality.",
                icon: "🚚",
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

            <p className="mt-5 text-lg text-slate-600">
              Every structure is carefully planned, fabricated and
              installed following a proven engineering workflow.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-5">

            {[
              "Consultation",
              "Engineering",
              "Fabrication",
              "Installation",
              "Inspection",
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
              "/images/structural-fabrication.jpg",
              "/images/structural-fabrication.jpg",
              "/images/structural-fabrication.jpg",
            ].map((image, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-[30px] shadow-xl"
              >

                <Image
                  src={image}
                  alt={`Structural Fabrication ${index + 1}`}
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
              Build Stronger Structures with Confidence
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
              Trust Accutech Manufacturing for precision structural
              fabrication solutions that deliver strength, durability
              and engineering excellence for every project.
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