import Link from "next/link";
import Image from "next/image";
import { artworks } from "./data/artworks";

export default function Home() {
  const highlights = artworks.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Simple hero (no gradient text) */}
      <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 sm:p-12 dark:border-white/10 dark:bg-[#0f1525]">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Welcome to ArtDrop
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Discover and download unique digital artworks created by independent artists.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section>
        <h2 className="mb-6 text-center text-lg font-medium text-gray-800 dark:text-gray-200">
          Highlights of the week
        </h2>
        <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((a) => (
            <li
              key={a.id}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-[#0f1525]"
            >
              <Image
                src={a.image}
                alt={a.title}
                width={900}
                height={600}
                className="aspect-[4/3] w-full object-cover transition group-hover:scale-[1.02]"
              />
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-medium text-gray-900 dark:text-gray-100">
                    {a.title}
                  </span>{" "}
                  — {a.description ?? "Curated piece from this week’s selection."}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTAs moved below the graphics */}
      <div className="text-center">
        <div className="mt-2 flex items-center justify-center gap-3">
          <Link
            href="/gallery"
            className="rounded-xl bg-gray-900 px-5 py-2.5 text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black"
          >
            Explore Gallery
          </Link>
          <Link
            href="/favorites"
            className="rounded-xl border border-gray-300 px-5 py-2.5 text-gray-800 transition hover:bg-gray-100 dark:text-white dark:border-white/20 dark:hover:bg-white/10"
          >
            View Favorites
          </Link>
        </div>
      </div>
    </div>
  );
}
