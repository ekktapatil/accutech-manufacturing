import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-lg font-semibold uppercase tracking-[0.3em] text-orange-500">
            High Performance. High Quality.
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Engineering
            <br />
            Tomorrow,
            <br />
            Building Excellence.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Turnkey Commercial Interiors, Industrial Fabrication,
            Structural Engineering, Portable Cabins, PUF Panels,
            Modular Furniture and Complete Project Execution.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
            >
              Request a Quote
            </Link>

            <Link
              href="/projects"
              className="rounded-lg border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-8 text-white md:grid-cols-4">
            <div>
              <h2 className="text-3xl font-bold">500+</h2>
              <p className="text-gray-300">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">100%</h2>
              <p className="text-gray-300">Quality Focus</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">24/7</h2>
              <p className="text-gray-300">Support</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">PAN</h2>
              <p className="text-gray-300">India Service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}