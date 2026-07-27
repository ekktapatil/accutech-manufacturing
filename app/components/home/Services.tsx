"use client";

import Image from "next/image";

const services = [
  {
    title: "Structural Fabrication",
    image: "/images/structural-fabrication.jpg",
    desc: "Heavy steel fabrication and industrial structural solutions.",
  },
  {
    title: "Office Interiors",
    image: "/images/office-interior.jpg",
    desc: "Modern office spaces designed with functionality and aesthetics.",
  },
  {
    title: "Industrial Assembly",
    image: "/images/assembly-line.jpg",
    desc: "High-quality manufacturing and industrial assembly services.",
  },
  {
    title: "Turnkey Projects",
    image: "/images/hero.jpg",
    desc: "Complete design, fabrication and installation under one roof.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center">

          <span className="inline-block px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold tracking-[3px] uppercase">
            Our Services
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Engineering Services
            <br />
            We Provide
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">
            From industrial fabrication to turnkey infrastructure,
            Accutech Manufacturing provides complete engineering
            solutions tailored to your business requirements.
          </p>

        </div>

        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute bottom-6 left-6">

                  
                </div>

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.desc}
                </p>

                
              </div>

            </div>
          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-slate-900 to-slate-800 p-10 lg:p-16 text-center">

          <h3 className="text-4xl font-black text-white">
            Need a Custom Engineering Solution?
          </h3>

          <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-slate-300">
            Whether you need industrial fabrication, structural steel work, modular office interiors,
portable cabins, PUF panels, glass partitions, turnkey execution, or custom engineering
solutions, Accutech Manufacturing is ready to deliver high-quality work with precision,
reliability, and on-time execution.

Let's discuss your project today.
          </p>

         <a
  href="https://wa.me/917385851083?text=Hello%20Accutech%20Manufacturing,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20engineering%20and%20fabrication%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
>
  💬 WhatsApp Now
</a>

        </div>

      </div>

    </section>
  );
}