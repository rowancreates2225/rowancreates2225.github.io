import { createFileRoute, Link } from "@tanstack/react-router";
import promontory from "@/assets/promontory.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "The Transcontinental Railroad (1863–1896) | APUSH Project" },
      { name: "description", content: "An APUSH project by Rowan Sellers and Lazare Imedashvili exploring the building of the Transcontinental Railroad and why it changed the country." },
    ],
  }),
});

function Home() {
  return (
    <main className="min-h-screen">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={promontory} alt="The two locomotives meeting at Promontory Summit in 1869" className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-28 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-5">AP US History · Period 6</p>
          <h1 className="text-5xl md:text-6xl text-primary font-bold mb-5 drop-shadow">The Transcontinental Railroad</h1>
          <p className="text-lg md:text-xl text-foreground/85 max-w-2xl mx-auto">
            How a 1,912-mile line of iron rebuilt the American economy, broke open the West, and left a complicated legacy behind it.
          </p>
          <div className="mt-8 flex justify-center gap-3 text-sm flex-wrap">
            <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground">1863–1896</span>
            <span className="px-4 py-2 rounded-full border border-primary/40 text-primary">Union Pacific + Central Pacific</span>
            <span className="px-4 py-2 rounded-full border border-primary/40 text-primary">Joined May 10, 1869</span>
          </div>
          <p className="mt-6 text-xs text-muted-foreground italic">
            Image: "East and West Shaking Hands at Laying of Last Rail," Andrew J. Russell, 1869. Public domain (Library of Congress).
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="text-3xl text-primary mb-4">Our Argument</h2>
        <p className="text-lg leading-relaxed mb-4">
          When we started this project, we expected the railroad story to mostly be about engineering. It ended up being more about
          people — who paid for it, who built it, and who got pushed out of the way for it. Our argument is that the Transcontinental
          Railroad wasn't just a transportation project. It was the single biggest accelerator of the Gilded Age economy, and it came
          at a real human cost that gets skipped in a lot of textbooks.
        </p>
        <p className="text-lg leading-relaxed">
          We picked 1863 to 1896 as our window because the story doesn't end at the golden spike in 1869. The political fallout
          (Crédit Mobilier), the new time zones, the Chinese Exclusion Act, and the closing of the frontier all happen because of
          what those rails set in motion.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl text-primary mb-4">Where to go next</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { to: "/background" as const, h: "Background", p: "Why the country needed a rail line, and how Congress made it happen." },
            { to: "/construction" as const, h: "Construction", p: "Two companies racing across the country with very different workforces." },
            { to: "/impact" as const, h: "Impact & Legacy", p: "Economic boom, broken treaties, and the scandals that followed." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="block bg-card border border-border p-5 rounded shadow-sm hover:border-primary transition-colors">
              <h3 className="text-lg text-primary mb-1">{c.h}</h3>
              <p className="text-sm text-foreground/80">{c.p}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
