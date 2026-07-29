"use client";

import Image from "next/image";
import Link from "next/link";
import EngineeringBackground from "../ui/EngineeringBackground";

const projects = [
  {
    title: "Industrial Fabrication",
    slug: "industrial-fabrication",
    image: "/images/A1.jpg",
    category: "Steel Structure",
  },
  {
    title: "Portable Cabin",
    slug: "portable-cabin",
    image: "/images/A2.jpg",
    category: "Modular Solutions",
  },
  {
    title: "Office Interior",
    slug: "office-interior",
    image: "/images/A3.jpg",
    category: "Interior",
  },
  {
    title: "Wooden Flooring",
    slug: "wooden-flooring",
    image: "/images/A4.jpg",
    category: "Flooring",
  },
  {
    title: "Structural Fabrication",
    slug: "structural-fabrication",
    image: "/images/A5.jpg",
    category: "Engineering",
  },
  {
    title: "Assembly Line",
    slug: "assembly-line",
    image: "/images/A6.jpg",
    category: "Manufacturing",
  },
  {
    title: "Turnkey Project",
    slug: "turnkey-project",
    image: "/images/A7.jpg",
    category: "Industrial",
  },
  {
    title: "Commercial Project",
    slug: "commercial-project",
    image: "/images/A8.jpg",
    category: "Construction",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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

        <div className="absolute left-0 bottom-0 h-[420px] w-[420px] rounded-full bg-orange-500/5 blur-[140px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 font-semibold uppercase tracking-[3px] text-orange-600">
            Our Projects
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

            Our Recent

            <br />

            Engineering Projects

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

            Explore some of our completed industrial,
            commercial and engineering projects delivered
            with precision, quality and professional execution.

          </p>

        </div>

        
               {/* Projects Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white/80 backdrop-blur-md shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(15,23,42,.18)]"
            >
              {/* Image */}

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white backdrop-blur-md">
                  {project.category}
                </span>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900 transition group-hover:text-orange-600">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  Professional engineering execution with precision,
                  quality workmanship and timely project delivery.
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-8 inline-flex items-center gap-3 font-semibold text-orange-600 transition group-hover:gap-4"
                >
                  View Details

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-white">
                    →
                  </span>

                </Link>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 overflow-hidden rounded-[36px] border border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-12 lg:p-16 shadow-[0_25px_60px_rgba(15,23,42,.45)]">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 font-semibold uppercase tracking-[3px] text-orange-300">
                Start Your Project
              </span>

              <h3 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">
                Let's Build Your Next Project Together
              </h3>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Whether you need industrial fabrication,
                structural steel works, modular office interiors,
                portable cabins, PUF panels, glass partitions or
                complete turnkey engineering solutions,
                Accutech Manufacturing delivers every project
                with precision, reliability and on-time execution.
              </p>

            </div>

            <div className="flex lg:justify-end">

              <a
                href="https://wa.me/917385851083"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-10 py-5 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-2xl"
              >
                💬 Discuss Your Project
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}