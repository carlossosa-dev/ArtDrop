"use client";

import ArtworkCard from "../components/ArtworkCard";
import useFavorites from "../hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <main className="min-h-screen bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-black tracking-wide text-white">Your Favorites</h1>
          <p className="mt-2 text-neutral-400">Keep track of the digital artworks you love most</p>
        </header>

        {favorites.length === 0 ? (
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8 text-center">
            <p className="text-neutral-300">
              You haven’t saved anything yet. Go to the <span className="font-semibold">Gallery</span> and tap
              <span className="mx-1">♡ Favorite</span> on pieces you like.
            </p>
          </div>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favorites.map(art => (
              <ArtworkCard key={art.id} art={art} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
