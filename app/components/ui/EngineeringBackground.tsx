export default function EngineeringBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <div className="absolute inset-0 bg-white" />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,.18) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15,23,42,.4) 2px, transparent 2px),
            linear-gradient(90deg, rgba(15,23,42,.4) 2px, transparent 2px)
          `,
          backgroundSize: "120px 120px",
        }}
      />

      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/5 blur-[120px]" />

    </div>
  );
}