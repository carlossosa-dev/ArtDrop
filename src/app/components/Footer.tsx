import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <nav className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <Link href="/about" className="hover:text-gray-900">About</Link>
          <Link
            href="/"
            className="rounded-full border border-gray-300 bg-gray-100 px-4 py-1.5 text-gray-900 font-semibold shadow-sm hover:bg-gray-200"
          >
            ArtDrop
          </Link>
          <Link href="/gallery" className="hover:text-gray-900">Gallery</Link>
          <Link href="/favorites" className="hover:text-gray-900">Favorites</Link>
        </nav>

        <div className="my-6 border-t" />

        <div className="flex justify-center gap-6 text-gray-500">
          <a aria-label="Facebook" href="#" className="hover:text-gray-900">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.7V12h2.7V9.7c0-2.7 1.6-4.2 4-4.2 1.2 0 2.4.2 2.4.2v2.6H15.7c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12z"/></svg>
          </a>
          <a aria-label="YouTube" href="#" className="hover:text-gray-900">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 7.2a3.2 3.2 0 0 0-2.3-2.3C19.3 4.3 12 4.3 12 4.3s-7.3 0-9.2.6A3.2 3.2 0 0 0 .5 7.2C0 9.1 0 12 0 12s0 2.9.5 4.8a3.2 3.2 0 0 0 2.3 2.3c1.9.6 9.2.6 9.2.6s7.3 0 9.2-.6a3.2 3.2 0 0 0 2.3-2.3c.5-1.9.5-4.8.5-4.8s0-2.9-.5-4.8zM9.6 15.6V8.4l6.1 3.6-6.1 3.6z"/></svg>
          </a>
          <a aria-label="Instagram" href="#" className="hover:text-gray-900">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 9.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z"/></svg>
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">© 2025 ArtDrop. All rights reserved.</p>
      </div>
    </footer>
  );
}
