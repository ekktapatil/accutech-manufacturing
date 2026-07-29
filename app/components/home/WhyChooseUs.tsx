"use client";

import Image from "next/image";

const features = [
  {
    title: "Experienced Engineers",
    desc: "Dedicated engineering professionals delivering quality solutions.",
  },
  {
    title: "Quality Materials",
    desc: "Only premium-grade materials are used in every project.",
  },
  {
    title: "On-Time Delivery",
    desc: "Efficient planning and execution to meet project deadlines.",
  },
  {
    title: "Modern Equipment",
    desc: "Advanced fabrication and manufacturing technologies.",
  },
  {
    title: "Customized Solutions",
    desc: "Every project is designed according to customer requirements.",
  },
  {
    title: "After Sales Support",
    desc: "Reliable support even after successful project completion.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="py-24 bg-white"
       style={{
    backgroundImage: "url('/images/backgrounds/section-blueprint.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="relative">

            <div className="relative h-[700px] rounded-[32px] overflow-hidden shadow-2xl">

              <Image
                src="/images/D1.jpg"
                alt="Engineering"
                fill
                className="object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute bottom-10 left-10 rounded-3xl bg-white p-8 shadow-2xl">

              <h3 className="text-5xl font-black text-orange-600">
                100+
              </h3>

              <p className="mt-2 text-slate-600">
                Projects Successfully Completed
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <span className="inline-block rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-600">
              Why Choose Us
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-slate-900">
              Trusted Engineering
              <br />
              Partner For
              <br />
              Every Industry
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              We combine engineering expertise, premium materials,
              advanced manufacturing and timely execution to
              deliver reliable industrial solutions.
            </p>

            <div className="mt-12 grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
                    ✓
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            
            {/* CTA */}

            <div className="mt-12">

              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                Let's Start Your Project
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
