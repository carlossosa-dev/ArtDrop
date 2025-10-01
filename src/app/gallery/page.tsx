"use client";

import * as React from "react";
import ArtworkCard from "../components/ArtworkCard";
import { artworks } from "../data/artworks";
import useFavorites from "../hooks/useFavorites";

type DataArtwork = {
  id: string;
  title: string;
  image: string;
  priceUSD: number;
  category: "Wallpapers" | "Posters" | "Illustration";
  author?: string;
};

const CATEGORIES = ["All", "Wallpapers", "Posters", "Illustration"] as const;
type Category = (typeof CATEGORIES)[number];

export default function GalleryPage() {
  const [search, setSearch] = React.useState<string>("");
  const [cat, setCat] = React.useState<Category>("All");

  const { add, remove, isFav } = useFavorites();

  const filtered = React.useMemo<DataArtwork[]>(() => {
    const q = search.toLowerCase();
    const src: DataArtwork[] = artworks as unknown as DataArtwork[];
    return src.filter((a) => {
      const matchCat = cat === "All" || a.category === cat;
      const matchSearch = a.title.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, cat]);

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-black tracking-wide text-white">Gallery</h1>
          <p className="mt-2 text-neutral-300 text-sm">Filter by category or search by title.</p>
        </header>

        <div className="mb-6">
          <input
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
            placeholder="Search artworks…"
            className="w-full rounded-full bg-neutral-900 border border-neutral-700 px-5 py-3 text-white placeholder-neutral-500 outline-none"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`px-4 py-1.5 rounded-full border text-sm transition ${
                cat === c ? "bg-white text-black border-white" : "text-white border-neutral-700 hover:border-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filtered.map((a) => {
            const id = String(a.id);
            const fav = isFav(id);
            return (
              <ArtworkCard
                key={id}
                art={{ id, title: a.title, image: a.image, priceUSD: a.priceUSD }}
                showFav
                isFav={fav}
                onToggleFavorite={(artId: string) => (fav ? remove(artId) : add(artId))}
              />
            );
          })}
        </section>
      </div>
    </main>
  );
}
