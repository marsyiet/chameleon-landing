"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowUpRight, Menu, ChevronRight, X, ChevronDown, Shield, Globe, Search, Building2, Users, AlertTriangle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { LanguageToggle } from "./language-toggle"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

const navSections = [
  {
    title: "Surface d'attaque",
    featured: {
      title: "Reconnaissance externe",
      description: "Découverte automatisée des actifs exposés depuis des sources OSINT multiples.",
      href: "/asm",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=80",
    },
    items: [
      { title: "Découverte d'actifs",     href: "/asm/discovery",    description: "Scan et énumération du périmètre.",       icon: Search       },
      { title: "Sous-domaines",           href: "/asm/subdomains",   description: "Détection des infrastructures cachées.",   icon: Globe        },
      { title: "Certificats SSL",         href: "/asm/certificates", description: "Inventaire et suivi des certificats.",     icon: Shield       },
      { title: "Exposition des services", href: "/asm/exposure",     description: "Ports ouverts, services mal configurés.", icon: AlertTriangle },
    ],
  },
  {
    title: "Solutions",
    items: [
      { title: "Organisations publiques",   href: "/solutions/government", description: "Cyberdéfense et souveraineté numérique.", icon: Building2    },
      { title: "Équipes SOC",               href: "/solutions/soc",        description: "Surveillance et détection de menaces.",   icon: Users        },
      { title: "CERT / CSIRT",              href: "/solutions/cert",       description: "Opérations de réponse aux incidents.",    icon: Shield       },
      { title: "Infrastructures critiques", href: "/solutions/critical",   description: "Protection des secteurs stratégiques.",   icon: AlertTriangle},
    ],
  },
]

const mobileLinks = [
  {
    section: "Surface d'attaque",
    items: [
      { title: "Découverte d'actifs",     href: "/asm/discovery"    },
      { title: "Sous-domaines",           href: "/asm/subdomains"   },
      { title: "Certificats SSL",         href: "/asm/certificates" },
      { title: "Exposition des services", href: "/asm/exposure"     },
    ],
  },
  {
    section: "Solutions",
    items: [
      { title: "Organisations publiques", href: "/solutions/government" },
      { title: "Équipes SOC",             href: "/solutions/soc"        },
      { title: "CERT / CSIRT",            href: "/solutions/cert"       },
    ],
  },
  {
    section: "Autres",
    items: [
      { title: "Documentation", href: "/docs" },
    ],
  },
]

