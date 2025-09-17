"use client";

import { useEffect, useState } from "react";
import type { Artwork } from "../data/artworks";

const KEY = "artdrop:favorites:v1";

function useFavorites() {
  const [favorites, setFavorites] = useState<Artwork[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(favorites));
    } catch {}
  }, [favorites]);

  const isFav = (id: string) => favorites.some(a => a.id === id);
  const add = (art: Artwork) =>
    setFavorites(prev => (prev.some(a => a.id === art.id) ? prev : [...prev, art]));
  const remove = (id: string) =>
    setFavorites(prev => prev.filter(a => a.id !== id));

  return { favorites, add, remove, isFav };
}

export default useFavorites;
export { useFavorites };
