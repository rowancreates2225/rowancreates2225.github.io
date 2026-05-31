import { createFileRoute } from "@tanstack/react-router";
import creditMobilierHarpers from "@/assets/credit-mobilier-harpers.jpg";

export const Route = createFileRoute("/gilded-age")({
  component: GildedAge,
  head: () => ({
    meta: [
      { title: "Gilded Age Politics | Transcontinental Railroad" },
      { name: "description", content: "The Crédit Mobilier scandal, robber barons, and how railroad money corrupted Gilded Age politics." },
    ],
  }),
});

function GildedAge() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Related Topic</p>
      <h1 className="text-4xl md:text-5xl text-primary mb-6">Gilded Age Politics &amp; the Crédit Mobilier Scandal</h1>

      <p className="text-lg leading-relaxed mb-4">
        You can't tell the railroad story without telling the political corruption story that came with it.
        The same federal generosity that made the Transcontinental Railroad possible — bond payments per
        mile, enormous land grants — also created the perfect conditions for one of the largest political
        scandals of the nineteenth century.
      </p>

      <h2 className="text-2xl text-primary mt-6 mb-3">What Crédit Mobilier actually was</h2>
      <p className="text-lg leading-relaxed mb-4">
        Crédit Mobilier of America was a construction company that the directors of the Union Pacific
        secretly owned themselves. The Union Pacific hired Crédit Mobilier to build the railroad, then
        massively overpaid it with federal money. The directors collected the profit on both ends. To
        protect the scheme, Congressman Oakes Ames distributed discounted shares of Crédit Mobilier to
        members of Congress where, in his words, it would "do most good."
      </p>

      <figure className="max-w-md mx-auto mb-8">
        <img
          src={creditMobilierHarpers}
          alt="Harper's Weekly 1873 illustration of members of Congress disgraced by the Crédit Mobilier scandal, confronted by a figure of Justice"
          loading="lazy"
          className="w-full rounded shadow border border-border"
        />
        <figcaption className="text-sm text-muted-foreground mt-2 italic text-center">
          "Every Public Question With an Eye Only to the Public Good." <em>Harper's Weekly</em>, February 1873.
          Justice points to congressmen "Disgraced in the Eye of the Public for owning Crédit Mobilier stock."
          Public domain (Library of Congress).
        </figcaption>
      </figure>

      <h2 className="text-2xl text-primary mb-3">Who got caught</h2>
      <p className="text-lg leading-relaxed mb-4">
        The 1872 election broke the story open. The names attached to the scandal included future
        President James A. Garfield, Vice President Schuyler Colfax, and incoming Vice President Henry
        Wilson. Almost no one was meaningfully punished. Congress formally censured only two of its own
        members, and the careers that survived mostly continued like nothing had happened.
      </p>

      <h2 className="text-2xl text-primary mb-3">Why it matters for our argument</h2>
      <p className="text-lg leading-relaxed mb-4">
        Crédit Mobilier is the proof that the railroad was not just a transportation project — it was a
        political economy. The same logic that built the rails (privatize the profit, socialize the cost)
        is the logic that produced the robber barons, the Tammany machines, and eventually the
        Progressive-era backlash. When Mark Twain coined the phrase "Gilded Age," this is exactly the kind
        of glittering-on-the-outside, rotten-on-the-inside system he was describing.
      </p>

      <p className="text-lg leading-relaxed">
        The scandal also pushed public opinion toward the idea that railroads — and big corporations more
        generally — needed to be <em>regulated</em>. That idea eventually produces the Interstate Commerce
        Act of 1887 and the Sherman Antitrust Act of 1890, both of which are direct descendants of the
        anger Crédit Mobilier created.
      </p>
    </main>
  );
}
