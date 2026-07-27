import clients from "@/app/data/clients";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Clients() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionTitle
          subtitle="OUR CLIENTS"
          title="Trusted Across Multiple Industries"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((client) => (
            <div
              key={client.id}
              className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}