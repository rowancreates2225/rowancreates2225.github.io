import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/background", label: "Background" },
  { to: "/construction", label: "Construction" },
  { to: "/impact", label: "Impact & Legacy" },
  { to: "/bibliography", label: "Bibliography" },
] as const;

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-background/90 border-b border-border shadow-sm">
      <div className="mx-auto max-w-6xl px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <Link to="/" className="text-primary font-bold tracking-wide text-base">
          Transcontinental Railroad
        </Link>
        <ul className="flex flex-wrap items-center gap-2 text-sm ml-auto">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-primary text-primary-foreground border-primary" }}
                className="px-3 py-1.5 rounded-md border border-border bg-card hover:bg-secondary hover:border-primary/60 transition-colors font-medium"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-12 py-8 text-center text-sm text-muted-foreground">
      <p>Made by Rowan Sellers and Lazare Imedashvili — AP US History</p>
    </footer>
  );
}
