import process from "@/app/data/process";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Process() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          subtitle="OUR PROCESS"
          title="How We Execute Every Project"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-white p-8 shadow-lg transition hover:-translate-y-2"
            >
              <div className="mb-6 text-5xl font-bold text-orange-600">
                {item.step}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}