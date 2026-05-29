import { createFileRoute } from "@tanstack/react-router";
import workers from "@/assets/workers.jpg";
import locomotive from "@/assets/locomotive.jpg";
import goldenSpike from "@/assets/golden-spike.webp";

export const Route = createFileRoute("/construction")({
  component: Construction,
  head: () => ({
    meta: [
      { title: "Construction | Transcontinental Railroad" },
      { name: "description", content: "The workers, conditions, and race between the Central Pacific and Union Pacific to finish the line." },
    ],
  }),
});

function Construction() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Construction</p>
      <h1 className="text-4xl md:text-5xl text-primary mb-6">Two Companies, Two Very Different Workforces</h1>

      <p className="text-lg leading-relaxed mb-4">
        The Central Pacific had the harder physical job. They had to blast through the granite walls of the Sierra Nevada, and they
        ended up doing it with about <strong>15,000 Chinese immigrant workers</strong>. These workers were paid less than white
        laborers, lived in separate camps, and were the ones lowered down cliffs in baskets to set black-powder charges. Hundreds
        died from explosions, avalanches, and exposure, and a lot of the names were never recorded.
      </p>

      <figure className="mb-6">
        <img src={workers} alt="Crews of laborers laying rail through a mountain cut in the Sierra Nevada" loading="lazy" className="w-full rounded shadow border border-border" />
        <figcaption className="text-sm text-muted-foreground mt-2 italic">
          Central Pacific work crew, Sierra Nevada. Photo by Alfred A. Hart, c. 1867. Public domain (Stanford Libraries).
        </figcaption>
      </figure>

      <p className="text-lg leading-relaxed mb-4">
        The Union Pacific built across the Plains, which was flatter but came with its own problems: weather, disease, and conflict
        with Plains Indian nations whose land the railroad was crossing without consent. Their workforce was mostly
        <strong> Irish immigrants, Civil War veterans</strong> from both sides, and <strong>formerly enslaved African Americans</strong>
        who had come west looking for work after the war.
      </p>

      <p className="text-lg leading-relaxed mb-4">
        Both companies were paid by the mile, so they cut corners. There are stretches where the Union Pacific laid bad track just
        to claim the bond money, and a few miles even had to be rebuilt later. The two crews famously kept building past each other
        for a while before Congress made them stop at <strong>Promontory Summit, Utah</strong>.
      </p>

      <figure className="mb-6">
        <img src={locomotive} alt="A 19th-century steam locomotive crossing a wooden trestle bridge" loading="lazy" className="w-full rounded shadow border border-border" />
        <figcaption className="text-sm text-muted-foreground mt-2 italic">
          Early steam locomotive on a wooden trestle. Photo from the Andrew J. Russell collection, c. 1868. Public domain.
        </figcaption>
      </figure>

      <h2 className="text-2xl text-primary mt-8 mb-3">May 10, 1869: The Golden Spike</h2>
      <p className="text-lg leading-relaxed">
        At Promontory Summit, Leland Stanford drove a ceremonial <strong>golden spike</strong> that joined the two lines. A
        telegraph operator sent one word — <em>"DONE"</em> — and cities across the country celebrated. A trip that used to take six
        months now took about a week. What stood out to us reading about the ceremony: the Chinese workers who actually built the
        hardest section were left out of the famous photo. That detail says a lot about how the country chose to remember the
        project.
      </p>

      <figure className="mt-6">
        <img src={goldenSpike} alt="The East and West shaking hands at the laying of the last rail, Promontory Summit, May 10, 1869" loading="lazy" className="w-full rounded shadow border border-border" />
        <figcaption className="text-sm text-muted-foreground mt-2 italic">
          "East and West Shaking Hands at the Laying of the Last Rail." Photo by Andrew J. Russell, May 10, 1869. Public domain (Yale Beinecke Library).
        </figcaption>
      </figure>
    </main>
  );
}
