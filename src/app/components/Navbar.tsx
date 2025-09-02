"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">ArtDrop</Link>
        <ul className="flex gap-4 text-sm">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/favorites" className="hover:underline">Favorites</Link></li>
          <li><Link href="/auth" className="hover:underline">Login / Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}
