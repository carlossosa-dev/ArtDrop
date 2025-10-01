export type Artwork = {
  id: number;
  title: string;
  author: string;
  image: string;
  category: "Wallpapers" | "Posters" | "Illustration";
  priceUSD?: number;
};

export const artworks: Artwork[] = [
  { id: 1, title: "Forest Lines",  author: "ArtDrop", image: "https://picsum.photos/seed/ad1/900/600", category: "Wallpapers",   priceUSD: 2.99 },
  { id: 2, title: "Neon Echo",     author: "ArtDrop", image: "https://picsum.photos/seed/ad2/900/600", category: "Illustration", priceUSD: 3.49 },
  { id: 3, title: "Granite Sky",   author: "ArtDrop", image: "https://picsum.photos/seed/ad3/900/600", category: "Posters",      priceUSD: 4.99 },
  { id: 4, title: "Glass Wave",    author: "ArtDrop", image: "https://picsum.photos/seed/ad4/900/600", category: "Wallpapers",   priceUSD: 2.49 },
  { id: 5, title: "Aurora Mesh",   author: "ArtDrop", image: "https://picsum.photos/seed/ad5/900/600", category: "Illustration", priceUSD: 3.99 },
  { id: 6, title: "Signal Dust",   author: "ArtDrop", image: "https://picsum.photos/seed/ad6/900/600", category: "Posters",      priceUSD: 4.49 },
];
