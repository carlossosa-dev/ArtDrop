export default function About() {
  const steps = ["Sign Up or Log In", "Explore the Gallery", "Save Your Favorites", "Download Previews", "Come Back Anytime"];

  return (
    <section className="space-y-12">
      <header className="text-center">
        <h1 className="text-3xl font-bold">About ArtDrop</h1>
      </header>

      <div className="rounded-2xl bg-black p-6 md:p-10">
        <div className="mx-auto grid max-w-6xl items-start gap-10 md:grid-cols-[280px_1fr]">
          <ol className="relative mx-auto w-full max-w-xs md:mx-0">
            {steps.map((s, i) => (
              <li key={s} className="flex items-center gap-4">
                <div className="flex h-28 flex-col items-center">
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-gray-300 text-center text-sm font-semibold text-black">
                    {s}
                  </div>
                  {i < steps.length - 1 && <span className="h-16 w-px bg-gray-400" />}
                </div>
              </li>
            ))}
          </ol>

          <div className="space-y-10">
            <div className="rounded-xl bg-gray-300/70 p-2">
              <div className="aspect-[4/3] w-full rounded-lg bg-gray-200" />
            </div>
            <div className="rounded-xl bg-gray-300/70 p-2">
              <div className="aspect-[4/3] w-full rounded-lg bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
