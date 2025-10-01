import Image from "next/image";

export default function About() {
  const steps = [
    { t: "Sign Up or Log In", d: "Create an account to sync your likes across devices." },
    { t: "Explore the Gallery", d: "Browse curated drops and filter by category." },
    { t: "Save Your Favorites", d: "Tap the heart on any artwork to collect it." },
    { t: "Download Previews", d: "Grab preview sizes for inspiration and moodboards." },
    { t: "Come Back Anytime", d: "Your favorites list is always waiting for you." },
  ];

  return (
    <section className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight">About ArtDrop</h1>
        <p className="mt-2 text-gray-600">How ArtDrop works and what you can do with it.</p>
      </header>

      <div className="rounded-3xl bg-black p-6 text-white md:p-10">
        <div className="mx-auto grid w-full max-w-4xl items-start gap-10 md:grid-cols-[360px_auto]">
          <ol className="relative mx-auto w-full max-w-sm text-center">
            <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/15" />
            {steps.map((s, i) => (
              <li key={s.t} className="relative flex flex-col items-center gap-1 py-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-black text-sm font-semibold shadow-sm">
                  {i + 1}
                </div>
                <p className="mt-1 text-base font-medium">{s.t}</p>
                <p className="text-sm text-white/70 max-w-[18rem]">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="grid grid-cols-1 gap-4 justify-items-center">
            <figure className="relative w-[320px] overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image
                src="https://picsum.photos/seed/about1/1200/800"
                alt="Curated gallery layout"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="absolute bottom-1 left-1 rounded bg-black/60 px-2 py-0.5 text-[10px] leading-none backdrop-blur">
                Curated gallery layout
              </figcaption>
            </figure>

            <figure className="relative w-[320px] overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image
                src="https://picsum.photos/seed/about2/1200/800"
                alt="Favorites collection"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="absolute bottom-1 left-1 rounded bg-black/60 px-2 py-0.5 text-[10px] leading-none backdrop-blur">
                Favorites collection
              </figcaption>
            </figure>

            <figure className="relative w-[320px] overflow-hidden rounded-xl ring-1 ring-white/10">
              <Image
                src="https://picsum.photos/seed/about3/1200/800"
                alt="Community showcases"
                width={1200}
                height={800}
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="absolute bottom-1 left-1 rounded bg-black/60 px-2 py-0.5 text-[10px] leading-none backdrop-blur">
                Community showcases
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
