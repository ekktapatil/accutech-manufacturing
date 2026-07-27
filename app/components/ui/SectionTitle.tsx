type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12 text-center">
      {subtitle && (
        <p className="mb-2 font-semibold uppercase tracking-widest text-orange-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-slate-900">
        {title}
      </h2>
    </div>
  );
}