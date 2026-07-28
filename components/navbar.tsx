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
      onClick={() => setActive(null)}
    />
    <header className="fixed w-full top-0 z-50 px-4 pt-4 pb-1">
      <div className="mx-auto max-w-6xl">
        <nav
          onMouseLeave={() => setActive(null)}
          className="rounded-lg overflow-hidden transition-all duration-300"
          
        >
          {/* ── Barre principale ── */}
          <div className="flex items-center justify-between h-[52px] px-4">
            <LanguageToggle />
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