import Link from "next/link";
import Image from "next/image";
import { artworks } from "./data/artworks";

export default function Home() {
  const highlights = artworks.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Welcome to ArtDrop</h1>
        <p className="mt-2 text-gray-600">
          Discover and download unique digital artworks created by independent artists
        </p>
      </section>

      <section className="rounded-2xl bg-black px-6 py-10 text-white">
        <h2 className="mb-8 text-center text-lg font-medium">Highlights of the week</h2>
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((a) => (
            <li key={a.id} className="group rounded-2xl bg-neutral-900 p-3 transition hover:bg-neutral-800">
              <Image
                src={a.image}
                alt={a.title}
                width={900}
                height={600}
                className="aspect-[4/3] w-full rounded-xl object-cover transition group-hover:opacity-95"
              />
              <p className="mt-3 text-sm text-neutral-300">
                This piece was designed by <span className="font-medium">{a.author}</span>. It belongs to a series
                dedicated to amplifying the perspective of nature and technology.
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="rounded-xl bg-white px-4 py-2 text-black transition hover:opacity-90">
            Explore Gallery
          </Link>
        </div>
      </section>
    </div>
  );
}
