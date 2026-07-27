import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "industrial-fabrication": {
    title: "Industrial Fabrication",
    image: "/images/hero.jpg",
    category: "Steel Structure",
    overview:
      "Accutech Manufacturing provides complete industrial fabrication solutions for factories, warehouses, manufacturing plants, and commercial facilities. We deliver high-quality fabricated structures with precision engineering and timely execution.",

    features: [
      "Heavy Steel Fabrication",
      "Custom Metal Structures",
      "Precision Welding",
      "Industrial Platforms",
      "Machine Base Frames",
      "On-site Installation",
    ],
  },

  "office-interior": {
    title: "Office Interior",
    image: "/images/office-interior.jpg",
    category: "Interior",
    overview:
      "We design and execute modern office interiors with modular furniture, partitions, false ceilings, and complete workspace solutions.",

    features: [
      "Modular Workstations",
      "Glass Partitions",
      "Gypsum Partitions",
      "False Ceiling",
      "Electrical Work",
      "Premium Finishing",
    ],
  },

  "structural-fabrication": {
    title: "Structural Fabrication",
    image: "/images/structural-fabrication.jpg",
    category: "Engineering",
    overview:
      "Complete structural steel fabrication for industrial buildings, warehouses, factories, and commercial infrastructure projects.",

    features: [
      "Steel Structures",
      "Columns & Beams",
      "Roof Trusses",
      "Industrial Sheds",
      "Fabrication & Erection",
      "Quality Inspection",
    ],
  },

  "assembly-line": {
    title: "Assembly Line",
    image: "/images/assembly-line.jpg",
    category: "Manufacturing",
    overview:
      "Installation and setup of industrial assembly lines with accurate alignment, testing, and commissioning.",

    features: [
      "Machine Installation",
      "Production Line Setup",
      "Equipment Alignment",
      "Testing",
      "Commissioning",
      "Maintenance Support",
    ],
  },

  "turnkey-project": {
    title: "Turnkey Project",
    image: "/images/hero.jpg",
    category: "Industrial",
    overview:
      "From planning and design to execution and final handover, we deliver complete turnkey engineering projects.",

    features: [
      "Planning",
      "Design",
      "Procurement",
      "Execution",
      "Quality Control",
      "Project Handover",
    ],
  },

  "commercial-project": {
    title: "Commercial Project",
    image: "/images/office-interior.jpg",
    category: "Construction",
    overview:
      "Professional commercial construction and engineering services with a focus on quality, safety, and timely completion.",

    features: [
      "Commercial Buildings",
      "Office Fit-Out",
      "Structural Works",
      "MEP Services",
      "Interior Finishing",
      "Project Management",
    ],
  },
};

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <Link
          href="/#projects"
          className="inline-flex items-center text-orange-600 font-semibold hover:underline"
        >
          ← Back to Projects
        </Link>

        <div className="mt-8 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-10">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            {project.category}
          </span>

          <h1 className="mt-6 text-5xl font-black text-slate-900">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {project.overview}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Project Features
            </h2>

            <ul className="mt-6 space-y-4">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-green-600 text-xl">✔</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">

            <h3 className="text-2xl font-bold text-slate-900">
              Need This Service?
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Contact Accutech Manufacturing today to discuss your project
              requirements. Our experienced team is ready to provide
              reliable engineering and fabrication solutions tailored to
              your needs.
            </p>

            <a
              href="https://wa.me/917385851083?text=Hello%20Accutech%20Manufacturing,%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
            >
              💬 Contact on WhatsApp
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}