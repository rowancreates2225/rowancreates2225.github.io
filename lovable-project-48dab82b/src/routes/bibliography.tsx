import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/bibliography")({
  component: Bibliography,
  head: () => ({
    meta: [
      { title: "Annotated Bibliography | Transcontinental Railroad" },
      { name: "description", content: "Primary and secondary source annotated bibliography for our APUSH project on the Transcontinental Railroad." },
    ],
  }),
});

function Entry({ citation, annotation }: { citation: string; annotation: string }) {
  return (
    <li className="border-l-2 border-primary/50 pl-4">
      <p className="text-base"><span className="font-semibold">{citation}</span></p>
      <p className="text-sm text-foreground/80 mt-1 italic">{annotation}</p>
    </li>
  );
}

function Bibliography() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2">Annotated Bibliography</p>
      <h1 className="text-4xl md:text-5xl text-primary mb-6">Sources</h1>
      <p className="text-foreground/80 mb-8">
        Citations follow Chicago/Turabian style. Annotations are 2–3 sentences each.
      </p>

      <h2 className="text-2xl text-primary mb-4">Primary Sources</h2>
      <ul className="space-y-5 mb-10">
        <Entry
          citation='Russell, Andrew J. "East and West Shaking Hands at Laying of Last Rail." Photograph. Promontory Summit, Utah, May 10, 1869. Library of Congress, Prints and Photographs Division.'
          annotation="The most famous photograph of the golden spike ceremony. We used it as our cover image, and it also became part of our argument — the Chinese workers who built the hardest section are visibly absent."
        />
        <Entry
          citation='Hart, Alfred A. "Chinese Laborers at Work, Central Pacific Railroad." Photograph, c. 1867. Stanford University Libraries, Department of Special Collections.'
          annotation="One of the few period photographs that clearly documents Chinese workers on the Central Pacific. This source was key for our Construction page because written records about these workers are so limited."
        />
        <Entry
          citation='U.S. Congress. Pacific Railway Act of 1862. 37th Cong., 2nd sess. Approved July 1, 1862.'
          annotation="The actual founding legislation. We read sections about the bond payments and land grants to understand exactly how the government structured the deal with the railroad companies."
        />
        <Entry
          citation='Stanford, Leland. Telegram: "DONE." May 10, 1869. Western Union, transcribed in Sacramento Daily Union, May 11, 1869.'
          annotation="The one-word message sent across the country the moment the spike was driven. We used it to show how the railroad and the telegraph together created a new sense of a connected nation."
        />
      </ul>

      <h2 className="text-2xl text-primary mb-4">Secondary Sources</h2>
      <ul className="space-y-5 mb-10">
        <Entry
          citation="Ambrose, Stephen E. Nothing Like It in the World: The Men Who Built the Transcontinental Railroad, 1863–1869. New York: Simon & Schuster, 2000."
          annotation="A detailed narrative history of the construction. We used it for the Construction page, especially for specifics about the race between the two companies and the Crédit Mobilier scandal."
        />
        <Entry
          citation="Chang, Gordon H. Ghosts of Gold Mountain: The Epic Story of the Chinese Who Built the Transcontinental Railroad. Boston: Houghton Mifflin Harcourt, 2019."
          annotation="A modern history focused specifically on the Chinese workforce. This source pushed our argument toward emphasizing labor and exclusion as central to the railroad's story, not just side notes."
        />
        <Entry
          citation='White, Richard. Railroaded: The Transcontinentals and the Making of Modern America. New York: W. W. Norton, 2011.'
          annotation="An analytical history of how the railroads reshaped finance, politics, and corruption in the Gilded Age. We relied on it for the Impact page, especially for the link between Crédit Mobilier and later regulation."
        />
        <Entry
          citation='National Park Service. "Golden Spike National Historical Park: Building the Railroad." Last modified 2023. https://www.nps.gov/gosp/learn/historyculture/building-the-railroad.htm.'
          annotation="A reliable overview that we used to double-check dates, mileage, and the route map. The NPS map was the basis for the image on our Background page."
        />
      </ul>
    </main>
  );
}
