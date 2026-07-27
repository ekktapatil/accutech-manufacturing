import stats from "@/app/data/stats";
import Container from "../ui/Container";

export default function Statistics() {
  return (
    <section className="bg-orange-600 py-16">
      <Container>
        <div className="grid grid-cols-2 gap-8 text-center text-white lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title}>
              <h2 className="text-4xl font-bold">{stat.number}</h2>
              <p className="mt-2 text-lg">{stat.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}