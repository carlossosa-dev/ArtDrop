"use client";

export type CardArtwork = {
  id: string | number;
  title: string;
  image: string;
  priceUSD?: number | null;
};

export default function ArtworkCard({
  art,
  showPrice = false,
}: {
  art: CardArtwork;
  showPrice?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
      <div className="aspect-square overflow-hidden">
        <img
          src={art.image}
          alt={art.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between p-3">
        <p className="font-semibold text-white">{art.title}</p>
        {showPrice && typeof art.priceUSD === "number" && (
          <span className="text-sm text-neutral-300">
            ${art.priceUSD.toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
}

"use client";

export type CardArtwork = {
  id: string | number;
  title: string;
  image: string;
  priceUSD?: number | null;
};

export default function ArtworkCard({
  art,
  showPrice = false,
  showFav = false,
  isFav = false,
  onToggleFavorite,
}: {
  art: CardArtwork;
  showPrice?: boolean;
  showFav?: boolean;
  isFav?: boolean;
  onToggleFavorite?: (id: string | number) => void;
}) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={art.image}
          alt={art.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />

        {showPrice && typeof art.priceUSD === "number" && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-gray-900 shadow-sm">
            ${art.priceUSD.toFixed(2)}
          </span>
        )}

        {showFav && (
          <button
            aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
            aria-pressed={isFav}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(art.id);
            }}
            className={`absolute right-3 top-3 rounded-full bg-white/95 p-2 shadow-sm ring-1 ring-black/5 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-300 ${
              isFav ? "text-red-500" : "text-gray-700"
            }`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={isFav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-xl bg-black/60 px-3 py-2 text-sm text-white backdrop-blur">{art.title}</div>
        </div>
      </div>

      <div className="flex items-center justify-between p-3">
        <p className="font-semibold">{art.title}</p>
        {showPrice && typeof art.priceUSD === "number" && (
          <span className="text-sm text-gray-600">${art.priceUSD.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
}

