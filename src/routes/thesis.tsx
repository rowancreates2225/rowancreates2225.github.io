import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/thesis")({
  component: Thesis,
  head: () => ({
    meta: [
      { title: "Thesis | Transcontinental Railroad" },
      { name: "description", content: "Our historical thesis on the Transcontinental Railroad as the engine of the Gilded Age." },
    ],
  }),
});

function Thesis() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Thesis</p>
      <h1 className="text-4xl md:text-5xl text-primary mb-6">Our Historical Argument</h1>

      <blockquote className="border-l-4 border-primary bg-card p-6 rounded-r shadow-sm mb-8">
        <p className="text-xl leading-relaxed text-foreground italic">
          The Transcontinental Railroad, completed in 1869, was not simply a feat of engineering but the
          single most important catalyst of the Gilded Age: by binding the nation into one continental
          market, it accelerated industrial capitalism, opened the West to mass settlement, and
          fundamentally reshaped American politics — but it did so through a system of federal subsidy,
          immigrant labor, and the violent displacement of Native peoples whose consequences defined
          the United States well into the twentieth century.
        </p>
      </blockquote>

      <h2 className="text-2xl text-primary mb-3">What we are arguing</h2>
      <p className="text-lg leading-relaxed mb-4">
        We are arguing that the railroad is the hinge between two Americas. Before 1869 the United States was
        a patchwork of regional economies that mostly could not reach each other in less than a season. After
        1869 it was a continental market with shared time, shared prices, and shared problems. That shift is
        the foundation of everything we associate with the Gilded Age — big corporations, monopoly power,
        political corruption, mass immigration, and the closing of the frontier.
      </p>

      <h2 className="text-2xl text-primary mb-3">Why it matters</h2>
      <p className="text-lg leading-relaxed mb-4">
        The railroad is also our clearest early example of a public-private partnership at national scale.
        Congress handed two corporations enormous land grants and bond subsidies, those corporations hired
        the cheapest labor they could find (Chinese immigrants in the Sierra Nevada, Irish immigrants and
        formerly enslaved African Americans on the Plains), and the federal government cleared the land
        with treaties it then broke. The benefits and the costs were both real, and they were not shared
        equally — which is why we think you can't grade the railroad as simply "good" or "bad."
      </p>

      <h2 className="text-2xl text-primary mb-3">Scope of our project</h2>
      <p className="text-lg leading-relaxed">
        We chose the window <strong>1863–1896</strong> on purpose. 1863 is the first spike; 1896 is roughly
        the end of the political fallout — Crédit Mobilier, the Chinese Exclusion Act, the standardization
        of time zones, and the Census Bureau's declaration that the frontier was "closed." The story does
        not end at Promontory Summit. It ends a generation later, with a country that looks recognizably
        modern.
      </p>
    </main>
  );
}
