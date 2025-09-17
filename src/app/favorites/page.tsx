"use client";

import Link from "next/link";
import useFavorites from "../hooks/useFavorites";
import { artworks } from "../data/artworks";

type Art = typeof artworks[number];

function getItems(o: unknown): Art[] {
  const a = o as { favorites?: Art[]; list?: Art[] };
  return a.favorites ?? a.list ?? [];
}

function getRemove(o: unknown): (id: string) => void {
  const a = o as { remove?: (id: string) => void };
  return a.remove ?? (() => {});
}

export default function FavoritesPage() {
  const fav = useFavorites();
  const items = getItems(fav);
  const remove = getRemove(fav);
  const hasItems = items.length > 0;

  return (
    <main className="min-h-screen bg-black">
      <section className="mx-auto max-w-6xl px-4 py-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-wide text-white">Your Favorites</h1>
          <p className="mt-2 text-neutral-400">Keep track of the digital artworks you love most</p>
        </header>

        {!hasItems ? (
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-6 text-center">
            <p className="text-neutral-300">
              You haven’t saved anything yet. Go to the{" "}
              <Link href="/gallery" className="underline underline-offset-4">Gallery</Link>{" "}
              and tap ♡ Favorite on pieces you like.
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {items.map((art) => (
              <div key={art.id} className="bg-neutral-900 border border-neutral-800 rounded-2xl p-3 flex flex-col gap-3">
                <div className="aspect-square overflow-hidden rounded-xl bg-neutral-800">
                  <img src={art.image} alt={art.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-white font-semibold">{art.title}</p>
                  <button
                    onClick={() => remove(art.id)}
                    className="px-3 py-1 rounded-full text-sm border text-white border-neutral-600 hover:border-white transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
