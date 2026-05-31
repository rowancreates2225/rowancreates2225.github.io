import { createFileRoute } from "@tanstack/react-router";
import bison from "@/assets/bison.jpg";
import creditMobilier from "@/assets/credit-mobilier.png";

export const Route = createFileRoute("/impact")({
  component: Impact,
  head: () => ({
    meta: [
      { title: "Impact & Legacy | Transcontinental Railroad" },
      { name: "description", content: "Economic, social, and political consequences of the Transcontinental Railroad from 1869 through the end of the century." },
    ],
  }),
});

function Impact() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Impact & Legacy</p>
      <h1 className="text-4xl md:text-5xl text-primary mb-6">What the Rails Actually Changed</h1>

      <p className="text-lg leading-relaxed mb-6">
        The railroad finished in 1869, but most of its real effects show up in the next twenty-something years. Here's how we'd
        break it down:
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { h: "A real national economy", p: "Wheat from Kansas, cattle from Texas, lumber from Oregon, and finished goods from the East could finally move on the same network. This is the backbone of the Gilded Age industrial boom." },
          { h: "The West filled up fast", p: "Towns popped up at every depot. Combined with the Homestead Act of 1862, the railroad is a big reason the 1890 Census officially declared the frontier 'closed.'" },
          { h: "Disaster for Native nations", p: "Railroads brought hunters who nearly wiped out the bison, and the U.S. broke treaty after treaty to clear land for tracks. The Plains Indian Wars escalate directly because of this." },
          { h: "Crédit Mobilier scandal (1872)", p: "Union Pacific insiders set up a fake construction company to overcharge the government and bribed members of Congress. It pushed public opinion toward railroad regulation." },
          { h: "Standard time zones (1883)", p: "Railroad schedules were impossible with every town using its own solar time, so the railroads themselves imposed the four U.S. time zones we still use." },
          { h: "Chinese Exclusion Act (1882)", p: "Within 13 years of finishing the line, the same Chinese workers who built it were the target of the first U.S. law to ban a specific nationality from immigrating." },
        ].map((c) => (
          <div key={c.h} className="bg-card border border-border p-5 rounded shadow-sm">
            <h3 className="text-lg text-primary mb-1">{c.h}</h3>
            <p className="text-foreground/80 text-sm leading-relaxed">{c.p}</p>
          </div>
        ))}
      </div>

      <figure className="max-w-xl mx-auto mb-8">
        <img src={bison} alt="A herd of American bison, the species nearly driven to extinction in the decades after the railroad opened the Plains" loading="lazy" className="w-full rounded shadow border border-border" />
        <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
          American bison, photographed c. 1905. Tens of millions of bison were reduced to a few hundred within a generation of the railroad's completion — a deliberate strategy to break Plains Indian nations who depended on them. Public domain (Library of Congress).
        </figcaption>
      </figure>

      <figure className="max-w-md mx-auto mb-8">
        <img src={creditMobilier} alt="Thomas Nast political cartoon depicting members of Congress implicated in the Crédit Mobilier scandal" loading="lazy" className="w-full rounded shadow border border-border bg-white" />
        <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
          "An Eye Only to the Public Good." Thomas Nast cartoon for <em>Harper's Weekly</em>, 1873, on the Crédit Mobilier scandal — Union Pacific insiders overcharged the government and bribed members of Congress with discounted stock. Public domain (Library of Congress).
        </figcaption>
      </figure>

      <h2 className="text-2xl text-primary mb-3">Conclusion</h2>
      <p className="text-lg leading-relaxed mb-4">
        It’s easy to label the Transcontinental Railroad as purely "good" or "bad," but history is rarely that neat. While it catalyzed modern America by establishing an integrated economy, standard time zones, and rapid cross-country travel, this progress came at a profound cost. The project was funded by massive public land grants, built by immigrant laborers later excluded from the country, and devastating to Plains Indian nations.
      </p>
      <p className="text-lg leading-relaxed">
        Ultimately, the railroad served as a case study for Gilded Age progress, relying on substantial public subsidies, private capital accumulation, marginalized labor, and a systemic disregard for anyone in its path.
      </p>
    </main>
  );
}
