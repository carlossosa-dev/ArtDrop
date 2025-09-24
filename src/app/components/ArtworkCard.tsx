
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
