"use client";
import * as React from "react";
import { artworks } from "../data/artworks";

export type Artwork = (typeof artworks)[number];

type FavoritesState = {
  list: Artwork[];
  add: (id: string) => void;
  remove: (id: string) => void;
  isFav: (id: string) => boolean;
};

const STORAGE_KEY = "favorites.v1";

export default function useFavorites(): FavoritesState {
  const [ids, setIds] = React.useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? (JSON.parse(raw) as string[]) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    } catch {}
  }, [ids]);

  const byId = React.useMemo(() => new Map<string, Artwork>(artworks.map((a) => [String(a.id), a])), []);
  const list = React.useMemo(() => ids.map((id) => byId.get(id)).filter(Boolean) as Artwork[], [ids, byId]);

  const add = (id: string) => setIds((prev) => (prev.includes(id) ? prev : [...prev, id]));
  const remove = (id: string) => setIds((prev) => prev.filter((x) => x !== id));
  const isFav = (id: string) => ids.includes(id);

  return { list, add, remove, isFav };
}
