import { createFileRoute } from "@tanstack/react-router";
import mapImg from "@/assets/map.jpg";

export const Route = createFileRoute("/background")({
  component: Background,
  head: () => ({
    meta: [
      { title: "Background | Transcontinental Railroad" },
      { name: "description", content: "Why the United States needed a transcontinental railroad, and how Lincoln and Congress launched the project in 1862." },
    ],
  }),
});

function Background() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Background</p>
      <h1 className="text-4xl md:text-5xl text-primary mb-6">A Country That Couldn't Reach Itself</h1>

      <p className="text-lg leading-relaxed mb-4">
        Before the railroad, getting from New York to California was honestly miserable. You could spend six months in a covered
        wagon, risk yellow fever cutting across Panama, or sail all the way around South America. After the California Gold Rush in
        1848 the West suddenly mattered economically, but the government had almost no way to actually connect to it.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Congress had argued about a transcontinental route for years, mostly about whether it should go through the South or the
        North. The Civil War settled that fight — Southern Democrats walked out, and the remaining Republicans pushed through the
        <strong> Pacific Railway Act of 1862</strong>, which President <strong>Abraham Lincoln</strong> signed. The act chartered two
        private companies, the <strong>Union Pacific</strong> (building west from Omaha) and the <strong>Central Pacific</strong>
        (building east from Sacramento), and basically paid them in two ways:
      </p>

      <ul className="list-disc list-inside text-lg leading-relaxed mb-6 space-y-1">
        <li>Federal government bonds for every mile of track they laid</li>
        <li>Huge grants of public land along the route, which they could sell or develop</li>
      </ul>

      <p className="text-lg leading-relaxed mb-6">
        Our take: this is one of the earliest examples of the federal government using private companies as a tool of national
        policy. Lincoln didn't just want the rails for trade — he wanted to physically tie California and the western territories to
        the Union during a war that was breaking the country apart.
      </p>

      <figure>
        <img src={mapImg} alt="Map showing the Union Pacific and Central Pacific routes meeting at Promontory Summit, Utah" loading="lazy" className="w-full rounded shadow border border-border" />
        <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">
          Route from Omaha to Sacramento. Map adapted from the U.S. National Park Service (public domain).
        </figcaption>
      </figure>
    </main>
  );
}
