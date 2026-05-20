import { createFileRoute } from "@tanstack/react-router";
import promontory from "@/assets/promontory.jpg";
import workers from "@/assets/workers.jpg";
import locomotive from "@/assets/locomotive.jpg";
import mapImg from "@/assets/map.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Transcontinental Railroad | APUSH Study Guide" },
      { name: "description", content: "An APUSH study resource on the Transcontinental Railroad (1863–1869): causes, key figures, labor, impact, and legacy." },
    ],
  }),
});

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-4xl px-6 py-16 border-t border-border/60">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl text-primary mb-6">{title}</h2>
      <div className="prose-lg space-y-4 text-foreground/90 leading-relaxed text-lg">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={promontory} alt="Two locomotives meeting at Promontory Summit, 1869" width={1536} height={864} className="h-full w-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-32 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">APUSH · Period 6 · 1865–1898</p>
          <h1 className="text-5xl md:text-7xl text-primary font-bold mb-6 drop-shadow">The Transcontinental Railroad</h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto italic">
            “The greatest engineering feat of the nineteenth century” — uniting a fractured nation with iron rails from sea to shining sea.
          </p>
          <div className="mt-10 flex justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground">1863–1896</span>
            <span className="px-4 py-2 rounded-full border border-primary/40 text-primary">1,912 miles</span>
            <span className="px-4 py-2 rounded-full border border-primary/40 text-primary">2 companies</span>
          </div>
        </div>
      </header>

      <Section eyebrow="Background" title="A Nation Divided by Distance">
        <p>
          Before 1869, traveling from New York to California meant a six-month wagon journey, a perilous trek across Panama, or a long
          voyage around Cape Horn. The discovery of gold in California (1848) and the political pressure of westward expansion under
          <em> Manifest Destiny</em> made a transcontinental rail link a national priority.
        </p>
        <p>
          With Southern Democrats out of Congress during the Civil War, President <strong>Abraham Lincoln</strong> signed the
          <strong> Pacific Railway Act of 1862</strong>, authorizing two companies — the <strong>Union Pacific</strong> (building west
          from Omaha) and the <strong>Central Pacific</strong> (building east from Sacramento) — to construct the line, backed by
          generous federal land grants and government bonds.
        </p>
      </Section>

      <figure className="mx-auto max-w-5xl px-6">
        <img src={mapImg} alt="Route of the Transcontinental Railroad across the western United States" width={1536} height={896} loading="lazy" className="w-full rounded shadow-lg border border-border" />
        <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">Route from Omaha, Nebraska to Sacramento, California — joined at Promontory Summit, Utah.</figcaption>
      </figure>

      <Section eyebrow="The Workers" title="Iron, Sweat, and Sacrifice">
        <p>
          The Central Pacific employed over <strong>15,000 Chinese immigrants</strong>, who blasted tunnels through the granite of the
          Sierra Nevada with black powder and nitroglycerin. They worked twelve-hour shifts in brutal winters for lower wages than
          white laborers — and hundreds died in avalanches and explosions.
        </p>
        <p>
          The Union Pacific relied on <strong>Irish immigrants, Civil War veterans</strong> (both Union and Confederate), and
          <strong> formerly enslaved African Americans</strong>. Together these laborers laid track across the Great Plains,
          contending with weather, disease, and conflict with Plains Indian nations whose lands the railroad crossed.
        </p>
      </Section>

      <figure className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-6">
        <div>
          <img src={workers} alt="Railroad workers laying track through a mountain cut" width={1280} height={896} loading="lazy" className="w-full rounded shadow-lg border border-border" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Chinese laborers cutting through the Sierra Nevada.</figcaption>
        </div>
        <div>
          <img src={locomotive} alt="A steam locomotive crossing a wooden trestle bridge" width={1280} height={896} loading="lazy" className="w-full rounded shadow-lg border border-border" />
          <figcaption className="text-sm text-muted-foreground mt-2 italic">Steam locomotives opened the West to commerce and settlement.</figcaption>
        </div>
      </figure>

      <Section eyebrow="May 10, 1869" title="The Golden Spike">
        <p>
          At <strong>Promontory Summit, Utah</strong>, Leland Stanford drove a ceremonial <strong>golden spike</strong> joining the
          two lines. A single telegraph word — <em>“DONE”</em> — flashed across the country, setting off celebrations from San
          Francisco to New York. A journey that once took six months now took one week.
        </p>
      </Section>

      <Section eyebrow="Consequences" title="Impact & Legacy">
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          {[
            { h: "Economic Integration", p: "Created a true national market — wheat, beef, lumber, and manufactured goods moved coast to coast, fueling the Gilded Age." },
            { h: "Settlement of the West", p: "Towns sprang up along the line. The 1890 Census declared the frontier 'closed.'" },
            { h: "Devastation of Native Nations", p: "Bison herds were decimated and treaties broken, accelerating the dispossession of Plains Indians." },
            { h: "Corruption & Reform", p: "The Crédit Mobilier scandal (1872) exposed graft, fueling calls for railroad regulation." },
            { h: "Standard Time Zones", p: "Railroads imposed the four U.S. time zones in 1883 to coordinate schedules." },
            { h: "Immigrant Labor & Backlash", p: "Chinese contributions were soon repaid with the Chinese Exclusion Act of 1882." },
          ].map((c) => (
            <div key={c.h} className="bg-card border border-border p-6 rounded shadow-sm">
              <h3 className="text-xl text-primary mb-2">{c.h}</h3>
              <p className="text-foreground/80">{c.p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="APUSH Connections" title="Key Terms to Know">
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-base">
          <li>Pacific Railway Act (1862)</li>
          <li>Union Pacific & Central Pacific</li>
          <li>Promontory Summit, Utah</li>
          <li>Golden Spike (May 10, 1869)</li>
          <li>Crédit Mobilier Scandal</li>
          <li>Chinese Exclusion Act (1882)</li>
          <li>Manifest Destiny</li>
          <li>Plains Indian Wars</li>
          <li>Homestead Act (1862)</li>
          <li>Gilded Age industrialization</li>
        </ul>
      </Section>

      <footer className="border-t border-border/60 mt-12 py-10 text-center text-sm text-muted-foreground">
        <p>Made by Rowan Sellers and Lazare Imedashvili</p>
      </footer>
    </main>
  );
}
