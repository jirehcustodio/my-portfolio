import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-[#222222]">Portfolio</h1>
      <div className="space-x-6 text-[#7B7B7B]">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
