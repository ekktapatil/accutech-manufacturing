import Image from "next/image";
import processGallery from "@/app/data/processGallery";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import EngineeringBackground from "../ui/EngineeringBackground";

export default function Process() {
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

        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/5 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-slate-300/20 blur-[120px]" />

      </div>

      <Container>

        <SectionTitle
          subtitle="DESIGN & ENGINEERING"
          title="From Concept to Complete Execution"
        />

        <p className="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-slate-600">
          We provide complete engineering solutions—from conceptual
          design and detailed mechanical drawings to office planning,
          3D visualization, and manufacturing-ready documentation.
        </p>

        {/* Gallery */}

       <div className="mt-20 space-y-20">
                  {processGallery.map((section) => (
            <div
              key={section.id}
              className="rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-md lg:p-10"
            >
              {/* Header */}

              <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <span className="inline-flex rounded-full bg-orange-600 px-5 py-2 text-sm font-semibold uppercase tracking-[2px] text-white">
                    Engineering Service
                  </span>

                  <h3 className="mt-5 text-3xl font-bold text-slate-900">
                    {section.title}
                  </h3>

                  <p className="mt-4 max-w-3xl leading-8 text-slate-600">
                    {section.description}
                  </p>

                </div>

              </div>

              {/* Images */}

              <div
                className={`grid gap-6 ${
                  section.images.length === 3
                    ? "md:grid-cols-3"
                    : "md:grid-cols-2"
                }`}
              >
                {section.images.map((image, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">

                      <Image
                        src={image}
                        alt={`${section.title} ${index + 1}`}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}