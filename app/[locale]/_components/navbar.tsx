"use client";

import { LanguageToggle } from "@/components/language-toggle";

type NavLinkItem = {
  title: string;
  image: string;
  items: Record<string, string>;
};

const NAVBAR_LINKS: (NavLinkItem | string)[] = [
  {
    title: "A propos",
    image: "",
    items: {
      "0": "Stage",
      "1": "Équipe",
    },
  },
  {
    title: "Solutions",
    image: "",
    items: {
      "0": "EASM",
      "1": "Outils",
      "2": "Open source",
    },
  },
  "Documentation",
];

function NavbarItem({ link }: { link: NavLinkItem | string }) {
  // Simple string entry: no dropdown, just a link
  if (typeof link === "string") {
    return (
      <a
        href="#"
        className="relative text-sm text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-200 hover:after:w-full"
      >
        {link}
      </a>
    );
  }

  const entries = Object.entries(link.items);

  return (
    <div className="group relative">
      <button
        type="button"
        className="relative text-sm text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-200 group-hover:after:w-full group-hover:text-foreground"
      >
        {link.title}
      </button>

      <div className="absolute left-1/2 top-full hidden -translate-x-1/2 pt-3 group-hover:flex">
        <div className="min-w-48 rounded-lg border bg-background p-2 shadow-lg">
          <div className="flex flex-col">
            {entries.map(([key, label]) => (
              <a
                key={key}
                href="#"
                className="rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div>logo</div>

      <div className="flex items-center gap-8">
        {NAVBAR_LINKS.map((link, i) => (
          <NavbarItem key={typeof link === "string" ? link : link.title + i} link={link} />
        ))}
      </div>

      <div>
        <LanguageToggle />
      </div>
    </nav>
  );
}