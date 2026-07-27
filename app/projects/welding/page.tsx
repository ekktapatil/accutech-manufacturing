import Image from "next/image";
import Link from "next/link";

export default function Welding() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">

        <Image
          src="/projects/welding.jpg"
          alt="Welding"
          width={1200}
          height={650}
          className="rounded-2xl shadow-xl w-full object-cover"
        />

        <h1 className="text-5xl font-bold mt-10">
          Welding & Assembly
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Our certified welders provide MIG, TIG and Arc welding services
          for structural fabrication, machinery components and industrial
          assemblies with superior strength and finish.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="bg-white rounded-xl shadow p-8">

            <h2 className="text-2xl font-bold mb-5">
              Capabilities
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>✔ MIG Welding</li>
              <li>✔ TIG Welding</li>
              <li>✔ Arc Welding</li>
              <li>✔ Fabrication</li>
              <li>✔ Assembly</li>
              <li>✔ Quality Inspection</li>
            </ul>

          </div>

          <div className="bg-white rounded-xl shadow p-8">

            <h2 className="text-2xl font-bold mb-5">
              Advantages
            </h2>

            <ul className="space-y-3 text-gray-600">
              <li>• Strong Weld Joints</li>
              <li>• Skilled Technicians</li>
              <li>• Modern Equipment</li>
              <li>• Timely Delivery</li>
              <li>• Industrial Standards</li>
            </ul>

          </div>

        </div>

        <div className="mt-12 flex gap-4">

          <Link
            href="/#contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Get Quote
          </Link>

          <Link
            href="/"
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white"
          >
            Back
          </Link>

        </div>

      </div>
    </section>
  );
}