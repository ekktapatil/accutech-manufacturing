"use client";

import Image from "next/image";
import clients from "@/app/data/clients";
import Container from "../ui/Container";
import EngineeringBackground from "../ui/EngineeringBackground";

export default function Clients() {
  const scrollingClients = [...clients, ...clients];

  return (
    <section className="relative overflow-hidden py-28"
     style={{
    backgroundImage: "url('/images/backgrounds/section-blueprint.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
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

        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[320px] w-[320px] rounded-full bg-slate-300/20 blur-[120px]" />

      </div>

      <Container>

        <div className="text-center">

          <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-orange-600">
            Trusted Clients
          </span>

          <h2 className="mt-8 text-4xl font-black text-slate-900 lg:text-5xl">
            Trusted By Industry Leaders
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Accutech Manufacturing proudly collaborates with leading
            automotive, engineering, infrastructure and industrial
            organizations across India, delivering precision,
            quality and dependable engineering solutions.
          </p>

        </div>

      </Container>

           <div className="relative mt-20 overflow-hidden">

        {/* Left Fade */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Right Fade */}

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

        {/* Logo Slider */}

        <div className="flex w-max animate-marquee gap-8">

          {scrollingClients.map((client, index) => (

            <div
              key={index}
              className="group flex h-40 w-60 items-center justify-center rounded-[26px] border border-slate-200 bg-white/80 p-8 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(15,23,42,.18)]"
            >

              <Image
                src={client.logo}
                alt={client.name}
                width={170}
                height={90}
                className="object-contain grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />

            </div>

          ))}

        </div>

      </div>

      {/* Statistics */}

      <Container>

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <div className="rounded-[28px] border border-slate-200 bg-white/80 p-10 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-5xl font-black text-orange-600">
              50+
            </h3>

            <p className="mt-4 text-lg font-medium text-slate-600">
              Industrial Clients
            </p>

          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white/80 p-10 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-5xl font-black text-orange-600">
              100+
            </h3>

            <p className="mt-4 text-lg font-medium text-slate-600">
              Successfully Completed Projects
            </p>

          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white/80 p-10 text-center shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

            <h3 className="text-5xl font-black text-orange-600">
              8+
            </h3>

            <p className="mt-4 text-lg font-medium text-slate-600">
              Years of Engineering Experience
            </p>

          </div>

        </div>

      </Container>

    </section>
  );
}