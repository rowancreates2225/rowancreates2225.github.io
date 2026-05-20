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
    <nav className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border">
      <div className="mx-auto max-w-5xl px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        <Link to="/" className="text-primary font-bold tracking-wide">
          Transcontinental Railroad
        </Link>
        <ul className="flex flex-wrap gap-1 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                className="px-3 py-1.5 rounded hover:bg-secondary transition-colors"
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
