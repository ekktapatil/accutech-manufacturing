import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div>
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            ABOUT ACCUTECH
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Engineering Excellence &
            <br />
            Turnkey Project Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Accutech Manufacturing is a leading engineering and project execution
            company specializing in commercial office interiors, industrial
            fabrication, structural works and complete turnkey solutions.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From concept design and engineering to fabrication, installation and
            final commissioning, we deliver projects with quality, safety and
            timely execution.
          </p>

          <div className="mt-10 flex gap-5">
            <Link
              href="/about"
              className="rounded-lg bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
            >
              Learn More
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-slate-900 px-8 py-4 font-semibold transition hover:bg-slate-900 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <Image
            src="/about/about.jpg"
            alt="Accutech Manufacturing"
            width={700}
            height={700}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}