import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-orange-600 text-white hover:bg-orange-700",
    secondary:
      "border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}