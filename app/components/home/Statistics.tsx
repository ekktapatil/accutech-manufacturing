import stats from "@/app/data/stats";
import Container from "../ui/Container";

export default function Statistics() {
  return (
    <section className="bg-orange-600 py-20"
     style={{
    backgroundImage: "url('/images/backgrounds/section-blueprint.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/20"
            >
              <h2 className="text-5xl font-extrabold text-white">
                {stat.number}
              </h2>

              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-white"></div>

              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-orange-100">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}