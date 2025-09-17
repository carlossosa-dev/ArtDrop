"use client";

import { useMemo, useState } from "react";
import { artworks } from "../data/artworks";
import { useFavorites } from "../hooks/useFavorites";

type Art = typeof artworks[number];

function Card({ art }: { art: Art }) {
  const { add, remove, isFav } = useFavorites();
  const favored = isFav(art.id);

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-3 flex flex-col gap-3">
      <div className="aspect-square overflow-hidden rounded-xl bg-neutral-800">
        <img src={art.image} alt={art.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white font-semibold">{art.title}</p>
        </div>
        <button
          onClick={() => (favored ? remove(art.id) : add(art))}
          className={`px-3 py-1 rounded-full text-sm border transition ${favored ? "bg-white text-black border-white" : "text-white border-neutral-600 hover:border-white"}`}
        >
          {favored ? "♥ Saved" : "♡ Favorite"}
        </button>
      </div>
    </div>
  );
}

const CATEGORIES = ["All", "Wallpapers", "Posters", "Illustration"];

export default function GalleryPage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");

  const filtered = useMemo(() => {
    return artworks.filter((a) => {
      const matchCat = cat === "All" || a.category === cat;
      const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, cat]);

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-wide text-white">Gallery</h1>
        </header>

        <div className="mb-6">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="w-full rounded-full bg-neutral-900 border border-neutral-700 px-5 py-3 text-white placeholder-neutral-500 outline-none"
          />
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-1.5 rounded-full border text-sm transition ${
                cat === c ? "bg-white text-black border-white" : "text-white border-neutral-700 hover:border-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((art) => (
            <Card key={art.id} art={art} />
          ))}
        </section>
      </div>
    </main>
  );
}
