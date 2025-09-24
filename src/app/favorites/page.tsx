"use client";

import Link from "next/link";
import useFavorites from "../hooks/useFavorites";

export default function FavoritesPage() {
  const { list, remove } = useFavorites();
  const has = list.length > 0;

  return (
    <main className="min-h-screen bg-black">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white">Favorites</h1>
          <Link
            href="/gallery"
            className="rounded-md border border-neutral-700 px-3 py-2 text-sm text-white"
          >
            Back to Gallery
          </Link>
        </div>

        {!has && (
          <p className="text-neutral-300">
            No favorites yet. Go to the gallery and add some.
          </p>
        )}

        {has && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {list.map((art) => (
              <div
                key={String(art.id)}
                className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between p-3">
                  <p className="text-white font-semibold">{art.title}</p>
                  <button
                    onClick={() => remove(String(art.id))}
                    className="px-3 py-1 rounded-full text-sm border text-white border-neutral-600 hover:border-white transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