export default function Navbar() {
  const t = useTranslations("HomePage")
  const [active, setActive] = useState<string | null>(null)
  const activeSection = navSections.find((s) => s.title === active) ?? null

  return (
    <>
    {/* Overlay blur du reste de la page quand le menu est ouvert */}
    <div
      className="fixed inset-0 z-40 transition-all duration-300"
      style={{
        backdropFilter: activeSection ? "blur(4px)" : "blur(0px)",
        WebkitBackdropFilter: activeSection ? "blur(4px)" : "blur(0px)",
        background: activeSection ? "color-mix(in oklch, var(--background) 20%, transparent)" : "transparent",
        pointerEvents: activeSection ? "auto" : "none",
      }}
      onClick={() => setActive(null)}
    />
    <header className="fixed w-full top-0 z-50 px-4 pt-4 pb-1">
      <div className="mx-auto max-w-6xl">
        <nav
          onMouseLeave={() => setActive(null)}
          className="rounded-lg overflow-hidden transition-all duration-300"
          style={{
            background: "color-mix(in oklch, var(--background) 90%, transparent)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            border: "1px solid color-mix(in oklch, var(--border) 60%, transparent)",
            boxShadow: "0 1px 3px color-mix(in oklch, var(--foreground) 6%, transparent), 0 0 0 1px color-mix(in oklch, var(--border) 30%, transparent)",
          }}
        >
          {/* ── Barre principale ── */}
          <div className="flex items-center justify-between h-[52px] px-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "var(--gradient-primary)" }}
              >
                <img src="/globe.svg" alt="Cameleon" className="h-5 w-5 brightness-0 invert" />
              </div>
            </Link>

            {/* Desktop triggers */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navSections.map((section) => (
                <button
                  key={section.title}
                  onMouseEnter={() => setActive(section.title)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    active === section.title
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  )}
                >
                  {section.title}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      active === section.title && "rotate-180"
                    )}
                  />
                </button>
              ))}
              <Link
                href="/docs"
                onMouseEnter={() => setActive(null)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
              >
                Documentation
              </Link>
            </div>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-1 shrink-0">
              <LanguageToggle />
              <Button variant={"default"} asChild className="ml-1 gap-1.5 font-medium text-white">
                <Link href="/sign-in">
                  {t("hero.get-started")}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>

            {/* Mobile actions */}
            <div className="flex items-center gap-1 lg:hidden">
              <LanguageToggle />
              <Button asChild size="sm" className="gap-1.5 font-medium text-white" style={{ background: "var(--gradient-primary)" }}>
                <Link href="/sign-in">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full p-0 flex flex-col border-0"
                  style={{
                    background: "color-mix(in oklch, var(--background) 97%, transparent)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <SheetHeader className="flex-row items-center justify-between px-5 py-4 border-b shrink-0">
                    <SheetTitle asChild>
                      <Link href="/" className="flex items-center gap-2.5">
                        <div
                          className="flex h-7 w-7 items-center justify-center rounded-lg"
                          style={{ background: "var(--gradient-primary)" }}
                        >
                          <img src="/globe.svg" alt="Cameleon" className="h-4 w-4 brightness-0 invert" />
                        </div>
                        <span className="font-semibold text-[15px]">Cameleon</span>
                      </Link>
                    </SheetTitle>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                        <X className="h-4 w-4" />
                      </Button>
                    </SheetClose>
                  </SheetHeader>
                  <div className="flex-1 overflow-y-auto py-2">
                    {mobileLinks.map((group) => (
                      <div key={group.section}>
                        <p className="px-5 pb-1 pt-5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                          {group.section}
                        </p>
                        {group.items.map((item) => (
                          <SheetClose asChild key={item.href}>
                            <Link
                              href={item.href}
                              className="flex items-center justify-between px-5 py-3 text-sm font-medium hover:bg-accent transition-colors"
                            >
                              {item.title}
                              <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="border-t p-4 shrink-0">
                    <SheetClose asChild>
                      <Button
                        asChild
                        className="w-full gap-2 font-medium text-white h-11"
                        style={{ background: "var(--gradient-primary)" }}
                      >
                        <Link href="/sign-in">
                          {t("hero.get-started")}
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* ── Contenu expansible ── */}
          <div
            className="grid transition-all duration-300 ease-in-out"
            style={{ gridTemplateRows: activeSection ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <div className="border-t border-border/50 px-5 pb-6 pt-5">
                {navSections.map((section) => (
                  <div
                    key={section.title}
                    className={cn(
                      "transition-opacity duration-200",
                      active === section.title ? "block opacity-100" : "hidden opacity-0"
                    )}
                  >
                    {section.featured ? (
                      <div className="grid grid-cols-[320px_1fr] gap-6">
                        {/* Image grande */}
                        <Link
                          href={section.featured.href}
                          className="group relative overflow-hidden rounded-lg min-h-[240px]"
                        >
                          <img
                            src={section.featured.image}
                            alt={section.featured.title}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                          <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-primary)" }} />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="valenzka text-white">
                              {section.featured.title}
                            </h3>
                            <p className="mt-2 text-sm text-white/70 leading-relaxed">
                              {section.featured.description}
                            </p>
                          </div>
                        </Link>

                        {/* Items */}
                        <ul className="grid grid-cols-2 gap-1 content-start">
                          {section.items.map((item) => (
                            <NavItem key={item.href} href={item.href} title={item.title} icon={item.icon}>
                              {item.description}
                            </NavItem>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <ul className="grid grid-cols-4 gap-1">
                        {section.items.map((item) => (
                          <NavItem key={item.href} href={item.href} title={item.title} icon={item.icon}>
                            {item.description}
                          </NavItem>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
    </>
  )
}

function NavItem({
  title,
  children,
  href,
  icon: Icon,
}: {
  title: string
  href: string
  children: React.ReactNode
  icon: React.ComponentType<{ className?: string }>
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <li>
      <Link
        href={href}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-start gap-4 rounded-lg p-4 transition-colors hover:bg-accent"
      >
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-200"
          style={{
            background: hovered ? "var(--gradient-primary)" : "var(--muted)",
            color: hovered ? "white" : "var(--muted-foreground)",
          }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-1 pt-0.5">
          <h5 className="">{title}</h5>
          <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
        </div>
      </Link>
    </li>
  )
}