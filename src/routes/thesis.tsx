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
    </main>
  );
}
