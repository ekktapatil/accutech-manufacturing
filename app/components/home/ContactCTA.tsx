import Link from "next/link";
import Container from "../ui/Container";

export default function ContactCTA() {
  return (
    <section className="bg-orange-600 py-20 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div>
            <h2 className="text-4xl font-bold">
              Ready to Start Your Next Project?
            </h2>

            <p className="mt-4 max-w-2xl text-lg text-orange-100">
              Whether it's industrial fabrication, office interiors,
              turnkey infrastructure, or custom engineering solutions,
              our team is ready to help.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}