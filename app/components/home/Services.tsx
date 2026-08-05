"use client";

import Image from "next/image";
import services from "@/app/data/services";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const marqueeServices = [...services, ...services];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white"
      style={{
        backgroundImage: "url('/images/backgrounds/section-blueprint.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
<div className="absolute inset-0 -z-10 bg-slate-950/75" />

      {/* Glow */}
      <div className="absolute -z-10 left-0 top-0 h-[350px] w-[350px] rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute -z-10 right-0 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />

      <Container>
       <div className="text-center mb-14">
   <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 font-semibold uppercase tracking-[3px] text-orange-600">
              OUR SERVICES
            </span>

  <h2 className="mt-6 text-4xl font-bold text-BLACK md:text-5xl">
    Complete Industrial & Portable Cabin Solutions
  </h2>

  <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black-300">
    We provide complete industrial fabrication, portable cabins,
    structural steel, office interiors and turnkey engineering
    solutions with premium quality and precision.
  </p>

          {/* Scrolling Row */}

          <div className="mt-20 overflow-hidden">

            <div className="flex gap-8 animate-marquee w-max">

              {marqueeServices.map((item, index) => (

                <div
                  key={index}
                  className="group relative h-[370px] w-[320px] flex-shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
                >

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                  <div className="absolute left-0 top-0 h-full w-1 bg-orange-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6">

                   

                    <h3 className="mt-4 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-200">
                      {item.description}
                    </p>

                  </div>

                </div>

              ))} 
                          </div>
          </div>

        </div>
      </Container>
    </section>
  );
}