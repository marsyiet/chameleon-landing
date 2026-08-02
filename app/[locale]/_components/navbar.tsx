"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
  if (typeof link === "string") {
    return (
      <a
        href="#"
        className="relative text-base text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-200 hover:after:w-full"
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
        className="relative text-base text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all after:duration-200 group-hover:after:w-full group-hover:text-foreground"
      >
        {link.title}
      </button>

      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
        <div className="pt-3">
          <div className="min-w-64 border bg-background shadow-xl">
            <div className="flex flex-col gap-1">
              {entries.map(([key, label]) => (
                <a
                  key={key}
                  href="#"
                  className="px-4 py-3 text-base font-medium text-foreground/80 hover:bg-muted hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Version pliable pour le menu mobile : pas de hover, un tap déplie/replie */
function MobileNavItem({ link }: { link: NavLinkItem | string }) {
  const [open, setOpen] = useState(false);

  if (typeof link === "string") {
    return (
      <a
        href="#"
        className="block py-3 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
      >
        {link}
      </a>
    );
  }

  const entries = Object.entries(link.items);

  return (
    <div className="border-b last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-3 text-base font-medium text-foreground/80 hover:text-foreground transition-colors"
      >
        {link.title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="flex flex-col gap-1 pb-3 pl-4">
          {entries.map(([key, label]) => (
            <a
              key={key}
              href="#"
              className="rounded-md px-2 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-foreground transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ className }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`relative px-6 py-4 md:px-8 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <img src="/images/demi.png" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Liens : visibles à partir de md */}
        <div className="hidden items-center gap-12 md:flex">
          {NAVBAR_LINKS.map((link, i) => (
            <NavbarItem
              key={typeof link === "string" ? link : link.title + i}
              link={link}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Toggle langue : caché sur mobile, remonté dans le panneau déplié */}
          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          {/* Bouton hamburger : visible uniquement en dessous de md */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border md:hidden"
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Panneau mobile déplié */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-40 border-t bg-background px-6 py-4 shadow-lg md:hidden">
          <div className="flex flex-col">
            {NAVBAR_LINKS.map((link, i) => (
              <MobileNavItem
                key={typeof link === "string" ? link : link.title + i}
                link={link}
              />
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}