type Props = {
  children: React.ReactNode;
};

export default function Card({
  children,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
      {children}
    </div>
  );
}