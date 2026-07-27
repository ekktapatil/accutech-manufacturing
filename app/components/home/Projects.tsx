"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Industrial Fabrication",
    slug: "industrial-fabrication",
    image: "/images/hero.jpg",
    category: "Steel Structure",
  },
  {
    title: "Office Interior",
    slug: "office-interior",
    image: "/images/office-interior.jpg",
    category: "Interior",
  },
  {
    title: "Structural Fabrication",
    slug: "structural-fabrication",
    image: "/images/structural-fabrication.jpg",
    category: "Engineering",
  },
  {
    title: "Assembly Line",
    slug: "assembly-line",
    image: "/images/assembly-line.jpg",
    category: "Manufacturing",
  },
  {
    title: "Turnkey Project",
    slug: "turnkey-project",
    image: "/images/assembly-workstation.jpg",
    category: "Industrial",
  },
  {
    title: "Commercial Project",
    slug: "commercial-project",
    image: "/images/main.jpg",
    category: "Construction",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-600">
            Our Projects
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Our Recent
            <br />
            Engineering Projects
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-600">
            Explore some of our completed industrial,
            commercial and engineering projects delivered
            with precision and quality.
          </p>
        </div>

        {/* Projects Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}

              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-orange-600 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-white">
                  {project.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  Professional engineering execution with precision,
                  quality workmanship and timely project delivery.
                </p>

               <Link
  href={`/projects/${project.slug}`}
  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
>
  View Details
  <span>→</span>
</Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-white p-12 shadow-xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-4xl font-black text-slate-900">
                Let's Build Your Next Project Together
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Whether you need industrial fabrication, structural
                steel works, modular office interiors, portable cabins,
                PUF panels, glass partitions, or complete turnkey
                engineering solutions, Accutech Manufacturing delivers
                every project with precision, quality, reliability, and
                on-time execution.
              </p>
            </div>

            <div className="flex lg:justify-end">
              <a
                href="https://wa.me/917385851083"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-orange-600 px-10 py-5 text-lg font-semibold text-white transition hover:bg-orange-700"
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