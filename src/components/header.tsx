import Link from "next/link";

export default function Header() {
  return (
    <div className="absolute z-10 w-full text-white">
      <nav className="relative mx-auto flex flex-wrap items-center justify-between p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
